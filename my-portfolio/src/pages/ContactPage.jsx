// pages/ContactPage.jsx
import React from 'react';
import { ContactMap, ContactForm } from '../components/Contact';

const ContactPage = ({ isActive }) => (
  <article className={`contact ${isActive ? 'active' : ''}`} data-page="contact">
    <header>
      <h2 className="h2 article-title">Liên Hệ</h2>
    </header>
    <ContactMap />
    <ContactForm />
  </article>
);

export default ContactPage;