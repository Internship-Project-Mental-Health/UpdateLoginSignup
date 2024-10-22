import React from 'react'
import("./Bottom.css")

function Bottom({rating}) {
  return (
    <div>
      <div className="Desc_bottom"><span className="Desc_Rating">Rating:-&nbsp;</span>{rating}
      </div>

    </div>
  )
}

export default Bottom
