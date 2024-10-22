const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroutes = require("./routes/routerroute");
const productroute = require("./routes/productroutes");
const contactroutes = require("./routes/contactroutes");
const appointmentroute = require("./routes/appointmentroute");
const connectDB = require("./config/db");
const cors = require('cors')
const router = require("./routes/auth-router")

const PORT = process.env.PORT || 6000 || 8000
const app = express();
connectDB()

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
};

app.use(cors(corsOptions));


// app.use(cors(corsOptions))
app.use(express.json());
app.use("/", rootroutes);
app.post("/contact", contactroutes);
app.post("/appointment", appointmentroute);
app.use("/Products", productroute);
app.use("/api/Products", productroute);
// const UserRouter = require('./api/User');
// app.use('/user', UserRouter)
app.use("/api/auth", router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.black)
})