import React from 'react'
import './NewArrivals.css'
import n1 from './img/n1.jpg'
import n2 from './img/n2.jpg'
import n3 from './img/n3.jpg'

const NewArrivals = () => {
    const newimg = [
        n1,
        n2,
        n3,
    
      ];
      const newCont = [
        'LIZORD FAB Women Cotton Printed Anarkali Kurta with Palazzo Pants ₹799',
        'FABNEX kurta set for women ₹799',
        'SKY FAB Women Printed Flared Anarkali Kurta with Pant and Dupatta ₹799',
    
      ];
  return (
    <div id='newArrivals'>
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
