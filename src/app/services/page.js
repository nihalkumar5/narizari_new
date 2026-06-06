import Navbar from '@/components/Navbar';
import ClientLogic from '@/components/ClientLogic';
import Link from 'next/link';
import './services.css';

const servicesList = [
  {
    id: "01",
    title: "Heritage Brand Positioning",
    desc: "We craft narratives that separate traditional handlooms from mass-produced replicas. By establishing geographical authenticity, craft heritage, and weaving lineage, we elevate your collection's perceived value to justify luxury retail rates.",
    deliverable: "Brand Positioning Blueprint",
    image: "/assets/bento_marketing_1.png"
  },
  {
    id: "02",
    title: "Boutique Storefronts",
    desc: "We construct high-end digital showrooms that reflect the tactile luxury of holding a real silk saree. Engineered with immersive detail views, lightweight loading speeds, and optimized sizing guides.",
    deliverable: "Custom E-Commerce Store",
    image: "/assets/case-study-ecom.png"
  },
  {
    id: "03",
    title: "All-India SEO Systems",
    desc: "We position your brand at the absolute top of search queries for premium pure silk, georgette, and organza Banarasi sarees. Capturing high-intent wedding buyers at the exact moment of search.",
    deliverable: "Organic Search Engine",
    image: "/assets/case-study-brand.png"
  },
  {
    id: "04",
    title: "Performance Marketing",
    desc: "Custom, targeted paid campaigns targeting premium shoppers in Delhi NCR, Mumbai, Bangalore, and Hyderabad. We create quiet luxury visuals and copy that resonate deeply with collectors of premium weaves.",
    deliverable: "Customer Acquisition Engine",
    image: "/assets/saree_ad_1.png"
  },
  {
    id: "05",
    title: "Conversion Optimization",
    desc: "Every element of the checkout and selection path is tuned to increase average order values. We remove purchase objections around fabric authenticity, returns, and color matching.",
    deliverable: "Checkout Optimization",
    image: "/assets/saree_ad_2.png"
  },
  {
    id: "06",
    title: "VIP Lifecycle Automation",
    desc: "Nurture pathways that turn one-time wedding buyers into lifetime collectors of your heritage brand. Automating tailored recommendations, weave releases, and priority reservations.",
    deliverable: "VIP Retention Automation",
    image: "/assets/case-study-saas.png"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="services-page" style={{ paddingTop: '80px' }}>
        
        {/* Brutalist Hero */}
        <section className="services-hero">
          <div className="section-subtitle" style={{ color: "var(--color-navy)", display: "inline-block", marginBottom: "1rem", background: "var(--color-accent)", padding: "0.5rem 1rem", border: "2px solid var(--color-navy)", boxShadow: "3px 3px 0 var(--color-navy)" }}>
            What We Build
          </div>
          <h1 className="services-hero-title">Quiet Luxury Marketing<br/>Systems Built To Command<br/><span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)", "color":"var(--color-accent-dark)"}}>Authority.</span></h1>
          <p className="services-hero-subtitle">
            We don't do basic social media management. We engineer complete growth ecosystems for heritage brands that need to scale nationally.
          </p>
        </section>

        {/*  Brutalist Services List  */}
        <section className="services-list">
          {servicesList.map((service, index) => (
            <article key={service.id} className="service-row">
              
              <div className="service-text-col">
                <div className="service-number">{service.id}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <div className="service-deliverable">
                  Deliverable: {service.deliverable}
                </div>
                <Link href="/contact" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", width: "max-content" }}>
                  Discuss This Service <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
              
              <div className="service-img-col">
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
              </div>

            </article>
          ))}
        </section>
        
        {/*  Brutalist CTA block  */}
        <section className="section-container" style={{ borderBottom: "none", paddingBottom: "6rem", paddingTop: "4rem" }}>
          <div id="contact" style={{
            backgroundColor: "var(--color-accent)",
            border: "4px solid var(--color-navy)",
            boxShadow: "12px 12px 0 var(--color-navy)",
            textAlign: "center",
            position: "relative",
            padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)",
            overflow: "hidden"
          }}>
            {/* Decorative Grid Background */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, width: "100%", height: "100%",
              backgroundImage: "radial-gradient(var(--color-navy) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              opacity: 0.15,
              pointerEvents: "none"
            }}></div>
            
            {/* Abstract Decorative Elements */}
            <div style={{
              position: "absolute",
              top: "-20px",
              left: "-20px",
              width: "100px",
              height: "100px",
              border: "4px solid var(--color-navy)",
              borderRadius: "50%",
              pointerEvents: "none"
            }}></div>
            <div style={{
              position: "absolute",
              bottom: "-30px",
              right: "40px",
              width: "80px",
              height: "80px",
              backgroundColor: "var(--color-white)",
              border: "4px solid var(--color-navy)",
              pointerEvents: "none",
              transform: "rotate(15deg)"
            }}></div>

            <div style={{ position: "relative", zIndex: 5, maxWidth: "750px", marginInline: "auto" }}>
              <div style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "var(--color-navy)",
                color: "var(--color-white)",
                fontFamily: "var(--font-heading)",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "2rem",
                boxShadow: "4px 4px 0 var(--color-white)",
                border: "2px solid var(--color-white)"
              }}>
                Action Required
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-navy)",
                marginBottom: "1.5rem",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                lineHeight: "1.1",
                textTransform: "uppercase"
              }}>
                Ready To Build A Marketing Engine That <span style={{ color: "var(--color-white)", textShadow: "2px 2px 0 var(--color-navy)" }}>Scales?</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-body)",
                color: "var(--color-navy)",
                marginBottom: "3rem",
                fontSize: "1.2rem",
                fontWeight: "600",
                maxWidth: "600px",
                marginInline: "auto",
                lineHeight: "1.6"
              }}>
                Schedule a 30-minute heritage brand discovery call. We'll outline your market opportunities and analyze how to take your traditional saree house national.
              </p>
              <a href="https://calendly.com/narizari/discovery" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{
                fontSize: "1.1rem",
                padding: "1rem 2.5rem",
                backgroundColor: "var(--color-navy)",
                color: "var(--color-white)",
                boxShadow: "4px 4px 0 var(--color-white)"
              }}>
                Book Your Strategy Call
              </a>
            </div>
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
      
      <ClientLogic />
    </>
  );
}
