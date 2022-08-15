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
                    <a href='#'><img src={twitter}/></a>
                    <a href='#'><img src={facebook}/></a>
                    <a href='#'><img src={instagram}/></a>
                    <a href='#'><img src={github}/></a>
                </div>
            </div>
        </footer>
    )
}
