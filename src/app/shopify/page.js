"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './shopify.css';

export default function Shopify() {
  useEffect(() => {
    document.body.classList.add('shopify-dark-theme');
    
    // Scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      document.body.classList.remove('shopify-dark-theme');
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
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
          
          <div className="essential-stagger-container animate-on-scroll">
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

        {/* --- TRANSFORMATION SHOWCASE --- */}
        <section className="shopify-transformation-section">
          <div className="transformation-header">
            <span className="modern-badge">
              <i className="fas fa-sparkles"></i> UX/UI UPGRADE
            </span>
            <h2 className="gradient-heading">Conversion Rate Transformations</h2>
            <p className="transformation-desc">See how we redesign outdated funnels into high-converting luxury experiences.</p>
          </div>
          <div className="transformation-grid">
            <div className="transformation-card">
              <h3>Product Page Optimization</h3>
              <img src="/assets/before_after_product.png" alt="Product Page Before and After" />
            </div>
            <div className="transformation-card">
              <h3>Streamlined Checkout Flow</h3>
              <img src="/assets/before_after_checkout.png" alt="Checkout Before and After" />
            </div>
            <div className="transformation-card">
              <h3>Editorial Homepage Redesign</h3>
              <img src="/assets/before_after_home.png" alt="Homepage Before and After" />
            </div>
          </div>
        </section>

        {/* --- BRAND IGNORE SECTION --- */}
        <section className="shopify-brand-ignore-section">
          <div className="brand-ignore-content">
            <h2>We Make Your Brand <span className="neon-text">Impossible To Ignore.</span></h2>
            <div className="brand-ignore-features">
              <span>Beautiful websites.</span>
              <span>Strategic design.</span>
              <span>Real results.</span>
            </div>
          </div>
          <div className="brand-ignore-images animate-on-scroll">
            <div className="ignore-img-wrapper img-1">
              <img src="/assets/c1.png" alt="Showcase 1" />
            </div>
            <div className="ignore-img-wrapper img-2">
              <img src="/assets/c2.png" alt="Showcase 2" />
            </div>
            <div className="ignore-img-wrapper img-3">
              <img src="/assets/c3.png" alt="Showcase 3" />
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS SECTION --- */}
        <section className="shopify-testimonial-section">
          <div className="testimonial-header">
            <span className="testimonial-subtitle">Client Success</span>
            <h2>What They Say?</h2>
          </div>
          <div className="testimonial-cards-container">
            <div className="testi-card card-green">
              <div className="stars">★★★★★</div>
              <p>I honestly didn't realise how much of a difference a professional redesign would make until I tried this service. The team delivered a stunning website that looks exactly like a premium luxury brand. Our conversion rates have skyrocketed!</p>
              <div className="testi-author">
                <img src="/images/avatar.png" alt="User" />
                <div>
                  <strong>Sneha Sharma</strong>
                  <span>Saree Retailer</span>
                </div>
              </div>
            </div>
            <div className="testi-card card-pink">
              <div className="stars">★★★★★</div>
              <p>We booked a complete Shopify overhaul before launching our new collection and was amazed at the attention to detail. They tackled areas I wouldn't even think to optimize. It felt like walking into a brand-new digital flagship store. Highly recommend!</p>
              <div className="testi-author">
                <img src="/images/avatar.png" alt="User" />
                <div>
                  <strong>Rahul Verma</strong>
                  <span>Wholesale Distributor</span>
                </div>
              </div>
            </div>
            <div className="testi-card card-white">
              <div className="stars">★★★★★</div>
              <p>I use them for a regular monthly optimization and it's been a total game-changer. They're reliable, data-driven, and always go above and beyond. Seeing our sales dashboard hit new numbers each week is the best feeling.</p>
              <div className="testi-author">
                <img src="/images/avatar.png" alt="User" />
                <div>
                  <strong>Priya Patel</strong>
                  <span>Boutique Owner</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE SECTION --- */}
        <section className="shopify-why-choose animate-on-scroll">
          <div className="why-choose-header">
            <h2>Why Choose <span className="neon-text">NariZari</span> for Your E-commerce Brand's Growth?</h2>
            <p>At NariZari, we're not just another digital marketing agency—we're your growth partners. We work closely with e-commerce brands to craft tailored, performance-driven strategies that turn traffic into revenue and one-time buyers into loyal customers.</p>
          </div>

          <h3 className="why-choose-subtitle">What Makes Us Different?</h3>
          
          <div className="why-choose-grid">
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-chart-line"></i></div>
              <h4>Proven Shopify Growth Experts</h4>
              <p>We have helped multiple Shopify brands scale to 6, 7, and even 8 figures using a blend of paid ads, conversion optimization, and retention marketing.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-bullseye"></i></div>
              <h4>Data-Driven & ROI-Focused Strategies</h4>
              <p>Every decision we make is backed by analytics, split-testing, and consumer behavior insights, ensuring that your budget is spent efficiently and profitably.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-funnel-dollar"></i></div>
              <h4>Full-Funnel Approach</h4>
              <p>From customer acquisition (ads, SEO) to retention (email, SMS), we create a seamless strategy that maximizes LTV and profitability.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-palette"></i></div>
              <h4>Creative & Ad Strategy That Converts</h4>
              <p>Our in-house creative team designs high-converting ad creatives that engage, persuade, and drive action—leading to higher ROAS.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon"><i className="fas fa-handshake"></i></div>
              <h4>Dedicated Account Management</h4>
              <p>We provide personalized, hands-on account management, ensuring that your brand gets the attention, insights, and strategic guidance needed to scale.</p>
            </div>
          </div>
          
          <div className="why-choose-footer">
            <p>With NariZari, you're not just hiring an agency—you're partnering with a team committed to your brand's long-term success.</p>
            <a href="/contact" className="why-connect-btn">LET'S CONNECT NOW!</a>
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="shopify-cta-section animate-on-scroll">
          <div className="cta-block">
            <span className="cta-pill"><i className="fab fa-whatsapp"></i> Whatsapp Call</span>
            <h2>Ready to Grow Like Crazy?</h2>
            <p>Book your free demo call—let's make your brand the next big thing!</p>
            <button className="cta-btn">Schedule a Free Call <i className="fas fa-arrow-right"></i></button>
            <div className="cta-trust">
              <span className="stars" style={{color:"#e056fd", letterSpacing:"2px"}}>★★★★★</span> Trusted by 200+ brands
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="shopify-footer">
          <div className="footer-content">
            <div className="footer-logo">
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: "800", color: "var(--color-white)", letterSpacing: "-0.02em" }}>
                Nari<span style={{ color: "var(--color-accent)" }}>Zari</span>
              </span>
              <p>Premium Shopify Growth & Marketing Agency</p>
            </div>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Case Studies</a>
              <a href="#">Services</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} NariZari. All rights reserved.</p>
          </div>
        </footer>

      </main>
    </>
  );
}
