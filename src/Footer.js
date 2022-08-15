import React from 'react';
import ReactDOM from 'react-dom';
import twitter from './img/icons/Twitter Icon.png';
import facebook from './img/icons/Facebook Icon.png';
import instagram from './img/icons/Instagram Icon.png';
import github from './img/icons/GitHub Icon.png';


export default Footer
function Footer() {
    return(
        <footer className='footer'>
            <div className='social'>
                <div className='social-links'>
                    <a href='#'><img src={twitter} alt="Twitter Icon" title='Twitter Icon'/></a>
                    <a href='#'><img src={facebook} alt="Facebook Icon" title='Facebook Icon'/></a>
                    <a href='#'><img src={instagram} alt="Instagram Icon" title='Instagram Icon'/></a>
                    <a href='#'><img src={github} alt="Github Icon" title='Github Icon'/></a>
                </div>
            </div>
        </footer>
    )
}
