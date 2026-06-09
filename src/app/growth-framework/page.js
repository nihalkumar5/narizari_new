"use client";

import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import "./growth.css";

export default function GrowthFramework() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll, .phase-card").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="growth-page">
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="growth-hero">
          <div className="growth-hero-content animate-on-scroll">
            <div className="growth-badge">The NariZari System</div>
            <h1>THE GROWTH <span>Framework.</span></h1>
            <p>A battle-tested 4-step system to scale premium e-commerce brands to 7 and 8 figures. We don't just run ads; we engineer scalable revenue ecosystems.</p>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="framework-section">
          <div className="framework-container">
            
            <article className="phase-card">
              <div className="phase-number">Phase 1</div>
              <h3>Foundation & Showroom</h3>
              <p>Before driving traffic, your digital storefront must be pristine. We transform your Shopify store into a high-converting digital showroom designed to captivate premium buyers.</p>
              <ul className="phase-features">
                <li><i className="fas fa-check"></i> High-ticket brand positioning</li>
                <li><i className="fas fa-check"></i> UI/UX enhancements & speed optimization</li>
                <li><i className="fas fa-check"></i> Conversion-focused product pages</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-number">Phase 2</div>
              <h3>Targeted Acquisition</h3>
              <p>We leverage data-driven media buying to acquire high-intent traffic at scale. Using Meta and Google Ads, we position your products directly in front of buyers ready to convert.</p>
              <ul className="phase-features">
                <li><i className="fas fa-check"></i> Performance Meta & Google Ads</li>
                <li><i className="fas fa-check"></i> Dynamic creative testing & scaling</li>
                <li><i className="fas fa-check"></i> High-ROAS top-of-funnel strategies</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-number">Phase 3</div>
              <h3>Conversion Optimization (CRO)</h3>
              <p>Acquisition is only half the battle. We relentlessly A/B test and optimize every touchpoint in the funnel to turn more clicks into customers and reduce friction.</p>
              <ul className="phase-features">
                <li><i className="fas fa-check"></i> Frictionless checkout processes</li>
                <li><i className="fas fa-check"></i> Data-driven split testing (A/B)</li>
                <li><i className="fas fa-check"></i> Trust-building & social proof architecture</li>
              </ul>
            </article>

            <article className="phase-card">
              <div className="phase-number">Phase 4</div>
              <h3>Retention & Lifetime Value (LTV)</h3>
              <p>The most profitable brands are built on repeat customers. We implement automated retention systems that turn one-time buyers into lifelong brand advocates.</p>
              <ul className="phase-features">
                <li><i className="fas fa-check"></i> Automated Email & SMS flows</li>
                <li><i className="fas fa-check"></i> VIP Customer loyalty programs</li>
                <li><i className="fas fa-check"></i> Post-purchase cross-sell campaigns</li>
              </ul>
            </article>

          </div>
        </section>

      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
