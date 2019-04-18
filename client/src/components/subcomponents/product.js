import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    cart: store.cart
  };
};

function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('../../assets/images/products', false, /\.(png|jpe?g|svg)$/));
class toConnectProduct extends Component {
  render() {
    const image = images.find(img => {
      return Number.parseInt(img.split('/').pop().split(".").shift()) === this.props.product.product_id;
    });
    return (
      <div className="product">
        <header>{this.props.product.product_name}</header>
        <img src={image} alt={`product_image_${this.props.product.product_name.split(' ').join('_')}`} />
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
