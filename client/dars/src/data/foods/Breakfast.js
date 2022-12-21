import React from 'react'


function Breakfast(){
    const breakfast={
       "names":["almond milk coffee", "black coffee", "coffee longganisa egg", "daing na bangus with fried rice",
                "hot cappuccino", "hot chocolate", "hot latte", "hot milo", "hot mocha", "longganisa with salted egg and steamed rice",
                "sisig silog", "talong itlog sinangag", "tapsilog"],
       "price":["25.99", "30.99", "12.99", "15.99", "21.99", "17.99", "30.99", "15.99", "17.99", "19.99","13.99", "23.99", "16.99"]
 
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