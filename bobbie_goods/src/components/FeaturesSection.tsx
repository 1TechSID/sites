import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brush, Shirt, Shield, Sparkles } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px"
  });
  
  const title = 'Por que Escolher Bobbie Goods?';
  const description = 'Criado especialmente para estimular a criatividade e proporcionar momentos únicos em família.';
  
  const features = [
    {
      icon: <Brush className="w-8 h-8" />,
      title: 'Fácil de Lavar',
      description: 'Pode ser lavado na máquina ou na pia. As cores saem completamente, permitindo colorir infinitas vezes.',
      image: 'https://www.howwemontessori.com/.a/6a0147e1d4f40f970b0263e95feafb200b-pi'
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: 'Costura Reforçada',
      description: 'Tecido suede premium com 95% poliéster e 5% poliamida. Resistente e confortável para o uso diário.',
      image: 'https://tinytreasurestore.in/cdn/shop/files/unicornnosquiggles21_1800x1800_c207c065-76c1-4de9-b990-1b8564aead22.jpg'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Tecido Premium',
      description: 'Material de alta qualidade, macio ao toque e seguro para crianças. Não desbota e mantém a forma.',
      image: 'https://m.media-amazon.com/images/I/81Vr7mnX7VL._UY1000_.jpg'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Criatividade Infinita',
      description: 'Cada unidade acompanha 12 canetinhas de brinde. Pinte, lave e repinte quantas vezes quiser!',
      image: 'https://m.media-amazon.com/images/I/91J5N-NPjBL._UY1000_.jpg'
    },
  ];

  return (
    <section 
      ref={containerRef}
      id="caracteristicas" 
      className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white p-8 rounded-xl border border-purple-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Feature image */}
              <div className="mt-6 rounded-lg overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Special highlight section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            GIF da Lavagem na Pia
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Veja como é fácil lavar e preparar para uma nova sessão de criatividade!
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <img 
              src="https://www.howwemontessori.com/.a/6a0147e1d4f40f970b026be40c0049200d-pi"
              alt="Demonstração de como lavar o pijama na pia"
              className="rounded-lg max-w-md mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};