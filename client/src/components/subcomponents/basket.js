import React, { Component } from 'react';
import { connect } from "react-redux";

import keygen from "../../assets/keygen";

import {Link} from "react-router-dom";

const mapStateToProps = store => {
  return {
    products: store.products,
    cart: store.cart
  };
};

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/products', false, /\.(png|jpe?g|svg)$/));

class ToConnectBasket extends Component {
  render() {
    let subtotal = 0;
    const cartItems = this.props.cart.map(item => {
      const image = images.find(img => {
        return Number.parseInt(img.split('/').pop().split(".").shift()) === item.product_id;
      });
      const productprice = Math.round(item.product_price*item.product_qty*100)/100;
      subtotal += productprice;
      return (
      <li key={keygen(item)}>
        <div>
          <img src={image} alt={`product_image_${item.product_name}`}/>
          <div>
            <span>{item.product_name}</span>
            <span>Qty. {item.product_qty}</span>
            <span>Rs. {productprice}</span>
          </div>
        </div>
      </li>
      );
    });
    return (
      <div className="basket">
        {this.props.cart.length > 0 ? 
          <div>
            <div>
              <ul>
                {cartItems}
              </ul>
            </div>
            <div>
              <div>Sub Total: <span>Rs. {subtotal}</span></div>
              <div>Delivery Charges: <span>**</span></div>
            </div>
            <Link to="/checkout"><button>CHECKOUT</button></Link>`
          </div> 
          : 
          <div>
            The Cart Is Empty :(
          </div>
        }
      </div>
    );
  }
}

const Basket = connect(mapStateToProps)(ToConnectBasket);

export default Basket;
