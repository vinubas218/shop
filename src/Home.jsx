import React from 'react'
import './Home.css'
import homeImg from './img/fi.jpg'

const Home = () => {
  return (
    <div id='home'>
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
    </div>
  )
}

export default Home
