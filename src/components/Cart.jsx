import React, { useEffect, useState } from 'react'
import "./Cart.css"

export const Cart = ({cart , setCart}) => {
    const [total,setTotal]=useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc,curr) => acc+parseFloat(curr.price),0));
    },[cart]);
  return (
    <div className='cart-container'>
        {cart.map((product)=>(
            <div className="cart-product" key={product.id}>
              <div className="img">
                  <img src={product.image_url} alt="image" />
              </div>
              <div className="cart-product-details">
                  <h3>{product.name}</h3>
                  <p>price : {product.price} $</p>
              </div>
            </div>
        ))}
        <h2 className='cart-amnt'>Total Amount : {total} $</h2>

    </div>
  );
}
