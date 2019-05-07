import React, { Component } from 'react';

import AbhiramPic from "../../assets/images/abhiram.png";
import AmanPic from "../../assets/images/aman.png";
class OurTeamPage extends Component {
  render() {
    return (
      <article className="team">
        <h1>The Team</h1>
        <div>
          <div>
            <div><img src={AbhiramPic} alt="abhiram"/></div>
            <figcaption>Sudhini Abhiram Reddy</figcaption>
          </div>
          <div>
            <div><img src={AmanPic} alt="aman"/></div>
            <figcaption>Aman Kumar</figcaption>
          </div>
        </div>
      </article>
    );
  }
}

export default OurTeamPage;
