import React, { Component } from 'react';
import { connect } from "react-redux";

import {Link} from "react-router-dom";

import ItemsBasket from "./itemsBasket";

const mapStateToProps = store => {
  return {
    products: store.products,
    cart: store.cart
  };
};

class ToConnectBasket extends Component {
  render() {
    return (
      <div className="basket">
        {this.props.cart.length > 0 ? 
          <div className="basket__basket">
            <ItemsBasket/>
            <Link to="/checkout"><button className="itemsbasket__checkout">CHECKOUT</button></Link>
          </div> 
          : 
          <div className="basket__empty">
            The Basket Is Empty :(
          </div>
        }
      </div>
    );
  }
}

const Basket = connect(mapStateToProps)(ToConnectBasket);

export default Basket;
