import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/layout";

import A from "./components/pages/a";
import B from "./components/pages/b";

const mapStateToProps = store => {
  return {
    companies: store.companies,
    products: store.products,
    stocks: store.stocks,
    customers: store.customers,
    suppliers: store.suppliers
  };
};

class toConnectApp extends Component {
  componentDidMount() {
    fetch('/api/hello')
      .then(res => res.json())
      .then(res => console.log(res));

    fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ post: 'Hello World!' })
    }).then(res => res.text()).then(res => console.log(res));
  }

  render() {
    const {companies, products, stocks, customers, suppliers} = this.props;
    console.log(companies, products, stocks, customers, suppliers);
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" component={A} exact />
            <Route path="/b" component={B} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const App = connect(mapStateToProps)(toConnectApp);

export default App;
