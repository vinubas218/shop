import React, { useState, useRef, useEffect } from 'react'
import './Kids.css'
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import k1 from './img/k1.jpg'
import k3 from './img/k3.jpg'
import k5 from './img/k5.jpg'
import k2 from './img/k2.jpg'
import k4 from './img/k4.jpg'
import k6 from './img/k6.jpg'
import k7 from './img/k7.jpg'
import k8 from './img/k8.jpg'
import k9 from './img/k9.jpg'

const Kids = () => {
  const [cart, setCart] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const [count, setCount] = useState([]);
  const cartRef = useRef(null)

  const toggleCart = () => {
    setVisibility((prev) => !prev);
  }

  const addCart = (item) => {
    const itemExists = cart.some((itemId) => itemId.id === item.id)
    if (!itemExists) {
      const updCart = [...cart, item];
      setCart(updCart);
      setCount((prevCount) => [...prevCount, 1])
    }
  }

  const addOne = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[index] += 1;
      return newCount;
    })
  };

  const subOne = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      if (newCount > 0) {
        newCount[index] -= 1;
      }
      return newCount;
    })
  };

  const delButton = (itemId) => {
    const delItem = cart.filter((item) => item.id !== itemId)
    setCart(delItem) 
  };

  const handleClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setVisibility(false);
    }
  }

  useEffect((event) => {
    const listener = (event) => handleClick(event);
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [])

  const kidscont = [
    {
      id: 1,
      img: k1,
      description: 'Kids Winter Wear Thermal Suit',
      cost: '₹356'
    },
    {
      id: 2,
      img: k3,
      description: 'Pure Cotton Short Sleeve',
      cost: '₹456'
    },
    {
      id: 3,
      img: k5,
      description: 'Cotton Jacket Jumpsuit',
      cost: '₹390'
    },
    {
      id: 4,
      img: k2,
      description: 'Majenta Floral A-line Cotton Knee Dress',
      cost: '₹700'
    },
    {
      id: 5,
      img: k4,
      description: 'Girls blue Solid Pinafore Denim Dress',
      cost: '₹779'
    },
    {
      id: 6,
      img: k6,
      description: 'Silk Blend Fit and Flare Maxi Dress',
      cost: '₹949'
    },
    {
      id: 7,
      img: k7,
      description: 'Full Sleeve Shirt & denim Jeans',
      cost: '₹1,221'
    },
    {
      id: 8,
      img: k8,
      description: 'Boys printed T-Shirt and Trackpant Set',
      cost: '₹450'
    },
    {
      id: 9,
      img: k9,
      description: 'Cotton Kids Kurta Pyjama for Boys',
      cost: '₹579'
    },
  ];
  return (
    <div id='kids'>
      <div className='sec-top'>
        <p className='ins-hd'>Kids </p>
        <div className='disply' onClick={toggleCart}>
         <BsCart2 />
          <span className='cart-len'>{cart.length}</span>
        </div>
      </div>


      {
        visibility && (
          <div className='cart-dropdown' ref={cartRef}>
            {
              cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className='cart-item'>
                    <img src={item.img} className='cart-imgwomen' />
                    <div>
                      <p className='item-men'>{item.description}</p>
                      <p className='item-men'>{item.cost}</p>
                      <div className='quantity'>
                        <p onClick={() => subOne(index)} className='add-sub'>-</p>
                        <p className='add-sub'>{count[index]}</p>
                        <p onClick={() => addOne(index)} className='add-sub'>+</p>
                        <Link to={'/signin'} className='lik'>BUY</Link>
                        <div className='del-btn'>
                          <p onClick={() => delButton(item.id)}> <RiDeleteBin6Line /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )
                :
                (
                  <p className='empty-cart'>No items</p>
                )
            }
          </div>
        )}

      <div className='men'>
        {

          kidscont.map((item, index) => (
            <div key={index} className='center-cnt'>
              <img src={item.img} className='men1' key={index} />

              {/* <p className='item-men'>{item[index]}</p> */}
              <p className='item-men'>{item.description}</p>
              <p className='item-men'>{item.cost}</p>
              <p className='crt' onClick={() => addCart(item)}>
                <CiDeliveryTruck />
                ADD TO CART</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Kids
