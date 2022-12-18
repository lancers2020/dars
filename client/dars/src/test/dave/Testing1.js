import React from 'react';

function Testing1() {
    const mainDish={
        "names":["roasted cauliflower", "adobo mexican", "lechon pork", "lechon chicken", "pancit palabok", "sisig",
                 "beef salpicao", "bistek tagalog", "bulalo", "crispy pata", "dinuguan", "ginataang gulay",
                 "humba", "kaldereta", "inihaw na pusit", "kare kare", "lechon kawali", "pancit guisado",
                 "pinapaitan", "pinaputok na isda", "sizzling teriyaki squid", "sticky garlic chicken wings", "tostadong pork adobo"],
        "price":["100", "300", "455", "499", "250", "155", "299", "199", "355", "399", "199", "55", "139", "140", "355", "139", "250",
                 "299", "240", "170", "125", "180", "155"]    
    }
    const Result = () =>{
        let sample = [];
        for(let i = 0; i < mainDish.names.length; i++){
            sample.push(mainDish.names[i]);
        }
        return sample;
    }

    return (
        <div style={{color: "white"}}>
            <Result/>
        </div>
    )
}

export default Testing1;