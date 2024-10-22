const ContactUs = require("../../models/Contact_Us/Contact-model")
const get_contactcontroller = async (req, res) => {
    try {
        const {name, phone, email, address , message, problem} = req.body;
        console.log(req.body);
        const contactInfo = await ContactUs.create({name, phone, email, address , message, problem});
        res.status(200).json({ message:contactInfo });
    } catch (error) {
        console.log(error); // It's a good practice to log the error
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = get_contactcontroller;
