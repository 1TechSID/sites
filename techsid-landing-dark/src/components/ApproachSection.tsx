export const ApproachSection = () => {
  const approaches = [
    {
      title: "Entregas iterativas",
      subtitle: "Como fazemos",
      description: "Pequenos ciclos de entrega com protótipos testáveis e feedback real. Você valida cedo e prioriza o que importa.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Validação com dados",
      subtitle: "Métricas que importam",
      description: "Cada entrega vem com métricas básicas para medir adoção e impacto — decisões guiadas por dados, não por opiniões.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "IA e Integrações",
      subtitle: "Tecnologia inteligente",
      description: "Integramos automações e modelos de IA quando eles trazem ganho real: rotinas automação, recomendação, assistentes e integração com ferramentas do seu ecossistema.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossa abordagem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Metodologia comprovada que reduz riscos e acelera resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="group">
              <div className="bg-card hover:bg-card-hover border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-card hover:scale-105 hover:-translate-y-2 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-brand rounded-xl flex items-center justify-center text-primary-foreground mb-6 group-hover:shadow-glow transition-all duration-300">
                  {approach.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {approach.title}
                    </h3>
                    <p className="text-brand font-medium text-sm uppercase tracking-wide">
                      {approach.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {approach.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="mt-6 w-full h-1 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};