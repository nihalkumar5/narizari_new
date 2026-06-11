"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const form = e.target;
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('Sent!');
        form.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('Error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <footer className="premium-footer" aria-label="Site Footer">
      <div className="premium-footer-bg"></div>
      
      <div className="premium-footer-grid">
        <div className="premium-footer-brand">
          <h2>
            Nari
            <span 
              className="about-handwritten footer-handwritten-logo" 
              style={{ 
                textTransform: "none", 
                display: "inline-block", 
                transform: "rotate(-3deg)", 
                fontSize: "1.55em", 
                color: "var(--color-navy)",
                marginLeft: "2px",
                transition: "transform 0.3s ease"
              }}
            >
              zari.
            </span>
          </h2>
          <p className="premium-footer-desc">
            We build high-converting marketing systems and digital showrooms to scale premium Varanasi Saree brands nationwide.
          </p>
          <div 
            className="about-handwritten footer-tagline" 
            style={{ 
              fontSize: "1.75rem", 
              color: "rgba(30, 26, 23, 0.8)", 
              marginTop: "0.5rem", 
              transform: "rotate(-1deg)",
              display: "inline-block"
            }}
          >
            "Where heritage meets modern scale"
          </div>
        </div>

        <div className="premium-footer-col">
          <span 
            className="about-handwritten" 
            style={{ 
              display: "block", 
              fontSize: "1.45rem", 
              color: "var(--color-navy)", 
              opacity: "0.85", 
              marginBottom: "-0.5rem", 
              transform: "rotate(-1.5deg)" 
            }}
          >
            let's scale your brand
          </span>
          <h3>Start Scaling</h3>
          <div className="premium-footer-links">
            <a 
              href="#book" 
              className="footer-btn"
            >
              Book Discovery Call <i className="fas fa-arrow-right" style={{ fontSize: "0.8em", marginLeft: "4px" }}></i>
            </a>
            <Link href="/services" className="footer-btn">
              Our Services
            </Link>
            <Link href="/#process" className="footer-btn">
              The Framework
            </Link>
          </div>
        </div>

        <div className="premium-footer-col">
          <span 
            className="about-handwritten" 
            style={{ 
              display: "block", 
              fontSize: "1.45rem", 
              color: "var(--color-navy)", 
              opacity: "0.85", 
              marginBottom: "-0.5rem", 
              transform: "rotate(-1.5deg)" 
            }}
          >
            say hello
          </span>
          <h3>Connect</h3>
          <form className="footer-mini-form" action="https://formsubmit.co/ajax/hello.narizari@gmail.com" method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Quick hello from Footer!" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="footer-input-wrapper">
              <input type="email" name="email" placeholder="Enter your email" required className="footer-email-input" />
              <button type="submit" className="footer-submit-btn" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? '...' : status === 'Sent!' ? '✓' : status === 'Error' ? '!' : '→'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="premium-footer-bottom">
        <span>&copy; {currentYear} NariZari. All Rights Reserved.</span>
        <span>
          Designed for{" "}
          <span 
            className="about-handwritten" 
            style={{ 
              textTransform: "none", 
              fontSize: "1.65em", 
              display: "inline-block", 
              transform: "rotate(-1.5deg)",
              color: "var(--color-navy)",
              marginLeft: "4px",
              verticalAlign: "middle"
            }}
          >
            high-ticket heritage.
          </span>
        </span>
      </div>
    </footer>
  );
}
