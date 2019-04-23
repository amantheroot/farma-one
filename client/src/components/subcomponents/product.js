import React, { Component } from 'react';
import { connect } from "react-redux";

import {changeCartItem, addCartItem, removeCartItem} from "../../actions/cartActions";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/products', false, /\.(png|jpe?g|svg)$/));
class toConnectProduct extends Component {
  inputClass = () => {
    let classname = '';
    if (this.itemInCartCheck()) {
      classname += " inCart"
    }
    return classname;
  }
  qtyChangedClass = () => {
    const {qtyinput} = this.refs;
    qtyinput.classList.add('qtyChanged');
  }
  qtyResetClass = () => {
    const {qtyinput} = this.refs;
    qtyinput.className = this.inputClass();
  }
  qtyChange = e => {
    const regex = new RegExp(/^\d+$/);
    if (!regex.test(e.key)) {
      e.preventDefault();
    } else {
      this.qtyChangedClass();
    }
  }
  qtySet = () => {
    const cartItem = this.itemInCartCheck();
    if (!cartItem) {
      return 1;
    }
    return cartItem.product_qty;
  }
  qtyInc = () => {
    const qtyvalue = Number.parseInt(this.refs.qtyinput.value);
    this.refs.qtyinput.value = qtyvalue + 1;
    this.qtyChangedClass();
  }
  qtyDec = () => {
    const qtyvalue = Number.parseInt(this.refs.qtyinput.value);
    if (qtyvalue > 0) {
      this.refs.qtyinput.value = qtyvalue - 1;
      this.qtyChangedClass();
    }
  }
  itemInCartCheck = () => {
    const cartItem = this.props.cart.find(crt => crt.product_id === this.props.product.product_id);
    return cartItem;
  }
  addItem = () => {
    const product_qty = Number.parseInt(this.refs.qtyinput.value);
    if (product_qty > 0) {
      this.props.dispatch(addCartItem({product_id: this.props.product.product_id, product_qty}));
    }
    this.qtyResetClass();
  }
  changeItem = () => {
    const product_qty = Number.parseInt(this.refs.qtyinput.value);
    if (product_qty > 0) {
      this.props.dispatch(changeCartItem({product_id: this.props.product.product_id, product_qty}));
    } else if (product_qty === 0) {
      this.props.dispatch(removeCartItem(this.props.product.product_id));
    }
    this.qtyResetClass();
  }
  render() {
    const image = images.find(img => {
      return Number.parseInt(img.split('/').pop().split(".").shift()) === this.props.product.product_id;
    });
    return (
      <div className="product">
        <div>
          <header className={this.itemInCartCheck() ? 'inCart' : ''}>{this.props.product.product_name}{this.itemInCartCheck() ? ' (in basket)' : ''}</header>
          <div className="product__image">
            <img src={image} alt={`product_image_${this.props.product.product_name.split(' ').join('_')}`} />
          </div>
          <div className="product__price">Rs. {this.props.product.product_price} per kg</div>
        </div>
        <footer>
          <span>Qty. (Kgs) </span>
          <span className="product__qty">
            <button onClick={this.qtyInc}>+</button>
            <input ref="qtyinput" onKeyPress={this.qtyChange} defaultValue={this.qtySet()} type="text" className={this.inputClass()}/>
            <button onClick={this.qtyDec}>−</button>
          </span>
          {this.itemInCartCheck() ? <button onClick={this.changeItem}>CHANGE <i className="fa fa-shopping-basket" aria-hidden="true"></i></button> : <button onClick={this.addItem}>ADD <i className="fa fa-shopping-basket" aria-hidden="true"></i></button>}
        </footer>
      </div>
    );
  }
}

const Product = connect(mapStateToProps)(toConnectProduct);

export default Product;
