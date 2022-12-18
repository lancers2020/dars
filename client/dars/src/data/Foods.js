import React from 'react'

function Foods() {
 const mainDish={
    "names":["roasted cauliflower", "adobo mexican", "lechon pork", "lechon chicken", "pancit palabok", "sisig",
             "beef salpicao", "bistek tagalog", "bulalo", "crispy pata", "dinuguan", "ginataang gulay",
             "humba", "kaldereta", "inihaw na pusit", "kare kare", "lechon kawali", "pancit guisado",
             "pinapaitan", "pinaputok na isda", "sizzling teriyaki squid", "sticky garlic chicken wings", "tostadong pork adobo"],
    "price":["100", "300", "455", "499", "250", "155", "299", "199", "355", "399", "199", "55", "139", "140", "355", "139", "250",
             "299", "240", "170", "125", "180", "155"]

    
 }

//  in line number 19, we have to remove .length so it'll be just "mainDish.names[i]"
 const Result = () =>{
    let sample = [];
    for(let i = 0; i < mainDish.names.length; i++){
        sample.push(mainDish.names.length[i]);
    }
    return sample;
 }

  return (
    <div>
     <Result/>
    </div>
  )
}



function Foods2(){
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

function Foods3(){
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

function Foods4(){
   const alcoholDrinks={
      "names":[],
      "price":[]

   }
   const Result = () =>{
      let sample = [];
      for(let i = 0; i < alcoholDrinks.names.length; i++){
          sample.push(alcoholDrinks.names.length[i]);
      }
      return sample;
   }
  
    return (
      <div>
       <Result/>
      </div>
    )
}

export default Foods


