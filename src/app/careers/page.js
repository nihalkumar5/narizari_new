"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './careers.css';

export default function Careers() {
  const [resumeName, setResumeName] = useState('');
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
        setResumeName('');
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
      <main className="careers-page">
        {/* HERO SECTION */}
        <section className="careers-hero">
          <div className="careers-badge">
            <span className="careers-badge-new">New</span>
            <span>Hiring for 2026 Cohort <i className="fas fa-arrow-right"></i></span>
          </div>
          
          <h1 className="careers-heading">
            Join the team at <br/> <span className="highlight-marker">NariZari.</span>
          </h1>
          
          <p className="careers-subtitle">
            We are building high-converting marketing systems and digital showrooms to scale premium heritage brands worldwide.
          </p>
          
          <div className="careers-hero-actions">
            <button className="btn-outline">Our Culture</button>
            <button className="btn-solid">View Open Roles</button>
          </div>
          
          <div className="careers-hero-image">
            <img src="/about_office.png" alt="NariZari Team Office" />
          </div>
        </section>

        {/* PERKS SECTION */}
        <section className="perks-section">
          <div className="perks-header">
            <h2 className="perks-heading">Life at<br/>NariZari</h2>
            <p className="perks-subtitle">
              We provide a creative, high-performance environment with premium benefits to help you do the best work of your life.
            </p>
          </div>
          
          <div className="perks-grid">
            {/* Perk 1 */}
            <div className="perk-card">
              <div className="perk-icon-wrapper">
                <i className="fas fa-laptop-house"></i>
              </div>
              <div className="perk-title-row">
                <h3 className="perk-title">Remote First</h3>
                <span className="perk-badge">$2k Setup</span>
              </div>
              <p className="perk-desc">
                Work from anywhere. We provide a generous stipend to set up your home office with the best gear.
              </p>
            </div>
            
            {/* Perk 2 */}
            <div className="perk-card">
              <div className="perk-icon-wrapper">
                <i className="fas fa-heart-pulse"></i>
              </div>
              <div className="perk-title-row">
                <h3 className="perk-title">Premium Health</h3>
                <span className="perk-badge">100% Covered</span>
              </div>
              <p className="perk-desc">
                Top-tier medical, dental, and vision insurance for you and your dependents, fully paid by us.
              </p>
            </div>
            
            {/* Perk 3 */}
            <div className="perk-card">
              <div className="perk-icon-wrapper">
                <i className="fas fa-plane-departure"></i>
              </div>
              <div className="perk-title-row">
                <h3 className="perk-title">Work & Travel</h3>
                <span className="perk-badge">Unlimited PTO</span>
              </div>
              <p className="perk-desc">
                Take the time you need to recharge. We mandate a minimum of 4 weeks off per year to keep you fresh.
              </p>
            </div>
          </div>
        </section>

        {/* JOB BOARD SECTION */}
        <section className="jobs-section" id="open-roles">
          <div className="jobs-board">
            
            {/* Column 1: Design */}
            <div className="job-column">
              <div className="job-col-header">
                <span>Design</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-cards-container">
                <div className="job-card">
                  <div className="job-tags">
                    <span className="job-tag">Creative</span>
                  </div>
                  <h3 className="job-title">Senior Art Director</h3>
                  <div className="job-location">Varanasi, India / Remote</div>
                  <div className="job-details">
                    <span>Mon to Fri: Flexible Hours</span>
                    <span>Experience: 5+ Years</span>
                  </div>
                  <div className="job-actions">
                    <button className="btn-small">Apply</button>
                    <button className="btn-small">Details</button>
                  </div>
                </div>
                
                <div className="job-card">
                  <div className="job-tags">
                    <span className="job-tag">Product</span>
                    <span className="job-tag secondary">Remote</span>
                  </div>
                  <h3 className="job-title">UI/UX Designer</h3>
                  <div className="job-location">Remote Worldwide</div>
                  <div className="job-details">
                    <span>Mon to Fri: Flexible Hours</span>
                    <span>Experience: 2-4 Years</span>
                  </div>
                  <div className="job-actions">
                    <button className="btn-small">Apply</button>
                    <button className="btn-small">Details</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2: Engineering */}
            <div className="job-column">
              <div className="job-col-header">
                <span>Engineering</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-cards-container">
                <div className="job-card">
                  <div className="job-tags">
                    <span className="job-tag">Frontend</span>
                  </div>
                  <h3 className="job-title">React Developer</h3>
                  <div className="job-location">New York, NY / Remote</div>
                  <div className="job-details">
                    <span>Mon to Fri: 9:00 - 18:00</span>
                    <span>Experience: 3+ Years</span>
                  </div>
                  <div className="job-actions">
                    <button className="btn-small">Apply</button>
                    <button className="btn-small">Details</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 3: Marketing */}
            <div className="job-column">
              <div className="job-col-header">
                <span>Marketing</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-cards-container">
                <div className="job-card">
                  <div className="job-tags">
                    <span className="job-tag">Growth</span>
                    <span className="job-tag secondary">On-site</span>
                  </div>
                  <h3 className="job-title">Head of Growth</h3>
                  <div className="job-location">Varanasi, India</div>
                  <div className="job-details">
                    <span>Mon to Fri: 10:00 - 19:00</span>
                    <span>Sat: 10:00 - 14:00</span>
                  </div>
                  <div className="job-actions">
                    <button className="btn-small">Apply</button>
                    <button className="btn-small">Details</button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 4: Sales */}
            <div className="job-column">
              <div className="job-col-header">
                <span>Sales</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="job-cards-container">
                <div className="job-card">
                  <div className="job-tags">
                    <span className="job-tag">B2B</span>
                  </div>
                  <h3 className="job-title">Brand Executive</h3>
                  <div className="job-location">New York / Remote</div>
                  <div className="job-details">
                    <span>Always On</span>
                    <span>Quota: Negotiable</span>
                  </div>
                  <div className="job-actions">
                    <button className="btn-small">Apply</button>
                    <button className="btn-small">Details</button>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* APPLICATION FORM SECTION */}
        <section className="application-section" id="apply">
          <div className="application-container">
            <div className="application-header">
              <h2>Join Our Team</h2>
              <p>Don't see a perfect fit above? We're always looking for top talent. Drop your resume here.</p>
            </div>
            <form className="application-form" action="https://formsubmit.co/ajax/hello.narizari@gmail.com" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Career Application!" />
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="role">Desired Role or Department</label>
                <input type="text" id="role" name="role" placeholder="e.g. Frontend Developer" required />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn URL</label>
                <input type="url" id="portfolio" name="portfolio" placeholder="https://" />
              </div>
              <div className="form-group file-upload-group">
                <label htmlFor="resume" className="file-upload-label">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <span>{resumeName || "Upload Resume (PDF, DOCX)"}</span>
                  <input 
                    type="file" 
                    id="resume" 
                    name="resume" 
                    accept=".pdf,.doc,.docx" 
                    required 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setResumeName(e.target.files[0].name);
                      } else {
                        setResumeName('');
                      }
                    }}
                  />
                </label>
              </div>
              <button type="submit" className="btn-solid submit-btn" disabled={status === 'Submitting...'}>
                {status === 'Submitting...' ? 'Submitting...' : status === 'Sent successfully!' ? 'Application Submitted!' : status === 'Failed to send.' ? 'Error Occurred' : 'Submit Application'}
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Premium Footer */}
      <Footer />
    </>
  );
}
