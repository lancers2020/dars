import React,{useState} from 'react'



function Testing1(){
    const MainDish=()=>{
        if(isMainDish===true){
            return (
                <div
                  style={{}}
                >
                    <h1>main dish</h1>
                </div>
            )
        }
        
    }

    const Pulutan=()=>{
        return (
            <h1>pulutan</h1>
        )
    }

    const Appetizer=()=>{
        return (
            <h1>appetizer</h1>
        )
    }

    const Dessert=()=>{
        return (
            <h1>dessert</h1>
        )
    }



    const [isMainDish, setIsMainDish] =
    useState(false);

    const [isPulutan, setIsPulutan] =
    useState(false);

    const [isAppetizer, setIsAppetizer] =
    useState(false);

    const [isDessert, setIsDessert] =
    useState(false);
   
     return (
       <div>
         <div
            onClick={()=>{
                setIsMainDish(true);
                <MainDish/>
            }} 
         >main dish</div>
         <div
         >pulutan</div>
         <div
         >appetizer</div>
         <div
         >dessert</div>
       </div>
     )
 }

 export default Testing1