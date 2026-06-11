import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        
        {/*  Brutalist Dark CTA block  */}
        <section className="section-container" style={{ borderBottom: "none", paddingBottom: "6rem", paddingTop: "4rem" }}>
          <div id="contact" style={{
            background: "linear-gradient(135deg, var(--color-navy) 0%, #1a1f2e 100%)",
            border: "4px solid var(--color-navy)",
            boxShadow: "12px 12px 0 var(--color-accent)",
            textAlign: "center",
            position: "relative",
            padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem)",
            overflow: "hidden"
          }}>
            {/* Decorative Grid Background */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, width: "100%", height: "100%",
              backgroundImage: "radial-gradient(rgba(255,255,255,0.1) 2px, transparent 2px)",
              backgroundSize: "30px 30px",
              opacity: 0.5,
              pointerEvents: "none"
            }}></div>
            
            {/* Rotating Badge */}
            <div style={{
              position: "absolute",
              top: "-20px",
              right: "20px",
              width: "140px",
              height: "140px",
              backgroundColor: "var(--color-accent)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid var(--color-navy)",
              boxShadow: "6px 6px 0 var(--color-navy)",
              zIndex: 10
            }}>
              <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%", animation: "spin-slow 12s linear infinite" }}>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                <text style={{ fontSize: "11.5px", fontFamily: "var(--font-heading)", fontWeight: "bold", fill: "var(--color-navy)", letterSpacing: "1px" }}>
                  <textPath href="#circlePath" startOffset="0%">
                    HERITAGE BRAND SCALING • HIGH ROI • 
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Abstract Decorative Elements */}
            <div style={{
              position: "absolute",
              bottom: "-30px",
              left: "40px",
              width: "80px",
              height: "80px",
              backgroundColor: "transparent",
              border: "4px solid var(--color-accent)",
              pointerEvents: "none",
              transform: "rotate(15deg)"
            }}></div>

            <div style={{ position: "relative", zIndex: 5, maxWidth: "750px", marginInline: "auto" }}>
              <div style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "var(--color-white)",
                color: "var(--color-navy)",
                fontFamily: "var(--font-heading)",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "2.5rem",
                boxShadow: "4px 4px 0 var(--color-accent)",
                border: "2px solid var(--color-navy)"
              }}>
                Action Required
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-white)",
                marginBottom: "1.5rem",
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                lineHeight: "1.1",
                textTransform: "uppercase"
              }}>
                Ready To Build A Marketing Engine That <span style={{ color: "var(--color-accent)", textShadow: "2px 2px 0 var(--color-navy)" }}>Scales?</span>
              </h2>
              <p style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255, 255, 255, 0.85)",
                marginBottom: "3rem",
                fontSize: "1.2rem",
                fontWeight: "400",
                maxWidth: "600px",
                marginInline: "auto",
                lineHeight: "1.6"
              }}>
                Schedule a 30-minute heritage brand discovery call. We'll outline your market opportunities and analyze how to take your traditional saree house national.
              </p>
              <a href="mailto:hello.narizari@gmail.com?subject=Request%20for%20Strategy%20Call%20-%20NariZari&body=Hi%20NariZari%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20strategy%20call%20for%20my%20brand.%0A%0ABrand%20Name%3A%20%0APhone%20Number%3A%20%0AWebsite%3A%20%0APreferred%20Date%20%26%20Time%3A%20%0A%0ABest%20regards%2C" className="services-cta-btn">
                Book Your Strategy Call
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <Footer />
      
      <ClientLogic />
    </>
  );
}
