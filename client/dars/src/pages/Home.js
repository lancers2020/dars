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
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from "react-bootstrap"
import batchoy from '../pictures/main_dish/batchoy.jpg'
import spam_silog from "../pictures/breakfast/spam_silog.jpg"
import menudo from "../pictures/main_dish/menudo.jpg"


 function Home(){
   return(
     <div>
      <div className='hero'>
     </div>
      <div className='sale'>
        <h1>50% OFF EVERY WEEKEND</h1>
      </div>   

     <div className='row'>
      <div className='column'>
       <div className='content'>
        <img width="350px" height="250px" src={promo} alt="promo" />
        <img width="350px" height="250px" src={halo_halo} alt="halo halo" />
        <img width="350px" height="250px" src={kinilaw_na_isda} alt="kinilaw na isda" />
     </div>
     </div>
     <div className='promo-sale'>
        <h1>Bring your family and friends and try our delicious food!<br/>
             Nakakasigurong MALINIS at SWAK sa bulsa!</h1>
     </div>   
        
        <div>
          <figure className='position-relative'>
             <img src={batchoy} alt="batchoy" />            
              <figcaption>
                Monday Promo 10% OFF!
              </figcaption>
          </figure>

          <figure className='position-relative'>
             <img src={spam_silog} alt="spam silog" />            
              <figcaption>
                Every Wednesday 15% OFF!
              </figcaption>
          </figure>

          <figure className='position-relative'>
             <img src={menudo} alt="menudo" />            
              <figcaption>
                Try our NEW recipe!
              </figcaption>
          </figure>
        </div>
      
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
    </div>

      <div className='costumer'>
        <h2>WHAT COSTUMERS SAYS</h2>

       <div className='parent'></div>        
         <div className='row'>
          <div className='column'>
           <div className='child'>
            <img width="300px" height="200px" src={costumer1} alt="costumer1" />
             <h3>Tom Jones</h3>
             <p>Lorem ipsum dolor sit amet, conseciscing<br/>
                Lorem ipsum dolor sit amet, conseciscing</p> 
            <img width="300px" height="200px" src={costumer3} alt="costumer3" />
             <h3>Cathy Gomez</h3>
             <p>Lorem ipsum dolor sit amet, conseciscing<br/>
                Lorem ipsum dolor sit amet, conseciscing</p>           
          </div>  
         </div>
        </div>
 


      <footer>
        <div className='footer-content'>
            <h3>Dars Restobar</h3>
            <h4>GOOD FOOD, GOOD MOOD!!<br/></h4>
            <p>Lorem ipsum lorem ipsum lorem<br/>
               Lorem ipsum lorem ipsum lorem ipsum lorem <br/>
               Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum</p>
          </div>
            <ul className='socials'>
              <li><a href="#"><i class="fa fa-facebook">Facebook</i></a></li>
              <li><a href="#"><i class="fa fa-instagram">Instagram</i></a></li>
              <li><a href="#"><i class="fa fa-Twitter">Twitter</i></a></li>
              <li><a href="#"><i class="fa fa-google">Google</i></a></li>
              <li><a href="#"><i class="fa fa-github">Github</i></a></li>
              <li><a href="#"><i class="fa fa-linkedin">Linkedin</i></a></li>
            </ul>
          <div className='footer-bottom'>
           <p className="m-2">All rights reserved {new Date().getFullYear()} Copyright @ <a href="#">Dars Restobar</a> </p>
        
          <div className='footer-menu'>
            <ul class="f-menu">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Menu</a></li>
              <li><a href="">Delivery</a></li>
           </ul>
         </div>
        </div>
       </footer>
     </div>
    </div> 
  
   )
 }


 

export default Home


