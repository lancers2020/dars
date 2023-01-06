import React, {Component} from 'react';
import "../css/menu.css";
import Card from "../../components/Card";

function OverFlowY({
  category, //single data
  label, //array
  width, //single data
  height, //single data
  bgColor, //single
  price, //array
  picture //array
  }){
  const Distributor = ()=>{
    for(var x = 0; x < 7; x++){
        return(
            <div className="overFlowYDisplay">
              {
                picture.map((item, key)=>{
                  return(
                    <div>
                      <Card width={width} height={height} bgColor={bgColor} name={label[key]} picture={item}/>
                    </div>
                  )
                })
              }
            </div>
        )
    }
    // return(
    //     <div style={{display: "flex"}}>
    //         {
    //             uwu.map((item)=>{
    //                 return(
    //                     <div>
    //                         {item}
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )
  }
  return (
    <div style={{padding: "10px", display: "flex", flexDirection: "column", textAlign: "left", backgroundColor: "black"}}>
      <h3>{category}</h3>
      <div style={{overflowY: "scroll", height: "500px"}}>
        <Distributor/>
      </div>
    </div>
  )
}

export default OverFlowY