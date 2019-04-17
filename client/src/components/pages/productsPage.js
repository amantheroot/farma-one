import React, { Component } from 'react';
import { connect } from "react-redux";

import Product from "../subcomponents/product";

const mapStateToProps = store => {
  return {
    products: store.products,
    suppliers: store.suppliers,
    cart: store.cart
  };
};

class toConnectProductsPage extends Component {
  render() {
    return (
      <div className="products">
        <h1>Our Products</h1>
        <Product/>
      </div>
    );
  }
}

const ProductsPage = connect(mapStateToProps)(toConnectProductsPage);

export default ProductsPage;
