import React, { Component } from 'react';
import { connect } from "react-redux";

import {changeCartItem, removeCartItem} from "../../actions/cartActions";

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
  qtyInc = (item) => {
    this.props.dispatch(changeCartItem({product_id: item.product_id, product_qty: item.product_qty + 1}));
  }
  qtyDec = (item) => {
    const qty = item.product_qty;
    if (qty > 1) {
      this.props.dispatch(changeCartItem({product_id: item.product_id, product_qty: qty - 1}));
    } else {
      this.props.dispatch(removeCartItem(item.product_id));
    }
  }
  itemRemove = (product_id) => {
    this.props.dispatch(removeCartItem(product_id));
  }
  render() {
    let subtotal = 0;
    const cartItems = this.props.cart.map(item => {
      const product = this.props.products.find(product => product.product_id === item.product_id);
      console.log(product);
      const image = images.find(img => {
        return Number.parseInt(img.split('/').pop().split(".").shift()) === item.product_id;
      });
      const productprice = Math.round(product.product_price*item.product_qty*100)/100;
      subtotal += productprice;
      return (
      <li key={keygen(item)}>
        <div>
          <img src={image} alt={`product_image_${product.product_name}`}/>
          <div>
            <span>{product.product_name}</span>
            <div>
              <button onClick={() => this.qtyDec(item)}>−</button>
              <span>{item.product_qty}</span>
              <button onClick={() => this.qtyInc(item)}>+</button>
            </div>
            <span>Rs. {productprice}</span>
          </div>
          <button onClick={() => this.itemRemove(item.product_id)}>X</button>
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
