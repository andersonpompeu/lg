import React from 'react';
import { Waves, Refrigerator, Zap, Snowflake } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvgI_vPgTgBVPQ34kDwvr8eJMCs9rX4H2-ZEVMgtgFShHht6c-J4fWfPiP0q8onn77LDEoLfgDbZ1qn0rhe2MPpjoc747zAkF2UYrKBVz_ZEgIwLpITuqUWkWxVoWU97sTm8lQzfTnJ1XBae6Ro3uk30q06WGKEc6Wyc6bZrz9Wl1T8HJ9lRkK3HRbwjJ2R5YPkRw4GTr_lDp9EhW0697kxeeKCiNiO5NF4rBtK2hDZI2HRvL7j0av454caidSyOKBK7Q70njwb6Y" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-4">
             <span className="w-10 h-1 bg-primary rounded-full"></span>
             <span className="text-sm font-bold tracking-widest uppercase text-gray-300">Nossos Serviços</span>
             <span className="w-10 h-1 bg-primary rounded-full"></span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Soluções completas para seus eletrodomésticos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para garantir o funcionamento perfeito dos seus aparelhos, com agilidade e segurança.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors group">
            <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Waves size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Máquinas de lavar/secar</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Realizamos manutenção, lavagem interior e reparo exterior de sua máquina.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors group">
            <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Refrigerator size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Geladeiras</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serviços de manutenção de geladeiras de diversos modelos em geral.
            </p>
          </div>

           {/* Card 3 */}
           <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors group">
            <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Eletrodomésticos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reparo em micro-ondas, air fryer, forno elétrico, etc.
            </p>
          </div>

           {/* Card 4 */}
           <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/15 transition-colors group">
            <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Snowflake size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">Câmara Fria</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trabalhamos com o reparo e manutenção em câmaras frias.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-black/40 rounded-3xl p-10 border border-white/5">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Anos de Experiência</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">3.254+</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Reparos e Manutenções</div>
            </div>
            <div className="p-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-400 uppercase tracking-wider text-sm font-medium">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};