export const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      title: "Baixa adoção de usuários",
      text: "Produtos lançados sem validação real falham em conquistar o mercado"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Alto custo de desenvolvimento",
      text: "Investimentos elevados em funcionalidades que ninguém usa"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Tempo perdido em suposições",
      text: "Meses de desenvolvimento baseado em achismos ao invés de dados"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qual problema <span className="text-brand">resolvemos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A maioria dos produtos digitais falha porque são desenvolvidos sem validação real com usuários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-card hover:bg-card-hover border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-card hover:scale-105 h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {problem.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="group bg-card hover:bg-card-hover border border-border rounded-xl p-8 max-w-2xl w-full transition-all duration-300 hover:shadow-card hover:scale-105">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-all duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Menos suposições. Mais resultados reais.
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                Desenvolvemos produtos baseados em dados reais de usuários, garantindo que cada funcionalidade tenha propósito e valor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};