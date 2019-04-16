import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks,
    cart: store.cart
  };
};

class toConnectThankYouPage extends Component {
  render() {
    return (
      <div className="thankyou">
        <h1>Thank You</h1>
      </div>
    );
  }
}

const ThankYouPage = connect(mapStateToProps)(toConnectThankYouPage);

export default ThankYouPage;
