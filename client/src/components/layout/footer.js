/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__contact">
          <ul>
            <li><a href="https://www.facebook.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></li>
            <li><a href="https://www.twitter.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="https://www.instagram.com" rel="noopener noreferrer" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
          <div>
            <p>Contact Us via Email: <a href="mailto:farmaonein@gmail.com" rel="noopener  noreferrer" target="_blank">farmaonein@gmail.com</a></p>
            <p>or</p>
            <p>Call Us Now at <em>+91 7702066667</em></p>
          </div>
        </div>
        <div className="footer__copyright">
          <div>Copyright &copy; {new Date().getFullYear()} AMAN KUMAR</div>
          <div>Design By Abiram Sajeev</div>
        </div>
      </footer>
    );
  }
}

export default Footer;