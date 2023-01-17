import React,{Component} from 'react'
import Card from '../components/Card'
import MainDish from '../data/MainDish'
import Testing1 from '../test/dave/Testing1'
import Appetizer from '../data/foods/Appetizer'
import Drinks from '../data/foods/Drinks'
import Dessert from '../data/foods/Dessert'
import Breakfast from '../data/foods/Breakfast'
import loginbanner from '../pictures/logo/loginbanner.jpg'
import halo_halo from '../pictures/dessert/halo_halo.jpg'
import kinilaw_na_isda from '../pictures/main_dish/kinilaw_na_isda.jpg'
import promo from '../pictures/logo/promo.jpg'
import costumer1 from '../pictures/logo/costumer1.jpg'
import costumer3 from '../pictures/logo/costumer3.jpg'
import './css/home.css'


 function Home(){
   return(
     <div>
      <div className='hero'>
      </div>
      <div className='row'>
      <div className='column'>
       <div className='content'>
        <img width="350px" height="250px" src={promo} alt="promo" />
        <img width="350px" height="250px" src={halo_halo} alt="halo halo" />
        <img width="350px" height="250px" src={kinilaw_na_isda} alt="kinilaw na isda" />
     </div>
     </div>
     <div className='sale'>
        <h1>PROMO 50% OFF EVERY WEEKEND</h1>
      
     <div className='info'>
       <p>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
        incididunt ut labore et dolore magna aliqua.</p>
        <button>ORDER NOW</button>
     </div>
      <div className='costumer'>
        <h2>WHAT COSTUMERS SAYS</h2>
         <div className='row'>
          <div className='column'>
           <div className='review'>
            <img width="300px" height="200px" src={costumer1} alt="costumer1" />
             <h3>Tom Jones</h3>
             <p>Lorem ipsum dolor sit amet, conseciscing<br/>
                Lorem ipsum dolor sit amet, conseciscing</p> 
           <img width="300px" height="200px" src={costumer3} alt="costumer3" />
            <h3>Cathy Gomez</h3>
            <p>Lorem ipsum dolor sit amet, conseciscing<br/>
               Lorem ipsum dolor sit amet, conseciscing</p> 
           <img width="300px" height="200px" src={costumer1} alt="costumer1" />
           <h3>Tom Jones</h3>
            <p>Lorem ipsum dolor sit amet, conseciscing<br/>
               Lorem ipsum dolor sit amet, conseciscing</p> 
            <img width="300px" height="200px" src={costumer3} alt="costumer3" />
         </div>        
        </div>
       </div>
      </div>
     </div>
    </div> 
   </div>
   )
 }

export default Home


