const express = require("express");
const get_contactcontroller = require('../controllers/contact/get_contactcontroller');

const contactroutes = express.Router();

contactroutes.post("/contact", get_contactcontroller)

module.exports = contactroutes;