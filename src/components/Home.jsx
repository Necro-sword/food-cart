import React, { useState } from 'react'
import { Product } from './Product';
import data from "../assets/Product.json"
import "./Home.css"

export const Home = ({cart , setCart}) => {
    const [products]=useState(data);
   
  return (
    <div className='product-container'>
        {products.map((product)=>
        <Product key={product.id} product={product} cart={cart} setCart={setCart}/>)}


    </div>
  );
}
