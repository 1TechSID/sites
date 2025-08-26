import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

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
    gsap.utils.toArray('.section-animate').forEach((section: any) => {
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
    gsap.utils.toArray('.card-animate').forEach((card: any, index) => {
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
    const buttons = document.querySelectorAll('[class*="bg-gradient-brand"]');
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
    gsap.utils.toArray('.parallax-slow').forEach((element: any) => {
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
    gsap.utils.toArray('.float').forEach((element: any, index) => {
      gsap.to(element, {
        y: -20,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: index * 0.3
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { gsap, ScrollTrigger };
};