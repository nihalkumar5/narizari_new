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
              
              {/* Promo Banner */}
              <div className="sf-promo-banner">
                <p>COMPLIMENTARY WORLDWIDE SHIPPING ON ORDERS OVER ₹50,000</p>
              </div>

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
                <div className="sf-nav-icons">
                  <i className="fas fa-search"></i>
                  <i className="far fa-user"></i>
                  <i className="fas fa-shopping-bag"></i>
                </div>
              </nav>

              {/* Hero */}
              <section className="sf-hero">
                <div className="sf-hero-content">
                  <div className="sf-hero-badge">NEW BRIDAL COLLECTION</div>
                  <h1 className="sf-hero-title">
                    {theme === 'minimal' && 'Quiet Elegance.'}
                    {theme === 'heritage' && 'Woven in Tradition.'}
                    {theme === 'brutalist' && 'UNAPOLOGETIC LUXURY.'}
                  </h1>
                  <p className="sf-hero-desc">
                    Explore our latest collection of handwoven masterpieces direct from the looms of Varanasi. Crafted for generations.
                  </p>
                  <div className="sf-hero-actions">
                    <button className="sf-btn-primary">Shop Collection</button>
                    <button className="sf-btn-secondary">View Lookbook</button>
                  </div>
                </div>
                <div className="sf-hero-img">
                  <div className="img-wrapper">
                    <img src="/assets/shopify_hero.png" alt="Saree Hero" />
                  </div>
                </div>
              </section>

              {/* Features / Benefits */}
              <section className="sf-features">
                <div className="sf-feature">
                  <i className="fas fa-certificate"></i>
                  <h4>Silk Mark Certified</h4>
                  <p>100% authentic pure handloom silk</p>
                </div>
                <div className="sf-feature">
                  <i className="fas fa-globe-asia"></i>
                  <h4>Global Shipping</h4>
                  <p>Secure, insured delivery worldwide</p>
                </div>
                <div className="sf-feature">
                  <i className="fas fa-undo"></i>
                  <h4>Easy Returns</h4>
                  <p>Hassle-free 14-day return policy</p>
                </div>
              </section>

              {/* Products Section */}
              <section className="sf-products-section">
                <div className="sf-section-header">
                  <h2>Curated Selection</h2>
                  <a href="#">View All <i className="fas fa-arrow-right"></i></a>
                </div>
                <div className="sf-products">
                  {products.map((product, index) => (
                    <div key={product.id} className="sf-product-card">
                      <div className="sf-product-img">
                        {index === 0 && <span className="sf-badge bestseller">Bestseller</span>}
                        {index === 1 && <span className="sf-badge new">New</span>}
                        <img src={product.image} alt={product.name} />
                        <div className="sf-quick-add">
                          <button>Quick Add +</button>
                        </div>
                      </div>
                      <div className="sf-product-info">
                        <div>
                          <div className="sf-stars">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                          </div>
                          <h4 className="sf-product-title">{product.name}</h4>
                          <p className="sf-product-price">{product.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Footer */}
              <footer className="sf-footer">
                <div className="sf-footer-grid">
                  <div className="sf-footer-col">
                    <div className="sf-logo-footer">
                      {theme === 'minimal' && 'The Silk Edit.'}
                      {theme === 'heritage' && 'Veda Heritage'}
                      {theme === 'brutalist' && 'NARI ZARI'}
                    </div>
                    <p>Curators of authentic handwoven luxury from Varanasi.</p>
                  </div>
                  <div className="sf-footer-col">
                    <h4>Shop</h4>
                    <a href="#">Sarees</a>
                    <a href="#">Lehengas</a>
                    <a href="#">Fabrics</a>
                  </div>
                  <div className="sf-footer-col">
                    <h4>Support</h4>
                    <a href="#">Contact</a>
                    <a href="#">Shipping</a>
                    <a href="#">Returns</a>
                  </div>
                  <div className="sf-footer-col newsletter-col">
                    <h4>Join the List</h4>
                    <div className="sf-newsletter">
                      <input type="email" placeholder="Email Address" />
                      <button>→</button>
                    </div>
                  </div>
                </div>
              </footer>

            </div>
          </div>
        </div>
      )}
    </>
  );
}
