import React,{Component, useState} from 'react'
import './css/menu.css';
import Card from "../components/Card";

import black_coffee from "../pictures/breakfast/black_coffee.jpg";
import hot_chocolate from "../pictures/breakfast/hot_chocolate.jpg";
import waffle_blueberries from "../pictures/breakfast/waffle_blueberries.jpg";
import waffle_strawberry from "../pictures/breakfast/waffle_strawberry.jpg";

import atchara from "../pictures/appetizer/atchara.jpg";
import dynamite_lumpia from "../pictures/appetizer/dynamite_lumpia.jpg";
import fishball from "../pictures/appetizer/fishball.jpg";
import lumpiang_shanghai from "../pictures/appetizer/lumpiang_shanghai.jpg";

import crispy_pata from "../pictures/main_dish/crispy_pata.jpg";
import dinuguan from "../pictures/main_dish/dinuguan.jpg";
import karekare from "../pictures/main_dish/karekare.jpg";
import palabok from "../pictures/main_dish/palabok.jpg";
import pancit_bijon from "../pictures/main_dish/pancit_bijon.jpg";
import pinapaitan from "../pictures/main_dish/pinapaitan.jpg";

import halo_halo from "../pictures/dessert/halo_halo.jpg";
import kutsinta from "../pictures/dessert/kutsinta.jpg";
import lecheflan from "../pictures/dessert/lecheflan.jpg";
import maizcon_yelo from "../pictures/dessert/maizcon_yelo.jpg";

import heineken from "../pictures/drinks/heineken.jpg";
import melon_juice from "../pictures/drinks/melon_juice.jpg";
import pineapple_juice from "../pictures/drinks/pineapple_juice.jpg";
import red_horse from "../pictures/drinks/red_horse.jpg";
import strawberry_juice from "../pictures/drinks/strawberry_juice.jpg";
import tiger_beer from "../pictures/drinks/tiger_beer.jpg";


import banner from "../pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';
import OverFlowY from './components/OverFlowY';

const MenuDisplay=()=>{
  var label_main_dish=[
    "crispy pata",
    "dinuguan",
    "karekare",
    "palabok",
    "pancit bijon",
    "pinapaitan" 
  ]

  var label_dessert=[
     "halo halo",
     "kutsinta",
     "lecheflan",
     "maizcon Yelo"
  ]

  var label_breakfast=[
        "black Coffee",
        "hot Chocolate",
        "waffle Blueberries",
        "waffle Strawberry"
  ]

    var label_drinks=[
        "heineken",
        "melon Juice",
        "pineapple Juice",
        "red Horse",
        "strawberry Juice",
        "tiger Beer"
    ]

    var label_appetizer=[
        "atchara",
        "dynamite Lumpia",
        "fishball",
        "lumpiang Shanghai"
    ]

    

   var pictures_main_dish = [
       crispy_pata,
       dinuguan,
       karekare,
       palabok,
       pancit_bijon,
       pinapaitan
   ]

   var pictures_dessert = [
       halo_halo,
       kutsinta,
       lecheflan,
       maizcon_yelo
   ]

   var pictures_breakfast = [
       black_coffee,
       hot_chocolate,
       waffle_blueberries,
       waffle_strawberry
   ]

   var pictures_drinks =[
       heineken,
       melon_juice,
       pineapple_juice,
       red_horse,
       strawberry_juice,
       tiger_beer
   ]

   var pictures_appetizer =[
       atchara,
       dynamite_lumpia,
       fishball,
       lumpiang_shanghai   
   ]



  const Breakfast=()=>{
      if(isBreakfast===true){
          return (
              <div
                 style={{}}
              >
                <OverFlowX 
                    category="Breakfast"
                    label={label_breakfast}
                    width="200px" 
                    height="200px" 
                    bgColor="pink"
                    picture={pictures_breakfast}
                 />
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
                  <OverFlowX 
                    category="Appetizer"
                    label={label_appetizer}
                    width="200px" 
                    height="200px" 
                    bgColor="pink"
                    picture={pictures_appetizer}  
                /> 
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
                  <OverFlowX 
                    category="Main Dish"
                    label={label_main_dish}
                    width="200px" 
                    height="200px" 
                    bgColor="pink"
                    picture={pictures_main_dish}
                  />
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
                 <OverFlowX
                  category="Dessert"
                  label={label_dessert}
                  width="200px" 
                  height="200px" 
                  bgColor="pink"
                  picture={pictures_dessert}
                 />
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
                  <OverFlowY 
                    category="Drinks"
                    label={label_drinks}
                    width="100%" 
                    height="200px" 
                    bgColor="pink"
                    picture={pictures_drinks}
                    />
         
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

  const [isDrinks, setIsDrinks] =
  useState(false);

   return (
    <div>
      <div className='menu-navbar-wrapper'>
          <div onClick={()=>{
              setIsBreakfast(true)
              setIsAppetizer(false)
              setIsMainDish(false)
              setIsDessert(false)
              setIsDrinks(false)
          }}>Breakfast</div>

          <div onClick={()=>{
              setIsAppetizer(true)
              setIsBreakfast(false)
              setIsMainDish(false)
              setIsDessert(false)
              setIsDrinks(false)
          }}>Appetizer</div>

          <div onClick={()=>{
              setIsMainDish(true)
              setIsAppetizer(false)
              setIsBreakfast(false)
              setIsDessert(false)
              setIsDrinks(false)
          }}>Main Dish</div>

          <div onClick={()=>{
              setIsDessert(true)
              setIsAppetizer(false)
              setIsMainDish(false)
              setIsBreakfast(false)
              setIsDrinks(false)
          }}>Dessert</div>
    
          <div onClick={()=>{
              setIsDrinks(true)
              setIsAppetizer(false)
              setIsMainDish(false)
              setIsDessert(false)
              setIsBreakfast(false)
          }}>Drinks</div>
      </div>   
      <Display/>
    </div>    
   )
}


function Menu() {
  return (

    <div className='menu-wrapper'>
      <section id="section-1" className='banner'>
        {/* this is the banner */}
      </section>
      <section id='section-2'>
        <div>
          <MenuDisplay/>
        </div>
      </section>
      <section style={{height: "1200px", backgroundColor: "yellow"}}>
        uwu
      </section>
    </div>
 

  )
  }


  

export default Menu
