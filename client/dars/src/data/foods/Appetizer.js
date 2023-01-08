import React from 'react'


function Appetizer(){
    const appetizer={
       "names":["Atchara", "Dynamite lumpia", "Fishball", "Lumpiang shanghai","Beef empanada",
                "Cheese stick", "Chicharon bulaklak", "Crispy chicken skin", "crispy tenga"],
       
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < appetizer.names.length; i++){
           sample.push(appetizer.names.length[i]);
       }
       return sample;
    }
   
     return (
       <div>
        <Result/>
       </div>
     )
 }

 export default Appetizer