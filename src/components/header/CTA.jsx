import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
      <Link to='' className='btn'>Download CV</Link>
      <Link to='/contact' className='btn btn-primary'>Let's talk</Link>
    </div>
  )
}

export default CTA
