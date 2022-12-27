import React, {Component} from 'react'
import Card from '../components/Card'
import './css/about.css'


function About (){
  return(
    <div className="about">
      <h1>About Us</h1>
      <p>Hello, wishes from "name of the page"</p>
      <br/>
      <p>
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
      </p>
      <br/>
      <p>
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
       lorem lorem lorem lorem
      </p>
      <br/>
  
      <h3>Browse through some of our videos</h3>
      <br/>
  
     
  <div className="parent">
    <div className="child">
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/nDpb7_44-RU" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/i20HWCThzzw" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
    </div>
    <div className="child">
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/gjrwVQyKKrk" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
      <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ma2MkUt24Wo" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
    </div>
  </div>
</div>
)}

export default About
