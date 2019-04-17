import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks,
    cart: store.cart
  };
};

class toConnectProduct extends Component {
  render() {
    return (
      <div className="product">
        <h1>Product</h1>
      </div>
    );
  }
}

const Product = connect(mapStateToProps)(toConnectProduct);

export default Product;
