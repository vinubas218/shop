import React from 'react'
import './Women.css'
import ow from './img/ow.jpg'
import tw from './img/tw.jpg'
import thw from './img/thw.jpg'


const Women = () => {
    const imgWomen = [
        ow,
       tw,
      thw,
    
      ];
      const contWomen = [
        'Alvami Women Anarkali Kurta and Pant Set with Dupatta ₹799',
        'KLOSIA Women Viscose Printed Kurta Pant With Dupatta Set ₹799',
        'BIBA Women Cotton Salwar Suit Set  ₹1,899',
    
      ];
  return (
    <div id='women'>
      <div className='sec-top'>
          <p className='ins-hd'>Women </p>
        </div>
        <div className='men'>
          {

            imgWomen.map((img, index) => (
              <div key={index} className='center-cnt'>
                <img src={img} className='women1' key={index} />

                <p className='item-men'>{contWomen[index]}</p>
                <p className='crt'>Add to Cart</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Women
