import React from 'react'
import Header from '../Components/Common/Header/Header'
import AboutOurTeam from '../Components/OurTeam/OurTeam_Inner/AboutOurTeam'
import OurTeamSection from './../Components/OurTeam/OurTeamSection';
import FooterNew from '../Components/Common/Footer/FooterNew'
function OurTeamPage() {
  return (
    <>
    <Header/>
    <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>O</span>
        <span className='Word_background'>U</span>
        <span className='Word_background'>R</span>
        <span className='Word_background2'>-</span>
        <span className='Word_background'>T</span>
        <span className='Word_background'>E</span>
        <span className='Word_background'>A</span>
        <span className='Word_background'>M</span>
    </h1>
    <OurTeamSection/>
    <FooterNew/>
    </>
  )
}

export default OurTeamPage
