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
import inihaw_na_pusit_with_rice from "../pictures/main_dish/inihaw_na_pusit.jpg";
import kaldereta_with_rice from "../pictures/main_dish/kaldereta_with_rice.jpg";
import kare_kare from "../pictures/main_dish/karekare.jpg";
import lechon_kawali from "../pictures/main_dish/lechon_kawali.jpg";
import palabok from "../pictures/main_dish/palabok.jpg";
import pancit_bijon from "../pictures/main_dish/pancit_bijon.jpg";
import pancit_guisado from "../pictures/main_dish/pancit_guisado.jpg";
import pinapaitan_with_rice from "../pictures/main_dish/pinapaitan_with_rice.jpg";
import pritong_isda_with_rice from "../pictures/main_dish/pritong_isda_with_rice.jpg";
import sinigang_na_baboy_with_rice from "../pictures/main_dish/sinigang_na_baboy_with_rice.jpg";
import sisig_with_rice from "../pictures/main_dish/sisig_with_rice.jpg";
import sizzling_teriyaki_squid_with_rice from "../pictures/main_dish/sizzling_teriyaki_squid_with_rice.jpg";
import tostadong_pork_with_rice from "../pictures/main_dish/tostadong_pork_with_rice.jpg";

import bibingka from "../pictures/dessert/bibingka.jpg";
import biko from "../pictures/dessert/biko.jpg";
import buko_salad from "../pictures/dessert/buko_salad.jpg";
import cassava_cake from "../pictures/dessert/cassava_cake.jpg";
import ginataang_halohalo from "../pictures/dessert/ginataang_halohalo.jpg";
import halo_halo from "../pictures/dessert/halo_halo.jpg";
import kutsinta from "../pictures/dessert/kutsinta.jpg";
import leche_flan from "../pictures/dessert/leche_flan.jpg";
import maiz_con_yelo from "../pictures/dessert/maiz_con_yelo.jpg";
import mamon_cake_cheddar_cheese from "../pictures/dessert/mamon_cake_cheddar_cheese.jpg";
import minatamis_na_saging from "../pictures/dessert/minatamis_na_saging.jpg";
import palitaw from "../pictures/dessert/palitaw.jpg";
import sapin_sapin from "../pictures/dessert/sapin_sapin.jpg";
import suman_malagkit from "../pictures/dessert/suman_malagkit.jpg";
import taho from "../pictures/dessert/taho.jpg";

import almond_milk_coffee from "../pictures/breakfast/almond_milk_coffee.jpg";
import american_coffee from "../pictures/breakfast/american_coffee.jpg";
import black_coffee from "../pictures/breakfast/black_coffee.jpg";
import daing_na_bangus_with_fried_rice from "../pictures/breakfast/daing_na_bangus_with_fried_rice.jpg";
import hot_cappuccino from "../pictures/breakfast/hot_cappuccino.jpg";
import hot_chocolate from "../pictures/breakfast/hot_chocolate.jpg";
import hot_latte from "../pictures/breakfast/hot_latte.jpg";
import hot_milo from "../pictures/breakfast/hot_milo.jpg";
import hot_mocha from "../pictures/breakfast/hot_mocha.jpg";
import longganisa_egg_tuyo_with_rice from "../pictures/breakfast/longganisa_egg_tuyo_with_rice.jpg";
import longganisa_with_rice_and_salted_egg from "../pictures/breakfast/longganisa_with_rice_and_salted_egg.jpg";
import sisig_itlog_with_rice from "../pictures/breakfast/sisig_itlog_with_rice.jpg";
import talong_itlog_with_rice from "../pictures/breakfast/talong_itlog_with_rice.jpg";
import tapsilog from "../pictures/breakfast/tapsilog.jpg";

