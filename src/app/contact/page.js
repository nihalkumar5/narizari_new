"use client";

import Navbar from '@/components/Navbar';
import './contact.css';

export default function Contact() {
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
                <p>+(2) 578-365-379</p>
              </div>
              <div className="contact-info-item">
                <h4>Email</h4>
                <a href="mailto:hello@narizari.com">hello@narizari.com</a>
              </div>
              <div className="contact-info-item">
                <h4>Office</h4>
                <p>
                  230 Norman Street New York,<br />
                  QC (USA) H8R 1A1
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-link">
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
              
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" className="form-input" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-input" placeholder="Email" />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input type="tel" className="form-input" placeholder="Phone" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-input" placeholder="Subject" />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <input type="text" className="form-input" placeholder="Tell us about your interested in" />
                </div>
                
                <button type="submit" className="form-submit-btn">
                  Send to us
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}
