gsap.registerPlugin(ScrollTrigger);

const animations = {
  init: () => {
    // Animações sutis no carregamento
    gsap.from(".hero h1", { duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.2 });
    gsap.from(".hero p.lead", { duration: 1, y: 20, opacity: 0, ease: "power3.out", delay: 0.4 });
    gsap.from(".hero-cta", { duration: 1, y: 20, opacity: 0, ease: "power3.out", delay: 0.6 });
    gsap.from(".phone-mock", { duration: 1.2, y: 50, opacity: 0, scale: 0.95, ease: "power3.out", delay: 0.5 });

    // Animações com ScrollTrigger para as seções
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      const elems = section.querySelectorAll(".grid-2 > *, .grid-3 > *, .testimonials > *, .faq > *, h2, p");
      gsap.from(elems, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", animations.init);