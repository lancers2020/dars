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

    const Display=()=>{
        return(
            <div>
                <Breakfast/>
                <Appetizer/>
                <MainDish/>
                <Dessert/>
                <Pulutan/>
                <Drinks/>
            </div>
        )
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
            <div onClick={()=>{
                setIsBreakfast(true)
                setIsAppetizer(false)
                setIsMainDish(false)
                setIsDessert(false)
                setIsPulutan(false)
                setIsDrinks(false)
            }}>Breakfast</div>
            <div onClick={()=>{
                setIsAppetizer(true)
                setIsBreakfast(false)
                setIsMainDish(false)
                setIsDessert(false)
                setIsPulutan(false)
                setIsDrinks(false)
            }}>Appetizer</div>
            <div onClick={()=>{
                setIsMainDish(true)
                setIsAppetizer(false)
                setIsBreakfast(false)
                setIsDessert(false)
                setIsPulutan(false)
                setIsDrinks(false)
            }}>Main Dish</div>
            <div onClick={()=>{
                setIsDessert(true)
                setIsAppetizer(false)
                setIsMainDish(false)
                setIsBreakfast(false)
                setIsPulutan(false)
                setIsDrinks(false)
            }}>Dessert</div>
            <div onClick={()=>{
                setIsPulutan(true)
                setIsAppetizer(false)
                setIsMainDish(false)
                setIsDessert(false)
                setIsBreakfast(false)
                setIsDrinks(false)
            }}>Pulutan</div>
            <div onClick={()=>{
                setIsDrinks(true)
                setIsAppetizer(false)
                setIsMainDish(false)
                setIsDessert(false)
                setIsPulutan(false)
                setIsBreakfast(false)
            }}>Drinks</div>
            <Display/>
        </div>       
     )
 }

 export default Testing1