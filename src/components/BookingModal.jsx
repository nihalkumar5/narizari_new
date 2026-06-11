"use client";

import { useState, useEffect } from 'react';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-booking-modal', handleOpen);

    // Intercept clicks on links that point to "#book"
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href === '#book') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    // We search for book links on load and also periodically to support client-side updates
    const attachLinks = () => {
      const bookLinks = document.querySelectorAll('a[href="#book"]');
      bookLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
        link.addEventListener('click', handleLinkClick);
      });
    };

    attachLinks();
    
    // Set up an interval to re-attach to dynamically rendered elements
    const intervalId = setInterval(attachLinks, 1000);

    return () => {
      window.removeEventListener('open-booking-modal', handleOpen);
      clearInterval(intervalId);
      const bookLinks = document.querySelectorAll('a[href="#book"]');
      bookLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Sending...');

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus('Sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (err) {
      setStatus('Failed to send.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="booking-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="booking-modal-close" onClick={() => setIsOpen(false)} aria-label="Close">✕</button>
        
        {status === 'Sent successfully!' ? (
          <div className="booking-modal-success">
            <div className="success-icon"><i className="fas fa-check"></i></div>
            <h3>Request Sent!</h3>
            <p>Thank you for booking a strategy call. Our team will review your brand details and reach out shortly via email/phone.</p>
            <button className="booking-modal-submit" onClick={() => { setStatus(''); setIsOpen(false); }} style={{marginTop: '2rem'}}>
              Close Window
            </button>
          </div>
        ) : (
          <>
            <h2 className="booking-modal-title">Book a Strategy Call</h2>
            <p className="booking-modal-desc">
              Discuss how to take your traditional heritage label national. Fill out your details below and we will get back to you to schedule.
            </p>
            
            <form className="booking-modal-form" action="https://formsubmit.co/ajax/hello.narizari@gmail.com" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Strategy Call Request!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <input type="text" name="name" className="form-input" placeholder="Full Name *" required />
              </div>
              
              <div className="form-group">
                <input type="email" name="email" className="form-input" placeholder="Email Address *" required />
              </div>
              
              <div className="form-group">
                <input type="tel" name="phone" className="form-input" placeholder="Phone Number *" required />
              </div>
              
              <div className="form-group">
                <input type="text" name="company" className="form-input" placeholder="Brand / Company Name *" required />
              </div>

              <div className="form-group">
                <input type="url" name="website" className="form-input" placeholder="Website URL (if any)" />
              </div>
              
              <div className="form-group">
                <input type="text" name="message" className="form-input" placeholder="Briefly describe your goals *" required />
              </div>
              
              <button type="submit" className="booking-modal-submit" disabled={status === 'Sending...'}>
                {status === 'Sending...' ? 'Submitting...' : 'Request Booking'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
