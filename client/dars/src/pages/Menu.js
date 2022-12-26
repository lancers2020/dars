import React,{Component} from 'react'
import './css/menu.css';
import Card from "../components/Card";
import arroz_caldo from "../pictures/main_dish/arroz_caldo.jpg";
import beef_salpicao from "../pictures/main_dish/beef_salpicao.jpg";
import bistek_tagalog from "../pictures/main_dish/bistek_tagalog.jpg";
import bulalo from "../pictures/main_dish/bulalo.jpg";
import calamares from "../pictures/main_dish/calamares.jpg";
import chicken_inasal from "../pictures/main_dish/chicken_inasal.jpg";
import crispy_pata from "../pictures/main_dish/crispy_pata.jpg";
import crispy_tadyang_ng_baka from "../pictures/main_dish/crispy_tadyang_ng_baka.jpg";
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
import banner from "../pictures/logo/banner.jpg";
import OverFlowX from './components/OverFlowX';
import Testing1 from '../test/sheryl/Testing1';


function Menu() {
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
   beef_salpicao,
   bistek_tagalog,
   bulalo,
   calamares,
   chicken_inasal,
   crispy_pata,
   crispy_tadyang_ng_baka,
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
   sisig_with_rice
  ]
  return (

    <div className='menu-wrapper'>
      <section id="section-1" className='banner'>
        {/* this is the banner */}
      </section>  

      <section id="section-2" className="container">
        <OverFlowX 
          category="Main Dish"
          label={label}
          width="200px" 
          height="200px" 
          bgColor="pink"
          picture={pictures}
        />
      </section> 
      <section id='section-3'>
        <Testing1/>
      </section>
    </div>
 

  )
 } 
 

  

export default Menu
