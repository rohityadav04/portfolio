import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <Link to='https://linkedin.com' target="_blank"><BsLinkedin/></Link>
      <Link to='https://github.com' target="_blank"><FaGithub/></Link>
      <Link to='https://linkedin.com' target="_blank"><BsLinkedin/></Link>
     
    </div>
  )
}

export default HeaderSocials
