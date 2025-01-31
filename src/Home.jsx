import React from 'react'
import './Home.css'
import homeImg from './img/fi.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  const scrollToContact = () => {
    const contactSect = document.getElementById('contact-section');
    if (contactSect) {
      contactSect.scrollIntoView({behavior: 'smooth' })
    }
  };

  return (
    <div id='home'>

      <div className='head'>
        <p className='heading'>The Dress Affair</p>
        <div>
          <nav className='head-items'>
            <Link to="/Men" className='links'>Men</Link>
            <Link to="/Women" className='links'>Women</Link>
            <Link to="/Kids" className='links'>Kids</Link>
            <p className='links' id='contact' onClick={() => scrollToContact()}>Contact</p>

          </nav>
        </div>
        <div className='head-item'>
          <Link to={'/Signin'} className='lnks'>Signin</Link>
         
        </div>
      </div>
      <div className='home'>
        <div className='home-content'>
          <p className='p1'>Welcome to The Dress Affair
            Discover a world where style meets elegance.</p>
          <p className='p2'> At The Dress Affair, we bring you the finest collection of clothing for men, women, and kids. From timeless classics to the latest trends, we have everything to make every occasion special.</p>

          <p className='p3'>Explore our curated selection, enjoy exclusive offers, and let us help you find the perfect outfit for every moment. Step into style—step into The Dress Affair.</p>
        </div>


        <div >
          <img src={homeImg} alt="" className='img' />
        </div>

      </div>
      <div className='contact' id="contact-section">
        <p className='hed'>Contact</p>
        <div className='inp-its'> 
        <input type="text" placeholder='Name' className='ipt'/>
        <input type="text" placeholder='Email' className='ipt'/>
        <textarea className="message-box" placeholder='Type your message...'></textarea>
        <button className='submit-button'>Submit</button>
        </div>
      </div>
      
    <div className='foot'>
      <p>Copyright &copy; 2025</p>
    </div>
    </div>
  )
}

export default Home
