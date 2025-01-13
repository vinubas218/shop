import React from 'react'
import './NewArrivals.css'

const NewArrivals = () => {
    const newimg = [
        './img/n1.jpg',
        './img/n2.jpg',
        './img/n3.jpg',
    
      ];
      const newCont = [
        'LIZORD FAB Women Cotton Printed Anarkali Kurta with Palazzo Pants ₹799',
        'FABNEX kurta set for women ₹799',
        'SKY FAB Women Printed Flared Anarkali Kurta with Pant and Dupatta ₹799',
    
      ];
  return (
    <div>
      <div className='sec-top'>
        <p className='ins-hd'>New Arrivals</p>
      </div>
      <div className='men'>
        {

          newimg.map((img, index) => (
            <div key={index} className='center-cnt'>
              <img src={img} className='women1' key={index} />

              <p className='item-men'>{newCont[index]}</p>
              <p className='crt'>Add to Cart</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default NewArrivals
