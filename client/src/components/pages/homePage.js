import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks,
    customers: store.customers,
    suppliers: store.suppliers,
    orders: store.orders
  };
};

class toConnectHomePage extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

const HomePage = connect(mapStateToProps)(toConnectHomePage);

export default HomePage;
