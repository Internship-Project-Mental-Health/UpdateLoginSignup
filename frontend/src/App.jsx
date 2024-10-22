import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./App.css"
import Header from './Components/Common/Header/Header'
import Section1 from './Components/HomePage/Section1/Section1'
import Section0 from './Components/HomePage/Section0/Section0'
import Section0_1 from './Components/HomePage/Section0_1/Section0_1';
import FooterNew from './Components/Common/Footer/FooterNew'
import Contact_Section from './Components/HomePage/Contact_Section/Contact_Section'
import Group from './assets/group-svgrepo-com.svg'
import message from './assets/messaging-lines-svgrepo-com (1).svg'
import thumb from './assets/thumb-up-svgrepo-com (1).svg'
import ProductCard from '../src/Components/ProductPage/ProductCard/ProductCard'
import ServiceCards from './Components/OurServices/ServiceCards';

const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('/api/Products')
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [])
  const displayedProducts = products.slice(0, 3);
 
  return (
    <>
      <Header />  
      <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>H</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>M</span>
        <span className='Word_background'>E</span>
    </h1>
      <Section1/>
      <section>
        <div className="Element1">
          <div className="img1">
            <div className="ElementContainer1">
              <div className="image1">
                <div className="Container_1">
                  <div className="logo1">
                    <img src={message} alt />
                  </div>
                  <div className="Services">
                    <h2>Our Counselling</h2>
                  </div>
                </div>
                <div className="line" />
                <p className="para1">You are having problems and need our advice, please contact us quickly via social
                  networks by texting or video calling. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor.</p>
                <div className="Link1">
                  <a href style={{ color: '#E2AB7F' }}>MAKE A VIDEO CALL</a>
                </div>
              </div>
            </div>
          </div>
          <div className="img2">
            <div className="ElementContainer2">
              <div className="Container_1">
                <div className="logo1">
                  <img src={Group} alt />
                </div>
                <div className="Services">
                  <h2>Group Therapy</h2>
                </div>
              </div>
              <div className="line" />
              <p className="para1">Group therapy is a form of psychotherapy that involves one or more therapists working
                with several people at the same time. This type of therapy is widely available at a variety of
                locations including private therapeutic</p>
              <div className="Link1">
                <a href style={{ color: '#E2AB7F' }}>READ MORE</a>
              </div>
            </div>
          </div>
          <div className="img3">
            <div className="ElementContainer3">
              <div className="Container_1">
                <div className="logo1">
                  <img src={thumb} alt />
                </div>
                <div className="Services">
                  <h2>Best Services Psychology</h2>
                </div>
              </div>
              <div className="line" style={{ backgroundColor: 'rgba(0, 0, 0, 0.353)' }} />
              <p className="para1">We are committed to our customers the best service and quality assurance, we will help
                you as much as we can. I work to meet my clients where they are, foster a safe therapeutic
                environment and assist.</p>
              <div className="Link1">
                <a href style={{ color: '#E2AB7F' }}>SEE ALL SERVICES</a>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Section0/>
      <section className="OUR_SERVICES_BACK">
        <div className="OUR_SERVICES">
          <div className="Your_Choice">
            <h2 className="head_our_services">Our Services</h2>
            <h1 className="head_our_services_2">Your Right Choice</h1>
            <p className="para_our_services">Our goal is to help our customers be satisfied and solve problems when leaving, we are not seeking
              profits that we want to share, sympathize, help you solve your worries and troubles. This sleek
              metallic tower stands out from surrounding buildings, and is set to transform.</p>
            <div className="button_our_services"><a href="" className='ViewAllServ'>VIEW ALL SERVICES</a></div>


          </div>
          <div className="Facilities">
            <div className="Service_INFO">Dating &amp; Relationships</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Self-Esteem Issues</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Family Psychology</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Anxiety Disorder</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Young Adult Intensive</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Carrer Counselling</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Child or Adolescent</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
          </div>
          <div className="Facilities">
            <div className="Service_INFO">Chronic Impulsivity</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Peer Relationships</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Relationship Issues</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Sleep or Insomnia</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Sports Performance</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Traumatic Brain Injury</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
            <div className="Service_INFO">Women's Issues</div>
            <hr style={{ backgroundColor: 'blue', margin: '0px 10px' }} />
          </div>
        </div>
      </section>
      {/* <ServiceCards/> */}
      <Section0_1/>
      <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>P</span>
        <span className='Word_background'>R</span>
        <span className='Word_background'>O</span>
        <span className='Word_background'>D</span>
        <span className='Word_background'>U</span>
        <span className='Word_background'>C</span>
        <span className='Word_background'>T</span>
        <span className='Word_background'>S</span>
    </h1>
      {
        displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.product_id}
            name={product.name}
            productImg={product.productImg}
          />
        ))
      }
      <Contact_Section/>
      <FooterNew/>
    </>

  )
}

export default App