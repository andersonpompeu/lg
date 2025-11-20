import React from 'react';
import { Facebook, Camera, MapPin, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-accent-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
             <div className="flex items-center space-x-3">
                <div className="bg-white text-accent-dark text-xl font-bold px-3 py-1 rounded-lg">
                  LC
                </div>
                <div className="flex flex-col leading-tight text-white text-xs font-bold tracking-wide">
                  <span>MÁQUINAS DE LAVAR</span>
                  <span>E GELADEIRAS</span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                Serviço de reparos e manutenção em máquinas de lavar, secar, geladeiras, air fryer, micro-ondas e câmara fria.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  <Camera size={20} />
                </a>
              </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Acesso Rápido</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Empresa</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#location" className="hover:text-primary transition-colors">Localização</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
             <h4 className="font-bold text-lg mb-6">Fale Conosco</h4>
             <div className="space-y-6">
                <div className="flex items-start gap-4 bg-accent-light/50 p-4 rounded-lg border border-white/5">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <p className="text-gray-300 text-sm">
                    Rua Chile, 1687 - Jardim Alvorada - Maringá - PR
                  </p>
                </div>

                <a 
                  href="https://wa.me/5544998071701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-primary hover:bg-primary-dark p-5 rounded-xl transition-all group"
                >
                   <MessageCircle size={36} className="text-white" />
                   <div>
                     <p className="font-bold text-lg text-white group-hover:translate-x-1 transition-transform">(44) 99807-1701</p>
                     <p className="text-white/90 text-sm">Solicite seu orçamento</p>
                   </div>
                </a>
             </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© 2025 L.C. Máquinas e Geladeiras - Maringá - PR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};