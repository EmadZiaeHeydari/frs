import Link from 'next/link'
import React from 'react'

async function ProductDetails({ params }) {
    const { id } = params

    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product = await res.json()

    return (
<div className='bg-blue-600 text-white flex flex-col justify-center items-center p-6 min-h-screen'>
    <img className='w-96 rounded-2xl shadow-2xl shadow-neutral-950' src={product.image}  />
    <h2 className='mt-4 text-center text-blue-300'>{product.description}</h2>
    <h3 className='mt-4 text-center text-blue-500'>{product.rating.rate}</h3>
    <p className='mt-4 text-center rounded-md text-white'>{product.price}</p>
    <Link className='bg-blue-600 text-white w-1/6 justify-center flex rounded-lg py-2 mt-4 hover:bg-blue-700' href={'/'}>Back to Shop</Link>
</div>
    )
}

export default ProductDetails


