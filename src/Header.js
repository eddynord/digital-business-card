import React from 'react';
import ReactDOM from 'react-dom';
import hero from './img/hero_image.png';
import email from './img/icons/Icon.png'
import linkedin from './img/icons/linkedin_icon.png'
import './index.css';


export default Header
function Header() {
  return(
    <nav className='header'>
      <div className='hero'>
        <img src={hero} alt="Hero Image"/>
        <div className='info'>
          <h1>Laura Smith</h1>
          <span>Frontend Developer</span>
          <small>laurasmith.website</small>
        </div>

        <div className='info-links'>
          <a href='#'><img href={email}/>Email</a>
          <a href='#'><img href={email}/>Linkedin</a>
        </div>

      </div>
    </nav>
  )
}


