import React, { Component } from 'react';

import AbhiramPic from "../../assets/images/abhiram.png";
import AmanPic from "../../assets/images/aman.png";
class OurTeamPage extends Component {
  render() {
    return (
      <div className="team">
        <h1>The Team</h1>
        <div>
          <div>
            <img src={AbhiramPic} alt="abhiram"/>
            <div>
              <h3>Sudhini Abhiram Reddy</h3>
              <h4>Founder</h4>
              <p>Quos ut sunt sed illum. Aut repudiandae ullam omnis tempore. Quam rerum tempore earum.</p>
            </div>
          </div>
          <div>
            <div>
              <h3>Aman Kumar</h3>
              <h4>Web Developer</h4>
              <p>Quos ut sunt sed illum. Aut repudiandae ullam omnis tempore. Quam rerum tempore earum.</p>
            </div>
            <img src={AmanPic} alt="aman"/>
          </div>
        </div>
      </div>
    );
  }
}

export default OurTeamPage;
