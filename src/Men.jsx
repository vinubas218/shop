import React from 'react'
import './Men.css'

const Men = () => {

  const image = [
    '/img/one.jpg',


    '/img/five.jpg',
    '/img/six.jpg',

  ];
  const cont = [


    'GRECIILOOKS Shirt for Men ₹1,170',
    'The Indian Garage Co Men Regular Fit Shirt ₹1,170',
    'Majestic Man Men Small Checkered Slim Fit Cotton Casual Shirt ₹539'
  ];
  
  return (
    <div id='men'>
      <div className='sec-top'>
          <p className='ins-hd'>Men </p>
        </div>
        <div className='men'>
          {
            image.map((img, index) => (
              <div key={index} className='center-cnt'>
                <img src={img} className='men1' key={index} />

                <p className='item-men'>{cont[index]}</p>
                <p className='crt'>Add to Cart</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Men
