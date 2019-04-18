import React, { Component } from 'react';
import { connect } from "react-redux";

import ItemsBasket from "../subcomponents/itemsBasket";

const mapStateToProps = store => {
  return {
    products: store.products,
    cart: store.cart
  };
};

class toConnectCheckoutPage extends Component {
  render() {
    return (
      <div className="checkout">
        <h1>Checkout</h1>
        <h2>Order Summary</h2>
        {this.props.cart.length > 0 ? <ItemsBasket />: <p>The Basket Is Empty :(</p>}
        <h2>Customer Information</h2>
        <form action="/api/order" method="POST">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" name="name" required />
          <label htmlFor="address">Location:</label>
          <textarea rows="4" id="address" type="text" name="address" required />
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="tel" pattern="[0-9]{10}" name="phone" />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" />
          <div>
            <p>* At the moment payment via COD only is available.</p>
            <p>* At the moment delivery of products is only available on Saturdays</p>
          </div>
          <input type="submit" value="PLACE ORDER" />
        </form>
      </div>
    );
  }
}

const CheckoutPage = connect(mapStateToProps)(toConnectCheckoutPage);

export default CheckoutPage;
