import Navbar from '@/components/Navbar';

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      <main className="case-studies-page" style={{ paddingTop: '8rem', backgroundColor: 'var(--color-bg)' }}>
        <section className="section-container" style={{"paddingInline":"0","borderBottom":"none"}}>
          <div className="bg-gray" style={{"padding":"clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)"}}>
            <div className="section-intro" style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-subtitle">Case Studies</span>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem, 6vw, 5rem)", color: "var(--color-navy)", fontWeight: "800", textTransform: "uppercase" }}>
                Where Heritage Meets <br/><span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)", "color": "var(--color-accent-dark)"}}>Modern Conversion.</span>
              </h1>
            </div>

            <div className="bento-grid">
              {/*  Case Study 1  */}
              <article className="bento-card bento-span-12" style={{"padding":"0","border":"1px solid var(--color-border-thin)","backgroundColor":"var(--color-white)","overflow":"hidden","display":"grid","gridTemplateColumns":"repeat(12, 1fr)","borderRadius":"28px"}}>
                <div className="col-6 hover-reveal-container" style={{"gridColumn":"span 6","padding":"0","borderBottom":"none"}}>
                  <img src="/assets/case-study-ecom.png" alt="Maison Eclat premium Varanasi Saree online store mockup" className="hover-reveal-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="hover-overlay"></div>
                </div>
                <div style={{"gridColumn":"span 6","padding":"clamp(2rem, 4vw, 3.5rem)","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"2rem"}}>
                  <div>
                    <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>01. Digital Transformation</span>
                    <h3 style={{"marginBlock":"0.75rem","fontSize":"2rem", "fontFamily": "var(--font-heading)", "color": "var(--color-navy)", "fontWeight": "800"}}>Maison Eclat</h3>
                    <p style={{"marginBottom":"1.5rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Problem:</strong> A 120-year-old Banarasi silk house in Varanasi relied completely on foot traffic. Lacked digital reach.
                    </p>
                    <p style={{"marginBottom":"1.5rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Solution:</strong> We designed an ultra-premium digital boutique, launched localized campaigns targeting affluent collectors, and integrated GI-tag transparency.
                    </p>
                  </div>
                  <div style={{"display":"flex","gap":"2.5rem","paddingTop":"1.5rem","borderTop":"1px solid var(--color-border-thin)"}}>
                    <div>
                      <div style={{"fontSize":"2.25rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>+230%</div>
                      <div style={{"fontSize":"0.75rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Digital Sales</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"2.25rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>₹18.9K</div>
                      <div style={{"fontSize":"0.75rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Avg. Value</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"2.25rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>4.8x</div>
                      <div style={{"fontSize":"0.75rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Ad ROAS</div>
                    </div>
                  </div>
                </div>
              </article>

              {/*  Case Study 2  */}
              <article className="bento-card bento-span-6" style={{"padding":"0","backgroundColor":"var(--color-white)","overflow":"hidden","borderRadius":"28px"}}>
                <div className="hover-reveal-container">
                  <img src="/assets/case-study-brand.png" alt="Aurélie Luxury Saree premium box packaging and branding visual" className="hover-reveal-img" style={{ width: "100%", height: "auto" }} />
                  <div className="hover-overlay"></div>
                </div>
                <div style={{"padding":"2.5rem","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"1.5rem"}}>
                  <div>
                    <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>02. Heritage Positioning</span>
                    <h3 style={{"marginBlock":"0.5rem", "fontFamily": "var(--font-heading)", "color": "var(--color-navy)", "fontWeight": "800"}}>Aurélie Weaves</h3>
                    <p style={{"fontSize":"0.95rem","marginBottom":"1rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Problem:</strong> Saree value was diluted by cheap powerloom replicas sold online.
                    </p>
                    <p style={{"fontSize":"0.95rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Solution:</strong> Created visual storytelling videos tracking the saree from raw silk sourcing to loom. Repositioned the label as "Heritage Couture".
                    </p>
                  </div>
                  <div style={{"display":"flex","gap":"2rem","paddingTop":"1.5rem","borderTop":"1px solid var(--color-border-thin)"}}>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>+187%</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Growth</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>100%</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Weavers Fair-Pay</div>
                    </div>
                  </div>
                </div>
              </article>

              {/*  Case Study 3  */}
              <article className="bento-card bento-span-6" style={{"padding":"0","backgroundColor":"var(--color-white)","overflow":"hidden","borderRadius":"28px"}}>
                <div className="hover-reveal-container">
                  <img src="/assets/case-study-saas.png" alt="FinOps Weaving House logistics and shipping dashboard mockup" className="hover-reveal-img" style={{ width: "100%", height: "auto" }} />
                  <div className="hover-overlay"></div>
                </div>
                <div style={{"padding":"2.5rem","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"1.5rem"}}>
                  <div>
                    <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>03. Scale & Automation</span>
                    <h3 style={{"marginBlock":"0.5rem", "fontFamily": "var(--font-heading)", "color": "var(--color-navy)", "fontWeight": "800"}}>FinOps Handlooms</h3>
                    <p style={{"fontSize":"0.95rem","marginBottom":"1rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Problem:</strong> Logistical bottlenecks and high cart dropoffs during peak wedding shopping seasons.
                    </p>
                    <p style={{"fontSize":"0.95rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Solution:</strong> Setup automated customer care pathways, digital reservation bookings, and direct delivery trackers.
                    </p>
                  </div>
                  <div style={{"display":"flex","gap":"2rem","paddingTop":"1.5rem","borderTop":"1px solid var(--color-border-thin)"}}>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>+212%</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Conversions</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>-40%</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Support Burden</div>
                    </div>
                  </div>
                </div>
              </article>

              {/*  Case Study 4  */}
              <article className="bento-card bento-span-12" style={{"padding":"0","border":"1px solid var(--color-border-thin)","backgroundColor":"var(--color-white)","overflow":"hidden","display":"grid","gridTemplateColumns":"repeat(12, 1fr)","borderRadius":"28px"}}>
                <div style={{"gridColumn":"span 6","padding":"clamp(2rem, 4vw, 3.5rem)","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"2rem"}}>
                  <div>
                    <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>04. D2C Expansion</span>
                    <h3 style={{"marginBlock":"0.75rem","fontSize":"2rem", "fontFamily": "var(--font-heading)", "color": "var(--color-navy)", "fontWeight": "800"}}>Veda Silk House</h3>
                    <p style={{"marginBottom":"1.5rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Problem:</strong> Dependent solely on wholesale buyers, severely limiting profit margins and brand control.
                    </p>
                    <p style={{"marginBottom":"1.5rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Solution:</strong> Launched a premium direct-to-consumer digital storefront with rich visual storytelling and an exclusive VIP membership program.
                    </p>
                  </div>
                  <div style={{"display":"flex","gap":"2.5rem","paddingTop":"1.5rem","borderTop":"1px solid var(--color-border-thin)"}}>
                    <div>
                      <div style={{"fontSize":"2.25rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>+415%</div>
                      <div style={{"fontSize":"0.75rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>D2C Revenue</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"2.25rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>2.5x</div>
                      <div style={{"fontSize":"0.75rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Profit Margin</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"2.25rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>12k+</div>
                      <div style={{"fontSize":"0.75rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>VIP Members</div>
                    </div>
                  </div>
                </div>
                <div className="col-6 hover-reveal-container" style={{"gridColumn":"span 6","padding":"0","borderBottom":"none"}}>
                  <img src="/assets/bento_seamless.png" alt="Veda Silk House UI mockup" className="hover-reveal-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div className="hover-overlay"></div>
                </div>
              </article>

              {/*  Case Study 5  */}
              <article className="bento-card bento-span-6" style={{"padding":"0","backgroundColor":"var(--color-white)","overflow":"hidden","borderRadius":"28px"}}>
                <div className="hover-reveal-container">
                  <img src="/assets/bento_creative.png" alt="Zarina Heritage Ads mockup" className="hover-reveal-img" style={{ width: "100%", height: "auto" }} />
                  <div className="hover-overlay"></div>
                </div>
                <div style={{"padding":"2.5rem","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"1.5rem"}}>
                  <div>
                    <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>05. Performance Creative</span>
                    <h3 style={{"marginBlock":"0.5rem", "fontFamily": "var(--font-heading)", "color": "var(--color-navy)", "fontWeight": "800"}}>Zarina Heritage</h3>
                    <p style={{"fontSize":"0.95rem","marginBottom":"1rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Problem:</strong> High customer acquisition cost (CAC) on Meta ads due to low-quality static imagery.
                    </p>
                    <p style={{"fontSize":"0.95rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Solution:</strong> Produced high-end, cinematic video ads featuring the weaving process, reducing CAC and skyrocketing ROAS.
                    </p>
                  </div>
                  <div style={{"display":"flex","gap":"2rem","paddingTop":"1.5rem","borderTop":"1px solid var(--color-border-thin)"}}>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>-65%</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>CAC Reduction</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>6.2x</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Return on Ad Spend</div>
                    </div>
                  </div>
                </div>
              </article>

              {/*  Case Study 6  */}
              <article className="bento-card bento-span-6" style={{"padding":"0","backgroundColor":"var(--color-white)","overflow":"hidden","borderRadius":"28px"}}>
                <div className="hover-reveal-container">
                  <img src="/assets/dashboard_bento.png" alt="Kashi Collectives Dashboard mockup" className="hover-reveal-img" style={{ width: "100%", height: "auto" }} />
                  <div className="hover-overlay"></div>
                </div>
                <div style={{"padding":"2.5rem","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"1.5rem"}}>
                  <div>
                    <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>06. Global Exports</span>
                    <h3 style={{"marginBlock":"0.5rem", "fontFamily": "var(--font-heading)", "color": "var(--color-navy)", "fontWeight": "800"}}>Kashi Collectives</h3>
                    <p style={{"fontSize":"0.95rem","marginBottom":"1rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Problem:</strong> Handling international B2B bulk orders manually over WhatsApp, leading to errors and delays.
                    </p>
                    <p style={{"fontSize":"0.95rem","fontWeight":"400","color":"var(--color-slate-light)"}}>
                      <strong>Solution:</strong> Built a custom B2B wholesale portal with multi-currency support, tiered pricing, and automated fulfillment.
                    </p>
                  </div>
                  <div style={{"display":"flex","gap":"2rem","paddingTop":"1.5rem","borderTop":"1px solid var(--color-border-thin)"}}>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>+340%</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>B2B Volume</div>
                    </div>
                    <div>
                      <div style={{"fontSize":"1.85rem","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800"}}>Zero</div>
                      <div style={{"fontSize":"0.7rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","fontWeight":"600"}}>Order Errors</div>
                    </div>
                  </div>
                </div>
              </article>
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
    </>
  );
}
