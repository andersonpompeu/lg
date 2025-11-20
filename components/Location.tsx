import React from 'react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-4">
               <span className="w-10 h-1 bg-primary rounded-full"></span>
               <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Nossa Localização</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Venha nos visitar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos localizados em um ponto estratégico de Maringá para atender você e toda a região com mais agilidade.
          </p>
        </div>

        <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[400px] relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzVPbyw0r6JK3tf59gUvxTseiHjHphNpLG6ZZBFSfKDcW7H7Bfn4yV91g3RSdJyD4sURtqAPtiZpVIDRjgPVty7xxbc9IS9VtqCO1AEyoSvYhL2zEJGQbWgSzJ-UGalhAwocM7fKyLIrLZbdism6NDBH3PEUMLqoqV4EbHkGno39XOIWbeI9h0JNmQNr-DKyR2-2zkPsmbtoGFSY4uj-jCTNMo6BzhoXpNYS2V3kosCso7JZ1pOlWlBQnLADc80AMZdu3h0A7b2zg"
              alt="Mapa de Localização"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg max-w-sm">
                <p className="font-bold text-gray-900">L.C. Máquinas</p>
                <p className="text-sm text-gray-600">Rua Chile, 1687 - Jardim Alvorada</p>
                <p className="text-sm text-gray-600 mb-3">Maringá - PR</p>
                <a href="https://goo.gl/maps/PLACEHOLDER" target="_blank" rel="noreferrer" className="text-primary text-sm font-bold hover:underline">Ver no Google Maps &rarr;</a>
            </div>
        </div>
      </div>
    </section>
  );
};