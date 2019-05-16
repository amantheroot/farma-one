import React, { Component } from 'react';
import { connect } from "react-redux";

import keygen from "../../assets/keygen";

const mapStateToProps = store => {
  return {
    suppliers: store.suppliers
  };
};

class toConnectProducersPage extends Component {
  render() {
    return (
      <div className="producers">
        <h1>Our Producers</h1>
        <div>
          <ol>
            {this.props.suppliers.map(prod => <li key={keygen(prod)}><div>
            <p>Name: <em>{prod.supplier_name}</em></p>
            <p>Farm Located At: <em>{prod.supplier_address}</em></p>
            </div></li>)}
          </ol>
        </div>
      </div>
    );
  }
}

const ProducersPage = connect(mapStateToProps)(toConnectProducersPage);

export default ProducersPage;
