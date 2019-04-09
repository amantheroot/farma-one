import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div>Copyright &copy; {new Date().getFullYear()} AMAN KUMAR</div>
        <div>Design By Abiram Sajeev</div>
      </footer>
    );
  }
}

export default Footer;