import React from 'react'
import { Link } from "react-router-dom";
import "./Mid3.css"
function Mid3() {
  return (
      <div className="Pro_mid3">
  <div className="Pro_mid3_left">
    <div className="Pro_mid3_left_section1">See How Gratitude Journal Can Help You</div>
    <div className="Pro_mid3_left_section2"><p>A <b>Gratitude Journal</b> can help you reflect on positive memories, experiences, lessons learned, and the people you've met thus far.</p></div>
        <Link to="/Product/Product_Description/:id"><button>Explore</button></Link>
    
  </div>
  <div className="Pro_mid3_right">
    <img src="https://heartitout.in/links/wp-content/uploads/2022/03/8-1.png" alt height="100%" width="100%" />
  </div>
</div>

  )
}

export default Mid3
