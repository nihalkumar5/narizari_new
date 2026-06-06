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

        {/* --- SHOPIFY ESSENTIAL SECTION --- */}
        <section className="shopify-essential-section">
          <div className="shopify-essential-header">
            <h2 className="essential-title">Why <span>SHOPIFY</span> is Essential for <br/> Growing Your Business</h2>
          </div>
          
          <div className="essential-stagger-container">
            {/* Card 1 */}
            <div className="essential-card card-align-left accent-lavender">
              <div className="essential-number">1</div>
              <p>Simple to set up and manage without needing technical skills.</p>
            </div>

            {/* Card 2 */}
            <div className="essential-card card-align-right accent-orange">
              <div className="essential-number">2</div>
              <p>Secure, reliable, and trusted by millions of online stores.</p>
            </div>

            {/* Card 3 */}
            <div className="essential-card card-align-left accent-cyan">
              <div className="essential-number">3</div>
              <p>Offers built-in tools for marketing, SEO, and sales optimization.</p>
            </div>

            {/* Card 4 */}
            <div className="essential-card card-align-right accent-yellow">
              <div className="essential-number">4</div>
              <p>Easily scalable to support your business as it grows.</p>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
