export const ResourcesSection = () => {
  const resources = [
    {
      category: "Entregas e Agilidade",
      items: [
        "Entregas incrementais e homologação contínua.",
        "Priorização por impacto — você investe onde tem retorno."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-brand to-brand-light"
    },
    {
      category: "IA e Integrações", 
      items: [
        "Automação de processos repetitivos, assistentes e recomendações.",
        "Conexão fácil com APIs e sistemas existentes."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600"
    },
    {
      category: "Qualidade e Segurança",
      items: [
        "Testes, monitoramento e backups para produção confiável.",
        "Boas práticas de segurança integradas desde a arquitetura."
      ],
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Recursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para um produto de sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-card hover:border-brand/30 h-full">
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${resource.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {resource.category}
                  </h3>
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-brand rounded-full mt-2"></div>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};