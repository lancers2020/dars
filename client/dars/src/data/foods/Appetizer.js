import React from 'react'


function Appetizer(){
    const appetizer={
       "names":["Atchara", "Dynamite lumpia", "Fishball", "Lumpiang shanghai","Beef empanada",
                "Cheese stick", "Chicharon bulaklak", "Crispy chicken skin", "Crispy tenga"],
       "desc":["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
               "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", 
               "Lorem ipsum dolor sit amet"],
       "price":["10.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php", "9.99 php",]
 
    }
    const Result = () =>{
       let sample = [];
       for(let i = 0; i < appetizer.names.length; i++){
           sample.push(appetizer.names.desc.price.length[i]);
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