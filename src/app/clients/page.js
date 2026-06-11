"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      <main style={{ 
        backgroundColor: '#0f0d0c',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(210, 250, 0, 0.05), transparent 60%), radial-gradient(circle at 10% 80%, rgba(210, 250, 0, 0.01), transparent 40%)',
        color: '#FFFFFF',
        minHeight: '100vh',
        paddingTop: '120px',
        paddingBottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'var(--font-body)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <span className="section-subtitle" style={{
            color: 'var(--color-navy)',
            background: 'var(--color-accent)',
            padding: '0.4rem 1.25rem',
            borderRadius: '100px',
            display: 'inline-block',
            fontWeight: '700',
            marginBottom: '2rem',
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Our Partners
          </span>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: '800',
            lineHeight: '1.15',
            color: '#FFFFFF',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em'
          }}>
            Scaling Heritage <br/>
            <span style={{ 
              fontFamily: 'var(--font-caveat), cursive', 
              color: 'var(--color-accent)',
              fontSize: '1.15em',
              fontWeight: '400',
              display: 'inline-block',
              transform: 'rotate(-2deg)'
            }}>
              Labels.
            </span>
          </h1>

          <p style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: '#a0a0a0',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
            fontWeight: '400'
          }}>
            We collaborate with multi-generational handloom houses and luxury saree designers to reach digital collectors nationwide.
          </p>

          <div className="glass-card" style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            width: '100%',
            maxWidth: '650px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
          }}>
            <i className="fas fa-crown" style={{ 
              fontSize: '2rem', 
              color: 'var(--color-accent)', 
              marginBottom: '1.5rem',
              display: 'block'
            }}></i>
            <h3 style={{ 
              color: '#FFFFFF', 
              marginBottom: '1rem', 
              fontSize: '1.5rem',
              fontWeight: '700'
            }}>
              Client Profiles Under Curation
            </h3>
            <p style={{ 
              color: '#8c8c8c', 
              fontSize: '1rem', 
              lineHeight: '1.6',
              margin: '0 auto',
              maxWidth: '450px'
            }}>
              We are currently finalizing our case studies showcasing the digital growth metrics of our partner heritage brands. Check back soon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
