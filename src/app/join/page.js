"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import './join.css';

function JoinForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') === 'retailer' ? 'retailer' : 'manufacturer';
  const [type, setType] = useState(initialType);

  useEffect(() => {
    const queryType = searchParams.get('type');
    if (queryType === 'retailer' || queryType === 'manufacturer') {
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
            Whether you are a master weaver producing heritage textiles, or a luxury retailer looking to expand your collection, join our exclusive network.
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
            className={`join-toggle-btn ${type === 'retailer' ? 'active' : ''}`}
            onClick={() => setType('retailer')}
          >
            Retailer
          </button>
        </div>

        {/* Form Area */}
        <div className="join-form-wrapper">
          
          {type === 'manufacturer' ? (
            <form key="manufacturer-form" className="join-form-content" onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Manufacturer Registration</h2>
                <p style={{ color: 'var(--color-slate)', fontWeight: '500' }}>Register your manufacturing unit to connect directly with verified wholesalers across India.</p>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Contact Person Name *</label>
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="join-input-group">
                  <label>Company / Business Name *</label>
                  <input type="text" placeholder="Registered firm name" required />
                </div>
              </div>
              
              <div className="join-row">
                <div className="join-input-group">
                  <label>Production City *</label>
                  <input type="text" placeholder="e.g. Surat, Varanasi" required />
                </div>
                <div className="join-input-group">
                  <label>Dispatch Pincode *</label>
                  <input type="text" placeholder="e.g. 395003" required />
                </div>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Mobile Number *</label>
                  <input type="tel" placeholder="10-digit mobile number" required />
                </div>
                <div className="join-input-group">
                  <label>WhatsApp Number</label>
                  <input type="tel" placeholder="If different from mobile" />
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
                <input type="text" placeholder="e.g. 07AABCU9603R1ZX" required />
              </div>

              <div className="join-input-group">
                <label>Full Factory / Production Unit Address *</label>
                <textarea placeholder="Complete address for cargo pickup and logistics coordination" required></textarea>
              </div>

              <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', color: 'var(--color-navy)' }}>Login Credentials</h3>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="business@email.com" required />
                </div>
                <div className="join-input-group">
                  <label>Password *</label>
                  <input type="password" placeholder="Minimum 6 characters" required minLength="6" />
                </div>
              </div>

              <div className="join-input-group" style={{ marginTop: '1rem' }}>
                <label>Manufacturing Categories</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '0.8rem', marginTop: '0.5rem' }}>
                  {['Banarasi Silk', 'Kanjivaram Silk', 'Georgette', 'Chiffon', 'Cotton', 'Linen', 'Tussar Silk', 'Chanderi', 'Patola', 'Bandhani', 'Leheriya', 'Net', 'Crepe', 'Organza', 'Seico', 'Kuddampam'].map(cat => (
                    <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.95rem', color: 'var(--color-navy)' }}>
                      <input type="checkbox" value={cat} style={{ width: 'auto', padding: '0' }} /> {cat}
                    </label>
                  ))}
                </div>
              </div>

              <div className="join-row">
                <div className="join-input-group">
                  <label>Minimum Order Quantity (MOQ)</label>
                  <input type="text" placeholder="e.g. 50 pieces" />
                </div>
                <div className="join-input-group">
                  <label>Wholesale Price Range (INR) *</label>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <input type="number" placeholder="Min" required style={{ flex: 1 }} />
                    <span style={{ color: 'var(--color-navy)', fontWeight: '800' }}>—</span>
                    <input type="number" placeholder="Max" required style={{ flex: 1 }} />
                  </div>
                </div>
              </div>

              <div className="join-input-group">
                <label>Upload Product Catalog (PDF or Image)</label>
                <input type="file" accept=".pdf,image/*" style={{ background: 'var(--color-white)' }} />
              </div>

              <div className="join-input-group" style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', fontWeight: '500', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.95rem', color: 'var(--color-navy)', cursor: 'pointer' }}>
                  <input type="checkbox" required style={{ width: 'auto', marginTop: '0.25rem', transform: 'scale(1.2)' }} />
                  <span>I have read and agree to NariZari's Terms & Conditions and Privacy Policy. I acknowledge that NariZari is a marketplace platform and is not liable for transaction outcomes, product quality, or disputes between manufacturers and wholesalers.</span>
                </label>
              </div>

              <button type="submit" className="join-submit-btn">Register Manufacturing Unit</button>
            </form>
          ) : (
            <form key="retailer-form" className="join-form-content" onSubmit={(e) => e.preventDefault()}>
              <div className="join-row">
                <div className="join-input-group">
                  <label>Store / Brand Name</label>
                  <input type="text" placeholder="e.g. Heritage Luxe" required />
                </div>
                <div className="join-input-group">
                  <label>Contact Person</label>
                  <input type="text" placeholder="Full Name" required />
                </div>
              </div>
              
              <div className="join-row">
                <div className="join-input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="purchasing@store.com" required />
                </div>
                <div className="join-input-group">
                  <label>Store Location(s)</label>
                  <input type="text" placeholder="e.g. Mumbai, New York" required />
                </div>
              </div>

              <div className="join-input-group">
                <label>Store Type</label>
                <select required defaultValue="">
                  <option value="" disabled>Select store type...</option>
                  <option value="boutique">Independent Boutique</option>
                  <option value="chain">Retail Chain</option>
                  <option value="online">E-Commerce Only</option>
                  <option value="department">Department Store</option>
                </select>
              </div>

              <div className="join-input-group">
                <label>Website / Instagram</label>
                <input type="url" placeholder="https://" />
              </div>

              <div className="join-input-group">
                <label>What are you looking to source?</label>
                <textarea placeholder="e.g. Bridal Lehengas, Handloom Sarees..."></textarea>
              </div>

              <button type="submit" className="join-submit-btn">Apply as Retailer</button>
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
