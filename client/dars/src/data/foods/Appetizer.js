import React from 'react'


function Appetizer(){
    const appetizer={
       "names":["atchara", "dynamite Lumpia", "fishball", "lumpiang Shanghai"],
       
 
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