import React from 'react'

function Card({picture, name, price, bgColor, width, height}) { //propperties
  return (
    <div style={{
        backgroundColor: bgColor,
        padding: "5px",
        margin: "10px",
        width: "fit-content",
        height: "auto"
    }}>
        <img width={width} height={height} src={picture} alt="name"/>
        <div>
            {name}
        </div>
        <div>
            {price}
        </div>
    </div>
  )
}

export default Card