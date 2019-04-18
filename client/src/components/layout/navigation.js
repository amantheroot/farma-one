import React, { Component } from 'react';
import { connect } from "react-redux";

import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};
class ToConnectNavigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <div className="nav__header">
          <Link to="/"><img className="nav__logo" src={Logo} alt="logo" /></Link>
          <div className="nav__basket">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <div>
              <div>My Basket</div>
              <div>{this.props.cart.length} items</div>
            </div>
          </div>
        </div>
        <div className="nav__links">
          <ul>
            <li><Link to="/products">Buy Now</Link></li>
            <li><Link to="/producers">Our Producers</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const Navigation = connect(mapStateToProps)(ToConnectNavigation);

export default Navigation;