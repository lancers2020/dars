import React from 'react'
import{Link} from 'react-router-dom'


function Navbar() {
  return (
    <ul>
    <div className="navbar-wrapper">
        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
         <Link to="/menu">Menu</Link>
        </div>

        <div>
         <Link to="/delivery">Delivery</Link>
        </div>

        <div>
         <Link to="/login">Login</Link>
        </div>

        <div>
         <Link to="/about">About</Link>
        </div>
    </div>
    </ul>
  )
}

export default Navbar
