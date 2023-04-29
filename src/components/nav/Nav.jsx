import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'




const Nav = () => {
  return (
    <nav>
      <NavLink to='/'><AiOutlineHome/></NavLink>
      <NavLink to='/about'><AiOutlineUser/></NavLink>
      <NavLink to='/experience'><BiBook/></NavLink>
      <NavLink to='/services'><RiServiceLine/></NavLink>
      <NavLink to='/contact'><BiMessageSquareDetail/></NavLink>
      
     
    </nav>
  )
}

export default Nav
