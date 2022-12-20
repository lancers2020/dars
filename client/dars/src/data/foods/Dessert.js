import React from 'react'


function Dessert(){
    const dessert={
       "names":["bibingka", "biko", "buko", "cassava cake", "chocolate", "ginataang halo halo", "halo halo", "kutsinta",
                "leche flan", "mais con yelo", "mamon cake cheddar cheese", "minatamis na saging", "palitaw", 
                "sapin sapin", "suman malagkit", "taho"], 
       "price":["15.00", "21.99", "14.99", "11.99", "13.99", "15.99", "12.99", "11.99", "16.99", "90.99", "75.99",
                "30.99", "45.99", "63.99", "75.99", "87.99"]
 
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