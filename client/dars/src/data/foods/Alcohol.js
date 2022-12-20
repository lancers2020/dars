import React from 'react'


function Alcohol(){
    const alcohol={
       "names":["absolut vodka", "bear beer", "becker beer", "bombay sapphire", "boracay rum cappucino", "bud light", "budweiser",
                "chivas regal", "corona", "escudo", "ginebra san miguel", "gold eagle", "gordon", "heineken", "london dry gin",
                "mix red wine", "red horse", "tanduay ice", "tanduay white", "tanduay", "tiger beer", ""],
       "price":["150.00", "210.99", "140.99", "110.99", "130.99", "154.99", "125.99", "111.99", "160.99", "90.99", "75.99",
                "30.99", "45.99", "63.99", "75.99", "87.99", "54.99", "34.99", "78.99", "45.99", "78.99"]
 
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