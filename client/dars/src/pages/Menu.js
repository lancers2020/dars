import React from 'react'
import Card from "../components/Card";
import roasted_cauliFlower from "../pictures/main_dish/roasted_cauliflower.jpg";
import adobo_mexican from "../pictures/main_dish/adobo_mexican.jpg";
import Lechon_pork from "../pictures/main_dish/lechon_pork.jpg";
import lechon_chicken from "../pictures/main_dish/lechon_chicken_2.jpg";
import pancit_palabok from "../pictures/main_dish/pancit_palabok.jpg";
import sisig from "../pictures/main_dish/sisig.jpg";
import beef_salpicao from "../pictures/main_dish/beef_salpicao.jpg";
import bistek_tagalog from "../pictures/main_dish/bistek_tagalog.jpg";
import bulalo from "../pictures/main_dish/bulalo.jpg";
import crispy_pata from "../pictures/main_dish/crispy_pata.jpg";
import dinuguan from "../pictures/main_dish/dinuguan.jpg";
import ginataang_gulay from "../pictures/main_dish/ginataang_gulay.jpg";
import humba from "../pictures/main_dish/humba.jpg";
import kaldereta from "../pictures/main_dish/kaldereta.jpg";
import inihaw_na_pusit from "../pictures/main_dish/inihaw_na_pusit.jpg";
import kare_kare from "../pictures/main_dish/kare_kare.jpg";
import lechon_kawali from "../pictures/main_dish/lechon_kawali.jpg";
import pancit_guisado from "../pictures/main_dish/pancit_guisado.jpg";
import pinapaitan from "../pictures/main_dish/pinapaitan.jpg";
import pinaputok_na_isda from "../pictures/main_dish/pinaputok_na_isda.jpg";
import sizzling_teriyaki_squid from "../pictures/main_dish/sizzling_teriyaki_squid.jpg";
import sticky_garlic_chicken_wings from "../pictures/main_dish/sticky_garlic_chicken_wings.jpg";
import tostadong_pork_adobo from "../pictures/main_dish/tostadong_pork_adobo.jpg";
import banner from "../pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';



function Menu() {
  var label=[
    "Roasted Cauliflower",
    "Adobo Mexican",
    "Lechon Pork",
    "Lechon Chicken",
    "Pancit Palabok",
    "Sisig",
    "Beef Salpicao",
    "Bistek Tagalog",
    "Bulalo",
    "Crispy Pata",
    "Dinuguan",
    "Ginataang Gulay",
    "Humba",
    "Kalderita",
    "Inihaw na Pusit",
    "Kare-kare",
    "Lechon Kawali",
    "Pancit Guisado",
    "Pinapaitan",
    "Pinaputok na Isda",
    "Sizzling Teriyaki Squid",
    "Sticky Garlic Chicken Wings",
    "Tostadong Pork Adobo"
  ]
  var price = [
    100,
    300,
    455,
    499,
    250,
    155,
    299,
    199,
    355,
    399,
    199,
    55,
    139,
    140,
    355,
    139,
    250,
    299,
    240,
    170,
    125,
    180,
    155
  ]
  var pictures = [
    roasted_cauliFlower,
    adobo_mexican,
    Lechon_pork,
    lechon_chicken,
    pancit_palabok,
    sisig,
    beef_salpicao,
    bistek_tagalog,
    bulalo,
    crispy_pata,
    dinuguan,
    ginataang_gulay,
    humba,
    kaldereta,
    inihaw_na_pusit,
    kare_kare,
    lechon_kawali,
    pancit_guisado,
    pinapaitan,
    pinaputok_na_isda,
    sizzling_teriyaki_squid,
    sticky_garlic_chicken_wings,
    tostadong_pork_adobo
  ]
  return (

    <div>
      <div className='banner'>
          <img src={banner} alt="banner" width="100%" height="100%"/>
      </div>  

      <div className="container" id="navbar">
        <OverFlowX 
          category="Main Dish"
          label={label}
          width="200px" 
          height="200px" 
          bgColor="pink"
          price={price} 
          picture={pictures}
        />
      </div> 
    </div>
 

  )
 } 
 

  

export default Menu
