import React from 'react'
import './Header.css'
import ProductMenu from './ProductMenu'
import Logo from '../Img/alogo.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='GeneralHeader' >
      <div className='SubGeneralHeader'>
        <img src={Logo} alt='' className='LogoDiv' />
        <div className='NavDiv'>
          <div> <ProductMenu /> </div>
          <div>Pricing</div>
          <div>About Us</div>
          <div>Marketplace</div>
          <div>Developers</div>
          <div>Blogs</div>
        </div>
        <Link to='/login'><button className='ButtonDiv'>Login</button></Link>
      </div>
    </div>
  )
}

export default Header
