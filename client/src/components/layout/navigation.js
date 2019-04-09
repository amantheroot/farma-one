import React, { Component } from 'react';
import { connect } from "react-redux";

import {Link} from "react-router-dom";

import Logo from "../../assets/images/logo.svg";
import Basket from "../../assets/images/basket.svg";

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
          <img className="nav__logo" src={Logo} alt="logo" />
          <div className="nav__search">
            <input type="text" placeholder="Search For Products..." />
            <button>
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <div className="nav__basket">
            <img className="nav__basket--logo" src={Basket} alt="basket" />
            <div>
              <div>My Basket</div>
              <div>{this.props.cart.length} items</div>
            </div>
          </div>
          <div className="nav__login">
            <button>LOGIN</button> | <button>SIGN UP</button>
          </div>
        </div>
        <div className="nav__links">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/vegetables">VEGETABLES</Link></li>
            <li><Link to="/fruits">FRUITS</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

const Navigation = connect(mapStateToProps)(ToConnectNavigation);

export default Navigation;