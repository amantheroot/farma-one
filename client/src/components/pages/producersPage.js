import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = store => {
  return {
    suppliers: store.suppliers
  };
};

class toConnectProducersPage extends Component {
  render() {
    return (
      <div className="producers">
        <h1>Producers</h1>
      </div>
    );
  }
}

const ProducersPage = connect(mapStateToProps)(toConnectProducersPage);

export default ProducersPage;
