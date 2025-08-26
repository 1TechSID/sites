export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Menos retrabalho",
      description: "economia real no custo total do projeto.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/30"
    },
    {
      title: "Produto alinhado",
      description: "ao uso real dos usuários.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-600",
      shadowColor: "shadow-blue-500/30"
    },
    {
      title: "Rapidez para testar",
      description: "hipóteses e ajustar rumo.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      shadowColor: "shadow-purple-500/30"
    },
    {
      title: "Plataforma preparada",
      description: "para crescer e integrar IA conforme necessidade.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
      shadowColor: "shadow-orange-500/30"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-brand bg-clip-text">
            Benefícios concretos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados mensuráveis que impactam diretamente seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group animate-slide-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-card/50 backdrop-blur-sm hover:bg-card border border-border rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-4 h-full text-center overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Animated particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-white to-transparent rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-brand to-transparent rounded-full animate-pulse delay-150"></div>
                </div>

                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:${benefit.shadowColor} group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="space-y-3 relative z-10">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-brand group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Animated bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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
                Retorno sobre   investimento comprovado em cada projeto
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