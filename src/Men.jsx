import React, { useState, useEffect, useRef } from 'react'
import './Men.css'
import one from './img/one.jpg'
import five from './img/five.jpg'
import six from './img/six.jpg'
import sev from './img/sev.jpg'
import eig from './img/eig.jpg'
import nin from './img/nin.jpg'
import ten from './img/ten.jpg'
import ele from './img/ele.jpg'
import twe from './img/twe.jpg'
import { Link } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoAdd } from "react-icons/io5";
import { GrFormSubtract } from "react-icons/gr";


const Men = () => {
  const [cart, setCart] = useState([])
  const [visibility, setVisibility] = useState(false)
  const cartRef = useRef(null);
  const [count, setCount] = useState([]);

  const toggleCart = () => {
    setVisibility((prev) => !prev);
  }

  const addCart = (item) => {
    const itemExists = cart.some((cartItem) => cartItem.id === item.id) //This checks if the item is already in the cart using its id.
    if (!itemExists) {
      const addedItems = [...cart, item]
      setCart(addedItems)
      // localStorage.setItem("Cart", JSON.stringify(addedItems))
      setCount((prevCount) => [...prevCount, 1])
    }

  }

  const handleClickOutside = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setVisibility(false)
    }
  }

  useEffect(() => {
    // localStorage.setItem("Cart", JSON.stringify(cart));
    // setCount((prevCount) => Array(cart.length).fill(0));
   

    const listener = (event) => handleClickOutside(event);
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  const addOne = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount]
      newCount[index] += 1
      return newCount
    })
  }

  const subOne = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount]
      if (newCount[index] > 0) {
        newCount[index] -= 1
      }
      return newCount
    })  
  }

  const removeItem = (itemId) => {
    const updCart = cart.filter((item) => itemId !== item.id)
    setCart(updCart)

  }

  const items = [
    {
      id: 1,
      img: one,
      
      description: 'Shirt for Men',
      cost: '₹170',
    },
    {
      id: 2,
      img: five,
     
      description: 'Men Regular Fit Shirt',
      cost: '₹470',
    },
    {
      id: 3,
      img: six,
    
      description: ' Slim Fit Cotton Casual Shirt',
      cost: '₹539',
    },
    {
      id: 4,
      img: sev,
      
      description: 'Lightweight Jacket',
      cost: '₹1,099',
    },
    {
      id: 5,
      img: eig,
      
      description: ' Checkered Slim Fit Shirt',
      cost: '₹1,178',
    },
    {
      id: 6,
      img: nin,
     
      description: ' Stripped Slim Fit Shirt',
      cost: '₹479',
    },
    {
      id: 7,
      img: ten,
      
      description: ' Fancy Shirt',
      cost: '₹599',
    },
    {
      id: 8,
      img: ele,
      
      description: ' Superior Craftsmanship Casual Shirt',
      cost: '₹1,439',
    },
    {
      id: 9,
      img: twe,
     
      description: ' Regular Fit T-Shirt',
      cost: '₹549',
    },
  ];

  return (
    <div id='men'>
      <div className='sec-top'>
        <p className='ins-hd'>Men </p>
        <div className='disply' onClick={toggleCart}>
          <BsCart2 />
          <span className='cart-len'>{cart.length}</span>
        </div>
      </div>


      <div>
        {visibility && (
          <div className='cart-dropdown' ref={cartRef}>
            {
              cart.length > 0 ? (
                cart.map((item, index) => (
                  <div key={index} className='cart-item'>
                    <img src={item.img} className='cart-img' />
                    <div >

                      {/* <p className='item-men1'>{item.brand}</p> */}
                      <p className='item-men'>{item.description}</p>
                      <p className='item-men'>{item.cost}</p>

                      <div className='quantity'>
                        <p onClick={() => subOne(index)} className='add-sub'>
                        <GrFormSubtract />
                        </p>
                        <p className='add-sub'>{count[index]}</p>
                        <p onClick={() => addOne(index)} className='add-sub'>
                        <IoAdd />
                        </p>
                        <Link to={'/Signin'} className='lik'>BUY</Link>
                        <div className='del-btn'>
                          <p onClick={() => removeItem(item.id)}>
                            <RiDeleteBin6Line />
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                ))
              ) : (
                <p className='empty-cart'>No items</p>
              )}
          </div>
        )

        }
      </div>



      <div className='men'>
        {
          items.map((item, index) => (
            <div key={item.id} className='center-cnt'>
              <img src={item.img} className='men1' />
              {/* <p className='item-men1'>{item.brand}</p> */}
              <p className='item-men'>{item.description}</p>
              <p className='item-men'>{item.cost}</p>
              <p className='crt' onClick={() => addCart(item)}>
                <CiDeliveryTruck />  ADD TO CART
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Men
