import React from 'react'
import { useState } from 'react'
import Header from '../Common/Header/Header'
import FooterNew from '../Common/Footer/FooterNew'
import("./Appointment.css")
function Appointment() {
  const  [appointment, setAppointment] = useState({
    name:"",
    phone:"",
    email:"",
    notes:"",
    dob: "",
    date: "",
    time: "",
  })

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setAppointment({
      ...appointment,
      [name]: value,
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(appointment);
    try {
      const response = await fetch("http://localhost:8000/appointment", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(appointment)
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response)
    } catch (error) {
      console.log("register",error)
    }
  }

  return (
    <>
      <Header />
      <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>B</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>K</span>
        <span className='Word_background2'> -</span>


        <span className='Word_background'>A</span>
        <span className='Word_background'>P</span>
        <span className='Word_background'>P</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>I</span>
        <span className='Word_background'>N</span>
        <span className='Word_background'>T</span>
        <span className='Word_background'>M</span>
        <span className='Word_background'>E</span>
        <span className='Word_background'>N</span>
        <span className='Word_background'>T</span>
    </h1>
      <div>
        <div className="Appointment_container">
          <h2>Book An Appointment Now!</h2>
          <form onSubmit={handleSubmit}>
            <div className="Appointment_detail">
              <label htmlFor="fullName">Full Name:</label>
              <input 
                type="text" 
                name='name' 
                id='name' 
                value={appointment.name}
                onChange={handleInput}
                autoComplete='off' 
                required />
            </div>
            <div className="Appointment_detail">
              <label htmlFor="dob">Date of Birth:</label>
              <input 
                type="date"
                name='dob'
                id='dob'
                value={appointment.dob}
                onChange={handleInput}
                autoComplete='off'
                required />
            </div>
            <div className="Appointment_detail">
              <label htmlFor="email">Email Address:</label>
              <input 
                type="email"
                name='email' 
                id='email' 
                autoComplete='off'
                value={appointment.email}
                onChange={handleInput} 
                required />
            </div>
            <div className="Appointment_detail">
              <label htmlFor="phone">Phone Number:</label>
              <input 
                type="tel"
                name='phone' 
                id='phone' 
                autoComplete='off'  
                value={appointment.phone}
                onChange={handleInput}
                required />
            </div>
            <div className="Appointment_detail">
              <label htmlFor="appointmentDate">Preferred Appointment Date:</label>
              <input 
                type="date"
                name='date'
                id='date'
                autoComplete='off'  
                value={appointment.date}
                onChange={handleInput}
                required />
            </div>
            <div className="Appointment_detail">
              <label htmlFor="appointmentTime">Preferred Appointment Time:</label>
              <select
                name='time'
                id='time'
                value={appointment.time}
                onChange={handleInput}
                required>
                <option value="morning">Morning (8a.m. - 10a.m.)</option>
                <option value="afternoon">Afternoon (12p.m. - 4p.m.)</option>
                <option value="evening">Evening (6p.m. - 8p.m.)</option>
              </select>
            </div>
            <div className="Appointment_detail">
              <label>Additional Notes:</label>
              <textarea 
                id="notes" 
                name="notes"
                autoComplete='off'
                value={appointment.notes}
                onChange={handleInput} 
                // defaultValue={""} 
                />
            </div>
            <div className="Appointment_detail">
              <input type="submit" defaultValue="Book Appointment" />
            </div>
          </form>
        </div>

      </div>
      <FooterNew />
    </>
  )
}

export default Appointment
