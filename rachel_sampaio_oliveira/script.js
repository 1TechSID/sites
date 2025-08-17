document.addEventListener('DOMContentLoaded', () => {

    // Função para carregar componentes HTML
    function loadComponent(url, placeholderId) {
        const placeholder = document.getElementById(placeholderId);
        if (!placeholder) {
            return Promise.resolve(); // Resolve para não quebrar o Promise.all se o placeholder não existir
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
            });
    }

    // Função para corrigir links de navegação para que funcionem a partir de outras páginas
    function fixNavigationLinks() {
        const currentPage = window.location.pathname.split('/').pop();
        // Se estiver na raiz ou em index.html, não faz nada
        if (currentPage === 'index.html' || currentPage === '') {
            return;
        }

        // Adiciona 'index.html' aos links de âncora
        const navLinks = document.querySelectorAll('.main-nav a, .footer-nav a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                link.setAttribute('href', `index.html${href}`);
            }
        });
    }

    // Função principal para inicializar todos os scripts da página
    function initializeScripts() {
        gsap.registerPlugin(ScrollTrigger);

        // Animação de entrada dos elementos do Hero
        if (document.querySelector('.hero')) {
            gsap.set(['.header', '.hero-content h1', '.hero-content p', '.hero-cta', '.hero-image'], { autoAlpha: 1 });
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            tl.from('.header', { duration: 1, y: -50, opacity: 0, delay: 0.2 })
              .from('.hero-content h1', { duration: 0.8, y: 30, opacity: 0 }, '-=0.6')
              .from('.hero-content p', { duration: 0.8, y: 30, opacity: 0 }, '-=0.7')
              .from('.hero-cta', { duration: 0.8, y: 30, opacity: 0 }, '-=0.7')
              .from('.hero-image', { duration: 1, scale: 0.95, y: 30, opacity: 0 }, '-=0.8');
        }

        // Animações da página Sobre
        if (document.querySelector('.about-hero')) {
            gsap.from('.about-hero h1', { duration: 1.5, y: 50, opacity: 0, ease: 'power3.out' });
            gsap.from('.about-hero p', { duration: 1.2, y: 30, opacity: 0, ease: 'power2.out', delay: 0.5 });
        }

        // Animações da seção Welcome
        if (document.querySelector('.welcome')) {
            gsap.utils.toArray('.welcome-content > *').forEach((element, index) => {
                gsap.from(element, {
                    scrollTrigger: { trigger: element, start: 'top 80%', toggleActions: 'play none none reverse' },
                    duration: 1, y: 40, opacity: 0, ease: 'power2.out', delay: index * 0.1
                });
            });
            gsap.from('.welcome-image img', {
                scrollTrigger: { trigger: '.welcome-image', start: 'top 80%', toggleActions: 'play none none reverse' },
                duration: 1.2, scale: 0.9, opacity: 0, ease: 'power2.out'
            });
        }

        // Animação do Carrossel
        const track = document.querySelector('.carousel-track');
        if (track && track.children.length > 0) {
            const cards = gsap.utils.toArray('.carousel-card');
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

        // Rolagem suave para links âncora
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                // Se o link for para outra página, deixa o navegador seguir
                if (targetId.startsWith('index.html#')) return;

                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    gsap.to(window, { duration: 1, scrollTo: { y: targetElement, offsetY: 80 }, ease: 'power2.inOut' });
                }
            });
        });

        // Adiciona classe 'loaded' ao body
        window.addEventListener('load', () => document.body.classList.add('loaded'));
    }

    // Ponto de entrada: carrega componentes e depois inicializa os scripts
    Promise.all([
        loadComponent('./components/header.html', 'header-placeholder'),
        loadComponent('./components/footer.html', 'footer-placeholder')
    ]).then(() => {
        console.log('Componentes carregados com sucesso.');
        fixNavigationLinks();
        initializeScripts();
    }).catch(error => {
        console.error('Erro ao carregar componentes:', error);
        // Mesmo com erro, tenta inicializar para não quebrar a página
        initializeScripts();
    });
});
