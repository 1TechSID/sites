// Set current year
(function setYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Smooth scroll for internal links
(function enableSmoothScroll(){
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const hash = a.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();

// GSAP animations
window.addEventListener('load', () => {
  if (window.gsap) {
    const { gsap } = window;
    // Hero intro
    gsap.from('.site-header', { y: -30, opacity: 0, duration: 0.6, ease: 'power2.out' });
    gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' });
    gsap.from('.subtitle', { y: 16, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });
    gsap.from('.hero-ctas .cta', { y: 16, opacity: 0, duration: 0.6, delay: 0.3, ease: 'power2.out', stagger: 0.08 });

    // Scroll indicator gentle bounce
    if (document.querySelector('.scroll-indicator')) {
      gsap.to('.scroll-indicator', { y: 4, repeat: -1, yoyo: true, ease: 'power1.inOut', duration: 1.2 });
    }

    // Scroll reveals
    if (gsap.registerPlugin && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      // Hero background subtle parallax
      const heroBg = document.querySelector('.hero-bg');
      if (heroBg) {
        gsap.to(heroBg, {
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      }

      // Remove pulse after initial attention grab
      const pulseCta = document.querySelector('.cta.pulse');
      if (pulseCta) {
        ScrollTrigger.create({
          trigger: pulseCta,
          start: 'top 80%',
          onEnter: () => setTimeout(() => pulseCta.classList.remove('pulse'), 3500)
        });
      }

      const revealUp = (targets) => {
        gsap.utils.toArray(targets).forEach((el) => {
          gsap.from(el, {
            y: 16,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });
        });
      };

      revealUp('.impact-quote');
      revealUp('.section.video .section-head, .video-frame');
      revealUp('.section.passos .section-head, .step');
      revealUp('.impacto-detalhe .impact-text, .impacto-detalhe .impact-card');
      revealUp('.site-footer .footer-cta, .footer-grid, .footer-bottom');
    }
  }
});
