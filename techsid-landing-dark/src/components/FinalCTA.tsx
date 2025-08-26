import { Button } from './Button';

export const FinalCTA = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-brand/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Pronto para transformar sua operação em uma 
              <span className="text-brand block mt-2">
                plataforma escalável e alinhada
              </span>
              <span className="text-muted-foreground block text-2xl md:text-3xl lg:text-4xl mt-2">
                ao seu negócio?
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comece hoje mesmo a construir o futuro da sua empresa com tecnologia que realmente funciona.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="animate-glow-pulse">
              Solicitar proposta personalizada
            </Button>
            <Button variant="secondary" size="lg">
              Falar com um especialista
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 border-t border-border/30">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Avaliação gratuita</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Resposta em 24h</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Online agora</span>
              </div>
              <p className="text-foreground font-medium">
                Fale direto com nossa equipe técnica
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Resposta garantida em até 2 horas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};