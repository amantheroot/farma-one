import React, { Component } from 'react';

import HomeBG1 from "../../assets/images/homebg1.jpg";
import HomeBG2 from "../../assets/images/homebg2.jpg";
import HomeBG3 from "../../assets/images/homebg3.jpg";

import AbhiramPic from "../../assets/images/abhiram.png";
import AmanPic from "../../assets/images/aman.png";
class HomePage extends Component {
  // sendEmail = () => {
  //   const orderDetails = {
  //     data: 'ORDER'
  //   };
  //   fetch('/api/email', {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'post',
  //     body: JSON.stringify(orderDetails)
  //   }).then(res => res.json()).then(res => console.log(res));
      
  // }

  render() {
    return (
      <div className="home">
        <div className="homebg">
          <div className="homebg__1">
            <div>1</div>
            <img src={HomeBG1} alt="home1"/>
          </div>
          <div className="homebg__2">
            <div>2</div>
            <img src={HomeBG2} alt="home2"/>
          </div>
          <div className="homebg__3">
            <div>3</div>
            <img src={HomeBG3} alt="home3"/>
          </div>
        </div>
        <section className="home__about">
          <article>
            <h1>Who Are We?</h1>
            <p>We are a non-profit organisation working for upliftment of the current worsened economic scenario of producers of crop and trying to bring organic food into your life the most affordable, accessible and authentic way, all thanks to THE INTERNET.</p>
          </article>
          <article>
            <h1>The Point Of Farma One</h1>
            <p>The Organic Food Era is seeing its worst condition in which both the consumers and the producers suffer.</p>
            <p>Organic Crops are bought by mediators at prices between <strong>10-22%</strong> of the original Market Selling Price. Not only this but they are selling the produce at a market price <strong>1.5 to 3</strong> times the price of regular vegetables.</p>
            <p>This kind of greedy attitude in the industry is worsening the condition for the farmers.</p>
            <p>Moreover the accessibility to organic products are very limited unlike the widespread markets over the internet.</p>
          </article>
          <article>
            <h1>What Do We Do?</h1>
            <p>Farma One harnesses the power of the internet to solve the problem. By eliminating the need for a mediator, we allow farmers to directly sell the produce to you via this site.</p>
            <p>Weeding out the mediators will benefit the farmers as well as the consumers as you will get healthy organic food at affordable prices.</p>
            <p>While dealing with authenticity, every customer has the privilage to visit any of our associated farms for inspection.</p>
          </article>
          <article>
            <h1>The Team</h1>
            <div>
              <div>
                <img src={AbhiramPic} alt="abhiram"/>
                <figcaption>Sudhini Abhiram Reddy</figcaption>
              </div>
              <div>
                <img src={AmanPic} alt="aman"/>
                <figcaption>Aman Kumar</figcaption>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default HomePage;
