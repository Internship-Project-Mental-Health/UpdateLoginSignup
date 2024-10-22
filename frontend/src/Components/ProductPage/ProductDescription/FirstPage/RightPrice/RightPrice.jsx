import React from 'react'
import("./RightPrice.css")

function RightPrice({new_price}) {
  return (
    <div>
          <div><span className="Desc_right_price">Rs.{new_price}</span><button>Add To Cart</button></div>



    </div>
  )
}

export default RightPrice
