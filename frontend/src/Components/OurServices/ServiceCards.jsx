import React from 'react'
import "./OurService.css"
import { Link } from 'react-router-dom'
function ServiceCards() {
    return (
        <>
            <section className="cards">
                <div className="card">
                    <div className="image">
                        <img src="https://demo.7iquid.com/medcaline/wp-content/uploads/2020/04/med_image_06-768x560.jpg" alt />
                    </div>
                    <div className="desc">
                        <h1 className="Dating">Dating &amp; Relationship</h1>
                        <br />
                        <span>Loving each other makes it easier to solve the invariable issues that come up daily, Lorem ipsum
                            dolor.</span>
                        <button className="more"><Link to="/Services/Detalis">Find Out More</Link></button>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://demo.7iquid.com/medcaline/wp-content/uploads/2020/05/service2-768x560.jpg" alt />
                    </div>
                    <div className="desc">
                        <h1 className="Dating">Self-Esteem Issues</h1>
                        <br />
                        <span>The most common and dangerous features of low self-esteem is negative self-talk. Lorem ipsum dolor
                            sit amet nor.</span>
                        <button className="more">Find Out More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://demo.7iquid.com/medcaline/wp-content/uploads/2020/05/service3-768x560.jpg" alt />
                    </div>
                    <div className="desc">
                        <h1 className="Dating">Family Psychology</h1>
                        <br />
                        <span>Principles of theory with the interpersonal system of the family, focus of assessment. Lorem ipsum
                            dolor sit amet.</span>
                        <br />
                        <button className="more">Find Out More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://demo.7iquid.com/medcaline/wp-content/uploads/2020/04/service4-768x560.jpg" alt />
                    </div>
                    <div className="desc">
                        <h1 className="Dating">Young Adult Intensive</h1>
                        <br />
                        <span>Adolescents are the age when they are forming their thoughts, so it is difficult to understand
                            themselves nor.</span>
                        <button className="more">Find Out More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://demo.7iquid.com/medcaline/wp-content/uploads/2020/04/service5-768x560.jpg" alt />
                    </div>
                    <div className="desc">
                        <h1 className="Dating">Career Counseling</h1>
                        <br />
                        <span>Career counseling is a type of advice-giving and support provided by career counselors to their
                            clients, to help.</span>
                        <button className="more">Find Out More</button>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="https://demo.7iquid.com/medcaline/wp-content/uploads/2020/04/service6-768x560.jpg" alt />
                    </div>
                    <div className="desc">
                        <h1 className="Dating">Chronic Impulsivity</h1>
                        <br />
                        <span>being angry will make things worse, be calm in any situation to be more smart, be a smart.</span>
                        <button className="more">Find Out More</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ServiceCards
