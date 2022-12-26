import React from 'react'


function Dessert(){
    const dessert={
       "names":["bibingka", "biko", "buko salad", "cassava cake", "ginataang halohalo", "halo halo", "kutsinta",
                "leche flan", "maiz con yelo", "mamon cake cheddar cheese", "minatamis na saging", "palitaw", 
                "sapin sapin", "suman malagkit", "taho"], 
       
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < dessert.names.length; i++){
           sample.push(dessert.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Dessert