import React from 'react'
import './Head.css'

const Head = () => {

  const scrollToSelection = (id) => {
    const sec = document.getElementById(id)
    if (sec) {
      sec.scrollIntoView({behavior: 'smooth'});
    }
  }
  return (
    <div>
      <div className='head'>
        <p className='heading'>The Dress Affair</p>
        <div className='head-items'>
          <p onClick={() => scrollToSelection('home')}>Home</p>

          <p onClick={() => scrollToSelection('men')}>Men </p>
          <p onClick={() => scrollToSelection('women')}>Women</p>
          <p onClick={() => scrollToSelection('kids')}>Kids</p>
          <p onClick={() => scrollToSelection('newArrivals')}>New Arrivals</p>
          <p onClick={() => scrollToSelection('offers')}>Offers</p>
          <p onClick={() => scrollToSelection('contact')}>Contact</p>

        </div>
      </div>
    </div>
  )
}

export default Head
