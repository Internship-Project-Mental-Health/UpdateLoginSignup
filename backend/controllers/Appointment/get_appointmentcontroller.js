const Appointment = require("../../models/Make_Appointmet/Appointment-Schema")
const getappointmentcontroller = async (req, res) =>{
    try{
        const {name, phone, email, date, time , notes,dob} = req.body;
        console.log(req.body);
        const AppointmentInfo = await Appointment.create({name, phone, email, date, time , notes,dob});
        res.status
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error"})
    }
};

module.exports = getappointmentcontroller;