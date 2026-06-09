"use client";

import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import './about.css';

const teamMembers = [
  {
    name: "Akanscha Roy",
    role: "Co-Founder & CBO",
    image: "/images/team/akanscha-roy.jpg",
    bio: "Focusing on business growth and strategic brand partnerships to scale the NariZari portfolio.",
    linkedin: "https://www.linkedin.com/in/akanscha-roy-61641121b/"
  },
  {
    name: "Pooja Tripathi",
    role: "Co-Founder & COO",
    image: "/images/team/pooja-tripathi.jpg",
    bio: "Pioneering operational excellence and guest experience innovation across all managed properties.",
    linkedin: "https://www.linkedin.com/in/pooja-tripathi-80542490/"
  },
  {
    name: "Shachi Mishra",
    role: "Co-Founder & CMO",
    image: "/images/team/shachi-mishra.jpg",
    bio: "Driving marketing excellence and brand strategy for NariZari's global presence.",
    linkedin: "https://www.linkedin.com/in/shachi-mishra-513051374/"
  },
  {
    name: "Raihane Zaghdoud",
    role: "Chief Growth Officer",
    image: "/images/team/rile.jpg",
    bio: "Driving growth strategy and market expansion for the NariZari brand."
  },
  {
    name: "Sonam Singh",
    role: "Director, Operations",
    image: "/images/team/sonam-singh.jpg",
    bio: "Overseeing daily operations and efficiency across the property portfolio.",
    linkedin: "https://www.linkedin.com/in/sonam-singh-21a856381/"
  },
  {
    name: "Sneha Giri",
    role: "Legal Advisor",
    image: "/images/team/sneha-giri.jpg",
    bio: "Ensuring legal compliance and structural integrity.",
    linkedin: "https://www.linkedin.com/in/advocate-sneha-giri-95708b68"
  },
  {
    name: "Aparajita Ghosh",
    role: "Vastu Expert",
    image: "/images/team/aparajita-ghosh.jpg",
    bio: "Harmonizing spaces with traditional Vastu principles.",
    linkedin: "https://www.linkedin.com/in/aparajita-bose-she-her-151b551a6"
  },
  {
    name: "Shikha Mishra",
    role: "PR Manager",
    image: "/images/team/shikha-mishra.jpg",
    bio: "Managing public relations and brand communication."
  },
  {
    name: "Kesar",
    role: "Marketing Manager",
    image: "/images/team/kesar.jpg",
    bio: "Influencer relations and assistant marketing management.",
    linkedin: "https://www.linkedin.com/in/kesar-chaurasia-97703533b/"
  },
  {
    name: "Namira",
    role: "Sales Manager",
    image: "/images/team/namira.jpg",
    bio: "Driving sales growth and corporate partnerships."
  },
  {
    name: "Gitanjali",
    role: "Social Media Expert",
    image: "/images/team/gitanjali.jpg",
    bio: "Crafting NariZari's digital presence and community engagement.",
    linkedin: "https://www.linkedin.com/in/gitanjali-chauhan"
  },
  {
    name: "Ambalica",
    role: "Content Strategist",
    image: "/images/team/ambalica.jpg",
    bio: "Developing compelling narratives for the NariZari brand."
  }
];

const partnerBrands = [
  "Benares Silk Emporium",
  "Kashi Weaves",
  "Zari & Loom",
  "Royal Handlooms",
  "Heritage Varanasi",
  "The Golden Thread",
  "Metro Silk House",
  "Shanti Handwoven"
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        {/* TOP SECTION */}
        <section className="about-top-section">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="about-header-huge">
              ABOUT <span className="about-handwritten" style={{ textTransform: "lowercase", display: "inline-block", transform: "rotate(-2deg)", color: "var(--color-accent)" }}>us</span>
            </h1>
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
                  WHO WE<br/><span className="about-handwritten" style={{ textTransform: "lowercase", display: "inline-block", transform: "rotate(-3deg)" }}>are</span>
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
            <h2 className="section-heading">
              Our <span className="about-handwritten" style={{ textTransform: "lowercase", display: "inline-block", transform: "rotate(-2deg)" }}>story</span>
            </h2>
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
              We partner with <span className="about-handwritten" style={{ textTransform: "lowercase", fontSize: "1.25em", display: "inline-block", transform: "rotate(-1.5deg)" }}>visionary</span> brands to create enduring innovation.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} className="marquee-wrapper">
            <div className="marquee-content">
              {[...Array(2)].map((_, i) => (
                <div key={i} style={{ display: 'flex', gap: '3rem', paddingRight: '3rem' }}>
                  {partnerBrands.map((brand) => (
                    <div key={brand} className="marquee-logo-card">
                      {brand}
                    </div>
                  ))}
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
            <h2 className="section-heading">
              Creative <span className="about-handwritten" style={{ textTransform: "lowercase", display: "inline-block", transform: "rotate(-2deg)" }}>team</span>
            </h2>
          </ScrollReveal>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <ScrollReveal 
                key={member.name} 
                direction="up" 
                delay={0.1 + (index % 3) * 0.1} 
                className="team-member-card"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-member-img"
                  onError={(e) => {
                    e.target.src = '/images/avatar.png';
                  }}
                />
                <div className="team-member-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <span className="team-member-role">{member.role}</span>
                  {member.bio && <p className="team-member-bio">{member.bio}</p>}
                  {member.linkedin && (
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="team-member-linkedin"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
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
