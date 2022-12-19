import React from 'react'


function Pulutan(){
    const pulutan={
       "names":[],
       "price":[]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < pulutan.names.length; i++){
           sample.push(pulutan.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Pulutan