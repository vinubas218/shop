import React from 'react'
import './Offer.css'

const Offer = () => {
  const offer = [
    './img/n4.jpg',
    './img/n5.jpg',
    './img/n6.jpg',
  ];

  const offerCont = [
    'LIZORD FAB Women Cotton Printed Anarkali Kurta with Palazzo Pants ₹799',
    'FABNEX kurta set for women ₹799',
    'SKY FAB Women Printed Flared Anarkali Kurta with Pant and Dupatta ₹799',
  ];
  return (
    <div>
      <div className='sec-top'>
        <p className='ins-hd'>Offers</p>
      </div>
      <div className='men'>
        {

          offer.map((img, index) => (
            <div key={index} className='center-cnt'>
              <img src={img} className='women1' key={index} />

              <p className='item-men'>{offerCont[index]}</p>
              <p className='crt'>Add to Cart</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Offer
