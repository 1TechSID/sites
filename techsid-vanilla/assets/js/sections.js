// Additional sections content to be loaded dynamically
document.addEventListener('DOMContentLoaded', function() {
    const remainingSectionsContainer = document.getElementById('remaining-sections');
    
    const sectionsHTML = `
        <!-- Approach Section -->
        <section id="servicos" class="section-animate approach-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Nossa abordagem</h2>
                    <p class="section-subtitle">Metodologia comprovada que reduz riscos e acelera resultados</p>
                </div>
                
                <div class="approach-grid">
                    <div class="approach-card card-animate">
                        <div class="approach-icon">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <div class="approach-content">
                            <h3>Entregas iterativas</h3>
                            <p class="approach-subtitle">Como fazemos</p>
                            <p class="approach-description">Pequenos ciclos de entrega com protótipos testáveis e feedback real. Você valida cedo e prioriza o que importa.</p>
                        </div>
                        <div class="approach-accent"></div>
                    </div>
                    <div class="approach-card card-animate">
                        <div class="approach-icon">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <div class="approach-content">
                            <h3>Validação com dados</h3>
                            <p class="approach-subtitle">Métricas que importam</p>
                            <p class="approach-description">Cada entrega vem com métricas básicas para medir adoção e impacto — decisões guiadas por dados, não por opiniões.</p>
                        </div>
                        <div class="approach-accent"></div>
                    </div>
                    <div class="approach-card card-animate">
                        <div class="approach-icon">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                        </div>
                        <div class="approach-content">
                            <h3>IA e Integrações</h3>
                            <p class="approach-subtitle">Tecnologia inteligente</p>
                            <p class="approach-description">Integramos automações e modelos de IA quando eles trazem ganho real: rotinas automação, recomendação, assistentes e integração com ferramentas do seu ecossistema.</p>
                        </div>
                        <div class="approach-accent"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Resources Section -->
        <section class="section-animate resources-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Recursos</h2>
                    <p class="section-subtitle">Tudo que você precisa para um produto de sucesso</p>
                </div>
                
                <div class="resources-grid">
                    <div class="resource-card card-animate">
                        <div class="resource-header">
                            <div class="resource-icon resource-icon-brand">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3>Entregas e Agilidade</h3>
                        </div>
                        <div class="resource-items">
                            <div class="resource-item">
                                <div class="resource-bullet"></div>
                                <p>Entregas incrementais e homologação contínua.</p>
                            </div>
                            <div class="resource-item">
                                <div class="resource-bullet"></div>
                                <p>Priorização por impacto — você investe onde tem retorno.</p>
                            </div>
                        </div>
                    </div>
                    <div class="resource-card card-animate">
                        <div class="resource-header">
                            <div class="resource-icon resource-icon-blue">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3>IA e Integrações</h3>
                        </div>
                        <div class="resource-items">
                            <div class="resource-item">
                                <div class="resource-bullet"></div>
                                <p>Automação de processos repetitivos, assistentes e recomendações.</p>
                            </div>
                            <div class="resource-item">
                                <div class="resource-bullet"></div>
                                <p>Conexão fácil com APIs e sistemas existentes.</p>
                            </div>
                        </div>
                    </div>
                    <div class="resource-card card-animate">
                        <div class="resource-header">
                            <div class="resource-icon resource-icon-green">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3>Qualidade e Segurança</h3>
                        </div>
                        <div class="resource-items">
                            <div class="resource-item">
                                <div class="resource-bullet"></div>
                                <p>Testes, monitoramento e backups para produção confiável.</p>
                            </div>
                            <div class="resource-item">
                                <div class="resource-bullet"></div>
                                <p>Boas práticas de segurança integradas desde a arquitetura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Work Method Section -->
        <section class="section-animate work-method-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Hospedagem e Forma de Trabalho</h2>
                    <p class="section-subtitle">Infraestrutura robusta e metodologia transparente</p>
                </div>
                
                <div class="work-method-grid">
                    <!-- Hospedagem -->
                    <div class="work-method-card">
                        <div class="work-method-header">
                            <div class="work-method-icon work-method-icon-brand">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                            </div>
                            <h3>Hospedagem segura e rápida</h3>
                        </div>
                        
                        <p class="work-method-description">
                            Implantamos seu produto em ambientes confiáveis, com monitoramento e políticas de backup — pensado para performance e escalabilidade.
                        </p>

                        <div class="work-method-stats">
                            <div class="stat-card">
                                <div class="stat-number">99.9%</div>
                                <div class="stat-label">Uptime garantido</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">24/7</div>
                                <div class="stat-label">Monitoramento</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">Auto</div>
                                <div class="stat-label">Backup diário</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-number">SSL</div>
                                <div class="stat-label">Certificado</div>
                            </div>
                        </div>
                    </div>

                    <!-- Formato de Trabalho -->
                    <div class="work-method-card">
                        <div class="work-method-header">
                            <div class="work-method-icon work-method-icon-blue">
                                <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3>Formato de trabalho e comunicação</h3>
                        </div>
                        
                        <p class="work-method-description">
                            Time dedicado, reuniões de revisão, entregas demonstráveis e comunicação transparente. Você acompanha o progresso através de demos reais, não relatórios teóricos.
                        </p>

                        <div class="work-method-features">
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <div class="feature-content">
                                    <div class="feature-title">Time dedicado</div>
                                    <div class="feature-desc">Especialistas focados no seu projeto</div>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <div class="feature-content">
                                    <div class="feature-title">Reuniões semanais</div>
                                    <div class="feature-desc">Alinhamento e feedback constante</div>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <div class="feature-content">
                                    <div class="feature-title">Demos práticas</div>
                                    <div class="feature-desc">Veja o progresso funcionando</div>
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <div class="feature-content">
                                    <div class="feature-title">Comunicação direta</div>
                                    <div class="feature-desc">Sem intermediários ou burocracias</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="section-animate benefits-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">Benefícios concretos</h2>
                    <p class="section-subtitle">Resultados mensuráveis que impactam diretamente seu negócio</p>
                </div>
                
                <div class="benefits-grid">
                    <div class="benefit-card card-animate">
                        <div class="benefit-icon benefit-icon-green">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                        </div>
                        <h3>Menos retrabalho</h3>
                        <p>economia real no custo total do projeto.</p>
                    </div>
                    <div class="benefit-card card-animate">
                        <div class="benefit-icon benefit-icon-blue">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <h3>Produto alinhado</h3>
                        <p>ao uso real dos usuários.</p>
                    </div>
                    <div class="benefit-card card-animate">
                        <div class="benefit-icon benefit-icon-purple">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3>Rapidez para testar</h3>
                        <p>hipóteses e ajustar rumo.</p>
                    </div>
                    <div class="benefit-card card-animate">
                        <div class="benefit-icon benefit-icon-orange">
                            <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                            </svg>
                        </div>
                        <h3>Plataforma preparada</h3>
                        <p>para crescer e integrar IA conforme necessidade.</p>
                    </div>
                </div>

                <!-- ROI Section -->
                <div class="roi-section">
                    <div class="roi-container">
                        <div class="roi-content">
                            <div class="roi-title">ROI</div>
                            <p class="roi-subtitle">Retorno sobre investimento comprovado em cada projeto</p>
                        </div>
                        <div class="roi-stats">
                            <div class="roi-stat">
                                <div class="roi-stat-number">-40%</div>
                                <div class="roi-stat-label">Redução de custos com retrabalho</div>
                            </div>
                            <div class="roi-stat">
                                <div class="roi-stat-number">3x</div>
                                <div class="roi-stat-label">Mais rápido para lançamento</div>
                            </div>
                            <div class="roi-stat">
                                <div class="roi-stat-number">+85%</div>
                                <div class="roi-stat-label">Taxa de adoção pelos usuários</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section class="section-animate faq-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">FAQ</h2>
                    <p class="section-subtitle">Dúvidas frequentes sobre nossos serviços</p>
                </div>

                <div class="faq-container">
                    <div class="faq-item">
                        <button class="faq-button">
                            <h3>Divulgam preços no site?</h3>
                            <div class="faq-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <div class="faq-content">
                            <div class="faq-answer">
                                <p>Não — cada projeto é único; oferecemos avaliação gratuita e proposta personalizada baseada nas suas necessidades específicas.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-button">
                            <h3>Posso alterar o escopo durante o projeto?</h3>
                            <div class="faq-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <div class="faq-content">
                            <div class="faq-answer">
                                <p>Sim — usamos priorização contínua para acomodar mudanças com menor impacto. Nossa metodologia ágil permite adaptações sem comprometer prazos.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-button">
                            <h3>Usam IA nos projetos?</h3>
                            <div class="faq-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <div class="faq-content">
                            <div class="faq-answer">
                                <p>Sim — quando há ganho mensurável. Implementamos soluções de IA apenas quando agregam valor real ao seu negócio, não por modismo tecnológico.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Info -->
                <div class="faq-cta">
                    <div class="faq-cta-card">
                        <div class="faq-cta-header">
                            <div class="faq-cta-icon">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3>Ainda tem dúvidas?</h3>
                        </div>
                        <p>Nosso time está pronto para esclarecer qualquer questão sobre seu projeto</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <section id="contato" class="section-animate final-cta-section">
            <div class="final-cta-bg"></div>
            <div class="container">
                <div class="final-cta-container">
                    <div class="final-cta-content">
                        <h2>
                            Pronto para transformar sua operação em uma 
                            <span class="text-brand">plataforma escalável e alinhada</span>
                            <span>ao seu negócio?</span>
                        </h2>
                        
                        <p>
                            Comece hoje mesmo a construir o futuro da sua empresa com tecnologia que realmente funciona.
                        </p>
                    </div>

                    <!-- CTAs -->
                    <div class="final-cta-buttons">
                        <button class="btn btn-primary btn-lg">
                            Solicitar proposta personalizada
                        </button>
                        <button class="btn btn-secondary btn-lg">
                            Falar com um especialista
                        </button>
                    </div>

                    <!-- Trust Signals -->
                    <div class="final-cta-trust">
                        <div class="trust-item">
                            <svg class="trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Avaliação gratuita</span>
                        </div>
                        <div class="trust-item">
                            <svg class="trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Sem compromisso</span>
                        </div>
                        <div class="trust-item">
                            <svg class="trust-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Resposta em 24h</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    remainingSectionsContainer.innerHTML = sectionsHTML;
    
    // Initialize FAQ functionality after DOM is ready
    setTimeout(() => {
        initializeFAQ();
        
        // Initialize animations after sections are loaded
        if (typeof initializeAnimations === 'function') {
            initializeAnimations();
        } else {
            // Fallback: wait for main.js to load
            setTimeout(() => {
                if (typeof initializeAnimations === 'function') {
                    initializeAnimations();
                }
            }, 100);
        }
    }, 50);
});

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('.faq-button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon svg');
        
        if (button && content) {
            button.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherContent = otherItem.querySelector('.faq-content');
                    const otherIcon = otherItem.querySelector('.faq-icon svg');
                    if (otherContent) otherContent.style.maxHeight = '0';
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                });
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            });
        }
    });
}
