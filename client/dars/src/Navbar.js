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
            <Link className='link_center' to="/">Home</Link>
          </div>

          <div>
            <Link className='link_center' to="/menu">Menu</Link>
          </div>

          <div>
            <Link className='link_center' to="/about">About</Link>
          </div>

          <div>
            <Link className='link_center' to="/delivery">Delivery</Link>
          </div>
        </div>
        <div className='right'>
          <div>
          <Link className='link_right' to="/login">Login</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar
