import React from 'react';
import { MessageCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-block mb-4">
              <span className="text-primary font-bold tracking-wider text-sm uppercase">
                Conserto de máquina de lavar e geladeiras
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Conserto de máquina de lavar e geladeira em Maringá
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
              A L. C. Máquinas de lavar e geladeiras é especializada em vendas e manutenção de máquinas de lavar, secar, geladeiras, entre outros. Atendemos Maringá e Região. Solicite agora mesmo seu orçamento!
            </p>
            
            <a 
              href="https://wa.me/5544998071701" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              <span>SOLICITAR ORÇAMENTO</span>
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-accent-dark rounded-[2rem] transform rotate-3 translate-x-4 translate-y-4"></div>
            <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0ms7rZW9dx0Z2DJoll6QarJ9KEfnJt1u8SC8Lz4kIdy-CYG8znGCXU96r9wl0VDXS0JwD4dwVUn6K3NKg2FrE2w55giyYx-fCyR0iwx_6VvXfa_zvJMc1gxPruK1tdbRObg0sR6F5SPBU0q4paKQk1EcKlW97f6WwVjYMFLCQ-88W3B6YDrch_p39LLSix7U5MqTOm4W3fj8fRDmQczTvYc5I53W9JBiqAX8bkAf5RwofgBSaDt7VtgdtmKOQUUg9ylMdWfzkKps" 
                alt="Técnico consertando eletrodoméstico" 
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};