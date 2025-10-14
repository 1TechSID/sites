import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, PenTool, Truck, Palette, Shield, Award, Droplets, Ruler, Percent } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const title = 'Perguntas Frequentes';
  const description = 'Esclareça suas dúvidas sobre os pijamas de colorir Bobbie Goods.';
  
  const faqs = [
    {
      question: 'Como funciona a promoção "Compre 2 Leve 3"?',
      answer: 'É muito simples! Adicione 2 pijamas ao carrinho e automaticamente você receberá o 3º pijama de graça. O desconto é aplicado automaticamente no checkout. Para a promoção "Compre 3 Leve 5", funciona da mesma forma.',
      icon: <Percent className="w-5 h-5" />
    },
    {
      question: 'Como funciona o sistema de colorir e lavar?',
      answer: 'Os pijamas Bobbie Goods são feitos com tecido especial que permite colorir com canetinhas para tecido. Depois de brincar, é só lavar na máquina ou na pia que as cores saem completamente, deixando o pijama pronto para uma nova sessão de criatividade!',
      icon: <Palette className="w-5 h-5" />
    },
    {
      question: 'As canetinhas estão incluídas?',
      answer: 'Sim! Cada pijama Bobbie Goods vem com um kit completo de 12 canetinhas para tecido de cores variadas. São canetinhas de alta qualidade, laváveis e seguras para crianças.',
      icon: <PenTool className="w-5 h-5" />
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'Oferecemos frete grátis para todo o Brasil! O prazo de entrega varia de 5 a 15 dias úteis, dependendo da sua região. Você receberá o código de rastreamento por email assim que o pedido for despachado.',
      icon: <Truck className="w-5 h-5" />
    },
    {
      question: 'O tecido é seguro para crianças?',
      answer: 'Absolutamente! Nossos pijamas são feitos com tecido suede premium (95% poliéster e 5% poliamida), hipoalergênico e seguro para peles sensíveis. Todas as costuras são reforçadas para maior durabilidade.',
      icon: <Shield className="w-5 h-5" />
    },
    {
      question: 'Como funciona a garantia?',
      answer: 'Oferecemos garantia de satisfação total! Se você não ficar completamente satisfeito com seu pijama Bobbie Goods, devolvemos seu dinheiro em até 30 dias após a compra, sem complicações.',
      icon: <Award className="w-5 h-5" />
    },
    {
      question: 'Posso lavar na máquina de lavar?',
      answer: 'Sim! Os pijamas podem ser lavados normalmente na máquina de lavar com água fria ou morna. As cores das canetinhas saem completamente, deixando o pijama como novo para colorir novamente.',
      icon: <Droplets className="w-5 h-5" />
    },
    {
      question: 'Quais tamanhos estão disponíveis?',
      answer: 'Nossos pijamas estão disponíveis nos tamanhos P, M, G e GG, atendendo crianças de 2 a 12 anos. Consulte nossa tabela de medidas para escolher o tamanho ideal.',
      icon: <Ruler className="w-5 h-5" />
    },
  ];

  const [openItems, setOpenItems] = useState<number[]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section 
      ref={containerRef}
      className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-indigo-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-indigo-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
                    {faq.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-indigo-600" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-gray-700 leading-relaxed bg-indigo-25">
                      <div className="pl-14">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center bg-white rounded-2xl p-8 border border-indigo-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe está sempre pronta para ajudar você! Entre em contato conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold">
              Falar no WhatsApp
            </button>
            <button className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200 font-semibold">
              Enviar Email
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};