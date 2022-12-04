import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Delivery from './pages/Delivery'
import Login from './pages/Login'
import About from './pages/About'
import './App.css'


function App() {
  return (
    <div>
       <Router>
          <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}/> 
             <Route path='/menu' element={<Menu/>}/> 
             <Route path='/delivery' element={<Delivery/>}/> 
             <Route path='/login' element={<Login/>}/> 
             <Route path='/about' element={<About/>}/>         
          </Routes>
       </Router>
    </div>
  )
}

export default App
