import React, { Component } from 'react';

import {Link} from "react-router-dom";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="notfound">
        <h1>404 Not Found</h1>
        <p>The Page You Were Looking For Was Not Found.</p>
        <Link to="/"><button>Go Back To The Site!</button></Link>
      </div>
    );
  }
}

export default NotFoundPage;
