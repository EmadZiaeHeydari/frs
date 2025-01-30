import React from 'react'
import Product from './Product'
import Search from './Search'
import Comment from './Comment'
import SendComment from './SendCpmment'

function ProductList({ products }) {
  return (
<>
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-white p-6 rounded-xl w-full">
      
    <div className="lg:col-span-1">
        <Search products={products} />
      </div>

      <div className="lg:col-span-3 grid sm:grid-cols-3 gap-6">
  {products.map((product) => (
    <div key={product.id} className="bg-blue-500 p-4 rounded-lg shadow-lg">
      <Product product={product} />
    </div>
  ))}
</div>

    </div>
    <div>
      <SendComment/>
    </div>
    <div>
   <Comment/>
    </div>
    </>
  )
}

export default ProductList;


