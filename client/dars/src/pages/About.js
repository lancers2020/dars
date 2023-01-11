import React, {Component} from 'react'
import Card from '../components/Card'
import './css/about.css'


function About (){
  return(
    <div>
      <div className="container">
         <span>About Our Restaurant</span>
      </div>
      <img width="100px" height="100px" scr="../pictures/logo/menu.jpg" alt="menu" />
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
