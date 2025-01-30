'use client'

import { CartContext } from '../../contexts/CartContext'
import React, { useContext } from 'react'

function Cart() {
    const { removeCart, cart, updateQuantity, jameQeymat } = useContext(CartContext)

    return (
        <div className="bg-blue-600 text-white p-6">
            <h1 className='text-center font-bold text-5xl mb-6'>Items in Cart</h1>
            {
                cart.length === 0 ? 
                    <h1 className='text-center text-white'>آیتمی برای  نشان دادن وجود ندارد</h1> :
                    cart.map((product) => (
                        <div key={product.id} className='flex flex-wrap bg-white p-6 rounded-xl w-full mb-4'>
                            <img className='h-48 w-48  rounded-lg' src={product.image}  />

                            <div className="ml-6 flex-1">
                                <h2 className='font-black text-blue-600 text-xl'>{product.title}</h2>
                                <h4 className='font-black text-blue-800 text-lg'>${product.price}</h4>
                                <div className="mt-2 flex items-center">
                                    <input
                                        type='number'
                                        value={product.quantity}
                                        min={1}
                                        className='bg-white text-black p-2 rounded-md w-20'
                                        onChange={(e) => updateQuantity(product.id, Number(e.target.value))}
                                    />
                                    <button 
                                        onClick={() => removeCart(product.id)} 
                                        className='bg-blue-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 ml-4'>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
            }
            <div className="text-center mt-4">
                <h3 className='bg-blue-800 text-white text-2xl py-2 rounded-md'>
                    جمع قیمت: ${jameQeymat().toFixed(1)}
                </h3>
            </div>
        </div>
    )
}

export default Cart
