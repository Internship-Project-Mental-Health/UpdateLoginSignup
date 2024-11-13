// import React from 'react'
// import Header from '../Common/Header/Header'
// import FooterNew from '../Common/Footer/FooterNew'
// import './AddToCart.css';
// const cross = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
// import { useCartContext } from "../../Components/context/cart_context"; 
// const  AddToCart = ()=> {
//   // const {cart} = useCartContext();
//   const { cart, addToCart } = useCartContext();
//   console.log("file added to cart : ",cart)
//   return (<>

//     <Header />
//     <h1 className='Contact_Us_HomePage'> 
//         <span className='Word_background'>C</span>
//         <span className='Word_background'>A</span>
//         <span className='Word_background'>R</span>
//         <span className='Word_background'>T</span>
//     </h1>
//     <div>
//       <div className="cart">
//         <div className="cart_inner">
//           <div className="cart_left1">
//             <div className="cart_left">
//               <table>
//                 <thead>
//                   <tr>
//                     <th style={{ float: 'left', paddingLeft: 23 }}>Product</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map(item =>(
//                   <tr key={item.id}>
//                     <td>
//                       <div className="cart_item">
//                         <div className="cart_item_image">
//                           <img src={item.productImg}alt height="100%" width="100%" />
//                         </div>
//                         <div className="cart_item_details">
//                           <h4>{item.name} </h4>
//                           <h5>Rs{item.new_price}</h5>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="cart_quantity_item">
//                       <div className="cart_quantity">
//                         <i className="fa-solid fa-angle-left" />
//                         <input type="text" defaultValue={item.quantity} />
//                         <i className="fa-solid fa-angle-right" />
//                       </div>
//                     </td>
//                     <td>
//                       <div className="cart_quantity_total">Rs{item.quantity * item.price}</div>
//                     </td>
//                     <td className="cart_cancel"><i className="fa-regular fa-circle-xmark" /></td>
//                   </tr>

//                   ))}
                  
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="cart_right1">
//             <div className="cart_right">
//               <div className="cart_container">
//                 <div className="cart_discount-codes">
//                   <h4 style={{ margin: '20px 0px', fontSize: 21, fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', fontWeight: 500 }}>
//                     DISCOUNT CODES</h4>
//                   <div className="cart_main">
//                     <input type="text" placeholder="Coupon code" />
//                     <button id="btw">APPLY</button>
//                   </div>
//                 </div>
//                 <div className="cart_total">
//                   <h3>CART TOTAL</h3>
//                   <p>Subtotal <span className="cart_subtotal">Rs169.50</span></p>
//                   <p>Total <span className="cart_subtotal">Rs169.50</span></p>
//                   <div className="cart_right_button"><button className="cart_checkout_btn">PROCEED TO CHECKOUT</button></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     <FooterNew />
//   </>
//   )
// }

// export default AddToCart

// import React from 'react'
// import Header from '../Common/Header/Header'
// import FooterNew from '../Common/Footer/FooterNew'
// import './AddToCart.css';
// const cross = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
// import { useCartContext } from "../../Components/context/cart_context";

// const AddToCart = () => {
//   const { cart, removeFromCart, updateQuantity, total_amount, shipping_fee } = useCartContext();
//   const [couponCode, setCouponCode] = useState('');

//   const handleQuantityChange = (id, newQuantity) => {
//     updateQuantity(id, parseInt(newQuantity, 10));
//   };

//   const handleRemoveItem = (id) => {
//     removeFromCart(id);
//   };