import absolut_vodka from "../pictures/drinks/absolut_vodka.jpg";
import banana_shake from "../pictures/drinks/banana_shake.jpg";
import bear_beer from "../pictures/drinks/bear_beer.jpg";
import becker from "../pictures/drinks/becker.jpg";
import budlight from "../pictures/drinks/budlight.jpg";
import budweiser from "../pictures/drinks/budweiser.jpg";
import chivas_regal from "../pictures/drinks/chivas_regal.jpg";
import cocacola from "../pictures/drinks/cocacola.jpg";
import corona from "../pictures/drinks/corona.jpg";
import escudo_silver from "../pictures/drinks/escudo_silver.jpg";
import fanta_grapes from "../pictures/drinks/fanta_grapes.jpg";
import fanta from "../pictures/drinks/fanta.jpg";
import ginebra_san_miguel from "../pictures/drinks/ginebra_san_miguel.jpg";
import heineken from "../pictures/drinks/heineken.jpg";
import lemon_juice from "../pictures/drinks/lemon_juice.jpg";
import london_dry_gin from "../pictures/drinks/london_dry_gin.jpg";
import melon_juice from "../pictures/drinks/melon_juice.jpg";
import orange_juice from "../pictures/drinks/orange_juice.jpg";
import pepsi from "../pictures/drinks/pepsi.jpg";
import pineapple_juice from "../pictures/drinks/pineapple_juice.jpg";
import popcola from "../pictures/drinks/popcola.jpg";
import redhorse from "../pictures/drinks/redhorse.jpg";
import sprite from "../pictures/drinks/sprite.jpg";
import strawberry_shake from "../pictures/drinks/strawberry_shake.jpg";
import tanduay_ice from "../pictures/drinks/tanduay_ice.jpg";
import tanduay from "../pictures/drinks/tanduay.jpg";
import tiger_beer from "../pictures/drinks/tiger_beer.jpg";
import watermelon_juice from "../pictures/drinks/watermelon_juice.jpg";

import atchara from "../pictures/appetizer/atchara.jpg";
import beef_empanada from "../pictures/appetizer/beef_empanada.jpg";
import cheese_stick from "../pictures/appetizer/cheese_stick.jpg";
import chicharon from "../pictures/appetizer/chicharon.jpg";
import crispy_tenga from "../pictures/appetizer/crispy_tenga.jpg";
import deep_fried_chicken_skin from "../pictures/appetizer/deep_fried_chicken_skin.jpg";
import dynamite_lumpia from "../pictures/appetizer/dynamite_lumpia.jpg";
import fishball from "../pictures/appetizer/fishball.jpg";
import fried_lumpia from "../pictures/appetizer/fried_lumpia.jpg";
import kwek_kwek from "../pictures/appetizer/kwek_kwek.jpg";
import lumpiang_shanghai from "../pictures/appetizer/lumpiang_shanghai.jpg";
import okoy from "../pictures/appetizer/okoy.jpg";
import pork_siomai from "../pictures/appetizer/pork_siomai.jpg";

import adobong_mani from "../pictures/pulutan/adobong_mani.jpg";
import bagnet from "../pictures/pulutan/bagnet.jpg";
import bopis from "../pictures/pulutan/bopis.jpg";
import buffalo_wings from "../pictures/pulutan/buffalo_wings.jpg";
import gambas from "../pictures/pulutan/gambas.jpg";
import isaw from "../pictures/pulutan/isaw.jpg";
import kilawing_isda_at_baboy from "../pictures/pulutan/kilawing_isda_at_baboy.jpg";
import kilawing_isda from "../pictures/pulutan/kilawing_isda.jpg";
import nilasing_na_hipon from "../pictures/pulutan/nilasing_na_hipon.jpg";
import pigar_pigar from "../pictures/pulutan/pigar_pigar.jpg";
import pork_barbecue from "../pictures/pulutan/pork_barbecue.jpg";
import sizzling_tufo from "../pictures/pulutan/sizzling_tufo.jpg";
import spicy_chicken_wings from "../pictures/pulutan/spicy_chicken_wings.jpg";
import spicy_fried_calamari from "../pictures/pulutan/spicy_fried_calamari.jpg";
import tokwat_baboy from "../pictures/pulutan/tokwat_baboy.jpg";
import banner from "../pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';
import OverFlowY from './components/OverFlowY';

