import React from 'react'


function Breakfast(){
    const breakfast={
       "names":["Black Coffee", "Hot Chocolate", "Waffle blueberries", "Waffle Strawberry",
                "Daing with rice", "Hot milo", "Hot mocha", "Longganisa with rice", "Tocino with rice"],
       "desc":["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", 
                "Lorem ipsum dolor sit amet"],
       "price":["9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php",]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < breakfast.names.length; i++){
           sample.push(breakfast.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Breakfast