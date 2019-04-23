import React, { Component } from 'react';
import { connect } from "react-redux";
import * as emailjs from "emailjs-com";
import ReactDOMServer from 'react-dom/server';

import ItemsBasket from "../subcomponents/itemsBasket";
import keygen from '../../assets/keygen';

const mapStateToProps = store => {
  return {
    products: store.products,
    cart: store.cart
  };
};

class toConnectCheckoutPage extends Component {
  appendZero = num => {
    return num < 10 ? `0${num}` : num;
  }

  formatDate = date => {
    return `${date.getFullYear()}-${this.appendZero(date.getMonth() + 1)}-${this.appendZero(date.getDate())} ${this.appendZero(date.getHours())}-${this.appendZero(date.getMinutes())}-${this.appendZero(date.getSeconds())}`;
  }

  handleOrderData = body => {
    // let orderList = '';
    let orderListHTML = [];
    body.cart.forEach((cartItem, id) => {
      const product = body.products.find(product => product.product_id === cartItem.product_id);
      // orderList += `
      // Product No.${id+1} => 
      //   Name: ${product.product_name}
      //   Price: ${product.product_price}/-
      //   Quantity (kg): ${cartItem.product_qty}
      // `;
      orderListHTML.push(
        <li key={keygen(id)}>
          <h3>Product No.{id+1} => </h3>
          <ul>
            <li><strong>Name:</strong> {product.product_name}</li>
            <li><strong>Price:</strong> {product.product_price}/-</li>
            <li><strong>Quantity:</strong> {cartItem.product_qty}</li>
          </ul>
        </li>
      );
    })
    const emailBody = (
      <div>
        <h2><strong>Customer Information:</strong></h2>
        <ul>
          <li><strong>Name:</strong> {body.customer.name}</li>
          <li><strong>Address:</strong> {body.customer.address}</li>
          <li><strong>Phone:</strong> {body.customer.phone}</li>
          <li><strong>Email:</strong> {body.customer.email !== '' ? body.customer.email : 'NA'}</li>
        </ul>
        <br/>
        <h2><strong>Order Information:</strong></h2>
        <ul>
          <li>
            <strong>Products:</strong>
            <ul>
              {orderListHTML}
            </ul>
          </li>
          <li><strong>Total Charge:</strong> {body.subtotal}/-</li>
          <li><strong>Time (YYYY-MM-DD HH-MM-SS):</strong> {body.orderTime}</li>
        </ul>
      </div>
    );
    // const bodyText = `
    // 🎉 ORDER PLACED: 🎉
  
    // Customer Information 🙆🏽‍:
    //   Name: ${body.customer.name}
    //   Address: ${body.customer.address}
    //   Phone: ${body.customer.phone}
    //   Email: ${body.customer.email !== '' ? body.customer.email : 'NA'}
    
    // Order Information 🎁:
    //   PRODUCTS: ${orderList}
    //   Total Charge: ${body.subtotal}/-
    //   Time (YYYY-MM-DD HH-MM-SS): ${body.orderTime}
    // `;
    return ReactDOMServer.renderToStaticMarkup(emailBody);
  }

  sendEmailviaJS = orderHTML => {
    // SEND EMAIL
    const service_id = "gmail";
    const template_id = "template_TedT6vbI";
    const params = {
      message_html: orderHTML
    };
    const user_id = "user_fNRo1xC7ac6VEymW5aOG9";
    return emailjs.send(service_id, template_id, params, user_id);
  }

  placeOrder = e => {
    e.preventDefault();
    document.querySelector(".placeorder").disabled = true;
    const formData = new FormData(e.target);
    const customer = {
      name: formData.get('name'),
      address: formData.get('address'),
      phone: formData.get('phone'),
      email: formData.get('email')
    };
    const products = this.props.products.filter(product => this.props.cart.some(cartItem => cartItem.product_id === product.product_id));

    const subtotal = this.props.cart.reduce((a, b) => {
      return a + (products.find(prod => prod.product_id === b.product_id).product_price * b.product_qty);
    }, 0);

    const orderDetails = {
      customer,
      cart: this.props.cart,
      products,
      subtotal,
      orderTime: this.formatDate(new Date())
    };
    
    const orderHTML = this.handleOrderData(orderDetails);

    const apiOrder = fetch('/api/order', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(orderDetails)
    });

    apiOrder.then(res =>{
      if (!res.ok) {
        console.error(res.statusText);
        this.sendEmailviaJS(orderHTML)
          .then(() => window.location.href = "/thankyou");
      } else {
        window.location.href = "/thankyou"
      }
    });
  }

  render() {
    return (
      <div className="checkout">
        {this.props.cart.length > 0 ? 
          <React.Fragment>
            <h1>Checkout</h1>
            <h2>Order Summary</h2>
            <div className="ordersummary">
              <ItemsBasket />
            </div>
            <h2>Customer Information</h2>
            <form onSubmit={this.placeOrder}>
              <div>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="name" required />
              </div>
              <div>
                <label htmlFor="address">Location:</label>
                <textarea rows="4" id="address" type="text" name="address" required />
              </div>
              <div>
                <label htmlFor="phone">Phone:</label>
                <input id="phone" type="tel" pattern="[0-9]{10}" name="phone" required />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" />
              </div>
              <div>
                <p>* At the moment payment via COD only is available.</p>
                <p>* At the moment delivery of products is only available on Saturdays</p>
              </div>
              <input className="placeorder" type="submit" value="PLACE ORDER" />
            </form>
          </React.Fragment>
          :
          <p className="checkout__empty">The Basket Is Empty :(</p>}
      </div>
    );
  }
}

const CheckoutPage = connect(mapStateToProps)(toConnectCheckoutPage);

export default CheckoutPage;
