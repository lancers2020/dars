import React, {Component} from 'react'
import Card from '../components/Card'
import './css/about.css'
import nimels from "../pictures/logo/nimels.jpg"


function About (){
  return(
    <div>
      <div class=" container">
          <img width="100px" height="100px" src={nimels} alt="menu" />
          <div class="about_details">
            <span>About Our Restaurant</span>
            <h2>We Provice Good Quality Food to Your Family!</h2>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

            <br></br>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>

            <button class="btn">Learn More</button>


      </div>




    </div>







      <br/>


      <h3>Browse through some of our videos</h3>
      <div className="parent">
        <div className="child">
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/nDpb7_44-RU" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
          <div><iframe width="560" height="315" src="https://www.youtube.com/embed/i20HWCThzzw" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
        </div>

      </div>

    </div>
  )
}
  
export default About
