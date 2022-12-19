import React from 'react'


function Alcohol(){
    const alcohol={
       "names":[],
       "price":[]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < alcohol.names.length; i++){
           sample.push(alcohol.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Alcohol