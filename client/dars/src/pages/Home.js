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
        <div className='home-h2'>50% OFF EVERY WEEKEND</div>
      </div>   

      <div className='row'>
        <div className='column'>
          <div className='content'>
            <img width="350px" height="250px" src={promo} alt="promo" />
            <img width="350px" height="250px" src={halo_halo} alt="halo halo" />
            <img width="350px" height="250px" src={kinilaw_na_isda} alt="kinilaw na isda" />
          </div>
        </div>
            <h1>Bring your family and friends and try our delicious food!<br/>
                Nakakasigurong MALINIS at SWAK sa bulsa!</h1>
          
        <div className='promo-sale-2'>
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
          <p>All Value Meals come with rice and pancit,
             spring rolls, sauteed vegetables, with soup 
             and small dessert. Party Platters are perfect
             for larger groups.</p>
          <button>ORDER NOW</button>
        </div>
      </div>

      <div className='customer'>
        <div className='home-h2'>WHAT CUSTOMERS SAY</div>

        <div className='parent'>
           <div className='home-child'>
            <img width="300px" height="200px" src={costumer1} alt="costumer1" />
              <div>
                <h3>Tom Jones</h3>
                <p>The food was delicious! a wonderful tour of local
                  specialties with excellent presentation
                  Each course was well balanced, great textures and flavours.</p> 
              </div>
            </div>
            <div className='home-child'>
            <img width="300px" height="200px" src={costumer3} alt="costumer3" />
              <div>
                <h3>Cathy Gomez</h3>
                <p>Someday I will be back to indulge in his amazing
                  gastronomical delight again, Congrats chef. Wish
                  the best for the 3rd star and for making in to #7 
                  on this list.
                </p>
              </div>         
            </div>      
        </div>
      </div>
 


      <footer>
        <div className='footer-content'>
            <h3>Dars Restobar</h3>
            <h4>GOOD FOOD, GOOD MOOD!!<br/></h4>
            <p>True ingredients, true flavors, true passion.
               Good food doesn't need to be complicated.<br/>
               The finest cuisine is close to home, Good Food in a Friendly Place.
              </p>
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
        </div>
      </footer>
     </div>
  
   )
 }


 

export default Home


