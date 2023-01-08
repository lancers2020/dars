import React,{Component, useState} from 'react'
import './css/menu.css';
import Card from "../components/Card";

import black_coffee from "../pictures/breakfast/black_coffee.jpg";
import hot_chocolate from "../pictures/breakfast/hot_chocolate.jpg";
import waffle_blueberries from "../pictures/breakfast/waffle_blueberries.jpg";
import waffle_strawberry from "../pictures/breakfast/waffle_strawberry.jpg";
import daing_with_rice from "../pictures/breakfast/daing_with_rice.jpg";
import hot_milo from "../pictures/breakfast/hot_milo.jpg";
import hot_mocha from "../pictures/breakfast/hot_mocha.jpg";
import longganisa_with_rice from "../pictures/breakfast/longganisa_with_rice.jpg";
import tocino_with_rice from "../pictures/breakfast/tocino_with_rice.jpg";

import atchara from "../pictures/appetizer/atchara.jpg";
import dynamite_lumpia from "../pictures/appetizer/dynamite_lumpia.jpg";
import fishball from "../pictures/appetizer/fishball.jpg";
import lumpiang_shanghai from "../pictures/appetizer/lumpiang_shanghai.jpg";
import beef_empanada from "../pictures/appetizer/beef_empanada.jpg";
import cheese_stick from "../pictures/appetizer/cheese_stick.jpg";
import chicharon_bulaklak from "../pictures/appetizer/chicharon_bulaklak.jpg";
import crispy_chicken_skin from "../pictures/appetizer/crispy_chicken_skin.jpg";
import crispy_tenga from "../pictures/appetizer/crispy_tenga.jpg";

import crispy_pata from "../pictures/main_dish/crispy_pata.jpg";
import dinuguan from "../pictures/main_dish/dinuguan.jpg";
import karekare from "../pictures/main_dish/karekare.jpg";
import palabok from "../pictures/main_dish/palabok.jpg";
import pancit_bijon from "../pictures/main_dish/pancit_bijon.jpg";
import pinapaitan from "../pictures/main_dish/pinapaitan.jpg";
import inihaw_na_pusit from "../pictures/main_dish/inihaw_na_pusit.jpg";
import lechon_kawali from "../pictures/main_dish/lechon_kawali.jpg";
import pritong_isda from "../pictures/main_dish/pritong_isda.jpg";

import halo_halo from "../pictures/dessert/halo_halo.jpg";
import kutsinta from "../pictures/dessert/kutsinta.jpg";
import lecheflan from "../pictures/dessert/lecheflan.jpg";
import maizcon_yelo from "../pictures/dessert/maizcon_yelo.jpg";
import bibingka  from "../pictures/dessert/bibingka.jpg";
import biko from "../pictures/dessert/biko.jpg";
import buko_salad from "../pictures/dessert/buko_salad.jpg";
import ginataang_halohalo from "../pictures/dessert/ginataang_halohalo.jpg";
import minatamis_na_saging from "../pictures/dessert/minatamis_na_saging.jpg";

import heineken from "../pictures/drinks/heineken.jpg";
import melon_juice from "../pictures/drinks/melon_juice.jpg";
import pineapple_juice from "../pictures/drinks/pineapple_juice.jpg";
import red_horse from "../pictures/drinks/red_horse.jpg";
import strawberry_juice from "../pictures/drinks/strawberry_juice.jpg";
import tiger_beer from "../pictures/drinks/tiger_beer.jpg";
import coca_cola from "../pictures/drinks/coca_cola.jpg";
import corona from "../pictures/drinks/corona.jpg";
import lemon_juice from "../pictures/drinks/lemon_juice.jpg";

import banner from "../pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';
import OverFlowY from './components/OverFlowY';

