import React from 'react'
import Card from "../components/Card";
import CauliFlower from "../pictures/cauliflower.jpg";

function Menu() {
  return (
    <div className="container" id="navbar">
     <div className='container-fluid'>
      <Card height="auto" width="200px" name="mango shake" bgColor={"red"} price="500 php" picture={CauliFlower}/>
     </div>

     <div className='row'>
      <div className='col-sm-4 center'>
        <img className=''></img>
        text 2
      </div>

     </div>

     <div className='col-sm-4 center'>
      <img className=''></img>
      text 3
     </div>

     <div className='col-sm-4 right'>
      <img className=''></img>
      text 4
     </div>
    </div>


  )
}

export default Menu
