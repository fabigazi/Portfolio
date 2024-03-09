import React from 'react'
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

//BEM -> Block Element Modifier

const Navbar = () => {
  return (
    <div>
      <div className='gpt3__navbar'>
        <div className='gpt3__navbar-links'>
          <dev className='gpt3__navbar-links_logo'>
            <img src={logo} alt="logo"/>
          </dev>
        </div>
      </div>
    </div>
  )
}

export default Navbar
