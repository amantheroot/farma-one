import React, { Component } from 'react';
import { connect } from "react-redux";

import Product from "../subcomponents/product";

import keygen from "../../assets/keygen";

const mapStateToProps = store => {
  return {
    products: store.products,
    cart: store.cart
  };
};

class toConnectProductsPage extends Component {
  render() {
    const productstabs = this.props.products.map(product => <Product key={keygen(product)} product={product} />)
    return (
      <div className="products">
        <h1>Our Products</h1>
        <div className="prodcuts__menu">
          {productstabs}
        </div>
      </div>
    );
  }
}

const ProductsPage = connect(mapStateToProps)(toConnectProductsPage);

export default ProductsPage;
