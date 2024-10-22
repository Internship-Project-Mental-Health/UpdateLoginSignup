import React from 'react'
import Header from '../Common/Header/Header'
import FooterNew from '../Common/Footer/FooterNew'
import './AddToCart.css';
const cross = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
import { useCartContext } from "../../Components/context/cart_context"; 
const  AddToCart = ()=> {
  // const {cart} = useCartContext();
  const { cart, addToCart } = useCartContext();
  console.log("file adeed to cart : ",cart)
  return (<>

    <Header />
    <h1 className='Contact_Us_HomePage'> 
        <span className='Word_background'>C</span>
        <span className='Word_background'>A</span>
        <span className='Word_background'>R</span>
        <span className='Word_background'>T</span>
    </h1>
    <div>
      <div className="cart">
        <div className="cart_inner">
          <div className="cart_left1">
            <div className="cart_left">
              <table>
                <thead>
                  <tr>
                    <th style={{ float: 'left', paddingLeft: 23 }}>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item =>(
                  <tr key={item.id}>
                    <td>
                      <div className="cart_item">
                        <div className="cart_item_image">
                          <img src={item.productImg}alt height="100%" width="100%" />
                        </div>
                        <div className="cart_item_details">
                          <h4>{item.name} </h4>
                          <h5>${item.new_price}</h5>
                        </div>
                      </div>
                    </td>
                    <td className="cart_quantity_item">
                      <div className="cart_quantity">
                        <i className="fa-solid fa-angle-left" />
                        <input type="text" defaultValue={item.quantity} />
                        <i className="fa-solid fa-angle-right" />
                      </div>
                    </td>
                    <td>
                      <div className="cart_quantity_total">${item.quantity * item.price}</div>
                    </td>
                    <td className="cart_cancel"><i className="fa-regular fa-circle-xmark" /></td>
                  </tr>

                  ))}
                  {/* <tr>
                    <td>
                      <div className="cart_item">
                        <div className="cart_item_image">
                          <img src="https://heartitout.in/links/wp-content/uploads/2021/12/Image-1-scaled.jpg" alt height="100%" width="100%" />
                        </div>
                        <div className="cart_item_details">
                          <h4>Tshirt ybcjgs </h4>
                          <h5>$92.54</h5>
                        </div>
                      </div>
                    </td>
                    <td className="cart_quantity_item">
                      <div className="cart_quantity">
                        <i className="fa-solid fa-angle-left" />
                        <input type="text" defaultValue={1} />
                        <i className="fa-solid fa-angle-right" />
                      </div>
                    </td>
                    <td>
                      <div className="cart_quantity_total">$30.00</div>
                    </td>
                    <td className="cart_cancel"><i className="fa-regular fa-circle-xmark" /></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart_item">
                        <div className="cart_item_image">
                          <img src="https://heartitout.in/links/wp-content/uploads/2021/12/Image-1-scaled.jpg" alt height="100%" width="100%" />
                        </div>
                        <div className="cart_item_details">
                          <h4>Tshirt ybcjgs </h4>
                          <h5>$92.54</h5>
                        </div>
                      </div>
                    </td>
                    <td className="cart_quantity_item">
                      <div className="cart_quantity">
                        <i className="fa-solid fa-angle-left" />
                        <input type="text" defaultValue={1} />
                        <i className="fa-solid fa-angle-right" />
                      </div>
                    </td>
                    <td>
                      <div className="cart_quantity_total">$30.00</div>
                    </td>
                    <td className="cart_cancel"><i className="fa-regular fa-circle-xmark" /></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart_item">
                        <div className="cart_item_image">
                          <img src="https://heartitout.in/links/wp-content/uploads/2021/12/Image-1-scaled.jpg" alt height="100%" width="100%" />
                        </div>
                        <div className="cart_item_details">
                          <h4>Tshirt ybcjgs </h4>
                          <h5>$92.54</h5>
                        </div>
                      </div>
                    </td>
                    <td className="cart_quantity_item">
                      <div className="cart_quantity">
                        <i className="fa-solid fa-angle-left" />
                        <input type="text" defaultValue={1} />
                        <i className="fa-solid fa-angle-right" />
                      </div>
                    </td>
                    <td>
                      <div className="cart_quantity_total">$30.00</div>
                    </td>
                    <td className="cart_cancel"><i className="fa-regular fa-circle-xmark" /></td>
                  </tr>
                  <tr>
                    <td>
                      <div className="cart_item">
                        <div className="cart_item_image">
                          <img src="https://heartitout.in/links/wp-content/uploads/2021/12/Image-1-scaled.jpg" alt height="100%" width="100%" />
                        </div>
                        <div className="cart_item_details">
                          <h4>Tshirt ybcjgs </h4>
                          <h5>$92.54</h5>
                        </div>
                      </div>
                    </td>
                    <td className="cart_quantity_item">
                      <div className="cart_quantity">
                        <i className="fa-solid fa-angle-left" />
                        <input type="text" defaultValue={1} />
                        <i className="fa-solid fa-angle-right" />
                      </div>
                    </td>
                    <td>
                      <div className="cart_quantity_total">$30.00</div>
                    </td>
                    <td className="cart_cancel"><i className="fa-regular fa-circle-xmark" /></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          <div className="cart_right1">
            <div className="cart_right">
              <div className="cart_container">
                <div className="cart_discount-codes">
                  <h4 style={{ margin: '20px 0px', fontSize: 21, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 500 }}>
                    DISCOUNT CODES</h4>
                  <div className="cart_main">
                    <input type="text" placeholder="Coupon code" />
                    <button id="btw">APPLY</button>
                  </div>
                </div>
                <div className="cart_total">
                  <h3>CART TOTAL</h3>
                  <p>Subtotal <span className="cart_subtotal">$169.50</span></p>
                  <p>Total <span className="cart_subtotal">$169.50</span></p>
                  <div className="cart_right_button"><button className="cart_checkout_btn">PROCEED TO CHECKOUT</button></div>
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

export default AddToCart
