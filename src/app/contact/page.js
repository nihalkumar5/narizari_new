"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import './contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Submitting...');
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('Sent successfully!');
        form.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to send.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (err) {
      setStatus('Failed to send.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <div className="contact-container">
          
          {/* LEFT COLUMN */}
          <div className="contact-left">
            <h1 className="contact-title">
              Let's get<br />in touch
              <div className="contact-arrow"></div>
            </h1>
            
            <h3 className="contact-subtitle">
              Don't be afraid to say hello with us!
            </h3>
            
            <div className="contact-info-list">
              <div className="contact-info-item">
                <h4>Phone</h4>
                <p>+91 83181 95911</p>
              </div>
              <div className="contact-info-item">
                <h4>Email</h4>
                <a href="mailto:hello.narizari@gmail.com">hello.narizari@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <h4>Office</h4>
                <p>
                  5th Floor, CDC Building,<br />
                  AIC BHU Campus, Varanasi - 221005
                </p>
                <a href="https://www.google.com/maps/search/?api=1&query=AIC+BHU+Campus,+Varanasi+-+221005" target="_blank" rel="noopener noreferrer" className="map-link">
                  See on Google Map ↗
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-right">
            <div className="contact-right-top">
              <p className="contact-intro-text">
                Great! We're excited to hear from you and let's start something special together. call us for any inquery.
              </p>
            </div>
            
            <div className="contact-form-container">
              <h2 className="contact-form-title">Contact</h2>
              
              <form className="contact-form" action="https://formsubmit.co/ajax/hello.narizari@gmail.com" method="POST" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="name" className="form-input" placeholder="Name *" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" name="phone" className="form-input" placeholder="Phone *" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input type="email" name="email" className="form-input" placeholder="Email *" required />
                  </div>
                  <div className="form-group">
                    <input type="url" name="website" className="form-input" placeholder="Website URL" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="company" className="form-input" placeholder="Company/ Brand Name *" required />
                  </div>
                  <div className="form-group">
                    <input type="text" name="location" className="form-input" placeholder="Location *" required />
                  </div>
                </div>

                <div className="form-group full-width">
                  <input type="text" name="message" className="form-input" placeholder="Write a Message *" required />
                </div>

                <div className="checkbox-group full-width">
                  <div className="checkbox-group-title">Services Required for *</div>
                  <div className="checkbox-list">
                    <label className="checkbox-item">
                      <input type="checkbox" name="services" value="eCommerce + Marketing Suite" />
                      eCommerce + Marketing Suite
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" name="services" value="Shopify" />
                      Shopify
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" name="services" value="Performance Marketing" />
                      Performance Marketing
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" name="services" value="Social Media Management" />
                      Social Media Management
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" name="services" value="Branding Creative" />
                      Branding Creative
                    </label>
                    <label className="checkbox-item">
                      <input type="checkbox" name="services" value="Other" />
                      Other
                    </label>
                  </div>
                </div>
                
                <button type="submit" className="form-submit-btn" disabled={status === 'Submitting...'}>
                  {status === 'Submitting...' ? 'Sending...' : status === 'Sent successfully!' ? 'Sent!' : status === 'Failed to send.' ? 'Error' : 'Send to us'}
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}
