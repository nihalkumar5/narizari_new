document.addEventListener('DOMContentLoaded', () => {
  setupNavbarScroll();
  setupDrawerNavigation();
  setupStatsCounter();
  setupSmoothScroll();
  setupDetailsAccordion();
  setupTypewriter();
});

/**
 * 1. Sticky Navigation Scroll Effect
 * Toggles a glass/border style when scrolling past 50px
 */
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  // Run on load in case page starts scrolled
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * 2. Side Navigation Drawer & Focus Management
 */
function setupDrawerNavigation() {
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('drawer-close');
  const overlay = document.getElementById('drawer-overlay');
  const drawer = document.getElementById('side-drawer');
  
  if (!toggleBtn || !drawer || !closeBtn || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    overlay.setAttribute('aria-hidden', 'false');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  // Close drawer when clicking links
  drawer.addEventListener('click', (e) => {
    if (e.target.classList.contains('drawer-link')) {
      closeDrawer();
    }
  });

  // ESC key listener to close drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
      toggleBtn.focus();
    }
  });
}

/**
 * 3. Stats Count-Up Animation (via IntersectionObserver)
 */
function setupStatsCounter() {
  const statsSection = document.getElementById('stats-counter-container');
  if (!statsSection) return;

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
      // Ease out quad formula
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
        // Guarantee exact final value
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
        observerInstance.unobserve(entry.target); // Run only once
      }
    });
  }, { threshold: 0.2 });

  observer.observe(statsSection);
}

/**
 * 4. Smooth Anchor Link Scrolling
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Avoid breaking normal tabs or trigger buttons
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
}

/**
 * 5. Premium Details Accordion Height Transitions
 * Animates details height to avoid layout snap
 */
function setupDetailsAccordion() {
  const faqAccordion = document.querySelector('.faq-accordion');
  if (!faqAccordion) return;

  const items = faqAccordion.querySelectorAll('.faq-item');
  items.forEach(item => {
    const summary = item.querySelector('summary');
    const content = item.querySelector('.faq-content');

    summary.addEventListener('click', (e) => {
      e.preventDefault(); // Stop instant toggle
      
      if (item.hasAttribute('open')) {
        // Animating closed
        item.style.height = `${item.offsetHeight}px`;
        // Force reflow
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
        // Animating open
        item.setAttribute('open', '');
        const summaryHeight = summary.offsetHeight;
        const contentHeight = content.offsetHeight;
        const totalHeight = summaryHeight + contentHeight + 16; // Add margin/padding gap

        item.style.height = `${summaryHeight}px`;
        // Force reflow
        item.offsetHeight;
        
        item.style.height = `${totalHeight}px`;
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

/**
 * 6. Hero Text Typewriter Animation
 */
function setupTypewriter() {
  const textElement = document.getElementById('typewriter-text');
  if (!textElement) return;

  const words = ["Faster", "At Scale", "Risk-Free"];
  let wordIndex = 0;
  let charIndex = words[0].length; 
  let isDeleting = true; 

  // Initialize with first word fully typed
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

    // Typing speed configurations
    let typeSpeed = isDeleting ? 40 : 100;

    // Word completed typing
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2500; // Pause at the end of the word
      isDeleting = true;
    } 
    // Word completely deleted
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing new word
    }

    setTimeout(type, typeSpeed);
  }

  // Start animation after initial page load pause
  setTimeout(type, 2500);
}
