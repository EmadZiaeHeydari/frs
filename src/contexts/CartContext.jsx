
'use client'

import {createContext ,useState } from "react" ; 

export const CartContext = createContext();



 function CartProvider({children}) {
    const [cart , setCart] = useState([]);
 const [search , setSearch] = useState('');
function addToCart(product){
  setCart(prev=>{
  let selectedProduct=  prev.find((item)=>item.id==product.id)
  if(!selectedProduct){
   return [...prev,{...product,quantity:1}]
  }
  else{
   return prev.map(item=>
        item.id ==product.id?
        {...item, quantity:item.quantity+1}:
        item
    )
  }
  }
  )

}
function removeCart (productId){
 setCart(prev=>prev.filter((product)=>product.id!=productId))
}
function updateQuantity (productId,newQuantity){
    setCart(prev=>prev.map(item=>
    item.id==productId?
    {...item,quantity:newQuantity}:
    item
    ))
}
function jameQeymat (){
    let total = 0
    cart.map((item)=>
     total += item.quantity *item.price
    )
    return total 
}


   return(

                <CartContext.Provider value={{addToCart,removeCart,cart,updateQuantity,jameQeymat,search,setSearch}}>
                    {children}
                </CartContext.Provider>
                
   )
}


export default CartProvider





