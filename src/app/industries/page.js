import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import './industries.css';

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="industries-page" style={{ paddingTop: '80px' }}>
        
        {/* Dark Hero Section */}
        <section className="industries-hero">
          <div className="industries-hero-content animate-on-scroll">
            <div className="industries-badge">Who We Scale</div>
            <h1>We Engineer Growth For<br/>Brands That Demand <span>Authority.</span></h1>
            <p>We don't work with everyone. We partner exclusively with premium, high-ticket, and heritage brands that have a proven product but need a scalable, high-converting digital engine to dominate the market.</p>
          </div>
        </section>

        {/* Industry Bento Grid */}
        <section className="industries-bento-section">
          <div className="bento-grid-container">
            
            {/* 1. Core: Heritage Handlooms */}
            <article className="ind-card card-featured animate-on-scroll">
              <div className="ind-bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80")' }}></div>
              <div className="ind-icon"><i className="fas fa-crown"></i></div>
              <div className="ind-content">
                <h3 className="ind-title">Heritage Handlooms & Sarees</h3>
                <p className="ind-desc">Our flagship expertise. We help multi-generational handloom weavers and saree brands transition from local showrooms to dominating the premium D2C market across Tier 1 metros.</p>
                <div className="ind-metric">
                  <i className="fas fa-chart-line"></i> Avg 4x ROAS for Heritage Brands
                </div>
              </div>
            </article>

            {/* 2. Premium E-Commerce */}
            <article className="ind-card card-normal animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="ind-bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80")' }}></div>
              <div className="ind-icon"><i className="fas fa-shopping-bag"></i></div>
              <div className="ind-content">
                <h3 className="ind-title">Premium D2C</h3>
                <p className="ind-desc">For Shopify brands selling high-AOV products. We optimize your entire funnel for profitability and scale.</p>
              </div>
            </article>

            {/* 3. Luxury Fashion */}
            <article className="ind-card card-wide animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="ind-bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80")' }}></div>
              <div className="ind-icon"><i className="fas fa-tshirt"></i></div>
              <div className="ind-content">
                <h3 className="ind-title">Luxury Fashion & Apparel</h3>
                <p className="ind-desc">Positioning your brand not just as clothing, but as an aesthetic choice. We focus on visual storytelling and high-intent audience targeting.</p>
              </div>
            </article>

            {/* 4. Fine Jewelry */}
            <article className="ind-card card-wide animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="ind-bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80")' }}></div>
              <div className="ind-icon"><i className="fas fa-gem"></i></div>
              <div className="ind-content">
                <h3 className="ind-title">Fine Jewelry & Accessories</h3>
                <p className="ind-desc">Selling high-ticket items requires immense trust. Our funnel strategies are designed to build authority and convert hesitant browsers into lifetime buyers.</p>
              </div>
            </article>

            {/* 5. Lifestyle */}
            <article className="ind-card card-normal animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <div className="ind-bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80")' }}></div>
              <div className="ind-icon"><i className="fas fa-couch"></i></div>
              <div className="ind-content">
                <h3 className="ind-title">High-End Decor</h3>
                <p className="ind-desc">Home and lifestyle products that demand a premium aesthetic and an affluent customer base.</p>
              </div>
            </article>

          </div>
        </section>

        {/* Value Prop Section */}
        <section className="value-prop-section animate-on-scroll">
          <div className="value-prop-container">
            <h2 className="value-prop-title">Why NariZari For Your Niche?</h2>
            <p className="value-prop-desc">We don't use cookie-cutter templates. Every industry requires a specific angle, a specific media buying strategy, and a specific funnel architecture. We only take on businesses where we know we can engineer a massive, profitable shift.</p>
            
            {/* Using the standard glassmorphic CTA style for conversion */}
            <Link href="/contact" className="cta-btn" style={{ 
              display: 'inline-flex', 
              background: 'var(--color-accent)', 
              color: '#000',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              fontWeight: '900',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              textDecoration: 'none',
              alignItems: 'center',
              gap: '1rem',
              boxShadow: '0 15px 35px rgba(210, 250, 0, 0.2)'
            }}>
              Let's Discuss Your Brand <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </section>

      </main>

      {/* Premium Footer */}
      <Footer />
    </>
  );
}
