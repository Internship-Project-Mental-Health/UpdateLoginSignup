import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>

            <div className="header_down">
                <div className="logo">
                    <a href>
                        {/* <img src="" alt height="70px" /> */}
                        Menatal Wellness
                    </a>
                </div>
                <div className="details">
                    <nav>
                        <ul className="Header_Elements">
                            <div className="links">
                                <Link to="/">Home</Link>
                            </div>
                            <div className="links">
                                <Link to="/Services">Services</Link>
                            </div>
                            <div className="links">
                                <Link to="/Products">Products</Link>
                            </div>
                            <div className="links">
                                <Link to="/OurTeam">Our Team</Link>
                            </div>
                            <div className="links">
                                <Link to="/ContactUS">Contact Us</Link>
                            </div>
                            <div className="links">
                                <Link to="/AddToCart">Cart</Link>
                            </div>
                            {/* <div className="links">
                                <a href>Review</a>
                            </div> */}
                        </ul>
                    </nav>
                </div>
                <div className="Make_an_appointment"><Link to={"/Appointment"}>
                    <a href style={{ color: 'white !important' }}>

                        Make Appointment
                    </a>
                </Link>
                </div>
            </div>

        </>
    )
}
export default Header;