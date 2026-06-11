"use client";

import { useEffect } from 'react';

export default function ClientLogic() {
  useEffect(() => {
    // 3. Stats Count-Up Animation
    const statsSection = document.getElementById('stats-counter-container');
    if (statsSection) {
      const counters = statsSection.querySelectorAll('.counter, .counter-prefix, .counter-percent, .counter-float');
      
      const countUp = (element) => {
        const target = parseFloat(element.getAttribute('data-target'));
        const isFloat = element.classList.contains('counter-float');
        const prefix = element.getAttribute('data-prefix') || '';
        const suffix = element.classList.contains('counter-percent') ? '%' : (element.getAttribute('data-suffix') || '');
        
        let current = 0;
        const duration = 1500; // ms
        const frameRate = 60; // fps
        const totalFrames = Math.round((duration / 1000) * frameRate);
        let frame = 0;

        const animate = () => {
          frame++;
          const progress = frame / totalFrames;
          const easeProgress = progress * (2 - progress);
          current = target * easeProgress;

          if (isFloat) {
            element.textContent = `${prefix}${current.toFixed(1)}${suffix}`;
          } else {
            element.textContent = `${prefix}${Math.floor(current)}${suffix}`;
          }

          if (frame < totalFrames) {
            requestAnimationFrame(animate);
          } else {
            if (isFloat) {
              element.textContent = `${prefix}${target.toFixed(1)}${suffix}`;
            } else {
              element.textContent = `${prefix}${target}${suffix}`;
            }
          }
        };

        requestAnimationFrame(animate);
      };

      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(counter => countUp(counter));
            observerInstance.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(statsSection);
    }

    // 4. Smooth Anchor Link Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      if (anchor.getAttribute('href') === '#') return;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // 5. Premium Details Accordion
    const faqAccordion = document.querySelector('.faq-accordion');
    if (faqAccordion) {
      const items = faqAccordion.querySelectorAll('.faq-item');
      items.forEach(item => {
        const summary = item.querySelector('summary');
        const content = item.querySelector('.faq-content');

        summary.addEventListener('click', (e) => {
          e.preventDefault();
          if (item.hasAttribute('open')) {
            item.style.height = `${item.offsetHeight}px`;
            item.offsetHeight; 
            item.style.height = `${summary.offsetHeight}px`;
            item.style.transition = 'height 300ms cubic-bezier(0.16, 1, 0.3, 1)';
            const onTransitionEnd = (event) => {
              if (event.propertyName === 'height') {
                item.removeAttribute('open');
                item.style.height = '';
                item.style.transition = '';
                item.removeEventListener('transitionend', onTransitionEnd);
              }
            };
            item.addEventListener('transitionend', onTransitionEnd);
          } else {
            item.setAttribute('open', '');
            const startHeight = summary.offsetHeight;
            const endHeight = summary.offsetHeight + content.offsetHeight;
            item.style.height = `${startHeight}px`;
            item.offsetHeight; 
            item.style.height = `${endHeight}px`;
            item.style.transition = 'height 300ms cubic-bezier(0.16, 1, 0.3, 1)';
            const onTransitionEnd = (event) => {
              if (event.propertyName === 'height') {
                item.style.height = '';
                item.style.transition = '';
                item.removeEventListener('transitionend', onTransitionEnd);
              }
            };
            item.addEventListener('transitionend', onTransitionEnd);
          }
        });
      });
    }

    // 6. Hero Text Typewriter
    const textElement = document.getElementById('typewriter-text');
    let typeTimeoutId;
    if (textElement) {
      const words = ["Faster", "At Scale", "Risk-Free"];
      let wordIndex = 0;
      let charIndex = words[0].length; 
      let isDeleting = true; 

      textElement.textContent = words[0];

      function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
          textElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          textElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
          typeSpeed = 2500;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          typeSpeed = 500;
        }

        typeTimeoutId = setTimeout(type, typeSpeed);
      }

      typeTimeoutId = setTimeout(type, 2500);
    }

    // Hero Floating Elements (Slight Parallax)
    const heroBg = document.querySelector('.hero-bg-img');
    const heroContent = document.querySelector('.hero-content');
    let parallaxTimeoutId;
    let throttledScroll;
    
    if (heroBg && heroContent) {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
          heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
      };

      throttledScroll = () => {
        if (!parallaxTimeoutId) {
          parallaxTimeoutId = setTimeout(() => {
            handleScroll();
            parallaxTimeoutId = null;
          }, 16); // roughly 60fps
        }
      };

      window.addEventListener('scroll', throttledScroll, { passive: true });
    }

    // 6. Vision Section SVG Underline Animation
    const visionSection = document.getElementById('vision');
    let visionObserver;
    if (visionSection) {
      visionObserver = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const underline = document.getElementById('vision-underline');
            if (underline) {
              // Slight delay so the user has time to see it after scrolling
              setTimeout(() => {
                underline.classList.add('is-visible');
              }, 300);
            }
            observerInstance.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      visionObserver.observe(visionSection);
    }

    // 7. Dynamic Calendly Integration (Video Call Scheduler)
    if (!document.querySelector('link[href*="calendly.com/assets/external/widget.css"]')) {
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    if (!document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const handleCalendlyClick = (e) => {
      e.preventDefault();
      if (window.Calendly) {
        window.Calendly.initPopupWidget({ url: 'https://calendly.com/narizari/discovery' });
      } else {
        window.open('https://calendly.com/narizari/discovery', '_blank');
      }
    };

    const calendlyLinks = document.querySelectorAll('a[href*="calendly.com/narizari"]');
    calendlyLinks.forEach(link => {
      link.addEventListener('click', handleCalendlyClick);
    });

    // Unified Cleanup Function
    return () => {
      if (typeTimeoutId) clearTimeout(typeTimeoutId);
      if (parallaxTimeoutId) clearTimeout(parallaxTimeoutId);
      if (throttledScroll) window.removeEventListener('scroll', throttledScroll);
      if (visionObserver) visionObserver.disconnect();
      calendlyLinks.forEach(link => {
        link.removeEventListener('click', handleCalendlyClick);
      });
    };
  }, []);

  return null;
}
