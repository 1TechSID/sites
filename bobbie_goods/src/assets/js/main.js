// Main JavaScript for Bobbie Goods Landing Page
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);
    
    // Timer Configuration
    const TIMER_DURATION = 8 * 60; // 8 minutes in seconds
    let timerInterval;
    let timeRemaining = TIMER_DURATION;
    
    // Initialize timer from sessionStorage or default
    const savedTime = sessionStorage.getItem('bobbie-timer');
    if (savedTime) {
        timeRemaining = parseInt(savedTime);
    }
    
    // DOM Elements
    const heroTimer = document.getElementById('bobbie-hero-timer');
    const finalTimer = document.getElementById('final-timer');
    const stickyBuybar = document.getElementById('sticky-buybar');
    const exitModal = document.getElementById('exit-modal');
    const modalClose = document.getElementById('modal-close');
    const toastNotification = document.getElementById('toast-notification');
    
    // Analytics Functions
    function trackEvent(eventName, parameters = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, parameters);
        }
        
        // Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', eventName, parameters);
        }
        
        console.log('Event tracked:', eventName, parameters);
    }
    
    // Timer Functions
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    function updateTimerDisplay() {
        const formattedTime = formatTime(timeRemaining);
        if (heroTimer) heroTimer.textContent = formattedTime;
        if (finalTimer) finalTimer.textContent = formattedTime;
        
        // Update timer message based on remaining time
        const timerTexts = document.querySelectorAll('.timer-text');
        timerTexts.forEach(timerText => {
            if (timeRemaining <= 120 && timeRemaining > 0) { // Last 2 minutes
                timerText.innerHTML = `Últimos minutos! Garanta antes que acabe: <span id="bobbie-hero-timer">${formattedTime}</span>`;
            } else if (timeRemaining <= 0) {
                timerText.innerHTML = `O tempo acabou — a oferta pode mudar, mas você ainda pode comprar.`;
            }
        });
    }
    
    function startTimer() {
        trackEvent('timer_start', {
            timer_duration: TIMER_DURATION,
            page_url: window.location.href
        });
        
        timerInterval = setInterval(() => {
            timeRemaining--;
            sessionStorage.setItem('bobbie-timer', timeRemaining.toString());
            updateTimerDisplay();
            
            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                trackEvent('timer_expire', {
                    page_url: window.location.href
                });
            }
        }, 1000);
    }
    
    // Initialize timer
    updateTimerDisplay();
    if (timeRemaining > 0) {
        startTimer();
    }
    
    // GSAP Animations
    function initAnimations() {
        // Hero section animations
        gsap.timeline()
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
            .from('.hero-bullets', {
                duration: 0.8,
                y: 20,
                opacity: 0,
                ease: 'power3.out'
            }, '-=0.3')
            .from('.hero-timer', {
                duration: 0.8,
                scale: 0.8,
                opacity: 0,
                ease: 'back.out(1.7)'
            }, '-=0.2')
            .from('.hero-pricing-mini', {
                duration: 0.6,
                y: 20,
                opacity: 0,
                stagger: 0.1,
                ease: 'power3.out'
            }, '-=0.3')
            .from('.cta-primary', {
                duration: 0.8,
                scale: 0.9,
                opacity: 0,
                ease: 'back.out(1.7)'
            }, '-=0.2');
        
        // Hero images animation - Fixed
        gsap.timeline({ delay: 0.5 })
            .from('.hero-img', {
                duration: 1.2,
                scale: 0.9,
                ease: 'power3.out'
            })
            .from('.hero-img-secondary', {
                duration: 0.8,
                x: 30,
                ease: 'power3.out'
            }, '-=0.6')
            .from('.hero-img-kit', {
                duration: 0.8,
                x: -30,
                ease: 'power3.out'
            }, '-=0.4');
        
        // Benefits section
        gsap.from('.benefit-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.benefits-grid',
                start: 'top 80%'
            }
        });
        
        // How it works section
        gsap.from('.step-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.steps-grid',
                start: 'top 80%'
            }
        });
        
        // Testimonials
        gsap.from('.testimonial-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.testimonials-carousel',
                start: 'top 80%'
            }
        });
        
        // Pricing cards
        gsap.from('.pricing-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.pricing-grid',
                start: 'top 80%'
            }
        });
        
        // FAQ items
        gsap.from('.faq-item', {
            duration: 0.6,
            x: -30,
            opacity: 0,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.faq-list',
                start: 'top 80%'
            }
        });
        
        // Social proof toast animation
        gsap.to('.toast-notification', {
            duration: 0.5,
            x: 0,
            opacity: 1,
            ease: 'power3.out',
            delay: 2
        });
    }
    
    // FAQ Functionality
    function initFAQ() {
        const faqButtons = document.querySelectorAll('.faq-button');
        
        faqButtons.forEach(button => {
            button.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
    
    // Sticky Buy Bar
    function initStickyBuybar() {
        const pricingSection = document.getElementById('pricing');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    stickyBuybar.classList.add('visible');
                } else {
                    stickyBuybar.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        if (pricingSection) {
            observer.observe(pricingSection);
        }
    }
    
    // Exit Intent Modal
    function initExitIntent() {
        let hasShown = false;
        
        document.addEventListener('mouseleave', function(e) {
            if (e.clientY <= 0 && !hasShown) {
                exitModal.classList.add('visible');
                hasShown = true;
                
                trackEvent('exit_intent_shown', {
                    page_url: window.location.href
                });
            }
        });
        
        // Close modal
        modalClose.addEventListener('click', function() {
            exitModal.classList.remove('visible');
        });
        
        // Close modal on overlay click
        document.querySelector('.modal-overlay').addEventListener('click', function() {
            exitModal.classList.remove('visible');
        });
    }
    
    // Toast Notifications
    function initToastNotifications() {
        const toastMessages = [
            'Joana, SP — acabou de comprar 1 kit',
            'Carlos, RJ — acabou de comprar 3 kits',
            'Ana, MG — acabou de comprar 1 kit',
            'Pedro, RS — acabou de comprar 5 kits',
            'Maria, PR — acabou de comprar 2 kits'
        ];
        
        let currentIndex = 0;
        
        setInterval(() => {
            if (toastNotification) {
                toastNotification.textContent = toastMessages[currentIndex];
                currentIndex = (currentIndex + 1) % toastMessages.length;
                
                // Animate toast
                gsap.fromTo(toastNotification, 
                    { x: 100, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
                );
            }
        }, 5000);
    }
    
    // CTA Click Tracking
    function initCTATracking() {
        // Hero CTA
        document.getElementById('hero-cta')?.addEventListener('click', function() {
            trackEvent('timer_cta_click', {
                cta_location: 'hero',
                timer_remaining: timeRemaining,
                page_url: window.location.href
            });
        });
        
        // Pricing CTAs
        document.querySelectorAll('.pricing-cta').forEach(cta => {
            cta.addEventListener('click', function() {
                const variant = this.getAttribute('data-variant');
                
                trackEvent('add_to_cart', {
                    currency: 'BRL',
                    value: variant === '1' ? 179.90 : variant === '3' ? 358.80 : 539.70,
                    items: [{
                        item_id: `bobbie-pajama-${variant}`,
                        item_name: `Pijama de Colorir Bobbie Goods - Kit ${variant}`,
                        category: 'Pijamas',
                        quantity: parseInt(variant),
                        price: variant === '1' ? 179.90 : variant === '3' ? 119.60 : 107.94
                    }]
                });
                
                trackEvent('begin_checkout', {
                    currency: 'BRL',
                    value: variant === '1' ? 179.90 : variant === '3' ? 358.80 : 539.70
                });
            });
        });
        
        // Top bar CTA
        document.querySelector('.top-bar-cta')?.addEventListener('click', function() {
            trackEvent('top_bar_cta_click', {
                page_url: window.location.href
            });
        });
        
        // Buybar CTA
        document.querySelector('.buybar-cta')?.addEventListener('click', function() {
            trackEvent('sticky_buybar_click', {
                page_url: window.location.href
            });
        });
        
        // Modal CTA
        document.querySelector('.modal-cta')?.addEventListener('click', function() {
            trackEvent('exit_intent_cta_click', {
                page_url: window.location.href
            });
        });
    }
    
    // Smooth Scrolling
    function initSmoothScrolling() {
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
    
    // View Item Tracking
    function trackViewItem() {
        trackEvent('view_item', {
            currency: 'BRL',
            value: 179.90,
            items: [{
                item_id: 'bobbie-pajama-colorir',
                item_name: 'Pijama de Colorir Bobbie Goods',
                category: 'Pijamas',
                price: 179.90
            }]
        });
    }
    
    // Scroll Progress Indicator
    function initScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: #4DA6FF;
            z-index: 9999;
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
    
    // Lazy Loading Images - Fixed
    function initLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        // Remove any conflicting animations from images
        images.forEach(img => {
            img.style.opacity = '1';
            img.style.visibility = 'visible';
            img.style.transform = 'none';
        });
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Performance Monitoring
    function initPerformanceMonitoring() {
        // Track page load time
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            trackEvent('page_load_time', {
                load_time: loadTime,
                page_url: window.location.href
            });
        });
        
        // Track Core Web Vitals
        if ('web-vital' in window) {
            import('https://unpkg.com/web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(metric => trackEvent('web_vital_cls', { value: metric.value }));
                getFID(metric => trackEvent('web_vital_fid', { value: metric.value }));
                getFCP(metric => trackEvent('web_vital_fcp', { value: metric.value }));
                getLCP(metric => trackEvent('web_vital_lcp', { value: metric.value }));
                getTTFB(metric => trackEvent('web_vital_ttfb', { value: metric.value }));
            });
        }
    }
    
    // Initialize all features
    function init() {
        // Disable animations temporarily to fix image flickering
        // initAnimations();
        initFAQ();
        initStickyBuybar();
        initExitIntent();
        initToastNotifications();
        initCTATracking();
        initSmoothScrolling();
        initScrollProgress();
        initLazyLoading();
        initPerformanceMonitoring();
        
        // Track initial page view
        trackViewItem();
        
        console.log('Bobbie Goods Landing Page initialized successfully!');
    }
    
    // Start initialization
    init();
    
    // Handle page visibility changes
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Pause timer when page is not visible
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        } else {
            // Resume timer when page becomes visible
            if (timeRemaining > 0) {
                startTimer();
            }
        }
    });
    
    // Handle page unload
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('bobbie-timer', timeRemaining.toString());
    });
    
    // Keyboard accessibility
    document.addEventListener('keydown', function(e) {
        // Close modal with Escape key
        if (e.key === 'Escape' && exitModal.classList.contains('visible')) {
            exitModal.classList.remove('visible');
        }
    });
    
    // Touch gestures for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartY - touchEndY;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - show sticky buybar earlier
                if (!stickyBuybar.classList.contains('visible')) {
                    stickyBuybar.classList.add('visible');
                }
            }
        }
    }
    
    // Error handling
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        trackEvent('javascript_error', {
            error_message: e.message,
            error_filename: e.filename,
            error_line: e.lineno,
            page_url: window.location.href
        });
    });
    
    // Service Worker registration for PWA capabilities
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
});

// Utility functions available globally
window.BobbieGoods = {
    // Force show exit intent modal (for testing)
    showExitModal: function() {
        document.getElementById('exit-modal').classList.add('visible');
    },
    
    // Force show sticky buybar (for testing)
    showBuybar: function() {
        document.getElementById('sticky-buybar').classList.add('visible');
    },
    
    // Get current timer value
    getTimerValue: function() {
        return sessionStorage.getItem('bobbie-timer');
    },
    
    // Reset timer
    resetTimer: function() {
        sessionStorage.removeItem('bobbie-timer');
        location.reload();
    }
};
