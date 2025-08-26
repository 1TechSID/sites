export const WorkMethodSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Hospedagem e Forma de Trabalho
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Infraestrutura robusta e metodologia transparente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hospedagem */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center text-primary-foreground shadow-brand">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Hospedagem segura e rápida
              </h3>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Implantamos seu produto em ambientes confiáveis, com monitoramento e políticas de backup — pensado para performance e escalabilidade.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-brand mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime garantido</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-brand mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoramento</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-brand mb-1">Auto</div>
                <div className="text-sm text-muted-foreground">Backup diário</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="text-2xl font-bold text-brand mb-1">SSL</div>
                <div className="text-sm text-muted-foreground">Certificado</div>
              </div>
            </div>
          </div>

          {/* Formato de Trabalho */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Formato de trabalho e comunicação
              </h3>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Time dedicado, reuniões de revisão, entregas demonstráveis e comunicação transparente. Você acompanha o progresso através de demos reais, não relatórios teóricos.
            </p>

            <div className="space-y-4">
              {[
                { title: "Time dedicado", desc: "Especialistas focados no seu projeto" },
                { title: "Reuniões semanais", desc: "Alinhamento e feedback constante" },
                { title: "Demos práticas", desc: "Veja o progresso funcionando" },
                { title: "Comunicação direta", desc: "Sem intermediários ou burocracias" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-card/50 rounded-xl border border-border/50 hover:bg-card transition-all duration-300">
                  <div className="w-3 h-3 bg-brand rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};