import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-24 overflow-hidden border-b border-neutral-900">
      
      {/* Imagen difuminada en la carpeta public */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/doslocos.jpg"
          alt="Dos locos y un colao background"
          fill
          priority
          className="object-cover object-center blur-md scale-105 opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/85 to-[#0B0B0B]" />
      </div>

      {/* Contenido oficial */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#9B1C1C] text-white border border-red-500/30 shadow-lg shadow-red-900/20 animate-pulse">
          🚀 ¡ESTRENO ESTE LUNES, 15 DE JUNIO!
        </span>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          Dos locos <br className="md:hidden" />
          <span className="text-[#E5A93C]">
            y un colao
          </span>
        </h1>

        <div className="text-base md:text-lg text-neutral-200 max-w-2xl mx-auto font-medium space-y-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
          <p>
            Somos tres locos del entretenimiento que llevamos años metidos en el revolú de eventos, artistas, producción y todo lo que pasa backstage.
          </p>
          <p className="text-neutral-300 font-semibold text-sm md:text-base tracking-wide uppercase border-t border-neutral-800/60 pt-3 max-w-md mx-auto">
            Aquí venimos a hablar claro, a reírnos de nuestras propias historias y a contar lo que nadie dice.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <a
            href="/episodios"
            className="px-8 py-3.5 rounded-xl bg-[#E5A93C] text-black font-extrabold hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 duration-200"
          >
            Ver Próximo Estreno
          </a>
          <a
            href="mailto:doslocosyuncolao@gmail.com"
            className="px-6 py-3.5 rounded-xl bg-[#161616]/90 text-white font-semibold hover:bg-neutral-800 transition-all border border-neutral-800 backdrop-blur-sm"
          >
            Contacto / Auspicios
          </a>
        </div>
      </div>
    </section>
  );
}