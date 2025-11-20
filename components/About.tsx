import React from 'react';
import { UserCheck, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative grid grid-cols-2 gap-4">
             <div className="col-span-2">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt65kBTRL0ABKPQe8h-2o4jJ1WvAaoLHY8h7EiSgn7rr2ceN5AoiJEzvMByBPoCmYiWEUQX7KcWJcqckQkADalGND5xe-rYRkcVPIFyA5y96jNim4ikl2eKfQFQYWf-q-3PvJCecJC9yFY8DKEgtDeanJBeh2iX8OHuPMdCdia23OBihKbCU45FqIL4k5eGpv11P--GAFvNjbiu4G9NbNH4dAAMWlVWeEGLdLvKHQ4hOjhNp_SxH0ru9V0RgE_Gw_fOkSFt2XyOaY" 
                  alt="Reparo técnico" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-300"
                />
             </div>
             <div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-nymWl-hDVjRJGSL2Jod-o8qTr_dPVY_IDkiS6qgkP_JA87t9_XVNZO45LVqJbSb_iWVkbMtODtUL2OkFWTGB85HqH_eu-5kP2eWA1Rj4kRv8uzobFQ5AZ9bwyfC_m1YFfXVhreRWT89549-ObGYnkzmlJXyK9WfT-5smKXmlCO3IVFKQxpI1aYpJ18oreZPFJlQETqhnaKB9oRrHs8L3IFQT4njZ-BknvsvzmcEKrx7XAzLIQUCWEIjnDhpfA7fRHfYlk11YRbg" 
                  alt="Ferramentas" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-300"
                />
             </div>
             <div>
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr-XbITRwSxbTTAqplbd5B1OJafIa6y3fI6ecthvwhbyxAfFMUU87D6-MzmiNS8sLlSUuuYG4azJdOn4b5yhDPdRcw353lxFaH9OprPeI5exPREUG045E1cvnFTD3iWdaKzEOkBg5gBC7hJ4M2DgO0MDdMaSy0CtlmgLwSgOHAkSDgyQi105vcFiM8aJA5S1USOLe37woHEEcN2oBRhkaAhqYuWxWIL1xzM5FyavWmJyme3-SbPGjxx91W9At_4AlOeXng0k-yDHY" 
                  alt="Manutenção detalhada" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-300"
                />
             </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Somos A L. C. Máquinas</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Oferecemos serviços de venda e manutenção em Maringá e Região
            </h2>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              Oferecemos serviços especializados em manutenção e reparo de máquinas de lavar e geladeiras. Conte conosco para garantir o funcionamento eficiente e duradouro dos seus eletrodomésticos. Atendemos Maringá e Região.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary shrink-0">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Equipe Qualificada</h3>
                  <p className="text-sm text-gray-600">Nossa equipe conta com especialistas em reparos e manutenção.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Garantia</h3>
                  <p className="text-sm text-gray-600">Todos os nossos serviços contam com garantia oferecendo mais segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};