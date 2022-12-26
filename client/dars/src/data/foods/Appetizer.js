import React from 'react'


function Appetizer(){
    const appetizer={
       "names":["atchara", "beef empanada", "cheese stick", "chicharon", 
                "crispy tenga", "deep fried chicken skin", "dynamite lumpia", "fishball", "fried lumpia", "kwek kwek", "lumpiang shanghai", "okoy", "pork siomai"],
       
 
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