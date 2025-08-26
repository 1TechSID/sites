export const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      text: "Entrega \"pronta\" que exige grandes ajustes para encaixar no dia a dia do usuário."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      text: "Esforço gasto em funcionalidades que não geram valor imediato."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "Falta de validação contínua = decisões baseadas em suposições."
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qual problema resolvemos
          </h2>
          <p className="text-xl text-brand font-semibold mb-4">
            Evite entregar um produto que ninguém usa.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Acerte antes: valide cedo, corrija rápido e reduza custos com retrabalho.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Problemas reais que vemos com frequência:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="group">
                <div className="bg-card hover:bg-card-hover border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-card hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-primary-foreground transition-all duration-300">
                      {problem.icon}
                    </div>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {problem.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-card border border-border rounded-xl p-6">
            <p className="text-xl font-semibold text-brand">
              "Menos suposições. Mais resultados reais."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};