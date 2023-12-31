import React, { useContext } from 'react'
import './shop.css';
import { ShopContext } from '../../context/context-shop';
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className='product'>
        <img src={productImage} alt="product-items" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          Add to cart { cartItemsAmount > 0 && <>({cartItemsAmount})</>}
        </button>
    </div>
  )
}
