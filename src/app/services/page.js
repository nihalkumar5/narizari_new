import Navbar from '@/components/Navbar';
import ClientLogic from '@/components/ClientLogic';
import Link from 'next/link';

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
    title: "Conversion Optimization (CRO)",
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
      <main style={{ paddingTop: '80px' }}>
        <section id="services">
          <div className="section-container" style={{"borderBottom":"none"}}>
            <div className="section-intro center">
              <span className="section-subtitle">What We Build</span>
              <h2>Quiet Luxury Marketing Systems Built to Command Authority.</h2>
            </div>
            {/*  Categories Style Services  */}
            <div style={{ marginTop: "5rem", display: "flex", flexDirection: "column", gap: "8rem" }}>
              {servicesList.map((service, index) => (
                <div key={service.id} className="service-category" style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "4rem", alignItems: "center" }}>
                  
                  {/* Text Column */}
                  <div className="service-text-col" style={{ gridColumn: "span 5", order: index % 2 === 0 ? 1 : 2 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "1.5rem", color: "var(--color-accent-dark)" }}>✦</span>
                      <span style={{ fontFamily: "var(--font-heading)", fontWeight: "700", fontSize: "1.2rem", color: "var(--color-slate-light)" }}>{service.id}</span>
                    </div>
                    <h3 style={{ fontSize: "clamp(2rem, 3vw, 2.5rem)", marginBottom: "1.5rem", lineHeight: 1.2 }}>{service.title}</h3>
                    <p style={{ fontSize: "1.1rem", color: "var(--color-slate-light)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
                      {service.desc}
                    </p>
                    <div style={{ fontFamily: "var(--font-body)", fontWeight: "700", fontSize: "0.85rem", letterSpacing: "0.08em", color: "var(--color-accent-dark)", textTransform: "uppercase", marginBottom: "2rem" }}>
                      Deliverable: {service.deliverable}
                    </div>
                    <Link href="/#contact" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      Explore Service <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                  
                  {/* Image Column */}
                  <div className="service-img-col" style={{ gridColumn: "span 7", order: index % 2 === 0 ? 2 : 1, borderRadius: "24px", overflow: "hidden", boxShadow: "0 30px 60px rgba(0,0,0,0.12)", position: "relative", aspectRatio: "16/10", background: "var(--color-slate-light)" }}>
                    <img src={service.image} alt={service.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/*  CTA block  */}
        <section className="section-container" style={{"paddingInline":"0","borderBottom":"none"}}>
          <div id="contact" className="bg-navy" style={{"textAlign":"center","position":"relative","padding":"clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)"}}>
            {/*  Subtle visual accent  */}
            <div style={{"position":"absolute","top":"-50%","left":"-50%","width":"200%","height":"200%","background":"radial-gradient(circle, rgba(197, 168, 128, 0.08) 0%, transparent 60%)","pointerEvents":"none"}}></div>
            
            <div style={{"position":"relative","zIndex":"5","maxWidth":"700px","marginInline":"auto"}}>
              <span className="section-subtitle" style={{"color":"var(--color-accent)"}}>Ready to Scale?</span>
              <h2 style={{"color":"var(--color-white)","marginBottom":"1.5rem","fontSize":"clamp(2rem, 3.5vw, 3rem)"}}>Ready To Build A Marketing Engine That Scales?</h2>
              <p style={{"color":"var(--color-white)","opacity":"0.85","marginBottom":"3rem","fontSize":"1.15rem","fontWeight":"400","maxWidth":"550px","marginInline":"auto"}}>
                Schedule a 30-minute heritage brand discovery call. We'll outline your market opportunities and analyze how to take your traditional saree house national.
              </p>
              <a href="https://calendly.com/narizari/discovery" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{"fontSize":"0.95rem","padding":"1rem 2.5rem"}}>Book Your Strategy Call</a>
            </div>
          </div>
        </section>
      </main>
      <ClientLogic />
    </>
  );
}
