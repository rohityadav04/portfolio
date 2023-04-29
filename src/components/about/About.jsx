import React from 'react'
import './about.css'
import me from '../../assets/Ro9.png'
import { FaAward } from 'react-icons/fa';
import { FiUser, FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="About Image"/>
          </div>
  </div>

  
        <div className="about_content">
  <div className="about_cards">
    <article className='about_card'>
      <FaAward className='about_icon'/>
      <h5>Experience</h5>
      <small>6+ Months</small>
    </article>
    <article className='about_card'>
      <FiUsers className='about_icon'/>
      <h5>Clients</h5>
      <small>2+ </small>
    </article>
    <article className='about_card'>
      <VscFolderLibrary className='about_icon'/>
      <h5>Projects</h5>
      <small>9+ </small>
    </article>
  
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore cupiditate mollitia ipsum quos dolores ipsam, iure consequatur quo vel omnis, excepturi aliquam nulla corrupti labore dolorum a molestias quis.</p>
        <Link to='/contact' className='btn btn-primary'>Let's Talk</Link>
        </div>

      </div>
    </section>
  )
}

export default About
