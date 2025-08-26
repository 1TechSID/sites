import { Button } from './Button';
import heroImage from '@/assets/hero-illustration.jpg';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/10"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-brand/10 rounded-full blur-2xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforme uma <span className="text-brand">ideia</span> em produto
                <span className="block text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-normal mt-2">
                  com valor entregue desde o primeiro dia.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Protótipos rápidos, feedback real e entregas ágeis que reduzem risco e aceleram resultados.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" className="animate-glow-pulse">
                Quero uma proposta
              </Button>
             
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-6 border-t border-border/50">
              <div className="text-sm text-muted-foreground">
                <span className="text-2xl font-bold text-brand">+30</span>
                <span className="block">produtos lançados</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="text-sm text-muted-foreground">
                <span className="text-2xl font-bold text-brand">100%</span>
                <span className="block">projetos entregues</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Produto em evolução - desenvolvimento iterativo"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand/20 rounded-xl backdrop-blur-sm animate-bounce delay-100"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand/10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};