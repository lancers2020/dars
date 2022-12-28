import React,{Component, useState} from 'react'
import './css/menu.css';
import Card from "../components/Card";
import arroz_caldo from "../pictures/main_dish/arroz_caldo.jpg";
import beef_salpicao_with_rice from "../pictures/main_dish/beef_salpicao_with_rice.jpg";
import bistek_tagalog from "../pictures/main_dish/bistek_tagalog.jpg";
import bulalo_with_rice from "../pictures/main_dish/bulalo_with_rice.jpg";
import calamares_with_rice from "../pictures/main_dish/calamares_with_rice.jpg";
import chicken_inasal_with_rice from "../pictures/main_dish/chicken_inasal_with_rice.jpg";
import crispy_pata_with_rice from "../pictures/main_dish/crispy_pata_with_rice.jpg";
import crispy_tadyang_ng_baka_with_rice from "../pictures/main_dish/crispy_tadyang_ng_baka_with_rice.jpg";
import dinuguan_with_rice from "../pictures/main_dish/dinuguan_with_rice.jpg";
import garlic_chicken_wings_with_rice from "../pictures/main_dish/garlic_chicken_wings_with_rice.jpg";
import ginataang_gulay_with_rice from "../pictures/main_dish/ginataang_gulay_with_rice.jpg";
import humba_with_rice from "../pictures/main_dish/humba_with_rice.jpg";
import inihaw_na_liempo_with_rice from "../pictures/main_dish/inihaw_na_liempo_with_rice.jpg";
import inihaw_na_pusit_with_rice from "../pictures/main_dish/inihaw_na_pusit_with_rice.jpg";
import kaldereta_with_rice from "../pictures/main_dish/kaldereta_with_rice.jpg";
import kare_kare from "../pictures/main_dish/kare_kare.jpg";
import lechon_kawali from "../pictures/main_dish/lechon_kawali.jpg";
import palabok from "../pictures/main_dish/palabok.jpg";
import pancit_bijon from "../pictures/main_dish/pancit_bijon.jpg";
import pancit_guisado from "../pictures/main_dish/pancit_guisado.jpg";
import pinapaitan_with_rice from "../pictures/main_dish/pinapaitan_with_rice.jpg";
import pritong_isda_with_rice from "../pictures/main_dish/pritong_isda_with_rice.jpg";
import sinigang_na_baboy_with_rice from "../pictures/main_dish/sinigang_na_baboy_with_rice.jpg";
import sisig_with_rice from "../pictures/main_dish/sisig_with_rice.jpg";
import sizzling_teriyaki_squid_with_rice from "../pictures/main_dish/sizzling_teriyaki_squid_with_rice";
import tostadong_pork_with_rice from "../pictures/main_dish/tostadong_pork_with_rice";
import banner from "../pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';

const MenuDisplay=()=>{
  var label=[
    "arroz caldo",
    "beef salpicao",
    "bistek tagalog",
    "bulalo",
    "calamares",
    "chicken inasal",
    "crispy pata",
    "crispy tadyang ng baka",
    "dinuguan with rice",
    "garlic chicken wings with rice",
    "ginataang gulay with rice",
    "humba with rice",
    "inihaw na liempo with rice",
    "inihaw na pusit with rice",
    "kaldereta with rice",
    "kare kare",
    "lechon kawali",
    "palabok",
    "pancit bijon",
    "pancit guisado",
    "pinapaitan with rice",
    "pritong isda with rice",
    "sinigang na baboy with rice",
    "sisig with rice"
   ]
   
   var pictures = [
    arroz_caldo,
    beef_salpicao_with_rice,
    bistek_tagalog,
    bulalo_with_rice,
    calamares_with_rice,
    chicken_inasal_with_rice,
    crispy_pata_with_rice,
    crispy_tadyang_ng_baka_with_rice,
    dinuguan_with_rice,
    garlic_chicken_wings_with_rice,
    ginataang_gulay_with_rice,
    humba_with_rice,
    inihaw_na_liempo_with_rice,
    inihaw_na_pusit_with_rice,
    kaldereta_with_rice,
    kare_kare,
    lechon_kawali,
    palabok,
    pancit_bijon,
    pancit_guisado,
    pinapaitan_with_rice,
    pritong_isda_with_rice,
    sinigang_na_baboy_with_rice,
    sisig_with_rice,
    sizzling_teriyaki_squid_with_rice,
    tostadong_pork_with_rice
   ]

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
                  <OverFlowX 
                    category="Main Dish"
                    label={label}
                    width="200px" 
                    height="200px" 
                    bgColor="pink"
                    picture={pictures}
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
      <div className='menu-navbar-wrapper'>
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
