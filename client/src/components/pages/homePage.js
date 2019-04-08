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
        <p>{JSON.stringify({
          products: this.props.products,
          stocks: this.props.stocks,
          customers: this.props.customers,
          suppliers: this.props.suppliers,
          orders: this.props.orders
        })}</p>
      </div>
    );
  }
}

const HomePage = connect(mapStateToProps)(toConnectHomePage);

export default HomePage;
