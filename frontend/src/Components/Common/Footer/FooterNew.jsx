import React from 'react'
import "./footer.css"

function footer() {
    return (
        <>
            <footer>
                <div className="footerHead">
                    <div className="footerHeading">
                        <h6>Quick Links</h6>
                        <div><a href="#">Home</a></div>
                        <div><a href="#">About Us</a></div>
                        <div><a href="#">Services</a></div>
                        <div><a href="#">Contact Us</a></div>
                    </div>
                    <div className="shopping">
                        <h6>Our Services</h6>
                        <div><a href="#">Product Store</a></div>
                        <div><a href="#">Therapies</a></div>
                        <div><a href="#">Doctors</a></div>
                        <div><a href="#">Make Appointment</a></div>
                    </div>
                    <div className="shopping">
                        <h6>Contact Info</h6>
                        <div><a href="#">Product Store</a></div>
                        <div><a href="#">Therapies</a></div>
                        <div><a href="#">Doctors</a></div>
                        <div><a href="#">Make Appointment</a></div>
                    </div>
                    <div className="Newletter">
                        <h6 style={{ margin: '0px 0px 30px' }}>NewLetter</h6>
                        <div className="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales &amp; promos!
                            </p>
                            <form action="#">
                                {/* <input type="text" placeholder="Your email" />
                                <div className="NewsLetter_button">
                                    <a href className="icon_mail_alt">Subscribe</a>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="boxes">
                    <div className="boxleft" />
                    <div className="box" />
                    <div className="boxright" />
                </div>
                <div className="footerBottom">
                    <p style={{ margin: 0 }}>Copyright © 2024 All rights reserved
                    </p>
                </div>
            </footer>

        </>
    )
}

export default footer
