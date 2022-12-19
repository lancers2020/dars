import React from 'react'
import Foods from '../data/Foods'
import Testing1 from '../test/dave/Testing1'
import Appetizer from '../data/foods/Appetizer'
import Alcohol from '../data/foods/Alcohol'
import Dessert from '../data/foods/Dessert'
import Pulutan from '../data/foods/Pulutan'

function Home() {
  return (
    <div style={{color: "white"}}>
      Home
      <Testing1 foods="appetizer"/>
    </div>
  )
}

export default Home
