import React, { useState } from 'react';
import { icons } from '../helpers/icons/icons';

// Contact Map Component
export const ContactMap = () => (
  <section className="mapbox" data-mapbox>
    <figure>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.3652029854666!2d106.69204877405487!3d10.85980288929406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec48f5a17b7d5741!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ3V54buFbiBU4bqldCBUaMOgbmggLSBDxqEgc-G7nyBxdeG6rW4gMTI!5e0!3m2!1svi!2s!4v1759577231870!5m2!1svi!2s"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
    </figure>
  </section>
);

// Contact Form Component
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ fullname: '', email: '', message: '' });
  };

  const isFormValid = formData.fullname && formData.email && formData.message;

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>

      <div className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
            value={formData.fullname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button 
          className="form-btn" 
          type="submit" 
          disabled={!isFormValid}
          onClick={handleSubmit}
        >
          <ion-icon name={icons.paperPlane}></ion-icon>
          <span>Send Message</span>
        </button>
      </div>
    </section>
  );
};