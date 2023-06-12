import React, { createContext, useState } from 'react'
import { PRODUCT } from '../products'
export const ShopContext = createContext(null);
const getDafaultCart = ()=> {
    let cart = {}
    for(let i = 1; i < PRODUCT.length+1; i++){
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDafaultCart());
  const getTotalCartAmount = ()=> {
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = PRODUCT.find((product) => product.id === Number(item));
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  }
  const addToCart = (itemId)=> {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
  }
  const removeFromCart = (itemId)=> {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
  }
  const updateCartItemsCount = (newAmount, itemId)=> {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}))
  }
  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemsCount, getTotalCartAmount};
  
  return (
    <ShopContext.Provider value={ contextValue }>
        {props.children}
    </ShopContext.Provider>
  )
}
