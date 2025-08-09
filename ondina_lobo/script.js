// Set current year
(function setYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Smooth scroll for internal links
(function enableSmoothScroll(){
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  const headerEl = document.querySelector('.site-header');
  if (navToggle && siteNav) {
    const links = siteNav.querySelectorAll('a');
    const closeMenu = () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    };
    const openMenu = () => {
      // posiciona o painel logo abaixo do header medindo a altura real
      const h = headerEl ? headerEl.offsetHeight : 64;
      document.documentElement.style.setProperty('--mobile-nav-top', `${h}px`);
      siteNav.classList.add('is-open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    };
    const toggleMenu = () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    };
    navToggle.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); toggleMenu(); });
    // Fallback: delegated handler in caso de binding falhar
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.nav-toggle');
      if (btn) {
        e.preventDefault();
        toggleMenu();
      }
    });
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    // Close on link click
    links.forEach(l => l.addEventListener('click', closeMenu));

    // Close when resizing to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMenu();
    });
  }
})();

// GSAP animations
window.addEventListener('load', () => {
  if (window.gsap) {
    const { gsap } = window;
    // Hero intro
    gsap.from('.site-header', { y: -30, opacity: 0, duration: 0.6, ease: 'power2.out' });
    gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' });
    gsap.from('.subtitle', { y: 16, opacity: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' });
    gsap.fromTo(
      '.hero-ctas .cta',
      { y: 16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.out',
        stagger: 0.08,
        force3D: false,
        onComplete: function() { gsap.set(this.targets(), { clearProps: 'transform,opacity' }); }
      }
    );

    // Fallback: garantir reset absoluto após animação
    setTimeout(() => {
      const ctas = document.querySelectorAll('.hero-ctas .cta');
      ctas.forEach(el => {
        el.style.transform = 'none';
        el.style.opacity = '';
        el.style.willChange = '';
      });
    }, 1200);

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
