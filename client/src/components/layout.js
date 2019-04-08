import React, { Component } from 'react'

import Navigation from "./layout/navigation";
import Footer from "./layout/footer";
class Layout extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Layout;