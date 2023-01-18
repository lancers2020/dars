import React from 'react'

function Card({picture, name, price, bgColor, width, height, description, color}) { //propperties
  return (
    <div style={{
        backgroundColor: bgColor,
        padding: "5px",
        margin: "10px",
        width: "fit-content",
        height: "auto",
        display: "flex",
        borderRadius: "10px",
        color: color
    }}>
        <div style={{

        }}>
          <img style={{borderRadius: "10px"}} width={width} height={height} src={picture} alt="name"/>
          <div>
              {name}
          </div>
        </div>
        <div style={{
          fontSize: "15px",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly"
          }}>
          <div>
              {price}
          </div>
          <div>
            {description}
          </div>
        </div>
    </div>
  )
}

export default Card