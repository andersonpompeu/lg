import React from 'react';

export const Brands: React.FC = () => {
  const brands = [
    { name: 'LG', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcAHumJ-4L-sG8rlb38jYYiRII0YPp3gMcTeOSiymgVHjFTQ9AWzVojF6km2dgoiIkKM32XJS9Swm_SiAptji3HVtP43A32_RqVCXTPzyOHdMbHT4Eyj0RV12B7VMl6LkAATIGJCMTjbKpOqAFp9C4w7Ujh6s_Nr8mFSxhMQ3ccBrvWaljAcQjCnKLWoxgebeQV0A0wH3E2qkltbKUpSWsByOaLdVPpYCZdrOKCgvRE9t2n5qJgEscPZpyI9IYtWUM46irpzanBP8' },
    { name: 'Samsung', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr9eXuZZT4gnjnP7u20GHQrJqXwd4sNfAW9wGzfddKrH_8VLc2susp6p5g3C4fQlmjNDh_ZC8Txh8u89hHHYD_YWRWX5M7NWSB0w5koKZynkYi_4CMI8ZrNxa_8ty7WzpJs7i0Cwr4-SdnGzC0g2JzwgJHpNtAqxHJfOP8CBs2Hm0DkJ1XCSI51-RdbFtnBy9XmX7JPbvfq4DyKpj4Y4Bq-kqw-xy26KKM7_oqd1gq5J0L_F1G93WIGcL7DF8GLHBFHTU5FJHnDAw' },
    { name: 'Continental', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVtgodNVUlm4rWg1E-QsVn04GMy9ncJtqWj2B4pIrBTgcEgG0i-dTqpMiHMzI6R7ZFFL5cB1e7MpyKlUGwFx2Dt7pd3ZSEeO2O0I6U3cjtbR2Xcxe1r2a5u1WulpGtNgG4heHhQYM4m56wLZbNbmbEPFCFkgc989NGa308tky6OumIviWalR6of4uTx0XtidOlttlglBh7tZCOWPniro6RK9kn_xuXXfxwhKzyYYlQR1zneoEpNoMyxIF8ys8l7Fa8HIbUfV3VFmE' },
    { name: 'Electrolux', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-8OtZXCtgFzOQ495S4y24eUf5VlLoQVz5au2WbkJb_qdM6erlqTA2gSrjeul-n3KmvS1wCSIs-psgldecciYteFIyHUrcsahbfa5TXTK9IrJ57l4iRq0uXaxDQ9Y0-l_vXD-UDtbhUDjikWok_cPBq6wDfsEFiHfeL-PTQdKOtEVbiSIMkURf6nMWSW8ftSNN6ct75rGt8FztKgCeCEEy0SfN5IsXq1Emy_J7S3GBiWxp08IgBQAdE2D6oZpTE4Vgf2F91I6TnZs' },
    { name: 'GE', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3UBZeQrsM-jBoaueix1AO4p3_qfOeQDLWola_kFEbhh2cZPWW57w9u6NIhdpumTx_f8CeKp_1varIGGr5xMqaXW7M78jiumUWuWBbutNMRDVct7vc8Y5BrsrAXBHtttZq_GJa-XEHT56uD_ZtehU5tDX_lnygvL6VJgj22QKn4ZQZiMDftdtTVACiJDjk-ycXj3lbdosa7zbxHRREnFKOw9cITJkdz1LD7V0sF7TLjyATgTRrpPHilndTi1DAbED10Q5CxA8GcF4' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-sm font-bold tracking-wider uppercase text-gray-500 mb-12">
          Trabalhamos com as melhores marcas
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {brands.map((brand) => (
            <img 
              key={brand.name}
              src={brand.src} 
              alt={`Logo ${brand.name}`} 
              className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};