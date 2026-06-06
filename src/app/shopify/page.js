"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './shopify.css';

export default function Shopify() {
  useEffect(() => {
    document.body.classList.add('shopify-dark-theme');
    return () => {
      document.body.classList.remove('shopify-dark-theme');
    };
  }, []);

  return (
    <>
      <Navbar variant="shopify" />
      <main className="shopify-main">
        
    {/*  LEFT COLUMN  */}
    <div className="left-col">
      
      <div className="huge-title">
        <div className="row-1">UNLIMITED</div>
        <div className="row-2">ECOMMERCE</div>
        <div className="row-3">
          <div className="avatar-group">
            <img src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
            <img src="https://i.pravatar.cc/150?img=9" alt="Avatar" />
            <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" />
            <div className="orange-circle"></div>
          </div>
          SCALING
        </div>
      </div>

      <div className="text-blocks">
        <p>Our Solutions</p>
        <p>We Provide The Full<br/>Funnel Approach</p>
      </div>

      <div className="bottom-left">
        <div className="play-video">
          <button className="play-btn">
            <i className="fas fa-play"></i>
          </button>
          <div className="play-text">
            Let's See<br/>How We Did It
          </div>
        </div>

        <div className="pill-tags">
          <div className="pill">Custom Themes</div>
          <div className="pill">Conversion Audits</div>
          <div className="pill">Speed Optimization</div>
        </div>
      </div>
    </div>

    {/*  RIGHT COLUMN  */}
    <div className="right-col">
      
      {/*  Big Lavender Folder  */}
      <div className="folder-card card-lavender">
        <div className="lavender-top">
          <div className="lavender-title">Your<br/>Business<br/>Boost</div>
          <div style={{"display":"flex","gap":"5px"}}>
            <div style={{"width":"8px","height":"8px","background":"#fff","borderRadius":"50%"}}></div>
            <div style={{"width":"8px","height":"8px","border":"1px solid #fff","borderRadius":"50%"}}></div>
          </div>
        </div>
        
        <img src="/assets/shopify_hero.png" alt="Hero Model" className="hero-model" />
        
        <div className="demo-bar">
          <span style={{"fontWeight":"500","fontSize":"1.1rem"}}>Book Demo Call</span>
          <button className="demo-btn">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/*  Small Folders Row  */}
      <div className="bottom-folders">
        
        {/*  Orange  */}
        <div className="small-folder card-orange">
          <div className="small-folder-title">Unique<br/>Business Solutions</div>
          <div className="small-folder-bottom">
            <i className="fas fa-cubes" style={{"fontSize":"2.5rem"}}></i>
          </div>
        </div>

        {/*  Grey  */}
        <div className="small-folder card-grey">
          <div className="small-folder-title" style={{"display":"flex","justifyContent":"space-between"}}>
            <div style={{"display":"flex","gap":"5px","alignItems":"center"}}>
              <div style={{"width":"6px","height":"6px","background":"#000","borderRadius":"50%"}}></div>
              <div style={{"width":"6px","height":"6px","border":"1px solid #000","borderRadius":"50%"}}></div>
            </div>
            <i className="fas fa-arrow-up-right-from-square" style={{"fontSize":"1.5rem","fontWeight":"300"}}></i>
          </div>
          <div className="small-folder-bottom">
            Our Case<br/>Studies
          </div>
        </div>

        {/*  Yellow  */}
        <div className="small-folder card-yellow">
          <div className="small-folder-title">Successful<br/>Projects</div>
          <div className="small-folder-bottom yellow-number">
            700<sup>+</sup>
          </div>
        </div>

      </div>

    </div>

        {/* --- BENTO GRID SECTION --- */}
        <section className="shopify-bento-section">
          <h2 className="shopify-bento-header">The NariZari E-Commerce System</h2>
          
          <div className="shopify-bento-grid">
            
            {/* 1. Large Orange Card */}
            <div className="shopify-bento-card card-ecommerce">
              <span className="shopify-bento-tag">Performance</span>
              <div className="ecommerce-content">
                <div>
                  <h3 className="shopify-bento-title">High-Octane<br/>E-Commerce Engine</h3>
                  <p className="shopify-bento-text">Custom Shopify architecture built for speed and conversions.</p>
                  <div className="ecommerce-stats">
                    <div className="stat-item">
                      <span className="stat-num">3x</span>
                      <span className="stat-label">Faster Loads</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-num">45%</span>
                      <span className="stat-label">Conv. Uplift</span>
                    </div>
                  </div>
                </div>
              </div>
              <img src="/assets/shopify_engine_dashboard.png" alt="High-Octane E-Commerce Dashboard" />
            </div>

            {/* 2. Tall Card */}
            <div className="shopify-bento-card card-growth">
              <span className="shopify-bento-tag" style={{ color: "rgba(0,0,0,0.5)" }}>Ecosystem</span>
              <h3 className="shopify-bento-title">Holistic<br/>Growth<br/>System</h3>
              <p className="shopify-bento-text" style={{ color: "var(--text-light)" }}>Everything from paid media to email retention, integrated.</p>
              <img src="/assets/shopify_growth_nodes.png" alt="Holistic Growth Network Nodes" />
            </div>

            {/* 3. Wide Card */}
            <div className="shopify-bento-card card-integration">
              <span className="shopify-bento-tag" style={{ color: "rgba(0,0,0,0.5)" }}>Tech Stack</span>
              <h3 className="shopify-bento-title">Seamless Integration</h3>
              <p className="shopify-bento-text" style={{ color: "var(--bg-dark)", maxWidth: "60%" }}>
                We connect your favorite tools directly into your Shopify ecosystem.
              </p>
              <div className="integration-logos">
                <i className="fab fa-shopify"></i>
                <i className="fab fa-mailchimp"></i>
                <i className="fab fa-stripe"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-google"></i>
              </div>
            </div>

            {/* 4. Square Dark Card */}
            <div className="shopify-bento-card card-global">
              <span className="shopify-bento-tag">Reach</span>
              <h3 className="shopify-bento-title">Scale Globally,<br/>Act Locally.</h3>
            </div>

            {/* 5. Square Grey Card */}
            <div className="shopify-bento-card card-strategies">
              <img src="/images/avatar.png" alt="Strategist Avatar" className="avatar-img" />
              <h3 className="shopify-bento-title" style={{ fontSize: "1.5rem" }}>Expert Strategies</h3>
              <p className="shopify-bento-text" style={{ fontSize: "0.9rem", color: "var(--bg-dark)" }}>
                Direct access to our top e-commerce growth specialists.
              </p>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}
