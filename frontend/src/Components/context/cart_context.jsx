// import { createContext, useContext, useReducer } from "react";
// import reducer from "../reducer/cartReducer"
// const CartContext = createContext();

// const initialState = {
//     cart:[],
//     total_item: "",
//     total_amount: "",
//     shipping_fee:50000,
// };

// const CartProvider = ({children}) =>{
//     const [state, dispatch] = useReducer(reducer, initialState)
//     const addToCart = (id, name, productImg,product) =>{
//         dispatch({type:"ADD_TO_CART", payload: {id, name, productImg,product}})
//     }
//     return( 
//         <CartContext.Provider value={{...state, addToCart}}>
//         {children}
//         </CartContext.Provider>
//     )
// };

// const useCartContext = ()=>{
//     return useContext(CartContext);
// }

// export {CartProvider, useCartContext};



import { createContext, useContext, useReducer, useEffect } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 50000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (id, name, productImg, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, name, productImg, product } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTALS" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};