import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, MapPin, CheckCircle, Users } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const title = 'Compre com Total Segurança';
  
  const trustBadges = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Loja com CNPJ',
      description: '47.850.057/0001-43',
      verified: true
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Loja Física',
      description: 'Av. Victor Ferreira do Amaral, 2596 - Loja 4 - Tarumã - Curitiba/PR',
      verified: true
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Perfis Verificados',
      description: 'Instagram, Facebook e Reclame Aqui verificados',
      verified: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Garantia Total',
      description: 'Satisfação ou seu dinheiro de volta',
      verified: true
    },
  ];

  const teamMembers = [
    {
      name: 'Ana Silva',
      role: 'Fundadora & CEO',
      image: 'https://images.unsplash.com/photo-1645220127443-5cc472ce6165?w=400&h=400&fit=crop&crop=face',
      description: 'Especialista em produtos infantis com 10 anos de experiência'
    },
    {
      name: 'Carlos Santos',
      role: 'Diretor de Qualidade',
      image: 'https://images.unsplash.com/photo-1645220127528-a4ffca2d2057?w=400&h=400&fit=crop&crop=face',
      description: 'Garante a qualidade premium de todos os nossos produtos'
    },
    {
      name: 'Maria Oliveira',
      role: 'Atendimento ao Cliente',
      image: 'https://images.unsplash.com/photo-1645220127753-e9282320bb56?w=400&h=400&fit=crop&crop=face',
      description: 'Suporte dedicado para uma experiência excepcional'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <section 
      ref={containerRef}
      className="py-20 px-6 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Trust Section */}
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
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Você compra tranquilo, com a certeza de estar em uma loja séria, confiável e comprometida com a sua experiência.
          </motion.p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
            >
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {badge.description}
              </p>
              {badge.verified && (
                <div className="mt-3 inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verificado
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça a Equipe da Puro Conforto
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Profissionais dedicados que trabalham todos os dias para oferecer a melhor experiência para sua família.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h4>
              <p className="text-purple-600 font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Trust Message */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <h4 className="text-2xl font-bold mb-4">
            💯 Garantia de Satisfação Total
          </h4>
          <p className="text-lg">
            Se por algum motivo você não ficar completamente satisfeito com o seu pijama Bobbie Goods, 
            devolvemos seu dinheiro sem complicações. Sua confiança é nossa prioridade!
          </p>
        </motion.div>
      </div>
    </section>
  );
};