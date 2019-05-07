import React, { Component } from 'react';

import HomeBG1 from "../../assets/images/homebg1.jpg";
import HomeBG2 from "../../assets/images/homebg2.jpg";
import HomeBG3 from "../../assets/images/homebg3.jpg";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className="homeimage__1 homeimage">
            <img src={HomeBG1} alt="home1"/>
            <div>
              <h1>Get Healthy While Revolutionizing To A New Era.</h1>
              <button>BUY NOW</button>
            </div>
          </div>
          <div className="home__about">
            <h1>Who Are We?</h1>
            <p>We are a non-profit organisation working for upliftment of the current worsened economic scenario of producers of crop and trying to bring organic food into your life the most affordable, accessible and authentic way, all thanks to THE INTERNET.</p>
          </div>
        </div>
        <div>
          <div className="homeimage__2 homeimage">
            <img src={HomeBG2} alt="home2"/>
            <div><h1>Get Healthy With More Affordability, Accessibility And Authenticity.</h1></div>
          </div>
          <div className="home__about">
            <h1>The Point Of Farma One</h1>
            <p>The Organic Food Era is seeing its worst condition in which both the consumers and the producers suffer.</p>
            <p>Organic Crops are bought by mediators at prices between <strong>10-22%</strong> of the original Market Selling Price. Not only this but they are selling the produce at a market price <strong>1.5 to 3</strong> times the price of regular vegetables.</p>
            <p><em>This kind of greedy attitude in the industry is worsening the condition for the farmers.</em></p>
            <p>Moreover the accessibility to organic products are very limited unlike the widespread markets over the internet.</p>
          </div>
        </div>
        <div>
          <div className="homeimage__3 homeimage">
            <img src={HomeBG3} alt="home3"/>
            <div><h1>Get Healthy While Supporting The Farmers.</h1></div>
          </div>
          <div className="home__about">
            <h1>What Do We Do?</h1>
            <p>Farma One harnesses the power of the internet to solve the problem. By eliminating the need for a mediator, we allow farmers to directly sell the produce to you via this site.</p>
            <p><em>We regulate the prices such that both the farmer and consumer are benefitted, just by eliminating mediator.</em></p>
            <p>Weeding out the mediators will benefit the farmers as well as the consumers as you will get healthy organic food at affordable prices.</p>
            <p>While dealing with authenticity, every customer has the privilage to visit any of our associated farms for inspection.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
