import React from 'react'


function Breakfast(){
    const breakfast={
       "names":["black Coffee", "hot Chocolate", "waffle Blueberries", "waffle Strawberry"],
     
 
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