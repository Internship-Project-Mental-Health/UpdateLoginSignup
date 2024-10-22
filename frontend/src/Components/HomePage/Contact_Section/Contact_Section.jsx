import React from 'react'
import "./Contact_Section.css"
function Contact_Section() {
    return (
        <>
    <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>C</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>N</span>
        <span className='Word_background'>T</span>
        <span className='Word_background'>A</span>
        <span className='Word_background'>C</span>
        <span className='Word_background'>T</span>
        <span className='Word_background2'>-</span>
        <span className='Word_background'>U</span>
        <span className='Word_background'>S</span>
    </h1>
            <div className="support">
                <div className="support_controls">
                    <button className="sup-btn">
                        <i className="fa-solid fa-phone-volume" />
                        <span className="sup-text">
                            Call 13 11 14
                            <span>24/7 Support</span>
                        </span>
                    </button>
                    <button className="sup-btn">
                        <i className="fa-regular fa-comments" />
                        <span className="sup-text">
                            Chat with us
                            <span>Available 24/7</span>
                        </span>
                    </button>
                    <button className="sup-btn">
                        <i className="fa-solid fa-mobile-button" />
                        <span className="sup-text">
                            Text us
                            <span>Available 24/7</span>
                        </span>
                    </button>
                </div>
                <div className="support_content">
                    <li className="S-main">24/7 Support</li>
                    <p><strong>About this service</strong></p>
                    <li>
                        Short-term support for people who are feeling overwhelmed or having difficulty coping or staying
                        safe
                    </li>
                    <li>
                        Confidential one-to-one support with our trained telephone supporter
                    </li>
                    <p><strong>What we do during the call</strong></p>
                    <li>Listen without judgment</li>
                    <li>Provide a safe space to discuss your needs, worries or concerns</li>
                    <li>Work with you to explore options for support</li>
                    <div className="support_buttons">
                        <a href className="S-btn">Call 13 11 14</a>
                        <a href className="S-btn">Find Out More</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact_Section