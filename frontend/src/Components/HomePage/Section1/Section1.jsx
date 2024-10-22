import React from 'react'
import "./Section1.css"
import image1 from "../../../assets/image1.png"

function Section1() {
    return (
        <>
            <div className="Article_therapist">
                <div className="Article_boxes">
                    <p className="Article_therapist_heading">Affordable care from a therapist who understands you</p>
                    <p className="Article_therapist_paragraph">We prioritize your needs and preferences when matching you to a
                        credentialled professional therapist, because it's
                        important to have someone you can meaningfully connect with.</p>
                    <div className="Find_your_therapist"><a href className="Find_your_therapist_a">Find your therapist</a></div>
                </div>
                <div className="Article_boxes">
                    <img src={image1} alt />
                </div>
            </div>

        </>
    )
}

export default Section1
