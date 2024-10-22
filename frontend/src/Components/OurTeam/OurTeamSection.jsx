import React from 'react'
import "./OurTeamSection.css"
import { Link } from "react-router-dom";
import OT1 from "../../assets/OT1.jpg";
import OT2 from "../../assets/OT2.jpg";
import cs_man from "../../assets/cs_man.png";

function OurTeamSection() {
    return (
        <>
            <div className="OT_container">
                <div className="OT_section">
                    <div className="OT_left">
                        <img src={cs_man} alt />
                    </div>
                    <div className="OT_right">
                        <h2>Stay Safe, We Will Get Through This Together…</h2>
                        <p className="OT_upper">Are you experiencing personal difficulties? If your emotional &amp; mental health, relationships, career and any other area of your life could use a transformation than our psychotherapy services can help you! We offer the support and tools you need to thrive. Our team will help you find a positive &amp; healthy head-space and life.</p>
                        <p className="OT_sec">Our Team of Therapists in Toronto</p>
                        <p className="OT_lower">We are a team of highly educated, accredited and experienced psychotherapists, therapists, counselors, relationship counselors and life coaching therapists (with PhD’s and Masters degrees). Our team is equipped and passionate about helping with any emotional and mental health issues as well as personal and professional needs. Our therapists are genuine, warm and caring because they feel their purpose in life is to help make a difference in the lives of clients like you.</p>
                        <button className="OT_contact">Contact Us</button>
                    </div>
                </div>
                {/* header */}
                <div className="OT_head">
                    <button>All</button>
                    <button>Family Happiness Psychologist</button>
                    <button>Love Psychologist</button>
                    <button>Psychotherapy Psychologist</button>
                    <button>Trauma Therapy Psychologist</button>
                </div>
                {/* team */}
                <div className="OT_team">
                    <div className="OT_cardsection">
                        <div className="OT_card1">
                            <div className="OT_img">
                                <a href="about.html">
                                    <img src={OT1} alt />
                                </a>
                            </div>
                            <div className="OT_des">
                                <h3 className="OT_name"><Link to="/OurTeam/Details">Maria Jones</Link></h3>
                                <div className="OT_category">
                                    <a href="#">Family Happiness Psychologist</a>
                                </div>
                                <div className="OT_content">
                                    However, as much as we value the ideals of teamwork and connectedness, there’s also the alternative notion.
                                </div>
                                <div className="OT_social">
                                    <ul className="OT_info-social">
                                        <li>
                                            <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-skype" /></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fa-brands fa-square-instagram" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    <div className="OT_card1">
                        <div className="OT_img">
                            <a href="#">
                                <img src={OT2} alt />
                            </a>
                        </div>
                        <div className="OT_des">
                            <h3 className="OT_name"><a href="#">Marina Husban</a></h3>
                            <div className="OT_category">
                                <a href="#">Family Happiness Psychologist</a>
                            </div>
                            <div className="OT_content">
                                However, as much as we value the ideals of teamwork and connectedness, there’s also the alternative notion.
                            </div>
                            <div className="OT_social">
                                <ul className="OT_info-social">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-skype" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-square-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="OT_card1">
                        <div className="OT_img">
                            <a href="#">
                                <img src={OT2} alt />
                            </a>
                        </div>
                        <div className="OT_des">
                            <h3 className="OT_name"><a href="#">Marina Husban</a></h3>
                            <div className="OT_category">
                                <a href="#">Family Happiness Psychologist</a>
                            </div>
                            <div className="OT_content">
                                However, as much as we value the ideals of teamwork and connectedness, there’s also the alternative notion.
                            </div>
                            <div className="OT_social">
                                <ul className="OT_info-social">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-skype" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-square-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="OT_card1">
                        <div className="OT_img">
                            <a href="#">
                                <img src={OT2} alt />
                            </a>
                        </div>
                        <div className="OT_des">
                            <h3 className="OT_name"><a href="#">Marina Husban</a></h3>
                            <div className="OT_category">
                                <a href="#">Family Happiness Psychologist</a>
                            </div>
                            <div className="OT_content">
                                However, as much as we value the ideals of teamwork and connectedness, there’s also the alternative notion.
                            </div>
                            <div className="OT_social">
                                <ul className="OT_info-social">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-skype" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-square-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="OT_card1">
                        <div className="OT_img">
                            <a href="#">
                                <img src={OT2} alt />
                            </a>
                        </div>
                        <div className="OT_des">
                            <h3 className="OT_name"><a href="#">Marina Husban</a></h3>
                            <div className="OT_category">
                                <a href="#">Family Happiness Psychologist</a>
                            </div>
                            <div className="OT_content">
                                However, as much as we value the ideals of teamwork and connectedness, there’s also the alternative notion.
                            </div>
                            <div className="OT-social">
                                <ul className="OT_info-social">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-skype" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-square-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="OT_card1">
                        <div className="OT_img">
                            <a href="#">
                                <img src={OT2} alt />
                            </a>
                        </div>
                        <div className="OT_des">
                            <h3 className="OT_name"><a href="#">Marina Husban</a></h3>
                            <div className="OT_category">
                                <a href="#">Family Happiness Psychologist</a>
                            </div>
                            <div className="OT_content">
                                However, as much as we value the ideals of teamwork and connectedness, there’s also the alternative notion.
                            </div>
                            <div className="OT_social">
                                <ul className="OT_info-social">
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-skype" /></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-square-instagram" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OurTeamSection
