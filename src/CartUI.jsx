import { useState } from "react";
import { useLocation } from "react-router-dom";
import {Link} from 'react-router-dom'

const CartUI = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] }; 
  const [count, setCount] = useState([0,0,0])

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
    
  }

  return (
    <div>
      <p>Cart Items</p>
      <div className='men'>
      {
      cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className='center-cnt'>
            <img src={item.img}   className='men1'  />
            <p className='item-men'>{item.description}</p>
            <p onClick={() => subOne(index)}>-</p>
            <p>{count[index]}</p>
            <p onClick={() => addOne(index)}>+</p>
            <p onClick={() => removeItem(item.id)}>Remove</p>
            <Link to ={'/Signin'}>Buy Now</Link>
          </div>
        ))
      ) : (
        <p>No items</p>
      )}
      </div>
    </div>
    
  );
};

export default CartUI;
