import React, {Component} from 'react'
import Card from '../components/Card'
import './css/about.css'
import nimels from "../pictures/logo/nimels.jpg"
import how from "../pictures/logo/how.jpg"
import why from "../pictures/logo/why.jpeg"


function About (){
  return(
    <div>
        <div class="about1-container">
            <img src={nimels} alt="menu" />
            <div class="about_details">
              <span>About Our Restaurant</span>
              <h2>We Provide Good Quality Food to Your Family!</h2>

            <p>With the warm hospitality and energy of a traditional Italian home, we offer family-style service: all dishes 
                are designed for sharing and the food arrives in the middle of the table, as it is prepared.</p>
                <br></br>
            <p> DARS offers seasonally inspired menus featuring the highest filipino desires available from the local peninsula and beyond. 
                Our full raw bar features several different varieties of traditional and rare delicacies.</p>

            <button class="btn">Learn More</button>
        </div>
      </div>

      {/* <div class="about2-container">
          <img src={why} alt="about" />
          <div class="box">
            <div class="icon"><i class="fa fa-search" aria-hidden="true"></i></div>
            <div class="content">
                <h3> Why do we help?</h3>
                <p>This pandemic required the suspension of classes, temporary closure of non-essential businesses and enterprises, setting up of checkpoints at every entry and exit points, and for people to stay home. 
                  These are the things that people need to adjust to and cope with to prevent the spread of Coronavirus or COVID-19.
                  
                  It's hard to go to the market and grocery stores during this pandemic as there are no public transportation going around the locality,
                  unless one has a private vehicle. 
                  Fortunately, DARS INC. promote good nutrition by including fresh varieties of menu in their local areas. </p>
            </div>
          </div>
      </div> */}

       {/* <div class="about-3container"> 
          <img src={how} alt="abut us" />
          <div class="box">
            <div class="icon"><i class="fa fa-search" aria-hidden="true"></i></div>
            <div class="content">
                <h3> How we help</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
          </div>
      </div> */}

      <br/>


      <div className="about-h3">Browse Through Some of Our Videos</div>


      <br/>
      <div className="parent">
        <div className="child">
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/2wN5qpMV5-g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/i20HWCThzzw" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>
      </div>

      







      



    </div>
  )
}
  
export default About
