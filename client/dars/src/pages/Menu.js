import React from 'react'
import Card from "../components/Card";
import CauliFlower from "../pictures/cauliflower.jpg";
import adobo_mexican from "../pictures/adobo_mexican.jpg";
import Lechon_pork from "../pictures/lechon_pork.jpg";
import lechon_chicken from "../pictures/lechon_chicken_2.jpg";
import pancit_palabok from "../pictures/pancit_palabok.jpg";
import sisig from "../pictures/sisig.jpg";

function Menu() {
  return (
    <div>
      <div className="container" id="navbar">
     <div className='container-fluid'>
      <Card height="auto" width="300px" name="Cauliflower" bgColor={"violet"} price="100 php" picture={CauliFlower}/>
     </div>

     <div className='row'>
      <div className='col-sm-4 my-5'>
      <Card height="auto" width="300px" name="Adobo mexican" bgColor={"violet"} price="300 php" picture={adobo_mexican}/>
      
      </div>

     </div>

     <div className='col-sm-4 center'>
     <Card height="auto" width="300px" name="Lechon pork" bgColor={"violet"} price="500 php" picture={Lechon_pork}/>
     
     </div>

     <div className='col-sm-4 center'>
     <Card height="auto" width="300px" name="Lechon chicken" bgColor={"violet"} price="500 php" picture={lechon_chicken}/>
 
     </div>
    </div>
       <div className="col-6 center">
       <Card height="auto" width="300px" name="Pancit palabok" bgColor={"violet"} price="250 php" picture={pancit_palabok}/>" 
        
       </div>   
  
   
     <div className='col-6 center'>
      <Card height="auto" width="300px" name="Sisig" bgColor={"violet"} price="355 php" picture={sisig}></Card>
     </div>
    </div> 
  )
 } 
 

  

export default Menu
