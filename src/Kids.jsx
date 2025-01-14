import React from 'react'
import './Kids.css'
import k1 from './img/k1.jpg' 
import k3 from './img/k3.jpg' 
import k5 from './img/k5.jpg' 
const Kids = () => {
    const kidsimg = [
        k1,
    
        k3,
    
     k5
    
      ];
      const kidscont = [
        'Generic Kids Winter Wear Thermal Suit Full Sleeves T-Shirt ₹799',
    
        '3BROS Unisex Pure Cotton Short Sleeve ₹799',
    
        'SPAMitude Girls Self Designed Premium Cotton Jacket Jumpsuit Dress ₹799',
    
      ];
  return (
    <div id='kids'>
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
