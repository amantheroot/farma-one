import React, { Component } from 'react';

import {Link} from "react-router-dom";

class ThankYouPage extends Component {
  render() {
    return (
      <div className="thankyou">
        <h1>Order Successfully Placed!</h1>
        <h2>Thank you for supporting us :)</h2>
        <h1>GET HEALTHY!</h1>
        <Link to="/"><button>Go Back To The Site!</button></Link>
      </div>
    );
  }
}

export default ThankYouPage;
