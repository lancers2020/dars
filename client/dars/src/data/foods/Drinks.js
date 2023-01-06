import React from 'react'


function Drinks(){
    const drinks={
       "names":["heineken", "melon Juice", "pineapple Juice", "red Horse", "strawberry Juice", "tiger Beer"],
     
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < drinks.names.length; i++){
           sample.push(drinks.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Drinks