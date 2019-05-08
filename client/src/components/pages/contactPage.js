import React, { Component } from 'react';

class ContactPage extends Component {
  formSubmit = e => {
    e.preventDefault();
  }
  render() {
    return (
      <div className="contact">
        <h1>We'd love to hear from you</h1>
        <p>Feel free to contact us about anything from regestering as a producer to any questions you may have about the products or just general queries, we would be delighted to help you :)</p>
        <form onSubmit={this.formSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input id="name" name="name"/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email"/>
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input id="phone" name="phone" type="tel" pattern="[0-9]{10}"/>
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input id="subject" name="subject"/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"/>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactPage;
