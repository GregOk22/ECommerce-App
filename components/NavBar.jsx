import React from 'react';
import logo from '../assets/ancre-logo.png';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineSearch } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="nav-bar">
      <Link href="/"><img src={logo.src} alt="Ancre Apparel Logo" /></Link>
      <div className='search-bar'>
        <span><AiOutlineSearch /></span>
        <input placeholder='Search'></input>
      </div>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>

      { showCart && <Cart /> }
    </div>
  )
}

export default NavBar