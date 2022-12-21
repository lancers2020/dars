import React,{useState} from 'react'



function Testing1(){
    const Breakfast=()=>{
        if(isBreakfast===true){
            return (
                <div
                   style={{}}
                >
                   <h1>breakfast</h1>
                </div>
            )
        }
    }

    const Appetizer=()=>{
        if(isAppetizer===true){
            return (
                <div
                  style={{}}
                >
                   <h1>appetizer</h1>     
                </div>
           )
        }          
    }


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

    const Dessert=()=>{
        if(isDessert===true){
            return (
                <div
                  style={{}}
                >
                   <h1>dessert</h1>
                </div>               
            )
        }     
    }

    const Pulutan=()=>{
        if(isPulutan===true){
            return (
                <div
                  style={{}}
                >
                   <h1>pulutan</h1>
                </div>             
            )
        }       
    }
   
    const Drinks=()=>{
        if(isDrinks===true){
            return (
                <div
                   style={{}}
                >
                   <h1>drinks</h1>
                </div>
            )
        }
    }

    
    const [isBreakfast, setIsBreakfast] =
    useState(false);

    const [isAppetizer, setIsAppetizer] =
    useState(false);

    const [isMainDish, setIsMainDish] =
    useState(false);

    const [isDessert, setIsDessert] =
    useState(false);

    const [isPulutan, setIsPulutan] =
    useState(false);

    const [isDrinks, setIsDrinks] =
    useState(false);
  
     return (
       <div>
         <div
           onClick={()=>{
            setIsBreakfast(true);
            <Breakfast/>
           }} 
        >Breakfast</div>

         <div
            onClick={()=>{
             setIsAppetizer(true);
             <Appetizer/>      
           }}
        >Appetizer</div>

         <div
            onClick={()=>{
             setIsMainDish(true);
             <MainDish/>
            }} 
         >Main Dish</div>

         <div
            onClick={()=>{
             setIsDessert(true);
             <Dessert/>
            }}
         >Dessert</div>

         <div
            onClick={()=>{
             setIsPulutan(true);
             <Pulutan/>
            }}           
         >Pulutan</div>
               
         <div
            onClick={()=>{
             setIsDrinks(true);
             <Drinks/>
            }}
         >Drinks</div>
        
      </div>       
     )
 }

 export default Testing1