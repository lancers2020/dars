import React from 'react'


function Drinks(){
    const drinks={
       "names":["Heineken", "Melon Juice", "Pineapple Juice", "Red Horse",
                "Strawberry Juice", "Tiger Beer", "Coca cola", "Corona", "Lemon juice"],
       "desc":["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", 
                "Lorem ipsum dolor sit amet"],
       "price":["9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php",]
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