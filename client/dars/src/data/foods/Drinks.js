import React from 'react'


function Drinks(){
    const drinks={
       "names":["Heineken", "Melon Juice", "Pineapple Juice", "Red Horse",
                "Strawberry Juice", "Tiger Beer", "Coca cola", "Corona", "Lemon juice"],
     
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