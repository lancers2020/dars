import React from 'react'


function Pulutan(){
    const pulutan={
       "names":["adobong mani", "bagnet", "bopis", "buffalo wings", "chilli seasame chicken wings", "crispy fried calamari", "gambas", "isaw", "kilawing isda at baboy",
       "kinilaw na isda", "nilasing na hipon", "pigar pigar", "pork barbecue", "sizzling tofu", "tokwat baboy", "five spice chicken wings"],
       "price":["22.99", "15.50", "25.50", "40.99", "35.00", "55.99", "37.50", "60.99", "25.99", "100.00", "43.99", "37.99", "15.50", "55.50", "85.50", "13.50"]
 
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