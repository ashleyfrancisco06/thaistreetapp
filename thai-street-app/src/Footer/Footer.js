import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <footer>
        <p>
          31 E 21st
          <br />
          New York, NY 10010
          <br />
          Phone: (212) 420-7500
        </p>
        <span>
          <i className="fab fa-facebook-f" />
          <i class="fab fa-instagram" />
          <a href="https://twitter.com/rhongtiam">
            <i class="fab fa-twitter" />
          </a>
        </span>
      </footer>
    );
}

export default Footer