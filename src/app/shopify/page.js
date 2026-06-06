"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import './storefront.css';

export default function Shopify() {
  const [view, setView] = useState('selection'); // 'selection' | 'storefront'
  const [theme, setTheme] = useState('minimal'); // 'minimal' | 'heritage' | 'brutalist'

  const handleSelectTheme = (selected) => {
    setTheme(selected);
    setView('storefront');
  };

  const handleBack = () => {
    setView('selection');
  };

  // Dummy products for the preview
  const products = [
    { id: 1, name: "Banarasi Pure Silk Handloom", price: "₹28,500", image: "/assets/bento_marketing_1.png" },
    { id: 2, name: "Katan Silk Brocade Saree", price: "₹34,000", image: "/assets/case-study-ecom.png" },
    { id: 3, name: "Georgette Zari Weave", price: "₹18,900", image: "/assets/saree_ad_1.png" },
    { id: 4, name: "Organza Tissue Saree", price: "₹22,400", image: "/assets/case-study-brand.png" },
  ];

  return (
    <>
      <Navbar />
      
      {view === 'selection' && (
        <main className="theme-selector-view">
          <div className="theme-selector-header">
            <div className="section-subtitle" style={{ display: "inline-block", marginBottom: "1rem", backgroundColor: "var(--color-navy)", color: "var(--color-white)", padding: "0.5rem 1rem", border: "2px solid var(--color-white)", boxShadow: "4px 4px 0 var(--color-accent)" }}>Interactive Preview</div>
            <h1>Choose Your <span style={{ color: "var(--color-accent-dark)" }}>Design System</span></h1>
            <p style={{ fontSize: "1.2rem", color: "var(--color-slate)", maxWidth: "600px", margin: "0 auto" }}>
              Select an architecture below to preview how our custom Shopify engine adapts to your specific brand aesthetic.
            </p>
          </div>

          <div className="theme-grid">
            
            {/* Minimal Card */}
            <div className="theme-card" onClick={() => handleSelectTheme('minimal')}>
              <div className="theme-card-icon">✦</div>
              <h3>Minimal Luxury</h3>
              <p>Clean lines, abundant white space, and elegant sans-serif typography. Perfect for modern, understated elegance.</p>
            </div>

            {/* Heritage Card */}
            <div className="theme-card" onClick={() => handleSelectTheme('heritage')}>
              <div className="theme-card-icon">✤</div>
              <h3>Heritage Classic</h3>
              <p>Warm tones, serif typography, and traditional framing. Built for legacy brands with deep roots.</p>
            </div>

            {/* Brutalist Card */}
            <div className="theme-card" onClick={() => handleSelectTheme('brutalist')}>
              <div className="theme-card-icon">⬛</div>
              <h3>Modern Brutalist</h3>
              <p>High-contrast, thick borders, neon accents, and heavy typography. Designed to command absolute authority.</p>
            </div>

          </div>
        </main>
      )}

      {view === 'storefront' && (
        <div className="storefront-wrapper">
          <button className="back-to-themes-btn" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i> Back To Themes
          </button>

          <div className="storefront-browser">
            {/* Browser Chrome Bar */}
            <div className="browser-chrome">
              <div className="browser-dot red"></div>
              <div className="browser-dot yellow"></div>
              <div className="browser-dot green"></div>
              <div className="browser-url">
                https://demo.{theme}sarees.com
              </div>
            </div>

            {/* The Actual Storefront Preview */}
            <div className={`sf-body theme-${theme}`}>
              
              {/* Nav */}
              <nav className="sf-nav">
                <div className="sf-logo">
                  {theme === 'minimal' && 'The Silk Edit.'}
                  {theme === 'heritage' && 'Veda Heritage'}
                  {theme === 'brutalist' && 'NARI ZARI'}
                </div>
                <ul className="sf-nav-links">
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Bridal</a></li>
                  <li><a href="#">Katan Silk</a></li>
                  <li><a href="#">Collections</a></li>
                </ul>
              </nav>

              {/* Hero */}
              <section className="sf-hero">
                <div className="sf-hero-content">
                  <h1 className="sf-hero-title">
                    {theme === 'minimal' && 'Quiet Elegance.'}
                    {theme === 'heritage' && 'Woven in Tradition.'}
                    {theme === 'brutalist' && 'UNAPOLOGETIC LUXURY.'}
                  </h1>
                  <p className="sf-hero-desc">
                    Explore our latest collection of handwoven masterpieces direct from the looms of Varanasi.
                  </p>
                </div>
                <div className="sf-hero-img">
                  <img src="/assets/shopify_hero.png" alt="Saree Hero" />
                </div>
              </section>

              {/* Products */}
              <section className="sf-products">
                {products.map((product) => (
                  <div key={product.id} className="sf-product-card">
                    <div className="sf-product-img">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className="sf-product-info">
                      <div>
                        <h4 className="sf-product-title">{product.name}</h4>
                        <p className="sf-product-price">{product.price}</p>
                      </div>
                    </div>
                    <button className="sf-product-btn">Add to Cart</button>
                  </div>
                ))}
              </section>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
