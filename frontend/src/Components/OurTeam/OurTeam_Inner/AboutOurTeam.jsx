import React from 'react'

import "./AboutOurTeam.css"
import Header from '../../Common/Header/Header'
// import OT1 from "../../../assets/OT1";
import FooterNew from '../../Common/Footer/FooterNew'
const OtImage = "https://demo.7iquid.com/medcaline/wp-content/uploads/2020/05/team_01.jpg"
const AboutOurTeam = () => {
    return (
        <>
            <Header />
            <div className="AOTcontainer">
                <div className="AOTleft">
                    <img className="AOTimg" src={OtImage} alt />
                    <div className="AOTcontent">
                        <h3>Marina Husban</h3>
                        <p>
                            <span className="AOTlabel">Position:</span>
                            <span className="AOTvalue">Psychologist</span>
                        </p>
                        <p>
                            <span className="AOTlabel">Experience:</span>
                            <span className="AOTvalue">30 Years</span>
                        </p>
                        <p>
                            <span className="AOTlabel">Location:</span>
                            <span className="AOTvalue">Fargo Bank, 355 S Grand Ave, Los Angeles, CA 90071</span>
                        </p>
                        <p>
                            <span className="AOTlabel">Email:</span>
                            <span className="AOTvalue">Harrysuper123@gmail.com</span>
                        </p>
                        <p>
                            <span className="AOTlabel">Phone</span>
                            <span className="AOTvalue">+1-2454-2345-22</span>
                        </p>
                        <ul className="AOTinfo-social">
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
                    <div className="AOTbtn">
                        <button style={{ backgroundColor: '#7a3555' }}>Download Vcard <i className="fa-solid fa-download" style={{ marginLeft: 10 }} /></button>
                        <div className="AOTreview">
                            <button style={{ backgroundColor: '#82215d96' }}>Review Psychologist</button>
                            <form action>
                                <input type="text" placeholder="Your Name*" required />
                                <input type="email" placeholder="Your Email*" required />
                                <textarea placeholder="Message*" required defaultValue={""} />
                                <input style={{ backgroundColor: '#000' }} type="submit" className="submit-btn" defaultValue="Post Review" />
                            </form>
                        </div>
                    </div>
                </div>
                {/* right-side */}
                <div className="AOTright">
                    <div className="AOTupper">
                        <h3> Personal Experience &amp; Biography </h3>
                        <p>
                            Marina Husban was an Austrian-British author and psychoanalyst who is known for her work in child analysis. She was the
                            primary figure in the development of object relations theory. Klein suggested that pre-verbal existential anxiety in
                            infancy catalyzed the formation of the unconscious, resulting in the unconscious splitting of the world into good and
                            bad idealizations. In her theory, how the child resolves that splitting depends on the constitution of the child and the
                            character of nurturing the child experiences; the quality of resolution can inform the presence, absence, and/or type of
                            distresses a person experiences later in life.
                        </p>
                        <p style={{ fontSize: 18, color: '#000' }}>Specialized Work</p>
                        <div className="AOTsec">
                            <ul>
                                <li>Family Counselor</li>
                                <li>Adolescent Health Sdvisor</li>
                                <li>Advisor Adolescent Love</li>
                            </ul>
                            <ul>
                                <li>Self-Esteem Counseling</li>
                                <li>Happiness Advisor</li>
                                <li>Advice On Unemployment
                                </li>
                            </ul>
                        </div>
                        <div className="AOTteam-contact">
                            <h3>Contact With Marina Husban</h3>
                            <p>If you would like to be consulted by psychologist, contact the psychologist immediately for help</p>
                            <form action>
                                <input type="text" placeholder="Your Name*" required />
                                <input type="email" placeholder="Your Email*" required />
                                <textarea placeholder="Message*" required defaultValue={""} />
                                <input type="submit" className="submit-btn" defaultValue="Send Message" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterNew />
        </>
    )
}

export default AboutOurTeam
