'use client'

import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
function Search({ products }) {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState('');

  const filterProduct = products.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-blue-600 p-6 rounded-lg shadow-lg">
      <input
        className='w-full p-4 bg-blue-700 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='جستجو محصول ...' 
      />
<div className="mt-6 grid grid-cols-1 gap-6">
  {filterProduct.length > 0 ? (
    filterProduct.map((product) => (
      <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
        <img className='w-full h-16 rounded-lg mb-4 ' src={product.image} alt={product.title} />
        <h2 className='text-blue-600 font-bold'>{product.title}</h2>
        <p className='text-blue-800 font-semibold'>${product.price}</p>
        <button
        onClick={() => {
          addToCart(product);
          window.alert("محصول به سبد خرید اضافه شد");
        }}
        className='bg-blue-600 text-white w-full py-2 mt-4 hover:bg-blue-700 rounded-md'
      >
        Add to Cart
      </button>
      </div>
    ))
  ) : (
    <h1 className='text-white text-center'>محصولی یافت نشد</h1>
  )}
</div>
    </div>
  )
}

export default Search
