import React from 'react'
import Header from '../Components/Common/Header/Header'
import ServiceTop from '../Components/OurServices/ServiceTop'
import ServiceCards from '../Components/OurServices/ServiceCards'
import ServiceDown from '../Components/OurServices/ServiceDown'
import FooterNew from '../Components/Common/Footer/FooterNew'
function OurServices() {
  return (
    <>
    <Header />
    <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>S</span>
        <span className='Word_background'>E</span>
        <span className='Word_background'>R</span>
        <span className='Word_background'>V</span>
        <span className='Word_background'>I</span>
        <span className='Word_background'>C</span>
        <span className='Word_background'>E</span>
        <span className='Word_background'>S</span>
    </h1>
    <ServiceTop/>
    <ServiceCards/>
    <ServiceDown/>
    <FooterNew/>
    </>
  )
}

export default OurServices
