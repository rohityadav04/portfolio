import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

          </ul>
        </article>
        {/* End of Ui/Ux */}
        {/* Web Development start */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

          </ul>
        </article>




        {/* Web Development end */}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            </li>

          </ul>
        </article>


      </div>
    </section>
  )
}

export default Service
