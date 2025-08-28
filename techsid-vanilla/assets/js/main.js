// TechSID Vanilla - Main JavaScript with GSAP Animations
// Exact animations from original React/GSAP implementation

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeFAQ();
  initializeAnimations();
});

// Navigation Functionality
function initializeNavigation() {
  const nav = document.querySelector('.nav-container');
  const mobileMenuBtn = document.querySelector('.nav-mobile');
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}


// GSAP Animations - Matching React implementation
function initializeAnimations() {
  // Hero animations
  gsap.fromTo('.hero-title', 
    { 
      opacity: 0, 
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      delay: 0.2,
      ease: "power3.out"
    }
  );

  gsap.fromTo('.hero-subtitle', 
    { 
      opacity: 0, 
      y: 30 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      delay: 0.5,
      ease: "power3.out"
    }
  );

  gsap.fromTo('.hero-cta', 
    { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 0.8, 
      delay: 0.8,
      ease: "back.out(1.7)"
    }
  );

  gsap.fromTo('.hero-image', 
    { 
      opacity: 0, 
      x: 100,
      scale: 0.9
    },
    { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      duration: 1, 
      delay: 0.3,
      ease: "power3.out"
    }
  );

  // Section animations
  gsap.utils.toArray('.section-animate').forEach((section) => {
    gsap.fromTo(section, 
      { 
        opacity: 0, 
        y: 60 
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Card animations
  gsap.utils.toArray('.card-animate').forEach((card, index) => {
    gsap.fromTo(card, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Button hover animations
  const buttons = document.querySelectorAll('[class*="btn-primary"]');
  buttons.forEach(button => {
    const hoverTl = gsap.timeline({ paused: true });
    
    hoverTl.to(button, {
      scale: 1.05,
      boxShadow: "var(--shadow-glow)",
      duration: 0.3,
      ease: "power2.out"
    });

    button.addEventListener('mouseenter', () => hoverTl.play());
    button.addEventListener('mouseleave', () => hoverTl.reverse());
  });

  // Parallax effect for background elements
  gsap.utils.toArray('.parallax-slow').forEach((element) => {
    gsap.to(element, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Floating animation for decorative elements
  gsap.utils.toArray('.float').forEach((element, index) => {
    gsap.to(element, {
      y: -20,
      duration: 2 + index * 0.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: index * 0.3
    });
  });

  // Section Headers Animation
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: header,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Problem Section Cards
  gsap.utils.toArray('.problem-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Solution Card
  gsap.to('.solution-card', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.solution-card',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  // Approach Section Cards
  gsap.utils.toArray('.approach-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });

    // Icon rotation on scroll
    gsap.to(card.querySelector('.approach-icon'), {
      rotation: 360,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Resources Section Cards
  gsap.utils.toArray('.resource-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: index * 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Work Method Section
  gsap.utils.toArray('.work-method-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate feature items
    const features = card.querySelectorAll('.feature-item');
    features.forEach((feature, featureIndex) => {
      gsap.set(feature, { opacity: 0, x: -30 });
      gsap.to(feature, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: (index * 0.3) + (featureIndex * 0.1),
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });

  // Benefits Section Cards
  gsap.utils.toArray('.benefit-card').forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });

    // Icon bounce animation
    const icon = card.querySelector('.benefit-icon');
    gsap.to(icon, {
      scale: 1.1,
      duration: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 70%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ROI Section
  gsap.to('.roi-container', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.roi-container',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  gsap.utils.toArray('.roi-stat').forEach((stat, index) => {
    gsap.set(stat, { opacity: 0, scale: 0.8 });
    gsap.to(stat, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay: index * 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.roi-stats',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    // Number counter animation
    const number = stat.querySelector('.roi-stat-number');
    const originalText = number.textContent;
    const finalValue = parseInt(originalText.replace(/[^\d]/g, ''));
    
    // Extract prefix (+ or -) and suffix (% or x)
    const prefix = originalText.match(/^[+-]/) ? originalText.match(/^[+-]/)[0] : '';
    const suffix = originalText.match(/[%x]$/) ? originalText.match(/[%x]$/)[0] : '';
    
    gsap.set(number, { textContent: prefix + '0' + suffix });
    gsap.to(number, {
      textContent: prefix + finalValue + suffix,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: stat,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // FAQ Section
  gsap.utils.toArray('.faq-item').forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Final CTA Section
  const finalCtaTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.final-cta-section',
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    }
  });

  finalCtaTl
    .to('.final-cta-content', {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out'
    })
    .to('.final-cta-buttons', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .to('.final-cta-trust', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.3');

  // Parallax effect for background elements
  gsap.utils.toArray('.hero-bg-circle-1, .hero-bg-circle-2').forEach(circle => {
    gsap.to(circle, {
      y: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Button hover animations
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Card hover animations
  document.querySelectorAll('.problem-card, .approach-card, .resource-card, .benefit-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -8,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });

  // Social proof number animation
  const socialProofNumbers = document.querySelectorAll('.social-proof-number');
  socialProofNumbers.forEach(number => {
    const finalValue = parseInt(number.textContent.replace(/[^\d]/g, ''));
    const suffix = number.textContent.replace(/[\d]/g, '');
    
    gsap.set(number, { textContent: '0' + suffix });
    gsap.to(number, {
      textContent: finalValue + suffix,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      delay: 1
    });
  });

  // Refresh ScrollTrigger after all animations are set
  ScrollTrigger.refresh();
}

// FAQ Functionality
function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const button = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-content');
    const icon = item.querySelector('.faq-icon svg');
    
    if (button && content) {
      button.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherContent = otherItem.querySelector('.faq-content');
          const otherIcon = otherItem.querySelector('.faq-icon svg');
          if (otherContent) otherContent.style.maxHeight = '0';
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });
        
        // Toggle current item
        if (!isOpen) {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });
}

// Utility function for smooth scrolling
function smoothScrollTo(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Performance optimization
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});

// Resize handler
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});
