import React from 'react'
import CTA from './CTA'
import './header.css';
import img from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Rohit Yadav</h1>
        <h5 className="text-light">MERN Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
        <img src={img} alt='me'/>
        </div>

        <Link to='/contact' className='scroll_down'>Scroll Down</Link>
        </div>
  

    </header>

  )
}

export default Header
