import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
       <nav className='Header'>
           <img src={logo} alt="" />
           <div>
               <a href="/shop">Shop</a>
               <a href="/orders">Order</a>
               <a href="/Inventory">Inventory</a>
               <a href="/About">About</a>
           </div>
       </nav>
    );
};

export default Header;