const MenuDisplay=()=>{
  var label_main_dish=[
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

    var label_dessert=[
     "bibingka",
     "biko",
     "buko salad",
     "cassava cake",
     "ginataang halohalo",
     "halo halo",
     "kutsinta",
     "leche flan",
     "maiz con yelo",
     "mamon cake cheddar cheese",
     "minatamis na saging",
     "palitaw",
     "sapin sapin",
     "suman malagkit",
     "taho"
    ]

    var label_breakfast=[
        "almond milk coffee",
        "american coffee",
        "black coffee",
        "daing na bangus with fried rice",
        "hot cappuccino",
        "hot chocolate",
        "hot latte",
        "hot milo",
        "hot mocha",
        "longganisa egg tuyo with rice",
        "longganisa with rice and salted egg",
        "sisig itlog with rice",
        "talong itlog with rice",
        "tapsilog"
    ]

    var label_drinks=[
        "absolut vodka",
        "banana shake",
        "bear beer",
        "becker",
        "budlight",
        "budweiser",
        "chivas regal",
        "cocacola",
        "corona",
        "escudo silver",
        "fanta grapes",
        "fanta",
        "ginebra san miguel",
        "heineken",
        "lemon juice",
        "london dry gin",
        "melon juice",
        "orange juice",
        "pepsi",
        "pineapple juice",
        "popcola",
        "redhorse",
        "sprite",
        "strawberry shake",
        "tanduay ice",
        "tanduay",
        "tiger beer",
        "watermelon juice"
    ]

    var label_appetizer=[
        "atchara",
        "beef empanada",
        "cheese stick",
        "chicharon",
        "crispy tenga",
        "deep fried chicken skin",
        "dynamite lumpia",
        "fishball",
        "fried lumpia",
        "kwek kwek",
        "lumpiang shanghai",
        "okoy",
        "pork siomai"
    ]

    var label_pulutan=[
        "adobong mani",
        "bagnet",
        "bopis", 
        "buffalo wings",
        "gambas",
        "isaw",
        "kilawing isda at baboy",
        "kilawing isda",
        "nilasing na hipon",
        "pigar pigar",
        "pork barbecue",
        "sizzling tufo",
        "spicy chicken wings",
        "spicy fried calamari",
        "tokwat baboy"
    ]

   var pictures_main_dish = [
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

   var pictures_dessert = [
    bibingka,
    biko,
    buko_salad,
    cassava_cake,
    ginataang_halohalo,
    halo_halo,
    kutsinta,
    leche_flan,
    maiz_con_yelo,
    mamon_cake_cheddar_cheese,
    minatamis_na_saging,
    palitaw,
    sapin_sapin,
    suman_malagkit,
    taho
   ]

   var pictures_breakfast = [
    almond_milk_coffee,
    american_coffee,
    black_coffee,
    daing_na_bangus_with_fried_rice,
    hot_cappuccino,
    hot_chocolate,
    hot_latte,
    hot_milo,
    hot_mocha,
    longganisa_egg_tuyo_with_rice,
    longganisa_with_rice_and_salted_egg,
    sisig_itlog_with_rice,
    talong_itlog_with_rice,
    tapsilog
   ]

   var pictures_drinks =[
     absolut_vodka,
     banana_shake,
     bear_beer,
     becker,
     budlight,
     budweiser,
     chivas_regal,
     cocacola,
     corona,
     escudo_silver,
     fanta_grapes,
     fanta,
     ginebra_san_miguel,
     heineken,
     lemon_juice,
     london_dry_gin,
     melon_juice,
     orange_juice,
     pepsi,
     pineapple_juice,
     popcola,
     redhorse,
     sprite,
     strawberry_shake,
     tanduay_ice,
     tanduay,
     tiger_beer,
     watermelon_juice
   ]

   var pictures_appetizer =[
     atchara,
     beef_empanada,
     cheese_stick,
     chicharon,
     crispy_tenga,
     deep_fried_chicken_skin,
     dynamite_lumpia,
     fishball,
     fried_lumpia,
     kwek_kwek,
     lumpiang_shanghai,
     okoy,
     pork_siomai
   ]

   var pictures_pulutan =[
     adobong_mani,
     bagnet,
     bopis,
     buffalo_wings,
     gambas,
     isaw,
     kilawing_isda_at_baboy,
     kilawing_isda,
     nilasing_na_hipon,
     pigar_pigar,
     pork_barbecue,
     sizzling_tufo,
     spicy_chicken_wings,
     spicy_fried_calamari,
     tokwat_baboy
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

  const Pulutan=()=>{
      if(isPulutan===true){
          return (
              <div
                style={{}}
              >
                <OverFlowX 
                    category="Pulutan"
                    label={label_pulutan}
                    width="200px" 
                    height="200px" 
                    bgColor="pink"
                    picture={pictures_pulutan}
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
