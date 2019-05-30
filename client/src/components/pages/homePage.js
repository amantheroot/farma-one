import React, { Component } from 'react';

import {Link} from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div>
          <div className="homeimage__1 homeimage">
            <div>
              <h1>Get Healthy While Revolutionizing To A New Era.</h1>
              <Link to="/products"><button>BUY NOW</button></Link>
            </div>
          </div>
          <div className="home__about">
            {/* <h1>Who Are We?</h1>
            <p>We are a non-profit organisation working for upliftment of the current worsened economic scenario of producers of crop and trying to bring organic food into your life the most affordable, accessible and authentic way, all thanks to THE INTERNET.</p>
            <p>We are a visionary trying to bring healthy food into most people lives, parallely uplifting the current worsened economic scenario of farmers. We list only organic produce,which is brought to the customers in the most affordable, accessible and authetic way with a single magic stone Internet.</p>
            <h3>Another side of the coin:</h3>
            <p>We highly encourage farmers using synthtic chemical fertilizers and pesticides to use the ZNBF [ Zero Budget Natural Farming ] technique developed by Subash Palekar.</p>
            <p>The ZNBF technique involves using cow based and other natural products to give the benefits of organic farming as well as minimizing few diadvantages which come with organic farming.</p>
            <p>It is done by bringing the produce per acre either equal to regular farming or even higher, the science involved in this specific type of farming also developed various pesticides to deal with almost any kind of problem.</p> */}
            <h1>ABOUT US</h1>
            <p>We are a visionary trying to bring healthy food into most  people  lives,parallely uplifting the current worsened economic scenario of farmers.We list only organic produce,which is brought to the customers in the most affordable,accessible and authetic way with a single magic stone Internet.</p>
            <h3>Another side of the coin:</h3>
            <p>We mainly promote ZNBF[ zero budget natural farming, developed by Subash Palekar sir ],trying to convert regular farmers[ using synthetic chemical fertilizers and pesticides ] to use this farming technique. This technique involves using cow based and other natural products to give the benefits of organic farming as well as weeding out few of organic farming disadvantages[ by bring the produce per acre either equal to regular farming or even higher, the science involved in this specific type of farming also developed various pesticides to deal with almost any kind of problem ].</p>
            <div>
              <p>You can find more about the science behind ZNBF in this video by Subash Palekar Sir:</p>
              <iframe title="The Science Behind ZNBF by Subash Palekar" width="789" height="444" src="https://www.youtube.com/embed/DALihIuF4FM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <div>
          <div className="homeimage__2 homeimage">
            <div><h1>Get Healthy With More Affordability, Accessibility And Authenticity.</h1></div>
          </div>
          <div className="home__about">
            {/* <h1>The Point Of Farma One</h1>
            <p>The Organic Food Era is seeing its worst condition in which both the consumers and the producers suffer.</p>
            <p>Organic Crops are bought by mediators at prices between <strong>10-22%</strong> of the original Market Selling Price. Not only this but they are selling the produce at a market price <strong>1.5 to 3</strong> times the price of regular vegetables.</p>
            <p><em>This kind of greedy attitude in the industry is worsening the condition for the farmers.</em></p>
            <p>Moreover the accessibility to organic products are very limited unlike the widespread markets over the internet.</p> */}
            <h1>The Need</h1>
            <p>Admit it! We[The producers as weel as consumers] are in the worst era in aspect of food.</p>
            <p><strong>The Farmer's Side:</strong> The organic crop is broughth by the mediater at prices between 10-22% of market selling price,there is a lot of evil-minded buiseness taking over this organic food industry.This buiseness is just piling money in mediators pockets while threatening farmers lives.The mediators are selling the produce at a market price of 1.5-3[150%-300% higher] times the price of regular vegetables,fruits or other  farm  produce.</p>
            <p>This greed is worsening the entire community to the deep throat.</p>
            <p>Moreover the organic produce isb't available everywhere: only found in some supermarkets or some posh locations,the accessibility is ver limited not available like the widespread wet-markets.</p>
          </div>
        </div>
        <div>
          <div className="homeimage__3 homeimage">
            <div><h1>Get Healthy While Supporting The Farmers.</h1></div>
          </div>
          <div className="home__about">
            {/* <h1>What Does Farma One Do?</h1>
            <p>Farma One harnesses the power of the internet to solve the problem. By eliminating the need for a mediator, we allow farmers to directly sell the produce to you via this site.</p>
            <p><em>We regulate the prices such that both the farmer and consumer are benefitted, just by eliminating mediator.</em></p>
            <p>Weeding out the mediators will benefit the farmers as well as the consumers as you will get healthy organic food at affordable prices.</p>
            <p>While dealing with authenticity, every customer has the privilage to visit any of our associated farms for inspection.</p> */}
            <h1>What We Do?</h1>
            <p>We use a beautiful and simple tool <em>The Internet</em> to solve the problem.
            We allow the farmers to directly sell their produce on this website, eliminating the mediators.We also regulate the prices of the produce to the most affordable prices. So that the consumer gets a great deal, while the farmer is rewarded a lot ,just with a single stone[that simple].</p>
            <p>The farmer benefits a lot from weeding out the mediator.Since the farmers earns more,it is a motivating factor for their fellow farmers to change from regular farming to organic farmng.
            The consumer gets more healthy with more affordability and accessibility[which makes their transition from pesticide food to healthy food way easier]</p>
            <h3>WELCOME TO THE SIMPLE GREEN REVOLUTION</h3>
            <p>While dealing with authenticity,every customer has the privilige to visit any of our associated farm for field check.</p>
            <p>You may wonder"who visits? people are busy,but out of the 1000 customers, there is that single customer who is really curious and does visit"</p>
            <p>BECOME A PART OF OUR REVOLUTION.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
