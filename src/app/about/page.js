import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import './about.css';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        {/* TOP SECTION */}
        <section className="about-top-section">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="about-header-huge">ABOUT US</h1>
          </ScrollReveal>
          
          <div className="about-top-content">
            <ScrollReveal direction="right" delay={0.2} className="about-team-image-wrapper">
              <img 
                src="/about_team.png" 
                alt="Our Creative Team" 
                className="about-team-image"
              />
            </ScrollReveal>
            
            <div className="about-top-text-container">
              <ScrollReveal direction="up" delay={0.3}>
                <p className="about-top-lead-text">
                  NariZari is a creative powerhouse of designers, strategists, and developers dedicated to crafting exceptional digital experiences that drive real results.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <p className="about-top-sub-text">
                  10+ years of expertise in managing thriving brands and digital platforms.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.5}>
                <p className="about-top-sub-text">
                  Our team consists of passionate, talented individuals dedicated to pushing the boundaries of creativity. We excel at crafting innovative solutions tailored to your design and branding needs. Whether it's a completely new identity or refreshing an old aesthetic, we deliver.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* BOTTOM SECTION */}
        <section className="about-bottom-section">
          <div className="about-bottom-content">
            <div className="about-bottom-left">
              <ScrollReveal direction="right" delay={0.1} className="about-office-image-wrapper">
                <img 
                  src="/about_office.png" 
                  alt="Our Creative Office" 
                  className="about-office-image"
                />
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.2}>
                <p className="about-bottom-text">
                  At NariZari, we blend innovation with expertise to craft bespoke digital experiences that help businesses stand out in a competitive market. By emphasizing cutting-edge design, we craft meaningful digital experiences that deliver results and enhance brand recognition.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="about-bottom-right">
              <ScrollReveal direction="left" delay={0.3}>
                <h2 className="about-subheader-huge">
                  WHO WE<br/>ARE
                </h2>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* OUR STORY SECTION */}
        <section className="about-story-section">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="section-label-row">
              <span className="section-label"><span className="section-label-plus">+</span> About</span>
              <span>(02)</span>
            </div>
            <h2 className="section-heading">Our Story</h2>
          </ScrollReveal>
          
          <div className="stats-grid">
            <ScrollReveal direction="up" delay={0.2} className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Projects</span>
              </div>
              <span className="stat-value">60+</span>
              <p className="stat-desc">We begin with a friendly conversation to understand your goals.</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Experience</span>
              </div>
              <span className="stat-value">05+</span>
              <p className="stat-desc">We begin with a friendly conversation to understand your goals.</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4} className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Success</span>
              </div>
              <span className="stat-value">98%</span>
              <p className="stat-desc">We begin with a friendly conversation to understand your goals.</p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5} className="stat-card">
              <div className="stat-header">
                <span className="stat-title">Reviews</span>
              </div>
              <span className="stat-value">4.9</span>
              <p className="stat-desc">We begin with a friendly conversation to understand your goals.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* COLLABORATORS SECTION */}
        <section className="about-collaborators-section">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="section-label-row">
              <span className="section-label"><span className="section-label-plus">+</span> Collaborators</span>
              <span>(03)</span>
            </div>
            
            <p className="collaborators-text">
              We partner with visionary brands to create enduring innovation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} className="marquee-wrapper">
            <div className="marquee-content">
              {/* Duplicate set for infinite scroll */}
              {[...Array(2)].map((_, i) => (
                <div key={i} style={{display: 'flex', gap: '4rem'}}>
                  <div className="marquee-logo-card">Brand A</div>
                  <div className="marquee-logo-card">Company B</div>
                  <div className="marquee-logo-card">Studio C</div>
                  <div className="marquee-logo-card">Global D</div>
                  <div className="marquee-logo-card">Agency E</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CREATIVE TEAM SECTION */}
        <section className="about-team-section">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="section-label-row">
              <span className="section-label"><span className="section-label-plus">+</span> Our Team</span>
              <span>(04)</span>
            </div>
            <h2 className="section-heading">Creative Team</h2>
          </ScrollReveal>
          
          <div className="team-grid">
            <ScrollReveal direction="up" delay={0.2} className="team-member-card">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" alt="Team Member" className="team-member-img" />
              <div className="team-member-info">
                <h3 className="team-member-name">Alex Rivera</h3>
                <span className="team-member-role">Creative Director</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.3} className="team-member-card">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" alt="Team Member" className="team-member-img" />
              <div className="team-member-info">
                <h3 className="team-member-name">Jordan Lee</h3>
                <span className="team-member-role">Lead Strategist</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4} className="team-member-card">
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80" alt="Team Member" className="team-member-img" />
              <div className="team-member-info">
                <h3 className="team-member-name">Casey Smith</h3>
                <span className="team-member-role">Senior Designer</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

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
      </main>
    </>
  );
}
