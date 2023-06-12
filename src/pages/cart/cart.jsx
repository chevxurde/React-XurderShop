import React, { useContext } from 'react';
import { PRODUCT } from '../../products';
import { ShopContext } from '../../context/context-shop';
import { CartItems } from './cartItems';
import { useNavigate } from 'react-router-dom';
import './cart.css'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {
          PRODUCT.map((product) => {
            if(cartItems[product.id] !== 0){
              return <CartItems data={product} />;
            }
          })
        }
      </div>
      {
        totalAmount > 0 
        && 
        <div className="checkout">
          <p>SubTotal: ${totalAmount}</p>
          <button onClick={() => navigate('/')}> Continue Shopping </button>
          <button> Checkout </button>
        </div>
      }
    </div>
  )
}
