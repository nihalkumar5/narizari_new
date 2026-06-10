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
              
              <form className="contact-form" action="https://formsubmit.co/hello.narizari@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" name="name" className="form-input" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" name="email" className="form-input" placeholder="Email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input type="tel" name="phone" className="form-input" placeholder="Phone" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="subject" className="form-input" placeholder="Subject" />
                  </div>
                </div>
                
                <div className="form-group full-width">
                  <input type="text" name="message" className="form-input" placeholder="Tell us about your interested in" required />
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
