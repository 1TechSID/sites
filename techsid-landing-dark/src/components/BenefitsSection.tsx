export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Menos retrabalho",
      description: "economia real no custo total do projeto.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Produto alinhado",
      description: "ao uso real dos usuários.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Rapidez para testar",
      description: "hipóteses e ajustar rumo.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Plataforma preparada",
      description: "para crescer e integrar IA conforme necessidade.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Benefícios concretos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados mensuráveis que impactam diretamente seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-card hover:bg-card-hover border border-border rounded-2xl p-6 transition-all duration-500 hover:shadow-card hover:scale-105 hover:-translate-y-2 h-full text-center">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-brand">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="mt-6 w-full h-1 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="text-6xl font-bold text-brand mb-2">ROI</div>
              <p className="text-xl text-muted-foreground">
                Retorno sobre investimento comprovado em cada projeto
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand mb-2">-40%</div>
                <div className="text-sm text-muted-foreground">Redução de custos com retrabalho</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand mb-2">3x</div>
                <div className="text-sm text-muted-foreground">Mais rápido para lançamento</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand mb-2">+85%</div>
                <div className="text-sm text-muted-foreground">Taxa de adoção pelos usuários</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};