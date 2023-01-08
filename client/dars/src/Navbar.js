import React from 'react'
import{Link} from 'react-router-dom'


function Navbar() {
  return (
    <div className="navbar-wrapper">
        <div className='left'>
          <div>icon</div>
        </div>
        <div className='center'>
          <div>
            <Link to="/">Home</Link>
          </div>

          <div>
          <Link to="/menu">Menu</Link>
          </div>

          <div>
          <Link to="/about">About</Link>
          </div>

          <div>
          <Link to="/delivery">Delivery</Link>
          </div>
        </div>
        <div className='right'>
          <div>
          <Link to="/login">Login</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
