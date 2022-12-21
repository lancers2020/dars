import React from 'react'


function Drinks(){
    const drinks={
       "names":["absolut vodka", "bear beer", "becker beer", "bombay sapphire", "boracay rum cappucino", "bud light", "budweiser",
                "chivas regal", "corona", "escudo", "ginebra san miguel", "gold eagle", "gordon", "heineken", "london dry gin",
                "mix red wine", "red horse", "tanduay ice", "tanduay white", "tanduay", "tiger beer", "banana shake", "coca cola", "fanta", "fanta grapes", "kalamansi juice", "melon juice", "orange juice", "pineapple juice",
                "pop cola", "sprite", "strawberry shake", "vanilla shake", "watermelon juice"],
       "price":["150.00", "210.99", "140.99", "110.99", "130.99", "154.99", "125.99", "111.99", "160.99", "90.99", "75.99",
                "30.99", "45.99", "63.99", "75.99", "87.99", "54.99", "34.99", "78.99", "45.99", "78.99", "40.99", "35.00", "55.99", "37.50", "60.99", "25.99", "100.00", "43.99", "37.99", "15.50", "55.50", "85.50", "13.50"]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < drinks.names.length; i++){
           sample.push(drinks.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Drinks