import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks
  };
};

class toConnectHomePage extends Component {
  render() {
    return (
      <div>
        <p>{JSON.stringify({
          products: this.props.products,
          stocks: this.props.stocks
        })}</p>
      </div>
    );
  }
}

const HomePage = connect(mapStateToProps)(toConnectHomePage);

export default HomePage;
