import React from 'react'


function Ladiesdrink(){
    const ladiesdrink={
       "names":["banana shake", "coca cola", "fanta", "fanta grapes", "kalamansi juice", "melon juice", "orange juice", "pineapple juice",
        "pop cola", "sprite", "strawberry shake", "vanilla shake", "watermelon juice"],
       "price":["40.99", "35.00", "55.99", "37.50", "60.99", "25.99", "100.00", "43.99", "37.99", "15.50", "55.50", "85.50", "13.50"]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < ladiesdrink.names.length; i++){
           sample.push(ladiesdrink.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Ladiesdrink