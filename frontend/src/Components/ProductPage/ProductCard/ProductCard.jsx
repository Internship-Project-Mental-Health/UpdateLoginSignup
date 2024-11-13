import React from 'react'
import './ProductCard.css';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context"

function ProductCard({id, name, productImg, DESCRIPTION, product,new_price }) {
    const { addToCart } = useCartContext();
    const handleAddToCart = () => {
        console.log("Adding to cart:", { id, name, productImg, product, new_price });
        addToCart(id, name, productImg, product, { new_price });
        alert(`${name} has been added to the cart`);
    };
    
    return (
        <div className="Pro_product_card">
            <div className="Pro_container">
                <img src={productImg} alt height="55%" width="100%" />
                <div className="Pro_product_name">
                    <Link to={`/Product/Product_Description/${id}`}>{name}</Link>
                    
                </div>
                <div className="Pro_desc_ProductCard">
                    {DESCRIPTION}
                </div>
                <div className="Pro_btn">
                    <button>BUY</button>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default ProductCard
