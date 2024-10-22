import React from 'react'
import "./Section0_1.css"
import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.png"

function Section0_1() {
    return (
        <>
            <div className="art">
                <div className="sec">
                    <img src={img1} alt />
                    <div className="content">
                        <strong>The mind is powerful.</strong>
                        <h5 className="desc_sec">Humans have up to 6200 thoughts a day. Sometimes, those thoughts and feelings get the
                            better of us and
                            impact our
                            ability to lead a healthy, fulfilling life.</h5>
                    </div>
                </div>
                <div className="sec">
                    <div className="content">
                        <strong>Don’t do it alone.</strong>
                        <h5 className="desc_sec">Sitting with those feelings and emotions by yourself can lead to overwhelmed responses
                            and stress. But
                            you don’t have to
                            do it alone.</h5>
                    </div>
                    <img src={img2} alt />
                </div>
                <div className="sec">
                    <img src={img3} alt />
                    <div className="content">
                        <strong>Better, together.</strong>
                        <h5 className="desc_sec">Better, together.
                            Working with professionals who offer the best online counselling in India will give you the support,
                            structure and tools
                            you need to overcome your struggles and live your best life.</h5>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Section0_1
