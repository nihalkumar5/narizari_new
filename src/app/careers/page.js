"use client";

import Navbar from '@/components/Navbar';
import './careers.css';

export default function Careers() {
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
            <form className="application-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="role">Desired Role or Department</label>
                <input type="text" id="role" placeholder="e.g. Frontend Developer" required />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio / LinkedIn URL</label>
                <input type="url" id="portfolio" placeholder="https://" />
              </div>
              <div className="form-group file-upload-group">
                <label htmlFor="resume" className="file-upload-label">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <span>Upload Resume (PDF, DOCX)</span>
                  <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
                </label>
              </div>
              <button type="submit" className="btn-solid submit-btn">Submit Application</button>
            </form>
          </div>
        </section>

      </main>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="premium-footer-bg"></div>
        <div className="premium-footer-grid">
          <div className="premium-footer-brand">
            <h2>Nari<span>Zari.</span></h2>
            <p className="premium-footer-desc">
              We build high-converting marketing systems and digital showrooms to scale premium Varanasi Saree brands nationwide.
            </p>
          </div>
          <div className="premium-footer-col">
            <h3>Start Scaling</h3>
            <div className="premium-footer-links">
              <a href="https://calendly.com/narizari/discovery" target="_blank" rel="noopener noreferrer">Book Discovery Call <i className="fas fa-arrow-right" style={{fontSize: "0.8em", marginLeft: "4px"}}></i></a>
              <a href="/services">Our Services</a>
              <a href="/#process">The Framework</a>
            </div>
          </div>
          <div className="premium-footer-col">
            <h3>Connect</h3>
            <div className="premium-footer-links">
              <a href="https://linkedin.com">LinkedIn</a>
              <a href="https://instagram.com">Instagram</a>
              <a href="mailto:hello@narizari.com">hello@narizari.com</a>
            </div>
          </div>
        </div>
        <div className="premium-footer-bottom">
          <span>&copy; {new Date().getFullYear()} NariZari. All Rights Reserved.</span>
          <span>Designed for High-Ticket Heritage.</span>
        </div>
      </footer>
    </>
  );
}