//   const handleQuantityButton = (id, currentQuantity, increment) => {
//     const newQuantity = increment ? currentQuantity + 1 : currentQuantity - 1;
//     if (newQuantity >= 1) {
//       updateQuantity(id, newQuantity);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <h1 className="Contact_Us_HomePage">
//         <span className="Word_background">C</span>
//         <span className="Word_background">A</span>
//         <span className="Word_background">R</span>
//         <span className="Word_background">T</span>
//       </h1>
//       <div className="cart">
//         <div className="cart_inner">
//           <div className="cart_left1">
//             <div className="cart_left">
//               <table>
//                 <thead>
//                   <tr>
//                     <th style={{ float: 'left', paddingLeft: 23 }}>Product</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <div className="cart_item">
//                           <div className="cart_item_image">
//                             <img
//                               src={item.productImg}
//                               alt={item.name}
//                               height="100%"
//                               width="100%"
//                             />
//                           </div>
//                           <div className="cart_item_details">
//                             <h4>{item.name}</h4>
//                             <h5>Rs{item.new_price.toFixed(2)}</h5>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="cart_quantity_item">
//                         <div className="cart_quantity">
//                           <i
//                             className="fa-solid fa-angle-left"
//                             onClick={() =>
//                               handleQuantityButton(item.id, item.quantity, false)
//                             }
//                           />
//                           <input
//                             type="number"
//                             value={item.quantity}
//                             onChange={(e) =>
//                               handleQuantityChange(item.id, e.target.value)
//                             }
//                             min="1"
//                           />
//                           <i
//                             className="fa-solid fa-angle-right"
//                             onClick={() =>
//                               handleQuantityButton(item.id, item.quantity, true)
//                             }
//                           />
//                         </div>
//                       </td>
//                       <td>
//                         <div className="cart_quantity_total">
//                           Rs{(item.quantity * item.new_price).toFixed(2)}
//                         </div>
//                       </td>
//                       <td className="cart_cancel">
//                         <i
//                           className="fa-regular fa-circle-xmark"
//                           onClick={() => handleRemoveItem(item.id)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="cart_right1">
//             <div className="cart_right">
//               <div className="cart_container">
//                 <div className="cart_discount-codes">
//                   <h4
//                     style={{
//                       margin: '20px 0px',
//                       fontSize: 21,
//                       fontFamily:
//                         '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
//                       fontWeight: 500,
//                     }}
//                   >
//                     DISCOUNT CODES
//                   </h4>
//                   <div className="cart_main">
//                     <input
//                       type="text"
//                       placeholder="Coupon code"
//                       value={couponCode}
//                       onChange={(e) => setCouponCode(e.target.value)}
//                     />
//                     <button id="btw">APPLY</button>
//                   </div>
//                 </div>
//                 <div className="cart_total">
//                   <h3>CART TOTAL</h3>
//                   <p>
//                     Subtotal{' '}
//                     <span className="cart_subtotal">
//                       Rs{total_amount.toFixed(2)}
//                     </span>
//                   </p>
//                   <p>
//                     Shipping{' '}
//                     <span className="cart_subtotal">
//                       Rs{(shipping_fee / 100).toFixed(2)}
//                     </span>
//                   </p>
//                   <p>
//                     Total{' '}
//                     <span className="cart_subtotal">
//                       Rs{(total_amount + shipping_fee / 100).toFixed(2)}
//                     </span>
//                   </p>
//                   <div className="cart_right_button">
//                     <button className="cart_checkout_btn">
//                       PROCEED TO CHECKOUT
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterNew />
//     </>
//   );
// };

// export default AddToCart;


// import React, { useState } from 'react';
// import Header from '../Common/Header/Header';
// import FooterNew from '../Common/Footer/FooterNew';
// import './AddToCart.css';
// import { useCartContext } from "../../Components/context/cart_context";

// const AddToCart = () => {
//   const { cart, removeFromCart, updateQuantity, total_amount, shipping_fee } = useCartContext();

//   const handleQuantityChange = (id, newQuantity) => {
//     updateQuantity(id, parseInt(newQuantity, 10));
//   };

//   const handleRemoveItem = (id) => {
//     removeFromCart(id);
//   };

