import React,{Component, useState} from 'react'
import './css/menu.css';
import Card from "../components/Card";

import black_Coffee from "../pictures/breakfast/black_Coffee.jpg";
import hot_Chocolate from "../pictures/breakfast/hot_Chocolate.jpg";
import waffle_Blueberries from "../pictures/breakfast/waffle_Blueberries.jpg";
import waffle_Strawberry from "../pictures/breakfast/waffle_Strawberry.jpg";

import atchara from "../pictures/appetizer/atchara.jpg";
import dynamite_Lumpia from "../pictures/appetizer/dynamite_Lumpia.jpg";
import fishball from "../pictures/appetizer/fishball.jpg";
import lumpiang_Shanghai from "../pictures/appetizer/lumpiang_Shanghai.jpg";

import crispy_Pata from "..pictures/main_dish/crispy_Pata.jpg";
import dinuguan from "../pictures/main_dish/dinuguan.jpg";
import karekare from "../pictures/main_dish/karekare.jpg";
import palabok from "../pictures/main_dish/palabok.jpg";
import pancit_Bijon from "../pictures/main_dish/pancit_Bijon.jpg";
import pinapaitan from "../pictures/main_dish/pinapaitan.jpg";

import halo_halo from "../pictures/dessert/halo_halo.jpg";
import kutsinta from "../pictures/dessert/kutsinta.jpg";
import lecheflan from "../pictures/dessert/lecheflan.jpg";
import maizcon_Yelo from "../pictures/dessert/maizcon_Yelo.jpg";

import heineken from "../pictures/drinks/heineken.jpg";
import melon_Juice from "../pictures/drinks/melon_Juice.jpg";
import pineapple_Juice from "../pictures/drinks/pineapple_Juice.jpg";
import red_Horse from "../pictures/drinks/red_Horse.jpg";
import strawberry_Juice from "../pictures/drinks/strawberry_Juice.jpg";
import tiger_Beer from "../pictures/drinks/tiger_Beer.jpg";

import banner from "../client/src/pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';

const MenuDisplay=()=>{
  var label_main_dish=[
    "crispy Pata",
    "dinuguan",
    "karekare",
    "palabok",
    "pancit Bijon",
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
       crispy_Pata,
       dinuguan,
       karekare,
       palabok,
       pancit_Bijon,
       pinapaitan
   ]

   var pictures_dessert = [
       halo_halo,
       kutsinta,
       lecheflan,
       maizcon_Yelo
   ]

   var pictures_breakfast = [
       black_Coffee,
       hot_Chocolate,
       waffle_Blueberries,
       waffle_Strawberry
   ]

   var pictures_drinks =[
       heineken,
       melon_Juice,
       pineapple_Juice,
       red_Horse,
       strawberry_Juice,
       tiger_Beer
   ]

   var pictures_appetizer =[
       atchara,
       dynamite_Lumpia,
       fishball,
       lumpiang_Shanghai   
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
                  <OverFlowX 
                    category="Drinks"
                    label={label_drinks}
                    width="200px" 
                    height="200px" 
                    bgColor="pink"
                    />        picture={pictures_drinks}
         
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
        <MenuDisplay/>
      </section>
    </div>
 

  )
  }


  

export default Menu
