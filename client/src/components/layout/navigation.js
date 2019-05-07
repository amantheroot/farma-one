import React, { Component } from 'react';
import { connect } from "react-redux";

import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import Basket from '../subcomponents/basket';

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};
class ToConnectNavigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/"><img className="nav__logo" src={Logo} alt="logo" /></Link>
        <ul className="nav__links">
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/products">Buy Now</Link></li>
          <li><Link to="/ourteam">Our Team</Link></li>
          <li><Link to="/producers">Our Producers</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="nav__basket">
          <div className="nav__basket--basket">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <div>
              <div>My Basket</div>
              <div>{this.props.cart.length} items</div>
            </div>
          </div>
          <Basket/>
        </div>
      </nav>
    );
  }
}

const Navigation = connect(mapStateToProps)(ToConnectNavigation);

export default Navigation;