import React from 'react'
import './Header.css'

import Footer from '../Footer/Footer.js'

const Header = () => {
    return (
        <header>
            <h1 className="Thai-Street">Thai Street</h1>
            <nav>
                <li className="menu">Menu</li>
                <li className="about">About</li>
                <li className="order">Order Online</li>
            </nav>
            <Footer />
        </header>
    )
}

export default Header