import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronDown, Heart, Star } from 'lucide-react';
import heroImage from '../assets/images/Hero.png';
import { addToCart, initShopifyProductButton } from '../utils/shopify';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    // Inicializar botão Shopify quando componente montar
    initShopifyProductButton();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-white"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Heart className="w-4 h-4" />
              O excesso de telas está roubando a infância das crianças
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pijamas de Colorir{' '}
              <span className="bg-gradient-to-r from-[#4DA6FF] to-[#3B82F6] bg-clip-text text-transparent">
                Bobbie Goods
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Com o pijama de colorir Bobbie Goods, criatividade e diversão se juntam para criar{' '}
              <strong className="text-purple-600">lembranças inesquecíveis em família</strong>.
            </motion.p>

            <motion.div
              className="flex items-center gap-4 text-lg font-semibold text-gray-700 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                Pinte
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 text-blue-400 fill-current" />
                Lave
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Star className="w-5 h-5 text-green-400 fill-current" />
                Repinte
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.button
                onClick={() => addToCart()}
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4DA6FF] to-[#3B82F6] text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-semibold text-lg"
              >
                <span className="mr-2">Ver Ofertas Especiais</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="#caracteristicas"
                className="flex items-center justify-center px-8 py-4 border-2 border-purple-500 bg-white text-purple-600 rounded-lg shadow-md hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer font-semibold"
              >
                <span>Saiba Mais</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Product Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Pijama de colorir Bobbie Goods - criança feliz colorindo"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ Fácil de lavar!
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </motion.div>
    </section>
  );
};