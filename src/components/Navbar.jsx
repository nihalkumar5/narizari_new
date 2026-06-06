"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ variant = "default" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (variant === 'shopify') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [variant]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);



  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`} id="navbar" aria-label="Main Navigation">
        <div className="navbar-pill">
          <Link href="/#home" className="nav-logo" aria-label="Home" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: "800", color: "var(--color-white)", letterSpacing: "-0.02em" }}>
              Nari<span style={{ color: "var(--color-accent)" }}>Zari</span>
            </span>
          </Link>

          <ul className="nav-links">
            <li><Link href="/services" className="nav-link">Services</Link></li>
            <li><Link href="/shopify" className="nav-link">Shop Sample</Link></li>
            <li><Link href="/case-studies" className="nav-link">Case Studies</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>

          <div className="nav-socials">
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <button 
              className="menu-toggle-btn" 
              onClick={() => setDrawerOpen(true)}
              aria-label="Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Navigation Drawer */}
      <div 
        className={`drawer-overlay ${drawerOpen ? 'active' : ''}`} 
        id="drawer-overlay" 
        aria-hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      ></div>
      <aside 
        className={`side-drawer ${drawerOpen ? 'active' : ''}`} 
        id="side-drawer" 
        aria-label="Navigation Drawer" 
        aria-hidden={!drawerOpen}
      >
        <div className="drawer-header">
          <Link href="/#home" className="nav-logo" style={{ color: 'var(--color-white)' }} onClick={() => setDrawerOpen(false)}>
            Nari<span>Zari</span>
          </Link>
          <button className="drawer-close-btn" id="drawer-close" aria-label="Close Menu" onClick={() => setDrawerOpen(false)}>
            <span>CLOSE</span>
            <span className="close-icon">✕</span>
          </button>
        </div>
        <nav className="drawer-nav">
          <ul className="drawer-links">
            <li><Link href="/#services" className="drawer-link" onClick={() => setDrawerOpen(false)}>SERVICES</Link></li>
            <li><Link href="/shopify" className="drawer-link" onClick={() => setDrawerOpen(false)}>SHOP SAMPLE</Link></li>
            <li><Link href="/#services" className="drawer-link" onClick={() => setDrawerOpen(false)}>INDUSTRIES</Link></li>
            <li><Link href="/about" className="drawer-link" onClick={() => setDrawerOpen(false)}>ABOUT US</Link></li>
            <li><Link href="/case-studies" className="drawer-link" onClick={() => setDrawerOpen(false)}>CASE STUDIES</Link></li>
            <li><Link href="/#growth-framework" className="drawer-link" onClick={() => setDrawerOpen(false)}>GROWTH FRAMEWORK</Link></li>
            <li><Link href="/careers" className="drawer-link" onClick={() => setDrawerOpen(false)}>CAREERS</Link></li>
            <li><Link href="/contact" className="drawer-link" onClick={() => setDrawerOpen(false)}>CONNECT</Link></li>
          </ul>
        </nav>
        <div className="drawer-footer">
          <p>NariZari — Growth Engine for Heritage Luxury</p>
          <a href="mailto:hello@narizari.com">hello@narizari.com</a>
        </div>
      </aside>
    </>
  );
}
