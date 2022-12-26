import React from 'react'


function Pulutan(){
    const pulutan={
       "names":["adobong mani", "bagnet", "bopis", "buffalo wings", "gambas", "kilawing isda at baboy", "kilawing isda", "nilasing na hipon", "pigar pigar",
                "pork barbecue", "sizzling teriyaki squid", "sizzling tufo", "spicy chicken wings", "spicy fried calamari", "tokwat baboy", "tostadong pork"],
    
 
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