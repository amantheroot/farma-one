import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    suppliers: store.suppliers,
    cart: store.cart
  };
};

class toConnectNotFoundPage extends Component {
  render() {
    return (
      <div className="notfound">
        <h1>404 Not Found</h1>
      </div>
    );
  }
}

const NotFoundPage = connect(mapStateToProps)(toConnectNotFoundPage);

export default NotFoundPage;
