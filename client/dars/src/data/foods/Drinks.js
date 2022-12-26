import React from 'react'


function Drinks(){
    const drinks={
       "names":["absolut vodka", "banana shake", "bear beer", "becker", "bud light", "budweiser",
                "chivas regal", "chocolate", "cocacola", "corona", "escudo", "fanta grapes", "fanta", 
                "ginebra san miguel", "heineken", "lemon juice", "london dry gin",
                "melon juice", "orange juice", "pepsi", "pineapple juice", "popcola", "redhorse", "sprite", 
                "strawberry shake", "tanduay ice", "tanduay", "tiger beer", "watermelon juice"],
     
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