import React, { useState } from 'react'
import './Men.css'
import one from './img/one.jpg'
import five from './img/five.jpg'
import six from './img/six.jpg'
import { Link } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";


const Men = () => {
  const [cart, setCart] = useState([])

  const addCart = (item) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id)
    if (!itemExists) {
      setCart([...cart, item])
    }
   
  }

  const items = [
    { id: 0, img: one, description: 'GRECIILOOKS Shirt for Men ₹1,170' },
    { id: 1, img: five, description: 'The Indian Garage Co Men Regular Fit Shirt ₹1,170' },
    { id: 2, img: six, description: 'Majestic Man Men Small Checkered Slim Fit Cotton Casual Shirt ₹539' },
  ];
  return (
    <div id='men'>
      <div className='sec-top'>
        <p className='ins-hd'>Men </p>
        <p>
          <Link to="/CartUI" state={{ cart }}>
            <BsCart2 /> <span>{cart.length}</span>
          </Link>
        </p>
      </div>
      <div className='men'>
        {
          items.map((item, index) => (
            <div key={item.id} className='center-cnt'>
              <img src={item.img} className='men1' key={index} />

              <p className='item-men'>{item.description}</p>
              <p className='crt' onClick={() => addCart(item)}>Add to Cart</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Men
