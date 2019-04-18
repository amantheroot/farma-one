import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

class toConnectProduct extends Component {
  render() {
    return (
      <div className="product">
        <header>{this.props.product.product_name}</header>
        
        <footer>
          <span>Qty. (Kgs) </span>
          <input type="text"/>
          <button>ADD <i className="fa fa-shopping-basket" aria-hidden="true"></i></button>
        </footer>
      </div>
    );
  }
}

const Product = connect(mapStateToProps)(toConnectProduct);

export default Product;
