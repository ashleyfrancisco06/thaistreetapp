import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import Footer from '../Footer/Footer.js'

const Header = () => {
  return (
    <header>
      <h1 className="Thai-Street">
        <Link to="/">Thai Street</Link>
      </h1>
      <nav>
        <li className="menu">
          <Link to="/menu">Menu</Link>
        </li>
        <li className="about">
          <Link to="/about">About</Link>
        </li>
        <li className="order">
          <a href="https://www.seamless.com/menu/thai-street-31st-e-21st-st--21-new-york/975663">
            Order Online
          </a>
        </li>
      </nav>
      <Footer />
    </header>
  );
}

export default Header