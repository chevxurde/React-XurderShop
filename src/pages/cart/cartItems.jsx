import React, { useContext } from 'react'
import { ShopContext } from '../../context/context-shop';
import './cart.css'

export const CartItems = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemsCount } = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={productImage} alt='product'/>
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemsCount(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}
