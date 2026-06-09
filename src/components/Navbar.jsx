"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ variant = "default" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [joinMenuOpen, setJoinMenuOpen] = useState(false);

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
          <Link href="/#home" className="nav-logo" aria-label="Home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="/nz-logo.png" 
              alt="NariZari Logo" 
              style={{ height: '38px', width: 'auto', display: 'block' }} 
            />
          </Link>

          <ul className="nav-links">
            <li><Link href="/industries" className="nav-link">Industries</Link></li>
            <li><Link href="/demo" className="nav-link">Live Demo</Link></li>
            <li><Link href="/case-studies" className="nav-link">Case Studies</Link></li>
            <li><Link href="/careers" className="nav-link">Careers</Link></li>
          </ul>

          <div className="nav-join-dropdown">
            <button className="join-us-btn">Join Us <i className="fas fa-chevron-down" style={{ fontSize: '0.8em', marginLeft: '4px' }}></i></button>
            <div className="join-us-menu">
              <Link href="/join?type=manufacturer">As a Manufacturer</Link>
              <Link href="/join?type=wholesaler">As a Wholesaler</Link>
            </div>
          </div>

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
          <Link href="/#home" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} onClick={() => setDrawerOpen(false)}>
            <img 
              src="/nz-logo.png" 
              alt="NariZari Logo" 
              style={{ height: '38px', width: 'auto', display: 'block' }} 
            />
          </Link>
          <button className="drawer-close-btn" id="drawer-close" aria-label="Close Menu" onClick={() => setDrawerOpen(false)}>
            <span>CLOSE</span>
            <span className="close-icon">✕</span>
          </button>
        </div>
        <nav className="drawer-nav">
          <ul className="drawer-links">
            <li><Link href="/services" className="drawer-link" onClick={() => setDrawerOpen(false)}>SERVICES</Link></li>
            <li><Link href="/shopify" className="drawer-link" onClick={() => setDrawerOpen(false)}>SHOPIFY SERVICES</Link></li>
            <li><Link href="/industries" className="drawer-link" onClick={() => setDrawerOpen(false)}>INDUSTRIES</Link></li>
            <li><Link href="/demo" className="drawer-link" onClick={() => setDrawerOpen(false)}>LIVE DEMO</Link></li>
            <li><Link href="/about" className="drawer-link" onClick={() => setDrawerOpen(false)}>ABOUT US</Link></li>
            <li><Link href="/case-studies" className="drawer-link" onClick={() => setDrawerOpen(false)}>CASE STUDIES</Link></li>
            <li><Link href="/contact" className="drawer-link" onClick={() => setDrawerOpen(false)}>CONTACT US</Link></li>
            <li><Link href="/growth-framework" className="drawer-link" onClick={() => setDrawerOpen(false)}>GROWTH FRAMEWORK</Link></li>
            <li><Link href="/careers" className="drawer-link" onClick={() => setDrawerOpen(false)}>CAREERS</Link></li>
            <li style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <div className="nav-join-dropdown mobile-join-dropdown">
                <button 
                  className="join-us-btn" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setJoinMenuOpen(!joinMenuOpen);
                  }}
                >
                  Join Us <i className={`fas fa-chevron-${joinMenuOpen ? 'up' : 'down'}`} style={{ fontSize: '0.8em', marginLeft: '4px' }}></i>
                </button>
                <div className={`join-us-menu ${joinMenuOpen ? 'open' : ''}`}>
                  <Link href="/join?type=manufacturer" onClick={() => setDrawerOpen(false)}>As a Manufacturer</Link>
                  <Link href="/join?type=wholesaler" onClick={() => setDrawerOpen(false)}>As a Wholesaler</Link>
                </div>
              </div>
            </li>
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
