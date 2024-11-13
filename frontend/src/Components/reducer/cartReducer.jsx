
// const cartReducer = (state, action) => {
//     if(action.type === "ADD_TO_CART"){
//         let {id, name, productImg, product} = action.payload;
    

//     let cartProduct;

//     cartProduct= {
//       id: id +productImg,
//       name,
//       productImg,
//       new_price: product.new_price, // Include new_price here
//       quantity: 1,
//       // max: product.stock,
//     }

//   return {
//     ...state,
//     cart:[...state.cart, cartProduct],
//   }

// }
// return state;
// }


// export default cartReducer


// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const { id, name, productImg, product } = action.payload;
//       const existingItem = state.cart.find(
//         (item) => item.id === id + productImg
//       );

//       if (existingItem) {
//         const updatedCart = state.cart.map((item) =>
//           item.id === existingItem.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//         return { ...state, cart: updatedCart };
//       }

//       const cartProduct = {
//         id: id + productImg,
//         name,
//         productImg,
//         new_price: product.new_price,
//         quantity: 1,
//       };

//       return {
//         ...state,
//         cart: [...state.cart, cartProduct],
//       };
//     }

//     case "REMOVE_FROM_CART": {
//       const updatedCart = state.cart.filter(
//         (item) => item.id !== action.payload.id
//       );
//       return { ...state, cart: updatedCart };
//     }

//     case "UPDATE_QUANTITY": {
//       const { id, quantity } = action.payload;
//       const updatedCart = state.cart.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//       );
//       return { ...state, cart: updatedCart };
//     }

//     case "CLEAR_CART": {
//       return { ...state, cart: [] };
//     }

//     case "UPDATE_TOTALS": {
//       const { total_items, total_amount } = state.cart.reduce(
//         (acc, item) => ({
//           total_items: acc.total_items + item.quantity,
//           total_amount: acc.total_amount + item.new_price * item.quantity,
//         }),
//         { total_items: 0, total_amount: 0 }
//       );

//       return { ...state, total_items, total_amount };
//     }

//     default:
//       return state;
//   }
// };

// export default cartReducer;



const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, name, productImg, product } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id + productImg);

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      }

      const cartProduct = {
        id: id + productImg,
        name,
        productImg,
        new_price: product.new_price,
        quantity: 1,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: updatedCart };
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      return { ...state, cart: updatedCart };
    }

    case "CLEAR_CART": {
      return { ...state, cart: [] };
    }

    case "UPDATE_TOTALS": {
      const { total_items, total_amount } = state.cart.reduce(
        (acc, item) => ({
          total_items: acc.total_items + item.quantity,
          total_amount: acc.total_amount + item.new_price * item.quantity,
        }),
        { total_items: 0, total_amount: 0 }
      );

      return { ...state, total_items, total_amount };
    }

    default:
      return state;
  }
};

export default cartReducer;