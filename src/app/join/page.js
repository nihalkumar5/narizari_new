"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import './join.css';

function JoinForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') === 'wholesaler' ? 'wholesaler' : 'manufacturer';
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('Submitting...');
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus('Sent successfully!');
        form.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Failed to send.');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (err) {
      setStatus('Failed to send.');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  useEffect(() => {
    const queryType = searchParams.get('type');
    if (queryType === 'wholesaler' || queryType === 'manufacturer') {
      setType(queryType);
    }
  }, [searchParams]);

  return (
    <main className="join-page">
      <Navbar />
      
      <div className="join-container">
        
        <div className="join-header">
          <h1>Partner with <span>NariZari.</span></h1>
          <p>
            Whether you are a master weaver producing heritage textiles, or a luxury wholesaler looking to expand your collection, join our exclusive network.
          </p>
        </div>

        {/* Animated Toggle Switch */}
        <div className="join-toggle-container" data-active={type}>
          <div className="join-toggle-pill"></div>
          <button 
            className={`join-toggle-btn ${type === 'manufacturer' ? 'active' : ''}`}
            onClick={() => setType('manufacturer')}
          >
            Manufacturer
          </button>
          <button 
            className={`join-toggle-btn ${type === 'wholesaler' ? 'active' : ''}`}
            onClick={() => setType('wholesaler')}
          >
            Wholesaler
          </button>
        </div>

        {/* Form Area */}
        <div className="join-form-wrapper">
          
          {type === 'manufacturer' ? (
            <form key="manufacturer-form" className="join-form-content" action="https://formsubmit.co/ajax/hello.narizari@gmail.com" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Manufacturer Registration!" />
              <input type="hidden" name="_captcha" value="false" />
              <div style={{ marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Manufacturer Registration</h2>
                <p style={{ color: 'var(--color-slate)', fontWeight: '500' }}>Register your manufacturing unit to connect directly with verified wholesalers across India.</p>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Contact Person Name *</label>
                  <input type="text" name="contact_person" placeholder="Full name" required />
                </div>
                <div className="join-input-group">
                  <label>Company / Business Name *</label>
                  <input type="text" name="company_name" placeholder="Registered firm name" required />
                </div>
              </div>
              
              <div className="join-row">
                <div className="join-input-group">
                  <label>Production City *</label>
                  <input type="text" name="production_city" placeholder="e.g. Surat, Varanasi" required />
                </div>
                <div className="join-input-group">
                  <label>Dispatch Pincode *</label>
                  <input type="text" name="pincode" placeholder="e.g. 395003" required />
                </div>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Mobile Number *</label>
                  <input type="tel" name="mobile" placeholder="10-digit mobile number" required />
                </div>
                <div className="join-input-group">
                  <label>WhatsApp Number</label>
                  <input type="tel" name="whatsapp" placeholder="If different from mobile" />
                </div>
              </div>

              <div className="join-input-group">
                <label>Business Verification *</label>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', textTransform: 'none', letterSpacing: 'normal', color: 'var(--color-navy)' }}>
                    <input type="radio" name="business_verification" value="registered" required style={{ width: 'auto', padding: '0' }} />
                    Registered Business / Firm (GSTIN)
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', textTransform: 'none', letterSpacing: 'normal', color: 'var(--color-navy)' }}>
                    <input type="radio" name="business_verification" value="independent" required style={{ width: 'auto', padding: '0' }} />
                    Independent Weaver / Heritage Artisan — Direct Source, No Brokers
                  </label>
                </div>
              </div>

              <div className="join-input-group">
                <label>GSTIN Number *</label>
                <input type="text" name="gstin" placeholder="e.g. 07AABCU9603R1ZX" required />
              </div>

              <div className="join-input-group">
                <label>Full Factory / Production Unit Address *</label>
                <textarea name="factory_address" placeholder="Complete address for cargo pickup and logistics coordination" required></textarea>
              </div>



              <div className="join-input-group" style={{ marginTop: '1rem' }}>
                <label>Manufacturing Categories</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.8rem', marginTop: '0.5rem' }}>
                  {['Banarasi Silk', 'Kanjivaram Silk', 'Georgette', 'Chiffon', 'Cotton', 'Linen', 'Tussar Silk', 'Chanderi', 'Patola', 'Bandhani', 'Leheriya', 'Net', 'Crepe', 'Organza', 'Seico', 'Kuddampam'].map(cat => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.95rem', color: 'var(--color-navy)' }}>
                      <input type="checkbox" name="categories" value={cat} style={{ width: 'auto', padding: '0' }} /> {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Minimum Order Quantity (MOQ)</label>
                  <input type="text" name="moq" placeholder="e.g. 50 pieces" />
                </div>
                <div className="join-input-group">
                  <label>Wholesale Price Range (INR) *</label>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%' }}>
                    <input type="number" name="price_min" placeholder="Min" required style={{ flex: 1, minWidth: 0, width: '100%' }} />
                    <span style={{ color: 'var(--color-navy)', fontWeight: '800' }}>—</span>
                    <input type="number" name="price_max" placeholder="Max" required style={{ flex: 1, minWidth: 0, width: '100%' }} />
                  </div>
                </div>
              </div>

              <div className="join-input-group">
                <label>Upload Product Catalog (PDF or Image)</label>
                <input type="file" name="catalog" accept=".pdf,image/*" style={{ background: 'var(--color-white)' }} />
              </div>

              <div className="join-input-group" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontWeight: '500', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.95rem', color: 'var(--color-navy)', cursor: 'pointer' }}>
                  <input type="checkbox" name="terms_agreed" required style={{ width: 'auto', marginTop: '0.25rem', transform: 'scale(1.2)' }} />
                  <span>I have read and agree to NariZari's Terms & Conditions and Privacy Policy. I acknowledge that NariZari is a marketplace platform and is not liable for transaction outcomes, product quality, or disputes between manufacturers and wholesalers.</span>
                </label>
              </div>

              <button type="submit" className="join-submit-btn" disabled={status === 'Submitting...'}>
                {status === 'Submitting...' ? 'Submitting...' : status === 'Sent successfully!' ? 'Registered Successfully!' : status === 'Failed to send.' ? 'Error Occurred' : 'Register Manufacturing Unit'}
              </button>
            </form>
          ) : (
            <form key="wholesaler-form" className="join-form-content" action="https://formsubmit.co/ajax/hello.narizari@gmail.com" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Wholesaler Registration!" />
              <input type="hidden" name="_captcha" value="false" />
              <div style={{ marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Wholesaler Registration</h2>
                <p style={{ color: 'var(--color-slate)', fontWeight: '500' }}>Register as a wholesaler to source premium heritage textiles directly from verified manufacturers.</p>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Contact Person Name *</label>
                  <input type="text" name="contact_person" placeholder="Full name" required />
                </div>
                <div className="join-input-group">
                  <label>Business / Firm Name *</label>
                  <input type="text" name="company_name" placeholder="Registered firm name" required />
                </div>
              </div>
              
              <div className="join-row">
                <div className="join-input-group">
                  <label>City</label>
                  <input type="text" name="city" placeholder="e.g. Lucknow, Hyderabad, Bangalore" />
                </div>
                <div className="join-input-group">
                  <label>Mobile Number *</label>
                  <input type="tel" name="mobile" placeholder="10-digit mobile number" required />
                </div>
              </div>

              <div className="join-input-group">
                <label>WhatsApp Number</label>
                <input type="tel" name="whatsapp" placeholder="If different from mobile" />
              </div>



              <div className="join-input-group">
                <label>Estimated Monthly Volume Requirement</label>
                <input type="text" name="volume" placeholder="e.g. 500 pcs, 2000 pcs" />
              </div>

              <div className="join-input-group">
                <label>Preferred Saree Categories</label>
                <textarea name="categories" placeholder="e.g. Banarasi Silk, Surat Prints, Cotton"></textarea>
              </div>

              <div className="join-input-group">
                <label>Target Price Range per Unit (INR)</label>
                <input type="text" name="price_range" placeholder="e.g. 400–1500" />
              </div>

              <div className="join-input-group" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontWeight: '500', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.95rem', color: 'var(--color-navy)', cursor: 'pointer' }}>
                  <input type="checkbox" name="terms_agreed" required style={{ width: 'auto', marginTop: '0.25rem', transform: 'scale(1.2)' }} />
                  <span>I have read and agree to NariZari's Terms & Conditions and Privacy Policy. I acknowledge that NariZari is a marketplace platform and is not liable for transaction outcomes, product quality, or disputes between manufacturers and wholesalers.</span>
                </label>
              </div>

              <button type="submit" className="join-submit-btn" disabled={status === 'Submitting...'}>
                {status === 'Submitting...' ? 'Submitting...' : status === 'Sent successfully!' ? 'Registered Successfully!' : status === 'Failed to send.' ? 'Error Occurred' : 'Register as Wholesaler'}
              </button>
            </form>
          )}

        </div>
      </div>
    </main>
  );
}

export default function JoinUs() {
  return (
    <Suspense fallback={<div style={{background: '#050505', minHeight: '100vh'}}></div>}>
      <JoinForm />
    </Suspense>
  );
}
