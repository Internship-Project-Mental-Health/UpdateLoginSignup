const mongoose = require("mongoose")


const contactSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
    problem: {
        type: String,
        require: true,
    },
});

const Contact = new mongoose.model("Contact",contactSchema);

module.exports = Contact;
