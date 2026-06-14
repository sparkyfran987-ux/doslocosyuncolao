import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main 
      className="min-h-screen bg-[#050505] text-white overflow-hidden relative pb-24"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
    >
      {/* 📸 IMAGEN DE FONDO DEL HERO CON MÁSCARA CINEMÁTICA */}
      <div className="absolute top-0 left-0 w-full h-[70vh] md:h-[85vh] z-0 pointer-events-none opacity-100">
        {/* Imagen cargada desde tu ruta pública */}
        <Image 
          src="/doslocos.jpg" 
          alt="Dos Locos y un Colao en el estudio"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Degradados para fundir la foto con el fondo negro */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/20 via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* EFECTOS DE RESPLANDOR DE ESTUDIO (GLOWS MULTICOLOR) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 pt-20 md:pt-32 text-center relative z-10 space-y-8">
        {/* Etiqueta de Estreno */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md animate-pulse">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="text-xs font-black uppercase tracking-widest text-[#E5A93C]">
            Estreno: Lunes 15 de Junio
          </span>
        </div>

        {/* Título Monumental con sombra integrada */}
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent max-w-4xl mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.9)]">
          Dos Locos <br /> <span className="text-[#E5A93C]">y un Colao</span>
        </h1>

        <p className="text-neutral-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
          Tres mentes con años de experiencia en eventos, artistas y backstage production metidas en el revolú definitivo del entretenimiento.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/episodios" className="w-full sm:w-auto px-8 py-4 font-black uppercase tracking-widest text-sm rounded-2xl bg-white text-black hover:bg-neutral-200 transition-all shadow-2xl active:scale-95">
            Ver Episodios
          </Link>
          <Link href="/informacion" className="w-full sm:w-auto px-8 py-4 font-black uppercase tracking-widest text-sm rounded-2xl bg-white/[0.05] border border-white/10 text-white hover:bg-white/[0.1] transition-all backdrop-blur-md active:scale-95">
            Sponsor / Contacto
          </Link>
        </div>
      </section>

      {/* SECCIÓN MUESTRA DE CONTENIDO DE IMPACTO */}
      <section className="max-w-5xl mx-auto px-4 mt-40 relative z-10">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Próximamente en el Show</h2>
          <p className="text-sm text-neutral-500 mt-1">Lo que te espera en cada episodio semanal.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all group hover:-translate-y-1 backdrop-blur-sm">
            <div className="text-3xl mb-4">🎙️</div>
            <h3 className="text-lg font-black uppercase tracking-wider mb-2 group-hover:text-[#E5A93C] transition-colors">Backstage Real</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">Anécdotas crudas, historias sin filtro de producciones masivas y lo que pasa detrás de las cortinas.</p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all group hover:-translate-y-1 backdrop-blur-sm">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-black uppercase tracking-wider mb-2 group-hover:text-[#E5A93C] transition-colors">Invitados Bomba</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">Artistas, productores y figuras clave que vienen a sentarse en la mesa a hablar claro.</p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-all group hover:-translate-y-1 backdrop-blur-sm">
            <div className="text-3xl mb-4">🔥</div>
            <h3 className="text-lg font-black uppercase tracking-wider mb-2 group-hover:text-[#E5A93C] transition-colors">El Revolú Colectivo</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">Análisis con humor picante e irreverente de la industria del entretenimiento.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
