import React from 'react'


function MainDish() {
 const maindish={
    "names":["arroz caldo", "beef salpicao", "bistek tagalog", "bulalo", "calamares", "chicken inasal",
             "crispy pata", "crispy tadyang ng baka", "dinuguan with rice", "garlic chicken wings with rice", "ginataang gulay with rice", "humba with rice",
             "inihaw na liempo with rice", "inihaw na pusit with rice", "kaldereta with rice", "kare kare", "lechon kawali", "palabok",
             "pancit bijon", "pancit guisado", "pinapaitan with rice", "pritong isda with rice", "sinigang na baboy with rice", "sisig with rice"],
    
 }
 const Result = () =>{
   let sample = [];
   for(let i = 0; i < maindish.names.length; i++){
       sample.push(maindish.names.length[i]);
   }
   return sample;
}

 return (
   <div>
    <Result/>
   </div>
 )
}

//  in line number 19, we have to remove .length so it'll be just "mainDish.names[i]"
 //const Result = () =>{
   // let sample = [];
   // for(let i = 0; i < mainDish.names.length; i++){
       // sample.push(mainDish.names[i]);
 //   }
   // return sample;
// }

 // return (
  //  <div>
   //  <Result/>
  //  </div>
 // )
///}



//function Foods2(){
   //const dessert={
    //  "names":[],
     // "price":[]

 //  }
 //  const Result = () =>{
    //  let sample = [];
    //  for(let i = 0; i < dessert.names.length; i++){
    //      sample.push(dessert.names.length[i]);
    //  }
    //  return sample;
  // }
  
   // return (
    //  <div>
    //   <Result/>
    //  </div>
   // )
//}

//function Foods3(){
  // const pulutan={
    //  "names":[],
    //  "price":[]

 //  }
 //  const Result = () =>{
   //   let sample = [];
   //   for(let i = 0; i < pulutan.names.length; i++){
    //      sample.push(pulutan.names.length[i]);
   //   return sample;
//   }
  
   // return (
     // <div>
     //  <Result/>
    //  </div>
   // )
//}

//function Foods4(){
  // const alcoholDrinks={
     // "names":[],
     // "price":[]

  // }
   //const Result = () =>{
    //  let sample = [];
     // for(let i = 0; i < alcoholDrinks.names.length; i++){
        //  sample.push(alcoholDrinks.names.length[i]);
      //}
     // return sample;
  // }
  
    //return (
    // <div>
     //  <Result/>
     // </div>
   // )
//}

export default MainDish


