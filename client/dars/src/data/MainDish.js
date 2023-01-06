import React from 'react'


function MainDish() {
 const maindish={
    "names":["crispy Pata", "dinuguan", "karekare", "palabok", "pancit Bijon", "pinapaitan" ]
    
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


