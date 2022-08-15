import React from 'react';
import ReactDOM from 'react-dom';
import hero from './img/hero_image.png';
import email from './img/icons/Icon.png';
import linkedin from './img/icons/linkedin_icon.png';
import './index.css';


export default Header
function Header() {
  return(
    <nav className='header'>
      <div className='hero'>
        <img src={hero} alt="Hero Image"/>
        <div className='info'>
          <h1>Laura Smith</h1>
          <h6>Frontend Developer</h6>
          <small>laurasmith.website</small>
        </div>

        <div className='info-links'>
          <button className='email_btn'><a className='email_link' href='#'><img src={email} href="#" alt="Email Icon"/>Email</a></button>  
          <button className='linkedin_btn'><a className='linkedin_link' href='#'><img src={linkedin} href="#" alt="Linkedin Icon"/>Linkedin</a></button>  
        </div>

      </div>
    </nav>
  )
}


