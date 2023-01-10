import React, {Component} from 'react'
import Card from '../components/Card'
import './css/about.css'


function About (){
  return(
    <div className="about">

      <div>
          <div className="container">
              <img src="../pictures/logo/eiliv_aceron.jpg" width= "50px" height= "50px"/> 
          </div>
          <div className="about_details">
            <span>About Our Restaurant</span>
          </div>

          

      </div>



    
      <h3>Browse through some of our videos</h3>
    
  <div className="parent">
    <div className="child">
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/nDpb7_44-RU" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/i20HWCThzzw" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
    </div>

  </div>
</div>
)}

export default About
