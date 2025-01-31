import React, { useState, useEffect, useRef } from 'react'
import './Women.css'
import ow from './img/ow.jpg'
import tw from './img/tw.jpg'
import thw from './img/thw.jpg'
import fw from './img/fw.jpg'
import fiw from './img/fiw.jpg'
import sw from './img/sw.jpg'
import sew from './img/sew.jpg'
import eiw from './img/eiw.jpg'
import niw from './img/niw.jpg'
import { CiDeliveryTruck } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Women = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const cartRef = useRef(null)

  const addCart = (item) => {
    const itemExists = cart.some((itemId) => itemId.id === item.id);
    if (!itemExists) {
      const updCart = [...cart, item];
      setCart(updCart);
      setCount((prevCount) => [...prevCount, 1]);
    }
  };

  const addOne = (index) => {
    setCount((prevCount) => {
      const newCount = [...prevCount];
      newCount[index] += 1;
      return newCount
    })
  };

  const toggleCart = () => {
    setVisibility((prev) => !prev)
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

  const delItem = (itemId) => {
    const removeItem = cart.filter((cartItem) => cartItem.id !== itemId);
    setCart(removeItem)
  };

  const handleClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      setVisibility(false);
    }
  };

  useEffect((event) => {


    const listener = (event) => handleClick(event);
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    }
  }, [])

  const women = [
    {
      id: 1,
      img: ow,
      description: 'Anarkali Kurta and Pant Set',
      cost: '₹799'
    },
    {
      id: 2,
      img: tw,
      description: 'Printed Kurta Pant With Dupatta',
      cost: '₹799'
    },
    {
      id: 3,
      img: thw,
      description: 'Cotton Salwar Suit Set',
      cost: '₹1,899'
    },
    {
      id: 4,
      img: fw,
      description: 'Printed Kurta Set',
      cost: '₹699'
    },
    {
      id: 5,
      img: fiw,
      description: 'Rayon Blend Printed Anarkali Set',
      cost: '₹819'
    },
    {
      id: 6,
      img: sw,
      description: 'Flared A-line Kurta Set',
      cost: '₹799'
    },
    {
      id: 7,
      img: sew,
      description: 'Embroidered Straight Kurta Set',
      cost: '₹659'
    },
    {
      id: 8,
      img: eiw,
      description: 'Anarkali Kurta and Pant Set ',
      cost: '₹619'
    },
    {
      id: 9,
      img: niw,
      description: 'Nyra Cut Kurta Set',
      cost: '₹735'
    },
  ];
  return (
    <div id='women'>
      <div className='sec-top'>
        <p className='ins-hd'>Women </p>
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
                    <img src={item.img}  className='cart-imgwomen' />
                    <div>
                      <p className='item-men'>{item.description}</p>
                      <p className='item-men'>{item.cost}</p>
                      <div className='quantity'>
                        <p onClick={() => subOne(index)} className='add-sub'>-</p>
                        <p className='add-sub'>{count[index]}</p>
                        <p onClick={() => addOne(index)} className='add-sub'>+</p>
                        <Link to='/signin' className='lik' >BUY</Link>
                        <div className='del-btn'>
                          <p onClick={() => delItem(item.id)}>
                            <RiDeleteBin6Line />
                          </p>
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
        )
      }
      

      <div className='men'>
        {
          women.map((item, index) => (
            <div key={index} className='center-cnt'>
              <img src={item.img} className='women1' />

              <p className='item-men'>{item.description}</p>
              <p className='item-men'>{item.cost}</p>
              <p className='crt' onClick={() => addCart(item)}>
                <CiDeliveryTruck /> ADD TO CART
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Women
