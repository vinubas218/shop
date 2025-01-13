import React from 'react'
import './Women.css'

const Women = () => {
    const imgWomen = [
        './img/ow.jpg',
        './img/tw.jpg',
        './img/thw.jpg',
    
      ];
      const contWomen = [
        'Alvami Women Anarkali Kurta and Pant Set with Dupatta ₹799',
        'KLOSIA Women Viscose Printed Kurta Pant With Dupatta Set ₹799',
        'BIBA Women Cotton Salwar Suit Set  ₹1,899',
    
      ];
  return (
    <div>
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
