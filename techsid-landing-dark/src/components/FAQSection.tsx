import { useState } from 'react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Divulgam preços no site?",
      answer: "Não — cada projeto é único; oferecemos avaliação gratuita e proposta personalizada baseada nas suas necessidades específicas."
    },
    {
      question: "Posso alterar o escopo durante o projeto?",
      answer: "Sim — usamos priorização contínua para acomodar mudanças com menor impacto. Nossa metodologia ágil permite adaptações sem comprometer prazos."
    },
    {
      question: "Usam IA nos projetos?",
      answer: "Sim — quando há ganho mensurável. Implementamos soluções de IA apenas quando agregam valor real ao seu negócio, não por modismo tecnológico."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            FAQ
          </h2>
          <p className="text-lg text-muted-foreground">
            Dúvidas frequentes sobre nossos serviços
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-card-hover transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-6 h-6 text-brand transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-dark rounded-2xl p-8 border border-brand/20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-brand">
                Ainda tem dúvidas?
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Nosso time está pronto para esclarecer qualquer questão sobre seu projeto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};