import React from 'react'
import { useState } from 'react'
import Header from '../Common/Header/Header'
import FooterNew from '../Common/Footer/FooterNew'
import("./ContactUs.css")
function ContactUs() {

  const  [contact, setContact] = useState({
    name:"",
    phone:"",
    email:"",
    address:"",
    message:"",
    problem: "",
  })

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(contact);
    try {
      const response = await fetch("http://localhost:8000/contact", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(contact)
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response)
    } catch (error) {
      console.log("register",error)
    }
  }

  return (
    <>
      <Header />
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
      <div>
        <div>
          <div className="Contact_section">
            <div className="Contact_left">
              <h2>Drop A Line</h2>
              <p className="Contact_contact">Send us a message, we will get back to you via email within 24 hours, thanks for trusting
                and
                contacting us.
              </p>
              <hr style={{ marginLeft: 0 }} />
              <form onSubmit={handleSubmit} className='Contact_form'>
                <input 
                  type="text" 
                  name='name' 
                  id='name' 
                  value={contact.name}
                  onChange={handleInput}
                  autoComplete='off' 
                  placeholder="Name*" 
                  required />
                <select 
                  name="problem" 
                  value={contact.problem} 
                  onChange={handleInput}
                >
                  <option value="" disabled>Choose Your Problem</option>
                  <option value="Family">Family</option>
                  <option value="Love">Love</option>
                  <option value="Work">Work</option>
                  <option value="Other">Other</option>
                </select>
                <input 
                  type="text" 
                  name='phone' 
                  id='phone' 
                  autoComplete='off'  
                  value={contact.phone}
                  onChange={handleInput}
                  placeholder="Phone Number*" required />
                <input 
                  type="email" 
                  name='email' 
                  id='email' 
                  autoComplete='off'
                  value={contact.email}
                  onChange={handleInput} 
                  placeholder="Email*" 
                  required />
                <input className="add" 
                  type="text" 
                  name='address' 
                  id='address'
                  value={contact.address}
                  onChange={handleInput}
                  placeholder="Address*" 
                  required />
                <textarea placeholder="Write Message"
                  name='message'
                  id='message'
                  autoComplete='off' 
                  value={contact.message}
                  onChange={handleInput}
                  // defaultValue={""} 
                  />
                <button type="submit" className="Contact_submit-btn">Submit Message ➤</button>
              </form>
            </div>
            <div className="Contact_right">
            </div>
          </div>
          <div className="Contact_container">
            <div className="Contact_loc">
              <h2>Our Locations</h2>
              <p className="first">Medcaline has many facilities to ensure the best advice to customers, we currently
                <br />
                have 3 facilities with high quality
              </p>
              <hr />
            </div>
            <div className="Contact_ele">
              <div className="Contact_tabs">
                <button>Cameron</button>
                <button>Medcaline</button>
                <button>Dodge</button>
              </div>
              <div className="Contact_sec">
                <div className="Contact_wid">
                  <div className="Contact_icon">
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div className="Contact_content">
                    <h3 className="Contact_head">Medcaline Address</h3>
                    <p className="Contact_second">
                      2390 NW 2nd Ave, Miami
                      <br />
                      FL 33127, United States
                    </p>
                  </div>
                </div>
                <div className="Contact_wid">
                  <div className="Contact_icon">
                    <i className="fa-solid fa-tty" />
                  </div>
                  <div className="Contact_content">
                    <h3 className="Contact_head">Phone Number &amp; Email</h3>
                    <p className="Contact_second">
                      +1 310 500 7835
                      <br />
                      Medcaline@gmail.com
                    </p>
                  </div>
                </div>
                <div className="Contact_wid">
                  <div className="Contact_icon">
                    <i className="fa-regular fa-clock" />
                  </div>
                  <div className="Contact_content">
                    <h3 className="Contact_head">Work Time</h3>
                    <p className="Contact_second">
                      7:00am - 6:00pm ( Mon - Fri )
                      <br />
                      Sat, Sun &amp; Holiday CLOSED
                    </p>
                  </div>
                </div>
                <div className="Contact_wid">
                  <div className="Contact_icon">
                    <i className="fa-regular fa-comments" />
                  </div>
                  <div className="Contact_content">
                    <h3 className="Contact_head">Social Network</h3>
                    <div className="Contact_social">
                      <div className="Contact_soci">
                        <a href="#">
                          <svg className="Contact_svgs" fill="#8f8f8f" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve" stroke="#8f8f8f">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z">
                                </path>
                                <path d="M146.8,313.7c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H51.2v38.3h26.5v133h49.6v-133h39.3l2.9-38.3h-42.2v-29.9C127.3,317.4,136.5,313.7,146.8,313.7z">
                                </path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="Contact_soci">
                        <a href="#">
                          <svg className="Contact_svgs" fill="#8f8f8f" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z">
                                </path>
                                <path d="M234.3,313.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12 c-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6 c0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5 c-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7 c0-2.3,0-4.6-0.1-6.8c10.3-7.5,19.2-16.7,26.2-27.3c-9.4,4.2-19.6,7-30.2,8.3C222.1,335.7,230.4,325.4,234.3,313.1z">
                                </path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="Contact_soci">
                        <a href="#">
                          <svg className="Contact_svgs" fill="#8f8f8f" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z">
                                </path>
                                <path d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7 v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7 c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401 C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2 c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z">
                                </path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div className="Contact_soci">
                        <a href="#">
                          <svg className="Contact_ svgs" fill="#8f8f8f" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            </g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z">
                                </path>
                                <path d="M236.5,402.4c0-67.4-54.7-122.1-122.1-122.1c-7.1,0-14.1,0.6-20.9,1.8c-10.9-6.9-23.8-10.9-37.7-10.9 C16.7,271.2-15,302.9-15,342c0,13.1,3.6,25.3,9.7,35.8c-1.6,7.9-2.5,16.1-2.5,24.5c0,67.4,54.7,122.1,122.1,122.1 c7.6,0,15.1-0.7,22.4-2c10,5.4,21.4,8.4,33.5,8.4c39.1,0,70.8-31.7,70.8-70.8c0-11.3-2.6-22-7.3-31.4 C235.5,420.1,236.5,411.4,236.5,402.4z M177,460.7c-5.6,8-14,14.3-24.8,18.8c-10.7,4.5-23.5,6.7-38.1,6.7 c-17.5,0-32.2-3.1-43.7-9.2c-8.2-4.4-15-10.4-20.1-17.8c-5.2-7.5-7.8-14.9-7.8-22.1c0-4.5,1.7-8.3,5.1-11.5 c3.3-3.2,7.6-4.7,12.7-4.7c4.2,0,7.8,1.2,10.8,3.7c2.8,2.4,5.2,5.9,7.2,10.5c2.2,5,4.5,9.1,7,12.4c2.4,3.2,5.9,5.8,10.2,7.9 c4.4,2.1,10.4,3.2,17.7,3.2c10.1,0,18.4-2.2,24.6-6.4c6.1-4.1,9-9.1,9-15.2c0-4.8-1.5-8.6-4.7-11.6c-3.3-3.1-7.7-5.5-13-7.2 c-5.5-1.7-13.1-3.6-22.4-5.6c-12.7-2.7-23.4-5.9-32-9.6c-8.8-3.7-15.8-8.9-21-15.4c-5.2-6.6-7.9-14.8-7.9-24.5 c0-9.2,2.8-17.5,8.3-24.7c5.5-7.1,13.4-12.7,23.7-16.4c10.1-3.7,22.2-5.7,35.8-5.7c10.9,0,20.5,1.3,28.5,3.7 c8.1,2.5,14.8,5.9,20.2,10.1c5.4,4.2,9.4,8.7,11.9,13.3c2.5,4.7,3.8,9.4,3.8,13.9c0,4.4-1.7,8.3-5,11.8s-7.6,5.2-12.5,5.2 c-4.5,0-8.1-1.1-10.5-3.3c-2.3-2-4.7-5.2-7.3-9.7c-3-5.8-6.7-10.3-11-13.6c-4.1-3.1-11-4.7-20.4-4.7c-8.7,0-15.9,1.8-21.2,5.2 c-5.1,3.3-7.6,7.2-7.6,11.7c0,2.8,0.8,5.1,2.4,7.1c1.7,2.1,4.2,4,7.3,5.5c3.2,1.6,6.5,2.9,9.8,3.8c3.4,0.9,9.1,2.3,16.9,4.1 c9.9,2.1,19,4.5,27,7.1c8.1,2.6,15.2,5.8,20.9,9.5c5.8,3.8,10.5,8.7,13.8,14.5c3.3,5.9,5,13.1,5,21.5 C185.5,443.5,182.7,452.7,177,460.7z">
                                </path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <FooterNew />
    </>
  )
}

export default ContactUs