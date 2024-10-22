import React from 'react'
import("./FirstPage.css")
import Right_mid1 from './Right_mid1/Right_mid1';
import RightPrice from './RightPrice/RightPrice';
import DesHeading from './DescHeading/DesHeading';
import Desc from './Description/Desc';
import Bottom from './Bottom/Bottom';
import Product from './Product/Product';
function FirstPage({productImg, product}) {
  return (
    <div>
      <div className="Desc_container">
        <div className="Desc_left">
          <div className="Desc_left1">
            <div className="Desc_left11">
              <div className="Desc_image1">
                <img src="https://heartitout.in/links/wp-content/uploads/2022/04/8-1.png" alt height="100%" width="100%" />
              </div>
              <div className="Desc_image1">
                <img src="https://heartitout.in/links/wp-content/uploads/2022/04/10.png" alt height="100%" width="100%" />
              </div>
              <div className="Desc_image1">
                <img src="https://heartitout.in/links/wp-content/uploads/2022/04/9.png" alt height="100%" width="100%" />
              </div>
            </div>
          </div>
          <div className="Desc_left2">
            <div className="Desc_image">
              <img src={productImg} alt height="100%" width="100%" />
            </div>
          </div>
        </div>
        <div className="Desc_right">
          <>
            <Right_mid1 
            name={product.name}
            />
            <RightPrice
            new_price={product.new_price} />
            <DesHeading />
            <Desc
            description = {product.description}
            />
            <Product />
            <Bottom
            rating={product.rating}
            />
          </>


        </div>
      </div>

    </div>
  )
}

export default FirstPage