//   const handleQuantityButton = (id, currentQuantity, increment) => {
//     const newQuantity = increment ? currentQuantity + 1 : currentQuantity - 1;
//     if (newQuantity >= 1) {
//       updateQuantity(id, newQuantity);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <h1 className="Contact_Us_HomePage">
//         <span className="Word_background">C</span>
//         <span className="Word_background">A</span>
//         <span className="Word_background">R</span>
//         <span className="Word_background">T</span>
//       </h1>
//       <div className="cart">
//         <div className="cart_inner">
//           <div className="cart_left1">
//             <div className="cart_left">
//               <table>
//                 <thead>
//                   <tr>
//                     <th style={{ float: 'left', paddingLeft: 23 }}>Product</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <div className="cart_item">
//                           <div className="cart_item_image">
//                             <img
//                               src={item.productImg}
//                               alt={item.name}
//                               height="100%"
//                               width="100%"
//                             />
//                           </div>
//                           <div className="cart_item_details">
//                             <h4>{item.name}</h4>
//                             <h5>Rs{item.new_price.toFixed(2)}</h5>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="cart_quantity_item">
//                         <div className="cart_quantity">
//                           <i
//                             className="fa-solid fa-angle-left"
//                             aria-label="Decrease quantity"
//                             onClick={() =>
//                               handleQuantityButton(item.id, item.quantity, false)
//                             }
//                           />
//                           <input
//                             type="number"
//                             value={item.quantity}
//                             onChange={(e) =>
//                               handleQuantityChange(item.id, e.target.value)
//                             }
//                             min="1"
//                           />
//                           <i
//                             className="fa-solid fa-angle-right"
//                             aria-label="Increase quantity"
//                             onClick={() =>
//                               handleQuantityButton(item.id, item.quantity, true)
//                             }
//                           />
//                         </div>
//                       </td>
//                       <td>
//                         <div className="cart_quantity_total">
//                           Rs{(item.quantity * item.new_price).toFixed(2)}
//                         </div>
//                       </td>
//                       <td className="cart_cancel">
//                         <i
//                           className="fa-regular fa-circle-xmark"
//                           aria-label="Remove item"
//                           onClick={() => handleRemoveItem(item.id)}
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="cart_right1">
//             <div className="cart_right">
//               <div className="cart_total">
//                 <h3>CART TOTAL</h3>
//                 <p>
//                   Subtotal{' '}
//                   <span className="cart_subtotal">
//                     Rs{total_amount.toFixed(2)}
//                   </span>
//                 </p>
//                 <p>
//                   Shipping{' '}
//                   <span className="cart_subtotal">
//                     Rs{(shipping_fee / 100).toFixed(2)}
//                   </span>
//                 </p>
//                 <p>
//                   Total{' '}
//                   <span className="cart_subtotal">
//                     Rs{(total_amount + shipping_fee / 100).toFixed(2)}
//                   </span>
//                 </p>
//                 <div className="cart_right_button">
//                   <button className="cart_checkout_btn">
//                     PROCEED TO CHECKOUT
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterNew />
//     </>
//   );
// };

// export default AddToCart;


// import React, { useState } from 'react';
// import Header from '../Common/Header/Header';
// import FooterNew from '../Common/Footer/FooterNew';
// import './AddToCart.css';
// import { useCartContext } from "../../Components/context/cart_context";

// const AddToCart = () => {
//   const { cart, removeFromCart, updateQuantity, total_amount, shipping_fee } = useCartContext();

//   const handleQuantityChange = (id, newQuantity) => {
//     updateQuantity(id, parseInt(newQuantity, 10));
//   };

//   const handleRemoveItem = (id) => {
//     removeFromCart(id);
//   };

//   return (
//     <>
//       <Header />
//       <h1 className="Contact_Us_HomePage">
//         <span className="Word_background">C</span>
//         <span className="Word_background">A</span>
//         <span className="Word_background">R</span>
//         <span className="Word_background">T</span>
//       </h1>
//       <div className="cart">
//         <div className="cart_inner">
//           <div className="cart_left1">
//             <div className="cart_left">
//               <table>
//                 <thead>
//                   <tr>
//                     <th style={{ float: 'left', paddingLeft: 23 }}>Product</th>
//                     <th>Quantity</th>
//                     <th>Total</th>
//                     <th />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cart.map((item) => (
//                     <tr key={item.id}>
//                       <td>
//                         <div className="cart_item">
//                           <div className="cart_item_image">
//                             <img
//                               src={item.productImg}
//                               alt={item.name}
//                               height="100%"
//                               width="100%"
//                             />
//                           </div>
//                           <div className="cart_item_details">
//                             <h4>{item.name}</h4>
//                             <h5>Rs{item.new_price.toFixed(2)}</h5>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="cart_quantity_item">
//                         <div className="cart_quantity">
                          
