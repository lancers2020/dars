import React from 'react';
import Card from "../../components/Card";

function OverFlowX({
  category,
  label,
  width,
  height,
  bgColor,
  price,
  picture
}) {
  const Uwu = ()=>{
    // for(var i = 0; i < 23; i++){
    //   console.log("run times: ", i);
    //     <div>
    //       <Card height={height} width={width} name={label[i]} bgColor={bgColor} price={price[i]} picture={picture[i]} />
    //     </div>
    // }
    label.map((items, key)=>{
      return(
        <div key={key}>
          {items}
          <Card width="200px" height="200px" bgColor="pink" name={label[key]} price={price[key]} picture={picture[key]}/>
        </div>
      )
    })
  }
  return (
    <div style={{padding: "10px", display: "flex", flexDirection: "column", textAlign: "left"}}>
      <h3>{category}</h3>
      <div style={{display: "flex", overflowX: "auto"}}>
        {
          label.map((items, key)=>{
            return(
              <div key={key}>
                <Card width={width} height={height} bgColor="pink" name={label[key]} price={price[key]} picture={picture[key]}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default OverFlowX