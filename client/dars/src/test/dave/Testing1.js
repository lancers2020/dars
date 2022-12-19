import React from 'react';


function Testing1({foods}) {
    const mainDish={
        "names":["roasted cauliflower", "adobo mexican", "lechon pork", "lechon chicken", "pancit palabok", "sisig",
                 "beef salpicao", "bistek tagalog", "bulalo", "crispy pata", "dinuguan", "ginataang gulay",
                 "humba", "kaldereta", "inihaw na pusit", "kare kare", "lechon kawali", "pancit guisado",
                 "pinapaitan", "pinaputok na isda", "sizzling teriyaki squid", "sticky garlic chicken wings", "tostadong pork adobo"],
        "price":["100", "300", "455", "499", "250", "155", "299", "199", "355", "399", "199", "55", "139", "140", "355", "139", "250",
                 "299", "240", "170", "125", "180", "155"]    
    }
    const appetizer={
        "names":["atchara", "beef empanadas", "cheese sticks", "chicharon", "crispy deep fried chicken skin",
                "crispy tenga", "dynamite lumpia", "fishball", "fried lumpia", "kwek kwek", "lumpiang shanghai", "okoy pork siomai"],
        "price":["55", "30", "50", "65", "73", "45", "25", "30", "65", "33", "65", "75"]
    }

    const alcohol={
        "names":[],
        "price":[]
    }

    const dessert={
        "names":[],
        "price":[]
    }

    const pulutan={
        "names":[],
        "price":[]
    }

    

    const Result = () =>{
        let sample = [];
        
            
        if(foods === "maindish"){
            for(let i = 0; i < mainDish.names.length; i++){
                sample.push(mainDish.names[i]);
            }
            return sample;
        }
        
        else if (foods === "alcohol"){
            for(let i = 0; i < alcohol.names.length; i++){
                sample.push(alcohol.names[i]);
            }
            return sample;
        }
        else if (foods === "pulutan"){
            for(let i = 0; i < pulutan.names.length; i++){
                sample.push(pulutan.names[i]);
            }
            return sample;
        }
        else if (foods === "dessert"){
            for(let i = 0; i < dessert.names.length; i++){
                sample.push(dessert.names[i]);
            }
            return sample;
        }
        else if (foods === "appetizer"){
            for(let i = 0; i <appetizer.names.length; i++){
                sample.push(appetizer.names[i]);
            }
            return sample;
        }
    
    }

    return (
        <div style={{color: "white"}}>
            <Result/>
        </div>
    )
}



export default Testing1;