//                           <input
//                             type="number"
//                             value={item.quantity}
//                             onChange={(e) =>
//                               handleQuantityChange(item.id, e.target.value)
//                             }
//                             min="1"
//                           />
//                         </div>
//                       </td>
//                       <td>
//                         <div className="cart_quantity_total">
//                           Rs{(item.quantity * item.new_price).toFixed(2)}
//                         </div>
//                       </td>
//                       <td className="cart_cancel">
//                         <button
//                           className="delete-btn"
//                           onClick={() => handleRemoveItem(item.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="cart_right1">
//             <div className="cart_right">
//               <div className="cart_total">
//                 <h3>CART TOTAL</h3>
//                 <p>
//                   Subtotal{' '}
//                   <span className="cart_subtotal">
//                     Rs{total_amount.toFixed(2)}
//                   </span>
//                 </p>
//                 <p>
//                   Shipping{' '}
//                   <span className="cart_subtotal">
//                     Rs{(shipping_fee / 100).toFixed(2)}
//                   </span>
//                 </p>
//                 <p>
//                   Total{' '}
//                   <span className="cart_subtotal">
//                     Rs{(total_amount + shipping_fee / 100).toFixed(2)}
//                   </span>
//                 </p>
//                 <div className="cart_right_button">
//                   <button className="cart_checkout_btn">
//                     PROCEED TO CHECKOUT
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <FooterNew />
//     </>
//   );
// };

// export default AddToCart;


import React, { useState } from 'react';
import Header from '../Common/Header/Header';
import FooterNew from '../Common/Footer/FooterNew';
import './AddToCart.css';
import { useCartContext } from "../../Components/context/cart_context";

const AddToCart = () => {
  const { cart, removeFromCart, updateQuantity, total_amount, shipping_fee } = useCartContext();

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, parseInt(newQuantity, 10));
    alert(`Quantity updated to ${newQuantity} for the item`);
  };

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <>
      <Header />
      <h1 className="Contact_Us_HomePage">
        <span className="Word_background">C</span>
        <span className="Word_background">A</span>
        <span className="Word_background">R</span>
        <span className="Word_background">T</span>
      </h1>
      <div className="cart">
        <div className="cart_inner">
          {cart.length === 0 ? (
            <div className="empty-cart-message">
              <h2>Your Cart is Empty</h2>
              <p>Looks like you haven't added anything to your cart yet. Start shopping now!</p>
            </div>
          ) : (
            <>
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
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="cart_item">
                              <div className="cart_item_image">
                                <img
                                  src={item.productImg}
                                  alt={item.name}
                                  height="100%"
                                  width="100%"
                                />
                              </div>
                              <div className="cart_item_details">
                                <h4>{item.name}</h4>
                                <h5>Rs{item.new_price.toFixed(2)}</h5>
                              </div>
                            </div>
                          </td>
                          <td className="cart_quantity_item">
                            <div className="cart_quantity">
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(item.id, e.target.value)
                                }
                                min="1"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="cart_quantity_total">
                              Rs{(item.quantity * item.new_price).toFixed(2)}
                            </div>
                          </td>
                          <td className="cart_cancel">
                            <button
                              className="delete-btn"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="cart_right1">
                <div className="cart_right">
                  <div className="cart_total">
                    <h3>CART TOTAL</h3>
                    <p>
                      Subtotal{' '}
                      <span className="cart_subtotal">
                        Rs{total_amount.toFixed(2)}
                      </span>
                    </p>
                    <p>
                      Shipping{' '}
                      <span className="cart_subtotal">
                        Rs{(shipping_fee / 100).toFixed(2)}
                      </span>
                    </p>
                    <p>
                      Total{' '}
                      <span className="cart_subtotal">
                        Rs{(total_amount + shipping_fee / 100).toFixed(2)}
                      </span>
                    </p>
                    <div className="cart_right_button">
                      <button className="cart_checkout_btn">
                        PROCEED TO CHECKOUT
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <FooterNew />
    </>
  );
};

export default AddToCart;
