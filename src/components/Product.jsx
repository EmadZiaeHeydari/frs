'use client'

import Link from 'next/link'
import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext';

function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white p-6 rounded-lg pt-7  shadow-lg mb-6 w-64 min-h-lvh border-blue-200 border-4 ">
      <img 
        className='w-full  rounded-lg mb-4' 
        src={product.image} 

      />
      <h2 className='text-blue-500 font-bold text-xl'>{product.title}</h2>
      <p className='text-blue-700 font-extrabold text-lg'>${product.price}</p>

      <button
        onClick={() => {
          addToCart(product);
          window.alert("محصول به سبد خرید اضافه شد");
        }}
        className='bg-blue-600 text-white w-full py-2 mt-4 hover:bg-blue-700 rounded-md'
      >
        Add to Cart
      </button>

      <Link
        className='bg-blue-200 text-black w-full py-2 mt-2 text-center rounded-sm hover:bg-blue-400 block'
        href={`/${product.id}`}
      >
        View More
      </Link>
    </div>
  )
}

export default Product;


