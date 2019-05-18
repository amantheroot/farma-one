/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'

import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__contact">
          <ul>
            <li><a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" aria-label="Connect with us on facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
            <li><a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank" aria-label="Connect with us on twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank" aria-label="Connect with us on instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
          <ul className="nav__links">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/products">Buy Now</Link></li>
            <li><Link to="/ourteam">Our Team</Link></li>
            <li><Link to="/producers">Our Producers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer__copyright">
          Copyright &copy; {new Date().getFullYear()} Aman Kumar
        </div>
      </footer>
    );
  }
}

export default Footer;