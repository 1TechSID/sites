// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Função para inicializar as animações
function initAnimations() {
    // Animação do header no scroll
    gsap.to('.header', {
        scrollTrigger: {
            start: 'top -100',
            end: '+=100',
            toggleClass: {targets: '.header', className: 'scrolled'}
        }
    });

    // Animação do hero
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        })
        .from('.hero-subtitle', {
            duration: 1,
            y: 30,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-cta', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'back.out(1.7)'
        }, '-=0.5')
        .from('.phone-mockup', {
            duration: 1.2,
            x: 100,
            opacity: 0,
            rotation: 15,
            ease: 'power3.out'
        }, '-=0.8');

    // Animação das barras do gráfico
    gsap.from('.bar', {
        duration: 1.5,
        height: 0,
        delay: 1.5,
        ease: 'power2.out',
        stagger: 0.2
    });

    // Animação dos pain points
    gsap.from('.pain-item', {
        scrollTrigger: {
            trigger: '.pain-points',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Animação das features
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.differential',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Animação dos benefícios
    gsap.from('.benefit-item', {
        scrollTrigger: {
            trigger: '.benefits-list',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Animação dos depoimentos
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.3
    });

    // Animação da timeline
    gsap.from('.timeline-item', {
        scrollTrigger: {
            trigger: '.transformation',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        x: (i) => i % 2 === 0 ? -50 : 50,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.3
    });

    // Animação das ofertas
    gsap.from('.offer-feature', {
        scrollTrigger: {
            trigger: '.offer',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Animação da garantia
    gsap.from('.guarantee', {
        scrollTrigger: {
            trigger: '.guarantee',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0.9,
        opacity: 0,
        ease: 'power3.out'
    });

    // Animação da escassez
    gsap.from('.urgency-badge', {
        scrollTrigger: {
            trigger: '.scarcity',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    gsap.from('.bonus-item', {
        scrollTrigger: {
            trigger: '.bonus-section',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        x: -30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1
    });

    // Animação do FAQ
    gsap.from('.faq-item', {
        scrollTrigger: {
            trigger: '.faq',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.6,
        y: 30,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.2
    });

    // Animação do footer
    gsap.from('.footer-summary', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.footer-trust', {
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.2
    });
}

// Função para inicializar o FAQ
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Abre o item clicado se não estava ativo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Função para inicializar os CTAs
function initCTAs() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Adiciona efeito de clique
            gsap.to(button, {
                duration: 0.1,
                scale: 0.95,
                yoyo: true,
                repeat: 1
            });
            
            // Aqui você pode adicionar a lógica para abrir um modal de checkout
            // ou redirecionar para a página de pagamento
            console.log('CTA clicado:', button.textContent);
            
            // Exemplo: abrir modal ou redirecionar
            // window.open('https://seu-checkout.com', '_blank');
        });
    });
}

// Função para inicializar o scroll suave
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {y: targetPosition, autoKill: false},
                    ease: 'power3.out'
                });
            }
        });
    });
}

// Função para inicializar animações de hover
function initHoverAnimations() {
    // Cards com hover
    const hoverCards = document.querySelectorAll('.feature-card, .pain-item, .testimonial-card');
    
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -5,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                ease: 'power2.out'
            });
        });
    });
    
    // Botões CTA com hover
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}

// Função para inicializar contadores animados
function initCounters() {
    // Exemplo de contador para estatísticas (se quiser adicionar)
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2;
        
        gsap.to(counter, {
            duration: duration,
            innerHTML: target,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Função para inicializar o parallax sutil
function initParallax() {
    // Parallax sutil para o hero
    gsap.to('.hero::before', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        ease: 'none'
    });
}

// Função para inicializar animações de entrada
function initEntranceAnimations() {
    // Animação de entrada para elementos que aparecem na tela
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Adiciona classe para animação
                element.classList.add('animate-in');
                
                // Remove o observer após a animação
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observa elementos que devem ter animação de entrada
    const animateElements = document.querySelectorAll('.section-title, .section-subtitle');
    animateElements.forEach(el => observer.observe(el));
}

// Função para inicializar o menu mobile (se necessário)
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Anima o menu
            if (nav.classList.contains('active')) {
                gsap.fromTo('.nav a', {
                    opacity: 0,
                    y: -20
                }, {
                    duration: 0.3,
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    ease: 'power2.out'
                });
            }
        });
    }
}

// Função para inicializar todas as funcionalidades
function init() {
    // Aguarda o DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    
    // Inicializa todas as funcionalidades
    initAnimations();
    initFAQ();
    initCTAs();
    initSmoothScroll();
    initHoverAnimations();
    initCounters();
    initParallax();
    initEntranceAnimations();
    initMobileMenu();
    
    // Adiciona classe para indicar que as animações foram carregadas
    document.body.classList.add('animations-loaded');
}

// Inicializa quando a página carrega
init();

// Adiciona listener para redimensionamento da janela
window.addEventListener('resize', () => {
    // Recarrega o ScrollTrigger para ajustar as posições
    ScrollTrigger.refresh();
});

// Adiciona listener para mudança de orientação (mobile)
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);
});

// Adiciona efeito de loading sutil
window.addEventListener('load', () => {
    gsap.to('.loading-overlay', {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
            document.querySelector('.loading-overlay')?.remove();
        }
    });
});

// Adiciona animação de scroll progressivo
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    });
}

// Inicializa a barra de progresso
initScrollProgress();
