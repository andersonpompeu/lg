import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-surface-light">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
             <span className="w-10 h-1 bg-primary rounded-full"></span>
             <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Depoimentos</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-900">Avaliação de nossos clientes</h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Large Quote Icon Background */}
          <div className="absolute -top-8 -left-8 text-primary/10">
            <Quote size={80} />
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl relative z-10">
            <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
              "Fiz o orçamento com a equipe da L.C. Máquinas para o reparo e manutenção da minha geladeira. Realizaram um serviço de primeira e agora não irei precisar comprar uma nova. Recomendo!"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrCw0muxjIwUYEoTCr-oOM4GxoAutDjHYa2BzAoLconL028eajzIkF7mV5aEjxmjumUP1W0pUvNnOxPq9WuCJwZ1FmrCbkOLPFqUtRePtJT15bE64-EkZ3xWjry1nNIbUUNL9jCBytR3W_u_S4TiQ7Ksdw5C6yRw5Cp9V5gHpWFSjlMMkTSYh76boaCI_c4Cko0vxLixsIZbXB9QgF9HVDKfSJFN_88HXU5e73zyCNKw_KXKx5--h1GMTW6OLEYu6MI4y4BiQp2zg" 
                alt="Carlos Dias" 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary p-1"
              />
              <div className="text-left">
                <h4 className="font-bold text-lg text-gray-900">Carlos Dias</h4>
                <p className="text-sm text-gray-500">Gerente comercial</p>
              </div>
            </div>
          </div>

           {/* Large Quote Icon Background Bottom */}
           <div className="absolute -bottom-8 -right-8 text-primary/10 transform rotate-180">
            <Quote size={80} />
          </div>
        </div>
      </div>
    </section>
  );
};