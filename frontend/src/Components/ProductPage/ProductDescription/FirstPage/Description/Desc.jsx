import React from 'react'
import("./Desc.css")

function Desc({description}) {
  return (
    <div>
      <div className="Desc_desc">{description}</div>

    </div>
  )
}

export default Desc
