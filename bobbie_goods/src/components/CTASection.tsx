import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gift, ShoppingCart, Heart, Truck, Star, ArrowRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  const title = 'Oferta Especial de Dia das Crianças';
  const description = 'Aproveite nossas promoções imperdíveis e garante já o seu pijama Bobbie Goods!';
  
  const offers = [
    {
      icon: <Gift className="w-8 h-8" />,
      title: 'Compre 2 e Leve 3',
      description: 'Promoção especial para famílias',
      highlight: 'Economia de 33%'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compre 3 e Leve 5',
      description: 'Ideal para grupos de amigos',
      highlight: 'Economia de 40%'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Frete Grátis',
      description: 'Para todo o Brasil',
      highlight: 'Sem taxa adicional'
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section
      id="ofertas"
      ref={containerRef}
      className="py-20 px-6 bg-gradient-to-br from-yellow-50 to-orange-50"
    >
      <div className="container mx-auto max-w-6xl">
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
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
          
          {/* Special highlight */}
          <motion.div
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Star className="w-5 h-5 fill-current" />
            Cada unidade acompanha 12 canetinhas de brinde
            <Star className="w-5 h-5 fill-current" />
          </motion.div>
        </motion.div>

        {/* Offers Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                {offer.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {offer.description}
              </p>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-semibold">
                {offer.highlight}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="bg-gradient-to-r from-[#4DA6FF] to-[#3B82F6] rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Desconto Automático no Carrinho
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Não perca tempo! As promoções são aplicadas automaticamente quando você adiciona os produtos ao carrinho.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-6 h-6 mr-2" />
                Comprar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                className="flex items-center justify-center px-6 py-4 border-2 border-white bg-transparent text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200 cursor-pointer font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Mais Detalhes
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};