const MenuDisplay=()=>{
  var label_main_dish=[
    "Crispy pata",
    "Dinuguan",
    "Kare kare",
    "Palabok",
    "Pancit bijon",
    "Pinapaitan",
    "Inihaw na pusit",
    "Lechon kawali",
    "pritong isda" 
  ]

  var label_dessert=[
     "Halo halo",
     "Kutsinta",
     "Lecheflan",
     "Maiz con Yelo",
     "Bibingka",
     "Biko",
     "Buko salad",
     "Ginataang halo halo",
     "Minatamis na saging"
  ]

  var label_breakfast=[
        "Black Coffee",
        "Hot Chocolate",
        "Waffle blueberries",
        "Waffle strawberry",
        "Daing with rice",
        "Hot milo",
        "Hot mocha",
        "Longganisa with rice",
        "Tocino with rice"
  ]

  var label_drinks=[
      "Heineken",
      "Melon Juice",
      "Pineapple Juice",
      "Red Horse",
      "Strawberry Juice",
      "Tiger Beer",
      "Coca cola",
      "Corona",
      "Lemon juice"
  ]

  var label_appetizer=[
      "Atchara",
      "Dynamite lumpia",
      "Fishball",
      "Lumpiang shanghai",
      "Beef empanada",
      "Cheese stick",
      "Chicharon bulaklak",
      "Crispy chicken skin",
      "crispy tenga"
  ]

    

  var pictures_main_dish = [
      crispy_pata,
      dinuguan,
      karekare,
      palabok,
      pancit_bijon,
      pinapaitan,
      inihaw_na_pusit,
      lechon_kawali,
      pritong_isda

  ]

  var pictures_dessert = [
      halo_halo,
      kutsinta,
      lecheflan,
      maizcon_yelo,
      bibingka,
      biko,
      buko_salad,
      ginataang_halohalo,
      minatamis_na_saging
  ]

  var pictures_breakfast = [
      black_coffee,
      hot_chocolate,
      waffle_blueberries,
      waffle_strawberry,
      daing_with_rice,
      hot_milo,
      hot_mocha,
      longganisa_with_rice,
      tocino_with_rice
  ]

  var pictures_drinks =[
      heineken,
      melon_juice,
      pineapple_juice,
      red_horse,
      strawberry_juice,
      tiger_beer,
      coca_cola,
      corona,
      lemon_juice
  ]

  var pictures_appetizer =[
      atchara,
      dynamite_lumpia,
      fishball,
      lumpiang_shanghai,
      beef_empanada,
      cheese_stick,
      chicharon_bulaklak,
      crispy_chicken_skin,
      crispy_tenga   
  ]

  var prices = [
    20, 34, 200, 45, 17, 58, 39, 159, 310
  ]

  var description = "lorem uwu ipsum uwu dolor uwu uwu uwuuuuuuuuuu";

  var color = "white";

  const Breakfast=()=>{
      if(isBreakfast===true){
          return (
              <div
                 style={{}}
              >
                <OverFlowY 
                    category="Breakfast"
                    label={label_breakfast}
                    width="200px" 
                    height="200px" 
                    bgColor="#850000"
                    picture={pictures_breakfast}
                    price={prices}
                    description={description}
                    color={color}
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
                  <OverFlowY 
                    category="Appetizer"
                    label={label_appetizer}
                    width="200px" 
                    height="200px" 
                    bgColor="#850000"
                    picture={pictures_appetizer}  
                    price={prices}
                    description={description}
                    color={color}
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
                  <OverFlowY 
                    category="Main Dish"
                    label={label_main_dish}
                    width="200px" 
                    height="200px" 
                    bgColor="#850000"
                    picture={pictures_main_dish}
                    price={prices}
                    description={description}
                    color={color}
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
                 <OverFlowY
                  category="Dessert"
                  label={label_dessert}
                  width="200px" 
                  height="200px" 
                  bgColor="#850000"
                  picture={pictures_dessert}
                  price={prices}
                  description={description}
                  color={color}
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
                    bgColor="#850000"
                    picture={pictures_drinks}
                    price={prices}
                    description={description}
                    color={color}
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
      <section id="section-1">
        {/* this is the banner */}
        <div className='banner'></div>
      </section>
      <section id='section-2'>
        <div>
          <MenuDisplay/>
        </div>
      </section>
    </div>
 

  )
  }


  

export default Menu
