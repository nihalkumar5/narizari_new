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
        // Do not auto-reset status, let the user see the success screen
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
            
            <div className="contact-editorial-text" style={{ marginBottom: '4rem', display: 'flex', flexDirection: 'column', gap: '1.65rem', maxWidth: '550px' }}>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontWeight: '500', color: 'var(--color-navy)', opacity: 0.95 }}>
                Have something in mind? Exploring possibilities? Or simply looking for a <span style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-accent)', padding: '0.15rem 0.5rem', borderRadius: '6px', fontStyle: 'normal', fontWeight: '700', fontSize: '1.15rem', display: 'inline-block', transform: 'rotate(-1deg)', boxShadow: '4px 4px 0px rgba(210, 250, 0, 0.2)' }}>fresh perspective</span>?
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontWeight: '500', color: 'var(--color-navy)', opacity: 0.95 }}>
                An idea. An <span style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-navy)', padding: '0.1rem 0.45rem', borderRadius: '4px', fontWeight: '700' }}>ambition</span>. A <span className="about-handwritten" style={{ fontSize: '1.85rem', display: 'inline-block', transform: 'rotate(-2deg)', color: 'var(--color-navy)', marginLeft: '4px', marginRight: '4px', verticalAlign: 'middle' }}>vision</span> waiting to unfold.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontWeight: '500', color: 'var(--color-navy)', opacity: 0.95 }}>
                Wherever you are in your journey, let's begin with a <span className="about-handwritten" style={{ fontSize: '1.85rem', display: 'inline-block', transform: 'rotate(-1.5deg)', color: 'var(--color-navy)', marginLeft: '4px', marginRight: '4px', verticalAlign: 'middle' }}>conversation</span>.
              </p>
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7', fontWeight: '500', color: 'var(--color-navy)', opacity: 0.95 }}>
                No pressure. No buzzwords. Just genuine exchange, strategic insight, and the possibility of creating something truly <span className="about-handwritten" style={{ fontSize: '1.85rem', display: 'inline-block', transform: 'rotate(-2deg)', color: 'var(--color-navy)', marginLeft: '4px', marginRight: '4px', verticalAlign: 'middle', borderBottom: '3px solid var(--color-accent)', lineHeight: '1.1' }}>extraordinary</span>.
              </p>
              <p style={{ fontSize: '1.5rem', lineHeight: '1.6', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginTop: '0.75rem', letterSpacing: '-0.02em' }}>
                The finest brands often start with a simple <span className="about-handwritten" style={{ fontSize: '2.1rem', display: 'inline-block', transform: 'rotate(-3deg)', color: 'var(--color-navy)', marginLeft: '6px', verticalAlign: 'middle' }}>hello</span>.
              </p>
            </div>
            
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
                We look forward to hearing from you. Please fill out the form below, and our team will get back to you shortly to start our conversation.
              </p>
            </div>
            
            <div className="contact-form-container">
              <h2 className="contact-form-title">Contact</h2>
              
              {status === 'Sent successfully!' ? (
                <div className="success-acknowledgment">
                  <div className="success-icon"><i className="fas fa-check"></i></div>
                  <h3>Message Received.</h3>
                  <p>Thank you for reaching out. A member of our team will review your inquiry and get back to you shortly.</p>
                  <button onClick={() => setStatus('')} className="form-submit-btn" style={{marginTop: '2rem'}}>
                    Send Another Message
                  </button>
                </div>
              ) : (
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
                    {status === 'Submitting...' ? 'Sending...' : status === 'Failed to send.' ? 'Error' : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}
