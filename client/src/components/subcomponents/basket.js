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
    let subtotal = 0;
    this.props.cart.forEach(item => {
      const product = this.props.products.find(product => product.product_id === item.product_id);
      const productprice = Math.round(product.product_price*item.product_qty*100)/100;
      subtotal += productprice;
    });
    return (
      <div className="basket">
        {this.props.cart.length > 0 ? 
          <div>
            <ItemsBasket/>
            <Link to="/checkout"><button>CHECKOUT</button></Link>`
          </div> 
          : 
          <div>
            The Basket Is Empty :(
          </div>
        }
      </div>
    );
  }
}

const Basket = connect(mapStateToProps)(ToConnectBasket);

export default Basket;
