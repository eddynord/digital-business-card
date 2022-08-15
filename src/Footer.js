import React from 'react';
import ReactDOM from 'react-dom';
import twitter from './img/icons/Twitter Icon.png';
import facebook from './img/icons/Facebook Icon.png';
import instagram from './img/icons/Instagram Icon.png';
import github from './img/icons/GitHub Icon.png';


export default Footer
function Footer() {
    return(
        <footer>
            <div className='social'>
                <ul className='social-links'>
                    <li><a href='#'><img src={twitter}/></a></li>
                    <li><a href='#'><img src={facebook}/></a></li>
                    <li><a href='#'><img src={instagram}/></a></li>
                    <li><a href='#'><img src={github}/></a></li>
                </ul>
            </div>
        </footer>
    )
}
