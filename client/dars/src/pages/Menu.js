import React from 'react'
import Card from "../components/Card";
import CauliFlower from "../pictures/cauliflower.jpg";
import adobo_mexican from "../pictures/adobo_mexican.jpg";
import Lechon_pork from "../pictures/lechon_pork.jpg";
import lechon_chicken from "../pictures/lechon_chicken_2.jpg";
import pancit_palabok from "../pictures/pancit_palabok.jpg";
import sisig from "../pictures/sisig.jpg";
import beef_salpicao from "../pictures/beef_salpicao.jpg";
import bistek_tagalog from "../pictures/bistek_tagalog.jpg";
import bulalo from "../pictures/bulalo.jpg";
import crispy_pata from "../pictures/crispy_pata.jpg";
import dinuguan from "../pictures/dinuguan.jpg";
import ginataang_gulay from "../pictures/ginataang_gulay.jpg";
import humba from "../pictures/humba.jpg";
import kaldereta from "../pictures/kaldereta.jpg";
import inihaw_na_pusit from "../pictures/inihaw_na_pusit.jpg";
import kare_kare from "../pictures/kare_kare.jpg";
import lechon_kawali from "../pictures/lechon_kawali.jpg";
import pancit_guisado from "../pictures/pancit_guisado.jpg";
import pinapaitan from "../pictures/pinapaitan.jpg";
import pinaputok_na_isda from "../pictures/pinaputok_na_isda.jpg";
import sizzling_teriyaki_squid from "../pictures/sizzling_teriyaki_squid.jpg";
import sticky_garlic_chicken_wings from "../pictures/sticky_garlic_chicken_wings.jpg";
import tostadong_pork_adobo from "../pictures/tostadong_pork_adobo.jpg";
import banner from "../pictures/banner.jpg";

function Menu() {
  return (

    <div>
      <div className='banner'>
       <div className='container-flex'>
        <div className='img'>
         <div className='center topMargin'>
         <Card height="auto" width="auto" picture={banner}/>
         <div className='banner-title-wrapper mt-5'>
         </div>
        </div>

      <div className="container" id="navbar">
       <div className='container-fluid'>
        <h3>Main Course</h3>
         <Card height="auto" width="300px" name="Cauliflower" bgColor={"violet"} price="100 php" picture={CauliFlower}/>
       </div>
     
      <div className='row'>
       <div className='col-6 sm-4'>
        <Card height="auto" width="300px" name="Adobo mexican" bgColor={"violet"} price="300 php" picture={adobo_mexican}/>      
       </div>
      </div>
    
      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Lechon pork" bgColor={"violet"} price="455 php" picture={Lechon_pork}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Lechon chicken" bgColor={"violet"} price="499 php" picture={lechon_chicken}/> 
      </div>
  
      <div className="col-6 sm-4 center">
       <Card height="auto" width="300px" name="Pancit palabok" bgColor={"violet"} price="250 php" picture={pancit_palabok}/>        
      </div>   
    
      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Sisig" bgColor={"violet"} price="155 php" picture={sisig}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Beef salpicao" bgColor={"violet"} price="299 php" picture={beef_salpicao}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Bistek tagalog" bgColor={"violet"} price="199 php" picture={bistek_tagalog}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Bulalo" bgColor={"violet"} price="355 php" picture={bulalo}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Crispy pata" bgColor={"violet"} price="399 php" picture={crispy_pata}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Dinuguan" bgColor={"violet"} price="199 php" picture={dinuguan}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Ginataang gulay" bgColor={"violet"} price="55 php" picture={ginataang_gulay}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Humba" bgColor={"violet"} price="139 php" picture={humba}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Kaldereta" bgColor={"violet"} price="140 php" picture={kaldereta}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Inihaw na pusit" bgColor={"violet"} price="355 php" picture={inihaw_na_pusit}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Kare-kare" bgColor={"violet"} price="139 php" picture={kare_kare}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Lechon kawali" bgColor={"violet"} price="250 php" picture={lechon_kawali}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Pancit guisado" bgColor={"violet"} price="299 php" picture={pancit_guisado}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="pinapaitan" bgColor={"violet"} price="240 php" picture={pinapaitan}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Pinaputok na isda" bgColor={"violet"} price="170 php" picture={pinaputok_na_isda}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Sizzling teriyaki squid" bgColor={"violet"} price="125 php" picture={sizzling_teriyaki_squid}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Sticky garlic chicken wings" bgColor={"violet"} price="180 php" picture={sticky_garlic_chicken_wings}/>
      </div>

      <div className='col-6 sm-4 center'>
       <Card height="auto" width="300px" name="Tostadong pork adobo" bgColor={"violet"} price="155 php" picture={tostadong_pork_adobo}/>
      </div>

       
    </div> 
    </div>
   </div>
  </div>
</div>

  )
 } 
 

  

export default Menu
