import React from 'react';
import { FiSend } from 'react-icons/fi';
/* TODO! */
const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>
          <FiSend className="icon" /> Contact
        </h2>
        <form 
          action="https://formspree.io/f/your-form-id" 
          method="POST"
          className="contact-form"
        >
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;