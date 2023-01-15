import React,{useState} from 'react'



function Testing1({foods}) {
   const breakfast={
    "names":[
       "Black Coffee","Hot Chocolate","Blueberries Waffle","Strawberry Waffle","Daing with Rice","Hot Milo",
       "Hot Mocha","Longganisa with Rice","Tocino with Rice","Arroz caldo","Corn silog","Fried egg,hotdog,bacon",
       "Hot silog","Silog","Spam silog","Tapsilog","Tortang talong","Tuyo with rice"],
    "price":["15.99","17.99","9.99","12.99","25.99","17.99","13.99","19.99","18.99",
             "15.99","17.99","9.99","12.99","25.99","17.99","13.99","19.99","18.99"]    
}

  const appetizer={
    "names":["Atchara","Dynamite Lumpia","Fishball","Lumpiang Shanghai",
             "Beef Empanada","Cheese Stick","Chicharon bulaklak","Crispy Chicken skin","Crispy Tenga",
             "Baked tahong","Camaron rebosado","Lianas banana","Lumpiang ubod","Onion ring",
             "Rellenong hipon"],
    "price":["8.99","12.99","13.99","11.99","18.99","14.99","13.99","10.99","11.99",
             "8.99","12.99","13.99","11.99","18.99","14.99" ]  
}

  const mainDish={
    "names":["Crispy Pata","Dinuguan","Kare kare","Palabok","Pancit Bijon",
             "Pinapaitan","Inihaw na Pusit","Lechon Kawali","Pritong Isda",
             "Batchoy","Bistek tagalog","Ginataang manok","Kinilaw na isda",
             "Menudo","Pinakbet","Pork sisig","Sinigang na hipon","Sinigang with bagnet",
             "Sisig","Tinola"],
    "price":["15.99","17.99","13.99","16.99","21.99","18.99","19.99","11.99","13.99",
             "15.99","17.99","13.99","16.99","21.99","18.99","19.99","11.99","13.99","19.99","11.99","13.99"]  
}

  const dessert={
    "names":["Halo halo","Kutsinta","Leche Flan","Maiz con yelo","Bibingka",
             "Biko","Buko Salad","Ginataang Halo halo","Minatamis na Saging",
             "Buko pandan","Buko pie","Pichi pichi","Puto bumbong","Puto","Sapin sapin",
             "Suman latik","Taho","Turon"],
    "price":["8.99","7.99","10.99","11.99","13.99","7.99","6.99","14.99","15.99",
             "8.99","7.99","10.99","11.99","13.99","7.99","6.99","14.99","15.99"]  
}

    const drinks={
        "names":[
            "Heineken","Melon Juice","Pineapple Juice","red Horse","Strawberry Juice","Tiger Beer","Coca Cola","Corona","Lemon Juice"
        ],
        "price":[
            "4.99","5.99","7.99","9.99","6.99","7.99","5.99","8.99","3.99"
        ]  
    }
}
 


function Testing11(){
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
    );
}




 export default Testing1