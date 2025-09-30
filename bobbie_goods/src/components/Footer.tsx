import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Phone, MapPin, Shield, Heart } from 'lucide-react';

interface FooterItem {
  label: string;
  value: string;
  href?: string;
}

interface FooterSection {
  title: string;
  items: FooterItem[];
}

export const Footer: React.FC = () => {
  const companyName = 'Bobbie Goods';
  const currentYear = new Date().getFullYear();
  const cnpj = '47.850.057/0001-43';
  const address = 'Av. Victor Ferreira do Amaral, 2596 - Loja 4 - Tarumã - Curitiba/PR';
  const phone = '(41) 99999-9999';
  const email = 'contato@bobbie-goods.com.br';

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/bobbie_goods',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/bobbie_goods',
      icon: <Facebook className="w-5 h-5" />
    },
    {
      name: 'Telefone',
      href: `tel:+5541999999999`,
      icon: <Phone className="w-5 h-5" />
    },
  ];

  const footerSections: FooterSection[] = [
    {
      title: 'Contato',
      items: [
        { label: 'Telefone', value: phone, href: `tel:+5541999999999` },
        { label: 'Email', value: email, href: `mailto:${email}` },
        { label: 'Endereço', value: address, href: 'https://maps.google.com' }
      ]
    },
    {
      title: 'Empresa',
      items: [
        { label: 'CNPJ', value: cnpj },
        { label: 'Fundada em', value: '2023' },
        { label: 'Especialidade', value: 'Produtos Infantis Premium' }
      ]
    },
    {
      title: 'Suporte',
      items: [
        { label: 'Garantia', value: 'Satisfação ou dinheiro de volta' },
        { label: 'Entrega', value: 'Envio para todo Brasil' },
        { label: 'Devolução', value: 'Política de 30 dias' }
      ]
    }
  ];

  return (
    <footer className="bg-zinc-900 text-white py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="font-bold text-3xl mb-3 text-white">{companyName}</h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Especialistas em produtos infantis de alta qualidade, trazendo conforto e segurança para sua família.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Loja Verificada</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">Loja Física</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all duration-200 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-lg text-white mb-4">{section.title}</h4>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.label} className="text-zinc-300">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors duration-200 block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="font-medium text-zinc-400">{item.label}:</span>
                        <br />
                        <span className="text-sm">{item.value}</span>
                      </a>
                    ) : (
                      <>
                        <span className="font-medium text-zinc-400">{item.label}:</span>
                        <br />
                        <span className="text-sm">{item.value}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-zinc-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-zinc-400 text-sm text-center md:text-left">
              © {currentYear} {companyName}. Todos os direitos reservados.
              <br />
              <span className="text-zinc-500">CNPJ: {cnpj}</span>
            </div>

            <motion.div
              className="flex items-center gap-2 text-zinc-400 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Feito com</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>para famílias brasileiras</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};