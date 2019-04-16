import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {fetchProducts} from "./actions/productsActions";
import {fetchStocks} from "./actions/stocksActions";

import Layout from "./components/layout";

import HomePage from "./components/pages/homePage";
import ProdcutsPage from "./components/pages/productsPage";
import ProducersPage from "./components/pages/producersPage";
import CheckoutPage from "./components/pages/checkoutPage";
import ThankYouPage from "./components/pages/thankyouPage";
import NotFoundPage from "./components/pages/notfoundPage";

const mapStateToProps = store => {
  return {
    products: store.products,
    stocks: store.stocks,
    cart: store.cart
  };
};

class toConnectApp extends Component {
  componentWillMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => this.handleData(data));
  }

  handleData = data => {
    this.props.dispatch(fetchProducts(data.products));
    this.props.dispatch(fetchStocks(data.stocks));
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/products" component={ProdcutsPage}/>
            <Route path="/producers" component={ProducersPage}/>
            <Route path="/checkout" component={CheckoutPage}/>
            <Route path="/thankyou" component={ThankYouPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;
