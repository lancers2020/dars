import React from 'react'
import MainDish from '../data/MainDish'
import Testing1 from '../test/dave/Testing1'
import Appetizer from '../data/foods/Appetizer'
import Drinks from '../data/foods/Drinks'
import Dessert from '../data/foods/Dessert'
import Breakfast from '../data/foods/Breakfast'

function Home() {
  return (
    <div style={{color: "white"}}>
      Home
      <Testing1 foods="appetizer"/>
    </div>
  )
}

export default Home
