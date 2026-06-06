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
              <div className="join-row">
                <div className="join-input-group">
                  <label>Business Name</label>
                  <input type="text" placeholder="e.g. Veda Weavers" required />
                </div>
                <div className="join-input-group">
                  <label>Contact Person</label>
                  <input type="text" placeholder="Full Name" required />
                </div>
              </div>
              
              <div className="join-row">
                <div className="join-input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="hello@company.com" required />
                </div>
                <div className="join-input-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" required />
                </div>
              </div>

              <div className="join-input-group">
                <label>Primary Textiles Manufactured</label>
                <select required>
                  <option value="" disabled selected>Select specialization...</option>
                  <option value="katan">Katan Silk</option>
                  <option value="banarasi">Banarasi Brocade</option>
                  <option value="chanderi">Chanderi</option>
                  <option value="other">Other Heritage Textiles</option>
                </select>
              </div>

              <div className="join-input-group">
                <label>Production Capacity (per month)</label>
                <input type="text" placeholder="e.g. 500 units" required />
              </div>

              <div className="join-input-group">
                <label>Message / Additional Details</label>
                <textarea placeholder="Tell us about your heritage and weaving techniques..."></textarea>
              </div>

              <button type="submit" className="join-submit-btn">Apply as Manufacturer</button>
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
                <select required>
                  <option value="" disabled selected>Select store type...</option>
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
