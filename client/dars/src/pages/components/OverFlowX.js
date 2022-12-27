import React from 'react';
import Card from "../../components/Card";

function SomeFunction(data1, data2){ //function creation is parameter
  return(
    "uwu"
  )
}

function OverFlowX({
  category, //single data
  label, //array
  width, //single data
  height, //single data
  bgColor, //single
  price, //array
  picture //array
  }){
  return (
    <div style={{padding: "10px", display: "flex", flexDirection: "column", textAlign: "left"}}>
      <h3>{category}</h3>
      <div style={{display: "flex", overflowX: "auto"}}>
        {
          picture.map((items, key)=>{ //function calling is argument
            return(
              <div key={key}>
                <Card width={width} height={height} bgColor={bgColor} name={label[key]} picture={items}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default OverFlowX