import React, { useRef } from 'react'
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRight, AiOutlineShopping, AiOutlineClose } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemoveFromCart } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems)
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Scanning Your Items...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className='cart-modal-wrapper' ref={cartRef}>
      <div className='cart-modal-container'>
        <div className="cart-modal-top">
          <div className="cart-modal-heading">
            <div>
              <span className='cart-modal-header'>Shopping Bag</span>
              <span className='cart-num-items'>({totalQuantities} items)</span>
            </div>
            <button type='button' className='cart-modal-close-button' onClick={() => setShowCart(false)}>
              <AiOutlineClose />  
            </button>
          </div>

          {cartItems.length < 1 && (
            <div className='empty-cart'>
              <AiOutlineShopping size={100} />
              <p>Your Shopping Bag is empty</p>
            </div>
          )}

          <div>
            {cartItems.length >= 1 && cartItems.map((item, index) => (
              <div className='cart-modal-product' key={item._id}>
                <div className='cart-modal-product-image'>
                  <img src={urlFor(item?.image[0])} />
                </div>
                <div className="cart-modal-product-info">
                  <p className="cart-modal-product-name">{item.name}</p>
                  <p className="cart-modal-product-size">Size: </p>
                  <p className="cart-modal-product-quantity">Quantity: 
                    <span className='cart-modal-dec-quantity' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                      <AiOutlineMinus />
                    </span>
                    <span className='cart-modal-product-quantity-number'>{item.quantity}</span>
                    <span className='cart-modal-inc-quantity' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                      <AiOutlinePlus />
                    </span>
                  </p>
                </div>
                <div className="cart-modal-product-pricing">
                  <button type='button' className='cart-modal-delete-product-button'
                  onClick={() => onRemoveFromCart(item)}>
                    <TiDeleteOutline />
                  </button>
                  <div>
                    <p className='cart-modal-product-subtotal'>{item.price}</p>
                    <p className='cart-modal-product-total'>{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {cartItems.length >= 1 && (
          <div className='cart-modal-bottom'>
            <div className='cart-modal-bottom-subtotal'>
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div className="cart-modal-bottom-button-row">
              <Link href='/Cart'>
                <button type='button' className='ancre-button'>
                  Shopping Cart
                </button>
              </Link>
              <button type='button' className='ancre-button add-to-cart-button'
              onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart