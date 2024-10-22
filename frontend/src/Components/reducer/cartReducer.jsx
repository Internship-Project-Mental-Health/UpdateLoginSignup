
const cartReducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        let {id, name, productImg, product} = action.payload;
    

    let cartProduct;

    cartProduct= {
      id: id +productImg,
      name,
      productImg,
      new_price: product.new_price, // Include new_price here
      quantity: 1,
      // max: product.stock,
    }

  return {
    ...state,
    cart:[...state.cart, cartProduct],
  }

}
return state;
}


export default cartReducer