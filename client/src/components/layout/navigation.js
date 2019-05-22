import React, { Component } from 'react';
import { connect } from "react-redux";

import {NavLink} from "react-router-dom";

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
        <NavLink to="/"><img className="nav__logo" src={Logo} alt="logo" /></NavLink>
        <ul className="nav__links">
          <li><NavLink activeClassName="link--active" to="/" exact>About Us</NavLink></li>
          <li><NavLink activeClassName="link--active" to="/products">Buy Now</NavLink></li>
          <li><NavLink activeClassName="link--active" to="/blogs">Blogs</NavLink></li>
          <li><NavLink activeClassName="link--active" to="/ourteam">Our Team</NavLink></li>
          <li><NavLink activeClassName="link--active" to="/producers">Our Producers</NavLink></li>
          <li><NavLink activeClassName="link--active" to="/contact">Contact Us</NavLink></li>
        </ul>
        <div className="nav__basket">
          <div className="nav__basket--basket">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <div>
              <div>My Basket</div>
              <div>{this.props.cart.length} items</div>
            </div>
          </div>
          <div className="nav__basket--whitebar"></div>
          <Basket/>
        </div>
      </nav>
    );
  }
}

const Navigation = connect(mapStateToProps)(ToConnectNavigation);

export default Navigation;