import React from 'react'


function Appetizer(){
    const appetizer={
       "names":["atchara", "beef empanadas", "cheese sticks", "chicharon", "crispy deep fried chicken skin",
                "crispy tenga", "dynamite lumpia", "fishball", "fried lumpia", "kwek kwek", "lumpiang shanghai", "okoy pork siomai"],
       "price":["55", "30", "50", "65", "73", "45", "25", "30", "65", "33", "65", "75"]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < appetizer.names.length; i++){
           sample.push(appetizer.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Appetizer