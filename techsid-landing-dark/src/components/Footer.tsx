export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-foreground mb-4">
              Tech<span className="text-brand">SID</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Trabalhamos with projetos sob medida — fale conosco para uma conversa sem compromisso.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand hover:bg-brand/10 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand hover:bg-brand/10 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-brand hover:bg-brand/10 transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.486-1.995.701 0 1.039.526 1.039 1.155 0 .703-.448 1.754-.679 2.728-.194.819.411 1.486 1.219 1.486 1.463 0 2.588-1.543 2.588-3.77 0-1.969-1.414-3.348-3.436-3.348-2.343 0-3.717 1.757-3.717 3.57 0 .706.271 1.462.608 1.872.067.081.077.152.057.234-.061.254-.196.792-.223.903-.035.146-.116.177-.268.107-1-.466-1.624-1.93-1.624-3.108 0-2.591 1.883-4.973 5.429-4.973 2.85 0 5.067 2.031 5.067 4.742 0 2.83-1.783 5.104-4.258 5.104-.832 0-1.615-.432-1.881-.942l-.512 1.956c-.185.711-.685 1.601-1.019 2.145.769.237 1.581.366 2.426.366 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-muted-foreground hover:text-brand transition-colors duration-200">Início</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-brand transition-colors duration-200">Serviços</a></li>
              <li><a href="#sobre" className="text-muted-foreground hover:text-brand transition-colors duration-200">Sobre</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-brand transition-colors duration-200">Contato</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-brand transition-colors duration-200">Política de Privacidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand transition-colors duration-200">Termos de Serviço</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-brand transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 TechSID. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Atendimento online</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Resposta em até 2 horas
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};