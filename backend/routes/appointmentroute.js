const express = require("express");
const get_appointmentcontroller =  require("../controllers/Appointment/get_appointmentcontroller");

const appointmentroute = express.Router();

appointmentroute.post("/appointment",get_appointmentcontroller)

module.exports = appointmentroute;