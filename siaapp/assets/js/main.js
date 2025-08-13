// SIAAPP Landing interactions
(function() {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('mainNav');
  const navToggle = document.getElementById('navToggle');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Glassmorphism on scroll
  const onScroll = () => {
    if (window.scrollY > 10) {
      header.classList.add('glass');
    } else {
      header.classList.remove('glass');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  // Initialize Lucide icons when ready
  const initIcons = () => { try { window.lucide?.createIcons(); } catch(e) {} };

  // GSAP subtle reveals using IntersectionObserver
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  if (reveals?.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.06 });
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initIcons();
  } else {
    window.addEventListener('DOMContentLoaded', initIcons);
  }
})();
