import React from 'react';
import './NavBar.css';




export default function Navbar (){
  return (

<nav className="navbar">
  <div className="navbar-left">
    <a href="/" className="logo">
      All Players
    </a>
  </div>
  <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products">Search Player By team</a>
      </li>
      <li>
        <a href="/about">Leader Boards</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div>
</nav>
);
};

