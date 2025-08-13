// GSAP Animations for Rachel Sampaio Oliveira Website

// Registrar plugins do GSAP
gsap.registerPlugin(ScrollTrigger);

// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Animação inicial do logo - sem afetar a posição sticky
    gsap.from('.logo img', {
        duration: 1,
        y: -30,
        opacity: 0,
        ease: 'power3.out',
        force3D: true
    });
    
    // Animação inicial dos elementos do header (exceto o header em si)
    gsap.timeline()
        .from('.main-nav ul li', {
            duration: 0.8,
            y: -20,
            opacity: 0,
            stagger: 0.1,
            ease: 'power2.out'
        })
        .from('.btn-ghost', {
            duration: 0.8,
            scale: 0.9,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.4');
    
    // Hero Section Animations
    const heroTl = gsap.timeline();
    
    // Animação do conteúdo do hero
    heroTl.from('.hero-content h1', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    })
    .from('.hero-content p', {
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.hero-content .btn-primary', {
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)'
    }, '-=0.4');
    
    // Animação da imagem do hero
    gsap.from('.hero-image img', {
        duration: 1.5,
        scale: 1.1,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.8
    });
    
    // About Hero Section Animations
    gsap.from('.about-hero h1', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });
    
    gsap.from('.about-hero p', {
        duration: 1.2,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.5
    });
    
    // Welcome Section Animations
    gsap.utils.toArray('.welcome-content > *').forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
    
    gsap.from('.welcome-image img', {
        scrollTrigger: {
            trigger: '.welcome-image',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.9,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // About Section Animations
    gsap.from('.about-image img', {
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.9,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.about-text h2', {
        scrollTrigger: {
            trigger: '.about-text h2',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.about-text p', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    gsap.from('.about-text .quote', {
        scrollTrigger: {
            trigger: '.about-text .quote',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Approach Section Animations
    gsap.from('.approach-section h2', {
        scrollTrigger: {
            trigger: '.approach-section h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.approach-text h3', {
        scrollTrigger: {
            trigger: '.approach-text h3',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.approach-text p', {
        scrollTrigger: {
            trigger: '.approach-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    gsap.from('.approach-techniques', {
        scrollTrigger: {
            trigger: '.approach-techniques',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        scale: 0.95,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.approach-techniques h3', {
        scrollTrigger: {
            trigger: '.approach-techniques h3',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.technique-list li', {
        scrollTrigger: {
            trigger: '.technique-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // Values Section Animations
    gsap.from('.values-section h2', {
        scrollTrigger: {
            trigger: '.values-section h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.utils.toArray('.value-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            scale: 0.9,
            ease: 'back.out(1.2)',
            delay: index * 0.1
        });
    });
    
    // Training Section Animations
    gsap.from('.training-section h2', {
        scrollTrigger: {
            trigger: '.training-section h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.utils.toArray('.training-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
    
    // Why Choose Section Animations
    gsap.from('.why-choose h2', {
        scrollTrigger: {
            trigger: '.why-choose h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Animação dos cards de benefícios
    gsap.utils.toArray('.benefit-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            scale: 0.9,
            ease: 'back.out(1.2)',
            delay: index * 0.1
        });
    });
    
    // Animação do processo
    gsap.from('.process', {
        scrollTrigger: {
            trigger: '.process',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        backgroundColor: 'rgba(245, 247, 250, 0)',
        ease: 'power2.out'
    });
    
    gsap.from('.process h3', {
        scrollTrigger: {
            trigger: '.process h3',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.process li', {
        scrollTrigger: {
            trigger: '.process',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // How Help Section Animations
    gsap.from('.how-help h2', {
        scrollTrigger: {
            trigger: '.how-help h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.help-content p', {
        scrollTrigger: {
            trigger: '.help-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.help-image img', {
        scrollTrigger: {
            trigger: '.help-image',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.9,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Expectations Section Animations
    gsap.from('.expectations h2', {
        scrollTrigger: {
            trigger: '.expectations h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Animação dos itens de expectativa
    gsap.utils.toArray('.expectation-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 40,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1
        });
    });
    
    // Animação da abordagem
    gsap.from('.approach', {
        scrollTrigger: {
            trigger: '.approach',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        scale: 0.95,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.approach h3', {
        scrollTrigger: {
            trigger: '.approach h3',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: -30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.approach p', {
        scrollTrigger: {
            trigger: '.approach',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // FAQ Section Animations
    gsap.from('.faq h2', {
        scrollTrigger: {
            trigger: '.faq h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Animação dos itens FAQ
    gsap.utils.toArray('.faq-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                end: 'bottom 15%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            x: -40,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.05
        });
    });
    
    // Contact CTA Section Animations
    gsap.from('.contact-cta', {
        scrollTrigger: {
            trigger: '.contact-cta',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.95,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.contact-cta h2', {
        scrollTrigger: {
            trigger: '.contact-cta h2',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.contact-cta p', {
        scrollTrigger: {
            trigger: '.contact-cta p',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.contact-cta .btn-primary', {
        scrollTrigger: {
            trigger: '.contact-cta .btn-primary',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0.8,
        opacity: 0,
        ease: 'back.out(1.7)'
    });
    
    // Emergency Section Animations
    gsap.from('.emergency', {
        scrollTrigger: {
            trigger: '.emergency',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Useful Links Section Animations
    gsap.from('.useful-links h3', {
        scrollTrigger: {
            trigger: '.useful-links h3',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    });
    
    gsap.from('.links-grid a', {
        scrollTrigger: {
            trigger: '.links-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    // Footer Animations
    gsap.from('.footer-nav ul li', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: 'power2.out'
    });
    
    gsap.from('.footer p', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 20,
        opacity: 0,
        ease: 'power2.out'
    });
    
    // Parallax effect para imagens
    gsap.utils.toArray('.hero-image img, .welcome-image img, .help-image img, .about-image img').forEach(img => {
        gsap.to(img, {
            yPercent: -20,
            ease: 'none',
            scrollTrigger: {
                trigger: img,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    });
    
    // Animação suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: 'power2.inOut'
                });
            }
        });
    });
    
    // Hover effects para botões
    document.querySelectorAll('.btn-primary, .btn-contact, .btn-ghost').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
    
    // Hover effects para cards
    document.querySelectorAll('.benefit-card, .expectation-item, .faq-item, .value-card, .training-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                ease: 'power2.out'
            });
        });
    });
    
    // Loading animation
    gsap.from('.header', {
        duration: 1,
        y: -100,
        opacity: 0,
        ease: 'power3.out'
    });
    
    // Adicionar classe quando a página estiver completamente carregada
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});
