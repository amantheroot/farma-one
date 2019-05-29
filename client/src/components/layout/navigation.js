import React, { Component } from 'react';
import { connect } from "react-redux";

import {NavLink} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import LogoShort from "../../assets/images/logo--short.png";
import Basket from '../subcomponents/basket';

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};
class ToConnectNavigation extends Component {
  navToggleClick = e => {
    let menutoggle = document.getElementsByClassName("nav__menutoggle")[0];
    let navlinks = document.getElementsByClassName("nav__links")[0];

    if (menutoggle.classList.value.indexOf("toggled") === -1) {
      menutoggle.classList.add("toggled");
      navlinks.classList.add("linkstoggled");
    } else {
      menutoggle.classList.remove("toggled");
      navlinks.classList.remove("linkstoggled");
    }
  }

  render() {
    return (
      <nav className="navigation">
        <NavLink to="/">
          <img className="nav__logo" src={Logo} alt="logo" />
          <img className="nav__logo--short" src={LogoShort} alt="logo--short" />
        </NavLink>
        <div className="nav__links--container">
          <div className="nav__menutoggle" onClick={this.navToggleClick}>
            <div className="nav__menubar"></div>
          </div>
          <ul className="nav__links">
            <li><NavLink activeClassName="link--active" to="/" exact onClick={this.navToggleClick}>About Us</NavLink></li>
            <li><NavLink activeClassName="link--active" to="/products" onClick={this.navToggleClick}>Buy Now</NavLink></li>
            <li><NavLink activeClassName="link--active" to="/blogs" onClick={this.navToggleClick}>Blogs</NavLink></li>
            <li><NavLink activeClassName="link--active" to="/ourteam" onClick={this.navToggleClick}>Our Team</NavLink></li>
            <li><NavLink activeClassName="link--active" to="/producers" onClick={this.navToggleClick}>Our Producers</NavLink></li>
            <li><NavLink activeClassName="link--active" to="/contact" onClick={this.navToggleClick}>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="nav__basket">
          <div className="nav__basket--basket">
            <i className="fa fa-shopping-basket" aria-hidden="true"></i>
            <div className="nav__basket--info">
              <div>My Basket</div>
              <div>{this.props.cart.length} items</div>
            </div>
            <div className="nav__basket--infonum">{this.props.cart.length}</div>
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