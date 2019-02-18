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
          <li className="about">About</li>
          <li className="order">
                    <a href= "http://www.rhongtiamnyc.com/menu.aspx">Order Online</a>
          </li>
        </nav>
        <Footer />
      </header>
    );
}

export default Header