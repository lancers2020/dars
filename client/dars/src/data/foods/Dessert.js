import React from 'react'


function Dessert(){
    const dessert={
       "names":[],
       "price":[]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < dessert.names.length; i++){
           sample.push(dessert.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Dessert