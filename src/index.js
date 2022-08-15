import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import About from './About'
import Interests from './interests';
import Footer from './Footer';





function Card() {
  return (
    <div className='card'>
      <div className='card-content'>
        <Header/>
        <About/>
        <Interests/>
      </div>
      
      <Footer/>
    </div>
  )
}
    
    
    



ReactDOM.createRoot(document.getElementById('root')).render(<Card/>);


