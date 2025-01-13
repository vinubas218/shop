import React from 'react'
import './Kids.css'

const Kids = () => {
    const kidsimg = [
        './img/k1.jpg',
    
        './img/k3.jpg',
    
        './img/k5.jpg',
    
      ];
      const kidscont = [
        'Generic Kids Winter Wear Thermal Suit Full Sleeves T-Shirt ₹799',
    
        '3BROS Unisex Pure Cotton Short Sleeve ₹799',
    
        'SPAMitude Girls Self Designed Premium Cotton Jacket Jumpsuit Dress ₹799',
    
      ];
  return (
    <div>
      <div className='sec-top'>
          <p className='ins-hd'>Kids </p>
        </div>
        <div className='men'>
          {

            kidsimg.map((img, index) => (
              <div key={index} className='center-cnt'>
                <img src={img} className='men1' key={index} />

                <p className='item-men'>{kidscont[index]}</p>
                <p className='crt'>Add to Cart</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Kids
