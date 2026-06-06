
import Navbar from '@/components/Navbar';
import ClientLogic from '@/components/ClientLogic';



export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        
    {/*  1. Hero Section (Split Layout)  */}
    <header id="home" className="hero-section">
      <div className="hero-frame">
        {/* Giant Geometric Zig-Zag Background */}
        <div className="hero-zigzag-bg"></div>

        {/*  Full Hero Background Image  */}
        <img src="/assets/hero98_8.png" 
             alt="Premium Varanasi Saree collection showcase" 
             className="hero-bg-img"
             fetchPriority="high" />

        {/*  Hero Content Container  */}
        <div className="hero-container">
          {/*  Hero Content Left  */}
          <div className="hero-content-left">
            {/*  Neon Badge  */}
            <div className="bolt-badge">
              <span className="bolt-badge-new">NEW</span>
              <span className="bolt-badge-text">Get the Bolt Conversion Guarantee &rarr;</span>
            </div>

            <h1>Improve Conversion,<br/><span id="typewriter-text">Faster</span><span className="typewriter-cursor">|</span></h1>
            <p className="hero-desc">
              We help saree brands increase online sales through premium websites, performance marketing, content systems, and conversion-focused growth strategies.
            </p>
            
            <div className="hero-cta-group" style={{"marginTop":"1rem"}}>
              <a href="#contact" className="btn btn-dark-pill" style={{"backgroundColor":"var(--color-navy)","color":"#D6F500","fontWeight":"600","padding":"0.8rem 2rem","fontSize":"1rem"}}>Get started</a>
            </div>

            <div className="hero-trusted-stack" style={{"display":"flex","alignItems":"center","gap":"1rem","marginTop":"1rem"}}>
              <div className="avatar-stack">
                <img src="https://i.pravatar.cc/100?img=5" className="trusted-avatar" alt="User" />
                <img src="https://i.pravatar.cc/100?img=9" className="trusted-avatar" alt="User" />
                <img src="https://i.pravatar.cc/100?img=12" className="trusted-avatar" alt="User" />
              </div>
              <p style={{"fontFamily":"var(--font-body)","fontSize":"0.95rem","fontWeight":"500","color":"#161616","lineHeight":"1.4"}}>
                Trusted by 45+ Saree Brands<br/>Across India
              </p>
            </div>
          </div>
        </div>

        {/*  Floating ROI Glass Card  */}
        <div className="roi-glass-card" style={{"left":"auto","right":"6%","bottom":"8%"}}>
          <div className="roi-stat">
            <span className="roi-value">4.2x</span>
            <span className="roi-label">Average ROAS</span>
          </div>
        </div>

        {/* Floating Glass Pills (Marketing Agency Badges) */}
        <div className="floating-pill" style={{ top: "25%", right: "8%", animationDelay: "0s" }}>
          <i className="fab fa-google"></i> Google Ads
        </div>
        <div className="floating-pill" style={{ top: "35%", left: "55%", animationDelay: "1s" }}>
          <i className="fab fa-meta"></i> Meta Ads
        </div>
        <div className="floating-pill" style={{ bottom: "40%", left: "52%", animationDelay: "2s" }}>
          <i className="fab fa-shopify"></i> Shopify
        </div>
      </div>

      {/*  Built For Trust Bar (Outside Frame)  */}
      <div className="as-seen-in-bar bolt-bar">
        <div className="marquee-track">
          <div className="marquee-content">
            <span className="logo-item">Saks OFF 5TH</span>
            <span className="logo-item">SHINOLA<br/><small>DETROIT</small></span>
            <span className="logo-item">LAFAYETTE 148<br/><small>NEW YORK</small></span>
            <span className="logo-item" style={{"fontFamily":"'Playfair Display', serif","fontWeight":"400","textTransform":"none"}}>BADGLEY<br/>MISCHKA</span>
            <span className="logo-item">BANARASI HOUSE</span>
          </div>
          <div className="marquee-content" aria-hidden="true">
            <span className="logo-item">Saks OFF 5TH</span>
            <span className="logo-item">SHINOLA<br/><small>DETROIT</small></span>
            <span className="logo-item">LAFAYETTE 148<br/><small>NEW YORK</small></span>
            <span className="logo-item" style={{"fontFamily":"'Playfair Display', serif","fontWeight":"400","textTransform":"none"}}>BADGLEY<br/>MISCHKA</span>
            <span className="logo-item">BANARASI HOUSE</span>
          </div>
        </div>
      </div>
    </header>

    {/*  Benefits Bento Section  */}
    <section id="benefits" className="bento-benefits-section">
      <div className="section-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <div className="benefit-badge" style={{ color: "var(--color-white)" }}>
            <span style={{ display: "inline-block", width: "8px", height: "8px", backgroundColor: "#ccff00", borderRadius: "50%", marginRight: "8px", boxShadow: "0 0 10px rgba(204, 255, 0, 0.5)" }}></span>
            Benefits
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "600", marginBottom: "1rem", letterSpacing: "-0.03em", color: "white" }}>Why work with us?</h2>
          <p style={{ color: "#a0a0a0", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto" }}>
            Great marketing is more than just ads—it is an engine built on strategy, creative, and data.
          </p>
        </div>

        <div className="bento-benefits-grid">
          {/* Card 1 */}
          <div className="bento-card bento-card-experience">
            <div className="bento-graphic">
              <div className="css-art-10" style={{ 
                fontSize: "7rem", 
                right: "-10px", 
                position: "absolute", 
                fontWeight: "900", 
                lineHeight: "1", 
                background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: "0.5",
                userSelect: "none"
              }}>10X</div>
            </div>
            <h3>Guaranteed 10X<br/>Average ROAS</h3>
          </div>

          {/* Card 2 */}
          <div className="bento-card bento-card-gear">
            <div className="bento-graphic">
               <i className="fas fa-bullseye" style={{ fontSize: "6rem", color: "#ccff00" }}></i>
            </div>
            <h3>Data-driven<br/>media buying</h3>
          </div>

          {/* Card 3 (Dark) */}
          <div className="bento-card bento-card-editing dark">
            <div className="bento-graphic">
              <i className="fas fa-bolt" style={{ fontSize: "6rem", color: "#ccff00" }}></i>
            </div>
            <h3>High-converting<br/>Shopify funnels</h3>
          </div>

          {/* Card 4 */}
          <div className="bento-card bento-card-seamless">
            <div className="bento-graphic">
               <img src="/assets/glamorous_saree_model.png" alt="Creative Strategy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
            <h3>Premium brand<br/>positioning</h3>
          </div>

          {/* Card 5 (Wide) */}
          <div className="bento-card bento-card-vision">
            <h3>Hyper-targeted<br/>audience expansion</h3>
            <div className="bento-graphic-side" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '2rem' }}>
               <i className="fas fa-bullseye" style={{ fontSize: "10rem", color: "#ccff00", opacity: "0.3" }}></i>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bento-card bento-card-clients">
            <div className="stars" style={{ color: "#ccff00", marginBottom: "0.5rem", fontSize: "1.5rem", fontWeight: "700", letterSpacing: "3px" }}>₹₹₹</div>
            <div className="bento-stat-num">50<span style={{fontSize:"2rem"}}>Cr+</span></div>
            <p className="bento-stat-desc">revenue generated</p>
          </div>

          {/* Card 7 */}
          <div className="bento-card bento-card-turnaround">
            <div className="flex-title" style={{ marginBottom: "2rem", color: "#ccff00" }}>
              <i className="fas fa-chart-pie"></i> <span style={{ color: "white" }}>Real-time Analytics</span>
            </div>
            <div className="bento-graphic-clock">
              <div className="css-clock"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  2. Authority Section (Inside a grand dark-navy rounded block)  */}
    <section id="authority">
      <div className="section-container">
        <div className="swiss-grid">
          <div className="col-12 text-center" style={{"maxWidth":"800px","marginInline":"auto"}}>
            <span className="section-subtitle" style={{"color":"var(--color-navy)","background":"var(--color-accent)","padding":"0.4rem 1rem","borderRadius":"100px","display":"inline-block","fontWeight":"700","marginBottom":"1.5rem"}}>Proven Nationwide Authority</span>
            <h2 style={{"color":"var(--color-navy)","marginBottom":"2rem"}}>Trusted By <span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)"}}>Brands</span> That Expect <span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)"}}>Results.</span></h2>
            <p style={{"color":"var(--color-slate-light)","opacity":"0.9","fontWeight":"500","maxWidth":"650px","marginInline":"auto","fontSize":"1.1rem"}}>
              We don't look at vanity traffic. We track profitable, sustained revenue. We help multi-generational handloom houses break local retail limitations and conquer the premium market across Tier 1 metros.
            </p>
          </div>
        </div>

        <div className="swiss-grid margin-top-lg" id="stats-counter-container" style={{"rowGap":"2rem"}}>
          {/*  Stat 1  */}
          <div className="col-3 text-center glass-card" style={{"padding":"3rem 1.5rem"}}>
            <div style={{"fontSize":"clamp(2.8rem, 4vw, 3.8rem)","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800","lineHeight":"1"}} className="counter" data-target="45">0</div>
            <div style={{"fontFamily":"var(--font-body)","textTransform":"uppercase","fontSize":"0.75rem","letterSpacing":"0.1em","color":"var(--color-slate-light)","marginTop":"1.25rem","fontWeight":"700"}}>₹ Crores Revenue Influenced</div>
          </div>
          {/*  Stat 2  */}
          <div className="col-3 text-center glass-card" style={{"padding":"3rem 1.5rem"}}>
            <div style={{"fontSize":"clamp(2.8rem, 4vw, 3.8rem)","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800","lineHeight":"1"}} className="counter-prefix" data-prefix="" data-target="14" data-suffix="+">0</div>
            <div style={{"fontFamily":"var(--font-body)","textTransform":"uppercase","fontSize":"0.75rem","letterSpacing":"0.1em","color":"var(--color-slate-light)","marginTop":"1.25rem","fontWeight":"700"}}>Heritage Houses Scaled</div>
          </div>
          {/*  Stat 3  */}
          <div className="col-3 text-center glass-card" style={{"padding":"3rem 1.5rem"}}>
            <div style={{"fontSize":"clamp(2.8rem, 4vw, 3.8rem)","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800","lineHeight":"1"}} className="counter-percent" data-target="95">0</div>
            <div style={{"fontFamily":"var(--font-body)","textTransform":"uppercase","fontSize":"0.75rem","letterSpacing":"0.1em","color":"var(--color-slate-light)","marginTop":"1.25rem","fontWeight":"700"}}>Client Retention Rate</div>
          </div>
          {/*  Stat 4  */}
          <div className="col-3 text-center glass-card" style={{"padding":"3rem 1.5rem"}}>
            <div style={{"fontSize":"clamp(2.8rem, 4vw, 3.8rem)","fontFamily":"var(--font-heading)","color":"var(--color-navy)","fontWeight":"800","lineHeight":"1"}} className="counter-float" data-target="4.8">0</div>
            <div style={{"fontFamily":"var(--font-body)","textTransform":"uppercase","fontSize":"0.75rem","letterSpacing":"0.1em","color":"var(--color-slate-light)","marginTop":"1.25rem","fontWeight":"700"}}>Average Digital ROAS</div>
          </div>
        </div>
      </div>
    </section>

    {/*  2.5 Showpiece Section (Hypesonic Theme)  */}
    <section className="section-container" style={{"paddingTop":"4rem","paddingBottom":"8rem","overflow":"hidden"}}>
      <div className="swiss-grid" style={{"textAlign":"center","marginBottom":"4rem"}}>
        <div className="col-12">
          <span className="section-subtitle" style={{"color":"var(--color-navy)","background":"var(--color-accent)","padding":"0.5rem 1.25rem","borderRadius":"100px","display":"inline-flex","alignItems":"center","gap":"8px","fontWeight":"700","marginBottom":"2rem","border":"none","boxShadow":"0 4px 15px rgba(0,0,0,0.05)","fontSize":"0.85rem","textTransform":"uppercase","letterSpacing":"0.05em"}}>
            <i className="fas fa-bullseye" style={{"color":"var(--color-navy)"}}></i> Finally, Ads that Actually Convert
          </span>
          <h2 style={{"color":"var(--color-navy)","fontSize":"clamp(3rem, 6vw, 5rem)","marginBottom":"1.5rem","letterSpacing":"-0.04em","fontWeight":"800"}}>
            Win the <span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)"}}>Advertising</span> War
          </h2>
          <p style={{"color":"var(--color-slate-light)","fontSize":"1.15rem","maxWidth":"650px","margin":"0 auto 2.5rem auto","lineHeight":"1.6"}}>
            NariZari is the AI Performance Marketer, creating high-converting Saree and Ethnic wear video ads that regularly deliver 50% to 500% more conversions
          </p>
          <a href="#demo" className="btn btn-dark-pill" style={{"backgroundColor":"var(--color-navy)","color":"#FFF","padding":"1.2rem 2.5rem","fontSize":"1rem","borderRadius":"100px","fontWeight":"600","display":"inline-flex","alignItems":"center","gap":"10px","border":"none"}}>
            <div style={{"width":"20px","height":"20px","background":"var(--color-accent)","borderRadius":"50%","display":"grid","placeItems":"center"}}><i className="fas fa-play" style={{"fontSize":"8px","color":"var(--color-navy)","marginLeft":"2px"}}></i></div>
            Book a free demo
          </a>
        </div>
      </div>

      {/*  Horizontal Carousel  */}
      <div className="ad-carousel-container" style={{"width":"100vw","position":"relative","left":"50%","right":"50%","marginLeft":"-50vw","marginRight":"-50vw","overflowX":"auto","paddingBottom":"3rem","scrollSnapType":"x mandatory","WebkitOverflowScrolling":"touch","paddingInline":"max(1rem, calc((100vw - var(--max-width)) / 2 + var(--site-padding)))"}}>
        <div className="ad-carousel-track" style={{"display":"flex","gap":"1.5rem","width":"max-content"}}>
          
          {/*  Card 1  */}
          <div className="ad-card" style={{"width":"320px","height":"480px","borderRadius":"24px","overflow":"hidden","position":"relative","scrollSnapAlign":"start","flexShrink":"0","boxShadow":"0 20px 40px rgba(0,0,0,0.15)"}}>
            <video src="/assets/saree_video_1.mp4" poster="/assets/saree_ad_1.png" autoPlay loop muted playsInline style={{"width":"100%","height":"100%","objectFit":"cover"}}></video>
            <div style={{"position":"absolute","top":"20px","left":"20px","background":"rgba(0,0,0,0.5)","backdropFilter":"blur(12px)","WebkitBackdropFilter":"blur(12px)","color":"#FFF","padding":"8px 14px","borderRadius":"100px","fontSize":"0.75rem","fontWeight":"600","display":"flex","alignItems":"center","gap":"8px"}}>
              <div style={{"width":"18px","height":"18px","background":"#000","borderRadius":"50%","display":"grid","placeItems":"center"}}><i className="fas fa-bolt" style={{"fontSize":"8px"}}></i></div> Create a minimal futuristic ad
            </div>
          </div>

          {/*  Card 2  */}
          <div className="ad-card" style={{"width":"320px","height":"480px","borderRadius":"24px","overflow":"hidden","position":"relative","scrollSnapAlign":"start","flexShrink":"0","boxShadow":"0 20px 40px rgba(0,0,0,0.15)"}}>
            <video src="/assets/saree_video_2.mp4" poster="/assets/saree_ad_2.png" autoPlay loop muted playsInline style={{"width":"100%","height":"100%","objectFit":"cover"}}></video>
            <div style={{"position":"absolute","top":"20px","left":"20px","background":"rgba(0,0,0,0.5)","backdropFilter":"blur(12px)","WebkitBackdropFilter":"blur(12px)","color":"#FFF","padding":"8px 14px","borderRadius":"100px","fontSize":"0.75rem","fontWeight":"600","display":"flex","alignItems":"center","gap":"8px"}}>
              <div style={{"width":"18px","height":"18px","background":"#000","borderRadius":"50%","display":"grid","placeItems":"center"}}><i className="fas fa-bolt" style={{"fontSize":"8px"}}></i></div> Create a minimal futuristic ad
            </div>
          </div>

          {/*  Card 3  */}
          <div className="ad-card" style={{"width":"320px","height":"480px","borderRadius":"24px","overflow":"hidden","position":"relative","scrollSnapAlign":"start","flexShrink":"0","boxShadow":"0 20px 40px rgba(0,0,0,0.15)"}}>
            <video src="/assets/saree_video_3.mp4" poster="/assets/saree_ad_1.png" autoPlay loop muted playsInline style={{"width":"100%","height":"100%","objectFit":"cover","filter":"hue-rotate(180deg)"}}></video>
            <div style={{"position":"absolute","top":"20px","left":"20px","background":"rgba(0,0,0,0.5)","backdropFilter":"blur(12px)","WebkitBackdropFilter":"blur(12px)","color":"#FFF","padding":"8px 14px","borderRadius":"100px","fontSize":"0.75rem","fontWeight":"600","display":"flex","alignItems":"center","gap":"8px"}}>
              <div style={{"width":"18px","height":"18px","background":"#000","borderRadius":"50%","display":"grid","placeItems":"center"}}><i className="fas fa-bolt" style={{"fontSize":"8px"}}></i></div> Create a minimal futuristic ad
            </div>
          </div>

          {/*  Card 4  */}
          <div className="ad-card" style={{"width":"320px","height":"480px","borderRadius":"24px","overflow":"hidden","position":"relative","scrollSnapAlign":"start","flexShrink":"0","boxShadow":"0 20px 40px rgba(0,0,0,0.15)"}}>
            <video src="/assets/saree_video_4.mp4" poster="/assets/saree_ad_2.png" autoPlay loop muted playsInline style={{"width":"100%","height":"100%","objectFit":"cover","filter":"sepia(0.5)"}}></video>
            <div style={{"position":"absolute","top":"20px","left":"20px","background":"rgba(0,0,0,0.5)","backdropFilter":"blur(12px)","WebkitBackdropFilter":"blur(12px)","color":"#FFF","padding":"8px 14px","borderRadius":"100px","fontSize":"0.75rem","fontWeight":"600","display":"flex","alignItems":"center","gap":"8px"}}>
              <div style={{"width":"18px","height":"18px","background":"#000","borderRadius":"50%","display":"grid","placeItems":"center"}}><i className="fas fa-bolt" style={{"fontSize":"8px"}}></i></div> Create a minimal futuristic ad
            </div>
          </div>

          {/*  Card 5  */}
          <div className="ad-card" style={{"width":"320px","height":"480px","borderRadius":"24px","overflow":"hidden","position":"relative","scrollSnapAlign":"start","flexShrink":"0","boxShadow":"0 20px 40px rgba(0,0,0,0.15)"}}>
            <video src="/assets/saree_video_5.mp4" poster="/assets/saree_ad_1.png" autoPlay loop muted playsInline style={{"width":"100%","height":"100%","objectFit":"cover","filter":"grayscale(1)"}}></video>
            <div style={{"position":"absolute","top":"20px","left":"20px","background":"rgba(0,0,0,0.5)","backdropFilter":"blur(12px)","WebkitBackdropFilter":"blur(12px)","color":"#FFF","padding":"8px 14px","borderRadius":"100px","fontSize":"0.75rem","fontWeight":"600","display":"flex","alignItems":"center","gap":"8px"}}>
              <div style={{"width":"18px","height":"18px","background":"#000","borderRadius":"50%","display":"grid","placeItems":"center"}}><i className="fas fa-bolt" style={{"fontSize":"8px"}}></i></div> Create a minimal futuristic ad
            </div>
          </div>

        </div>
      </div>
    </section>



    {/*  4. Featured Case Studies (Scoped inside a soft light-grey block)  */}
    <section className="section-container" style={{"paddingInline":"0","borderBottom":"none"}}>
      <div className="bg-gray" style={{"padding":"clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)"}}>
        <div className="section-intro">
          <span className="section-subtitle">Case Studies</span>
          <h2>Where Heritage Meets <span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)"}}>Modern Conversion.</span></h2>
        </div>

        <div className="bento-grid">
          {/*  Case Study 1  */}
          <article className="bento-card bento-span-12" style={{"padding":"0","border":"1px solid var(--color-border-thin)","backgroundColor":"var(--color-white)","overflow":"hidden","display":"grid","gridTemplateColumns":"repeat(12, 1fr)","borderRadius":"28px"}}>
            <div className="col-6 hover-reveal-container" style={{"gridColumn":"span 6","padding":"0","borderBottom":"none"}}>
              <img src="/assets/case-study-ecom.png" alt="Maison Eclat premium Varanasi Saree online store mockup" className="hover-reveal-img" />
              <div className="hover-overlay"></div>
            </div>
            <div style={{"gridColumn":"span 6","padding":"clamp(2rem, 4vw, 3.5rem)","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"2rem"}}>
              <div>
                <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>01. Digital Transformation</span>
                <h3 style={{"marginBlock":"0.75rem","fontSize":"2rem"}}>Maison Eclat</h3>
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
              <img src="/assets/case-study-brand.png" alt="Aurélie Luxury Saree premium box packaging and branding visual" className="hover-reveal-img" />
              <div className="hover-overlay"></div>
            </div>
            <div style={{"padding":"2.5rem","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"1.5rem"}}>
              <div>
                <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>02. Heritage Positioning</span>
                <h3 style={{"marginBlock":"0.5rem"}}>Aurélie Weaves</h3>
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
              <img src="/assets/case-study-saas.png" alt="FinOps Weaving House logistics and shipping dashboard mockup" className="hover-reveal-img" />
              <div className="hover-overlay"></div>
            </div>
            <div style={{"padding":"2.5rem","display":"flex","flexDirection":"column","justifyContent":"space-between","gap":"1.5rem"}}>
              <div>
                <span style={{"fontFamily":"var(--font-body)","fontSize":"0.75rem","fontWeight":"700","color":"var(--color-accent-dark)","letterSpacing":"0.08em","textTransform":"uppercase"}}>03. Scale & Automation</span>
                <h3 style={{"marginBlock":"0.5rem"}}>FinOps Handlooms</h3>
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
        </div>
      </div>
    </section>

    {/*  5. Process Section  */}
    <section id="process" className="bg-navy" style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)",
      backgroundSize: "40px 40px, 40px 40px, 100% 100%"
    }}>
      <div className="section-container" style={{"borderBottom":"none"}}>
        <div className="section-intro center">
          <span className="section-subtitle">Our Framework</span>
          <h2>A Structured Path to <span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)", "color":"var(--color-accent)"}}>Nationwide Scale.</span></h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-row">
            {/*  Step 1  */}
            <div className="timeline-step">
              <div className="timeline-node">01</div>
              <div className="timeline-title">Discovery</div>
              <p className="timeline-desc">Auditing historical metrics, design motifs, GI credentials, and existing weaving capacities.</p>
            </div>
            {/*  Step 2  */}
            <div className="timeline-step">
              <div className="timeline-node">02</div>
              <div className="timeline-title">Strategy</div>
              <p className="timeline-desc">Positioning core products, setting collection structure, and structuring the all-India buyer target matrix.</p>
            </div>
            {/*  Step 3  */}
            <div className="timeline-step">
              <div className="timeline-node">03</div>
              <div className="timeline-title">Design</div>
              <p className="timeline-desc">Crafting a digital showroom with editorial detail layout and seamless purchase pathways.</p>
            </div>
            {/*  Step 4  */}
            <div className="timeline-step">
              <div className="timeline-node">04</div>
              <div className="timeline-title">Launch</div>
              <p className="timeline-desc">Activating conversion architecture alongside high-end targeted search and performance campaigns.</p>
            </div>
            {/*  Step 5  */}
            <div className="timeline-step">
              <div className="timeline-node">05</div>
              <div className="timeline-title">Growth</div>
              <p className="timeline-desc">Deploying VIP automated nurture systems to scale retention and maximize customer lifetime values.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  6. Testimonials Section (Quiet Luxury, SaaS Visuals)  */}
    <section className="section-container" style={{"paddingInline":"0","borderBottom":"none"}}>
      <div className="bg-gray" style={{"padding":"clamp(3rem, 6vw, 6rem) clamp(1.5rem, 5vw, 5rem)"}}>
        <div className="swiss-grid">
          {/*  Left Column - Video Simulation  */}
          <div className="col-6" style={{"display":"flex","flexDirection":"column","justifyContent":"center","position":"relative"}}>
            <span className="section-subtitle">Success In Action</span>
            <h2>Real Revenue. Historic Weaves.</h2>
            <div className="img-frame" style={{"width":"100%","marginTop":"2rem"}}>
              <div style={{"position":"relative","width":"100%","backgroundColor":"var(--color-navy)","aspectRatio":"16/10","display":"flex","alignItems":"center","justifyContent":"center","overflow":"hidden","cursor":"pointer"}}>
                {/*  Simulated video preview using hero dashboard image styled dark  */}
                <img src="/assets/1.png" alt="Simulated video clip of Varanasi Saree loom workshop" style={{"width":"100%","height":"100%","objectFit":"cover","opacity":"0.35","filter":"grayscale(1)"}} />
                {/*  Play Button overlay  */}
                <div style={{"position":"absolute","width":"64px","height":"64px","borderRadius":"50%","backgroundColor":"var(--color-accent)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--color-navy)","fontSize":"1.25rem","boxShadow":"0 10px 30px rgba(197, 168, 128, 0.4)","transition":"transform var(--transition-smooth)"}} aria-label="Play Client Interview Video" className="play-btn">
                  ▶
                </div>
              </div>
            </div>
          </div>

          {/*  Right Column - Customer Outcomes  */}
          <div className="col-6" style={{"display":"flex","flexDirection":"column","justifyContent":"center","gap":"3rem"}}>
            {/*  Testimonial 1  */}
            <blockquote style={{"paddingLeft":"2rem","borderLeft":"3px solid var(--color-accent)","position":"relative"}}>
              <p style={{"fontFamily":"var(--font-heading)","fontSize":"1.45rem","color":"var(--color-navy)","fontWeight":"700","marginBottom":"1.5rem","lineHeight":"1.5","letterSpacing":"-0.01em"}}>
                "We scaled from local wholesale to delivering handwoven Banarasis to modern brides in Mumbai, Bangalore, and Delhi. NariZari built a system that pays for itself ten times over."
              </p>
              <footer style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"50%","backgroundColor":"var(--color-navy)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--color-white)","fontFamily":"var(--font-body)","fontWeight":"700","fontSize":"0.8rem"}}>AS</div>
                <div>
                  <cite style={{"fontFamily":"var(--font-heading)","fontStyle":"normal","fontSize":"1.05rem","fontWeight":"700","color":"var(--color-navy)","display":"block"}}>Aditya Shah</cite>
                  <span style={{"fontSize":"0.8rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","letterSpacing":"0.05em","fontWeight":"600"}}>Director, Varanasi Heritage Weaves</span>
                </div>
              </footer>
            </blockquote>

            {/*  Testimonial 2  */}
            <blockquote style={{"paddingLeft":"2rem","borderLeft":"3px solid var(--color-accent)","position":"relative"}}>
              <p style={{"fontFamily":"var(--font-heading)","fontSize":"1.45rem","color":"var(--color-navy)","fontWeight":"700","marginBottom":"1.5rem","lineHeight":"1.5","letterSpacing":"-0.01em"}}>
                "They understand heritage. It wasn't just templates; they built a brand positioning strategy that immediately made our collection feel exclusive to national buyers."
              </p>
              <footer style={{"display":"flex","alignItems":"center","gap":"1rem"}}>
                <div style={{"width":"44px","height":"44px","borderRadius":"50%","backgroundColor":"var(--color-navy)","display":"flex","alignItems":"center","justifyContent":"center","color":"var(--color-white)","fontFamily":"var(--font-body)","fontWeight":"700","fontSize":"0.85rem"}}>KM</div>
                <div>
                  <cite style={{"fontFamily":"var(--font-heading)","fontStyle":"normal","fontSize":"1.05rem","fontWeight":"700","color":"var(--color-navy)","display":"block"}}>Kriti Mishra</cite>
                  <span style={{"fontSize":"0.8rem","fontFamily":"var(--font-body)","color":"var(--color-slate-light)","textTransform":"uppercase","letterSpacing":"0.05em","fontWeight":"600"}}>Founder, Aurélie Weaves</span>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    {/*  7. Why Choose Us Section (Three columns, Swiss layout)  */}
    <section id="why-choose-us">
      <div className="section-container" style={{"borderBottom":"none"}}>
        <div className="section-intro center">
          <span className="section-subtitle">Our Advantage</span>
          <h2>Engineered for High-Ticket Heritage Labels.</h2>
        </div>

        <div className="swiss-grid">
          {/*  Column 1  */}
          <div className="col-4">
            <div className="glass-card" style={{"height":"100%"}}>
              <h3 style={{"marginBottom":"1rem","fontFamily":"var(--font-heading)","fontSize":"1.35rem","color":"var(--color-navy)"}}><span className="brutalist-number">01</span> Strategy First</h3>
              <p style={{"fontSize":"0.95rem","fontWeight":"500","color":"var(--color-slate-light)"}}>
                We do not start with layout templates. We start with positioning models, average order value goals, and fabric authentication frameworks. We build the sales arguments before writing code.
              </p>
            </div>
          </div>
          {/*  Column 2  */}
          <div className="col-4">
            <div className="glass-card" style={{"height":"100%"}}>
              <h3 style={{"marginBottom":"1rem","fontFamily":"var(--font-heading)","fontSize":"1.35rem","color":"var(--color-navy)"}}><span className="brutalist-number">02</span> Conversion Focused</h3>
              <p style={{"fontSize":"0.95rem","fontWeight":"500","color":"var(--color-slate-light)"}}>
                Traditional luxury brands fail online because their stores are built like simple art galleries rather than sales engines. We engineer layouts to generate high-margin all-India sales.
              </p>
            </div>
          </div>
          {/*  Column 3  */}
          <div className="col-4">
            <div className="glass-card" style={{"height":"100%"}}>
              <h3 style={{"marginBottom":"1rem","fontFamily":"var(--font-heading)","fontSize":"1.35rem","color":"var(--color-navy)"}}><span className="brutalist-number">03</span> Long-Term Partnership</h3>
              <p style={{"fontSize":"0.95rem","fontWeight":"500","color":"var(--color-slate-light)"}}>
                We grow alongside your label. From resolving bottlenecked logistics to optimizing support channels and mapping next-season collections, we act as your national growth arm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  8. Founder Section (Brutalist Layout)  */}
    <section id="vision" className="brutalist-vision-section">
      <div className="brutalist-vision-img-wrapper">
        <img src="/assets/founder_vineet.png" alt="Vineet Mishra, NariZari founder sitting at desk in an editorial portrait" />
      </div>
      <div className="brutalist-vision-content">
        <span className="brutalist-vision-tag">The Vision</span>
        <h2 style={{ color: "var(--color-navy)", fontSize: "clamp(2.5rem, 4vw, 3.8rem)", lineHeight: "1.1", letterSpacing: "-0.03em", marginTop: "1rem" }}>
          "Traditional luxury deserves <br />
          <span style={{ position: "relative", display: "inline-block" }}>
            <span style={{"fontFamily":"var(--font-caveat), cursive", "fontWeight":"500", "fontSize":"1.15em", "display":"inline-block", "transform":"rotate(-2deg)", "color":"var(--color-navy)"}}>modern scale.</span>
            <svg id="vision-underline" className="draw-underline" viewBox="0 0 200 20" style={{ position: "absolute", bottom: "-5px", left: "0", width: "110%", height: "20px", zIndex: "0", transform: "rotate(-2deg)" }}>
              <path d="M5 15 Q 50 0, 100 10 T 195 5" fill="none" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span>"
        </h2>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "var(--color-slate)", fontWeight: "400" }}>
          Varanasi’s handloom heritage is one of India's greatest treasures. Yet, most multi-generational weaving houses struggle to reach customers beyond local showrooms, leaving them vulnerable to market price pressure.
        </p>
        <p style={{ fontWeight: "400", color: "var(--color-slate)", fontSize: "0.95rem" }}>
          I founded <strong>NariZari</strong> to bridge this gap. We combine respect for heritage craftsmanship with modern, data-driven e-commerce systems. By building brand positioning, national marketing pathways, and solid conversion storefronts, we ensure heritage saree houses can sell directly to metropolitan collectors.
        </p>
        <div style={{ borderTop: "4px solid var(--color-navy)", paddingTop: "1.5rem", marginTop: "1rem" }}>
          <p style={{ fontWeight: "700", color: "var(--color-navy)", fontFamily: "var(--font-heading)", fontSize: "1.15rem", textTransform: "uppercase" }}>
            — Vineet Mishra, Founder of NariZari (IIT BHU Alumnus)
          </p>
        </div>
      </div>
    </section>

    {/*  9. FAQ Section (Accordion details/summary)  */}
    <section id="faq">
      <div className="section-container" style={{"borderBottom":"none"}}>
        <div className="section-intro center">
          <span className="section-subtitle">FAQ</span>
          <h2>Addressing Critical Objections</h2>
        </div>

        <div className="faq-accordion">
          {/*  FAQ 1  */}
          <details className="faq-item">
            <summary>What is your pricing model?</summary>
            <div className="faq-content">
              <p>
                We operate on a transparent monthly retainer + performance fee model. Our projects represent an investment to scale high-ticket heritage products. All engagements begin with a discovery phase.
              </p>
            </div>
          </details>

          {/*  FAQ 2  */}
          <details className="faq-item">
            <summary>How long does a full digital setup take?</summary>
            <div className="faq-content">
              <p>
                A complete heritage repositioning and digital showroom launch typically takes 8 to 12 weeks. This ensures ample time for brand narrative development, photography integration, and optimization for the metros.
              </p>
            </div>
          </details>

          {/*  FAQ 3  */}
          <details className="faq-item">
            <summary>Do you only work with Varanasi Saree houses?</summary>
            <div className="faq-content">
              <p>
                Our deepest expertise lies in scaling Varanasi Saree houses, but we also partner with premium Indian handloom houses, heritage textiles, and luxury ethnic wear brands targeting nationwide markets.
              </p>
            </div>
          </details>

          {/*  FAQ 4  */}
          <details className="faq-item">
            <summary>How do you verify and market product authenticity?</summary>
            <div className="faq-content">
              <p>
                We build GI-tag verification overlays, weaver lineage profiles, and high-fidelity video sections directly into product pages. This completely overcomes the metropolitan buyer's fear of powerloom replicas.
              </p>
            </div>
          </details>

          {/*  FAQ 5  */}
          <details className="faq-item">
            <summary>Do you manage national shipping and logistics?</summary>
            <div className="faq-content">
              <p>
                While we do not ship the sarees ourselves, we integrate and automate unified logistics handlers (like Shiprocket or Delhivery) that track orders, secure transit insurance, and send updates to buyers via WhatsApp.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>

    {/*  10. Brutalist CTA Section  */}
    <section id="contact" className="brutalist-cta-section">
      <div className="cta-marquee">
        <div className="cta-marquee-text">SCALE NATIONAL • SCALE NATIONAL • SCALE NATIONAL • SCALE NATIONAL •</div>
      </div>
      
      <div style={{"position":"relative","zIndex":"5","maxWidth":"1000px","marginInline":"auto"}}>
        <span className="brutalist-cta-handwritten">Ready to scale?</span>
        
        <h2 className="brutalist-cta-title">Build A Marketing Engine That Scales.</h2>
        
        <p className="brutalist-cta-p">
          Schedule a 30-minute heritage brand discovery call. We'll outline your market opportunities and analyze how to take your traditional saree house national.
        </p>
        
        <a href="https://calendly.com/narizari/discovery" target="_blank" rel="noopener noreferrer" className="brutalist-cta-btn">
          BOOK STRATEGY CALL
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" style={{marginLeft: "15px", verticalAlign: "middle"}}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  
      {/* 11. Premium Footer */}
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
              <a href="#services">Our Services</a>
              <a href="#process">The Framework</a>
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
      <ClientLogic />
    </>
  );
}
