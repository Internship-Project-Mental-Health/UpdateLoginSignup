const mongoose = require ("mongoose")

const AppointmentSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    dob : {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        required: true,
    },
    date : {
        type: String,
        require: true,
    },
    time : {
        type: String,
        require: true,
    },
    notes : {
        type: String,
        require: true,
    },
});

const Appointment = new mongoose.model("Appointment",AppointmentSchema);

module.exports = Appointment;

