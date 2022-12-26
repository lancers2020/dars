import React from 'react'


function Breakfast(){
    const breakfast={
       "names":["almond milk coffee", "american coffee", "black coffee", "coffee longganisa egg", "daing na bangus with fried rice",
                "hot cappuccino", "hot chocolate", "hot latte", "hot milo", "hot mocha", "longganisa egg tuyo with rice", "longganisa with rice and saled egg",
                "sisig itlog with rice", "talong itlog with rice", "tapsilog"],
     
 
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