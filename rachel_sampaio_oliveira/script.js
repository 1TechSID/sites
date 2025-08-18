document.addEventListener('DOMContentLoaded', () => {

    // Função para carregar componentes HTML
    function loadComponent(url, placeholderId) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            return Promise.resolve(null); // Resolve com null se o placeholder não existir
        }

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Falha ao carregar componente de ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
                const element = placeholder.firstElementChild;
                if (element) {
                    element.classList.add('component-visible');
                }
                return element; // Retorna o elemento inserido
            });
    }


    // Função principal para inicializar todos os scripts da página
    function initializeScripts(headerElement, footerElement) {
        gsap.registerPlugin(ScrollTrigger);
        if (typeof ScrollToPlugin !== 'undefined') {
            gsap.registerPlugin(ScrollToPlugin);
        }

        // Animação de entrada dos elementos do Hero
        if (document.querySelector('.hero') && headerElement) {
            // Os elementos já estão visíveis via CSS, então a animação pode começar
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from(headerElement, { duration: 1, y: -50, opacity: 0, clearProps: 'all' })
              .from('.hero-content h1', { duration: 0.8, y: 30, opacity: 0 }, '-=0.8')
              .from('.hero-content p', { duration: 0.8, y: 30, opacity: 0 }, '-=0.7')
              .from('.hero-cta', { duration: 0.8, y: 30, opacity: 0 }, '-=0.7')
              .from('.hero-image', { duration: 1, scale: 0.95, y: 30, opacity: 0 }, '-=0.7');
        }

        // Animações da página Sobre
        if (document.querySelector('.about-hero')) {
            const aboutH1 = document.querySelector('.about-hero h1');
            const aboutP = document.querySelector('.about-hero p');
            
            if (aboutH1) {
                gsap.from(aboutH1, { duration: 1.5, y: 50, opacity: 0, ease: 'power3.out' });
            }
            if (aboutP) {
                gsap.from(aboutP, { duration: 1.2, y: 30, opacity: 0, ease: 'power2.out', delay: 0.5 });
            }
        }

        // Animações da seção Welcome
        if (document.querySelector('.welcome')) {
            const welcomeElements = gsap.utils.toArray('.welcome-content > *');
            if (welcomeElements.length > 0) {
                welcomeElements.forEach((element, index) => {
                    gsap.from(element, {
                        scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none reverse' },
                        duration: 1, y: 40, opacity: 0, ease: 'power2.out', delay: index * 0.1
                    });
                });
            }
            
            const welcomeImage = document.querySelector('.welcome-image img');
            if (welcomeImage) {
                gsap.from(welcomeImage, {
                    scrollTrigger: { trigger: '.welcome-image', start: 'top 80%', toggleActions: 'play none none reverse' },
                    duration: 1.2, scale: 0.9, opacity: 0, ease: 'power2.out'
                });
            }
        }

        // Animação do Carrossel
        const track = document.querySelector('.carousel-track');
        if (track && track.children.length > 0) {
            const cards = gsap.utils.toArray('.carousel-card');
            if (cards.length > 0) {
                cards.forEach(card => track.appendChild(card.cloneNode(true)));
                const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight || 0);
                const trackWidth = cardWidth * cards.length;

                const timeline = gsap.to(track, {
                    x: -trackWidth,
                    duration: 40,
                    ease: 'none',
                    repeat: -1,
                    modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % trackWidth) }
                });

                track.parentElement.addEventListener('mouseenter', () => timeline.pause());
                track.parentElement.addEventListener('mouseleave', () => timeline.play());
            }
        }

        // Destaque do menu ativo na rolagem
        const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
        const sections = document.querySelectorAll('section[id]');
        if (sections.length > 0 && navLinks.length > 0) {
            const updateActiveNav = () => {
                let currentSection = '';
                sections.forEach(section => {
                    if (pageYOffset >= section.offsetTop - 90) {
                        currentSection = section.getAttribute('id');
                    }
                });
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
                });
            };
            window.addEventListener('scroll', updateActiveNav);
            updateActiveNav();
        }

        // Scroll suave para âncoras usando delegação de eventos
        // Scroll suave para âncoras usando delegação de eventos
        document.addEventListener('click', function (e) {
            const anchor = e.target.closest('a');
            if (!anchor) return;

            const href = anchor.getAttribute('href');
            const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

            // Se for um link de âncora na página inicial
            if (isHomePage && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    if (typeof ScrollToPlugin !== 'undefined') {
                        gsap.to(window, { duration: 1, scrollTo: targetElement, ease: 'power2.inOut' });
                    } else {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            } 
            // Se for um link de âncora em outra página, redireciona para a home
            else if (!isHomePage && href.includes('#')) {
                e.preventDefault();
                // Extrai a âncora do href, que pode já conter 'index.html'
                const targetId = '#' + href.split('#').pop();
                window.location.href = `index.html${targetId}`;
            }
        });

        // Adiciona classe 'loaded' ao body
        window.addEventListener('load', () => document.body.classList.add('loaded'));
    }


    // Ponto de entrada: carrega componentes e depois inicializa os scripts
    Promise.all([
        loadComponent('./components/header.html', 'header-placeholder'),
        loadComponent('./components/footer.html', 'footer-placeholder')
    ]).then(([headerElement, footerElement]) => {
        // Adia a inicialização dos scripts para o próximo frame de animação
        requestAnimationFrame(() => {
            initializeScripts(headerElement, footerElement);
        });

    }).catch(error => {
        console.error('Erro ao carregar componentes:', error);
        // Mesmo com erro, tenta inicializar para não quebrar a página
        requestAnimationFrame(() => {
            initializeScripts(null, null);
        });
    });
});
