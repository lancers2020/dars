import React, {Component} from 'react'
import Card from '../components/Card'
import Adobo from '../pictures/adobo_mexican.jpg'
import './css/about.css'


function About() {
  return (
    <div>
      <Card
        picture= {Adobo}
        name= "addie"
        bgColor= "wjite"
        width= "300px"
        height= "350px"
      />
    </div>
  )
}

export default About
