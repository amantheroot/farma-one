import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks,
    cart: store.cart
  };
};

class toConnectHomePage extends Component {
  sendEmail = () => {
    const orderDetails = {
      data: 'ORDER'
    };
    fetch('/api/email', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(orderDetails)
    }).then(res => res.json()).then(res => console.log(res));
      
  }

  render() {
    return (
      <div className="home">
        <div className="home__overlay">
          <h1 className="home__quote"><q>WE GIVE YOU THE BEST</q></h1>
          <Link to="/products"><button>BUY NOW!</button></Link>
        </div>
      </div>
    );
  }
}

const HomePage = connect(mapStateToProps)(toConnectHomePage);

export default HomePage;
