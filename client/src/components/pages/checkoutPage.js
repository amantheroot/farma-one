import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    suppliers: store.suppliers,
    cart: store.cart
  };
};

class toConnectCheckoutPage extends Component {
  render() {
    return (
      <div className="checkout">
        <h1>Checkout</h1>
      </div>
    );
  }
}

const CheckoutPage = connect(mapStateToProps)(toConnectCheckoutPage);

export default CheckoutPage;
