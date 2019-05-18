import React, { Component } from 'react';
import * as emailjs from "emailjs-com";

class ContactPage extends Component {
  sendEmailviaJS = params => {
    // SEND EMAIL
    const service_id = "gmail";
    const template_id = "contact_form_submit";
    const user_id = "user_fNRo1xC7ac6VEymW5aOG9";
    return emailjs.send(service_id, template_id, params, user_id);
  }

  formSubmit = e => {
    e.preventDefault();
    document.querySelector(".contactFormSubmit").disabled = true;
    const formData = new FormData(e.target);
    const submition = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message')
    };

    const apiSubmit = fetch('/api/contactform', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(submition)
    });

    apiSubmit.then(res =>{
      if (!res.ok) {
        console.error(res.statusText);
        this.sendEmailviaJS(submition)
          .then(() => {
            alert("Thank You For Submitting The Contact Form. We Will Try To Respond To You As Quick As Possible :)");
            window.location.href = "/";
          });
      } else {
        alert("Thank You For Submitting The Contact Form. We Will Try To Respond To You As Quick As Possible :)");
        window.location.href = "/";
      }
    });
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
            <textarea id="message" name="message" rows="5"/>
          </div>
          <input type="submit" value="Submit" className="contactFormSubmit"/>
        </form>
      </div>
    );
  }
}

export default ContactPage;
