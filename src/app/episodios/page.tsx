import React from 'react';

export default function EpisodiosPage() {
  const youtubeChannelUrl = "https://www.youtube.com/@Doslocosyuncolao/";

  const listaEpisodios = [
    { numero: "01", titulo: "Episodio Secreto Revelado", fecha: "Lunes, 15 de Junio", estado: "estreno" },
    { numero: "02", titulo: "Contenido Altamente Confidencial", fecha: "Lunes, 22 de Junio", estado: "proximamente" },
    { numero: "03", titulo: "Anécdotas Prohibidas Del Backstage", fecha: "Lunes, 29 de Junio", estado: "proximamente" },
    { numero: "04", titulo: "El Revolú Definitivo Del Show", fecha: "Lunes, 6 de Julio", estado: "proximamente" },
  ];

  return (
    <main 
      className="min-h-screen bg-[#0A0A0A] text-white px-4 py-16 pb-24 relative overflow-hidden"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
    >
      {/* 🟠 GLOWS DE ESTUDIO NARANJA */}
      <div className="absolute -top-20 right-1/4 w-[600px] h-[600px] bg-[#FF6B00]/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 -left-20 w-[400px] h-[400px] bg-[#FF6B00]/5 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full border border-[#FF6B00]/20 backdrop-blur-md">
            Contenido Oficial
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mt-4 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            Todos los Episodios
          </h1>
          <div className="h-1 w-20 bg-[#FF6B00] mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(255,107,0,0.6)]" />
        </div>

        {/* 🎥 1. ARRIBA: VIDEO PRINCIPAL GRANDE */}
        <div className="space-y-4">
          <h2 className="text-lg font-black uppercase tracking-wider text-neutral-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse shadow-[0_0_8px_#FF6B00]" /> Video de Presentación
          </h2>
          <div className="w-full bg-neutral-900/40 border border-white/[0.06] hover:border-[#FF6B00]/30 rounded-3xl p-3 md:p-5 backdrop-blur-md shadow-2xl transition-all duration-300">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black/80">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/Ba8PqOeSKuw?si=9NpymTb5_trfctUN" 
                title="Dos Locos y un Colao - Pronto" 
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* 🔀 SECCIÓN MEDIA: GRID DIVIDIDO (SHORT Y SUSCRIPCIÓN) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* 📱 ABAJO IZQUIERDA: YOUTUBE SHORT */}
          <div className="md:col-span-5 space-y-4 flex flex-col">
            <h2 className="text-lg font-black uppercase tracking-wider text-neutral-300 flex items-center gap-2">
              ⚡ Mensaje al Público
            </h2>
            <div className="w-full bg-neutral-900/40 border border-white/[0.06] hover:border-[#FF6B00]/30 rounded-3xl p-4 backdrop-blur-md shadow-2xl flex justify-center items-center flex-1 transition-all duration-300">
              <div className="w-full max-w-[260px] aspect-[9/16] rounded-2xl overflow-hidden bg-black/80 shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/Rymc7PSAfEk" 
                  title="Mensaje de los integrantes" 
                  style={{ border: 'none' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* 🚨 ABAJO DERECHA: SECCIÓN SUSCRÍBETE */}
          <div className="md:col-span-7 space-y-4 flex flex-col">
            <h2 className="text-lg font-black uppercase tracking-wider text-neutral-300 flex items-center gap-2">
              📢 Únete a la Mesa
            </h2>
            <div className="w-full bg-gradient-to-b from-neutral-900/60 to-neutral-950/20 border border-white/[0.06] hover:border-[#FF6B00]/20 rounded-3xl p-6 md:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-center items-center text-center flex-1 space-y-6 transition-all duration-300">
              <div className="space-y-3">
                <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                  ¿Quieres ver más <span className="text-[#FF6B00]">revolú</span>?
                </h3>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Suscríbete directamente en nuestra plataforma oficial en YouTube para no perderte ningún estreno semanal, detrás de cámaras exclusivo e interacción activa en el chat.
                </p>
              </div>
              
              <a 
                href={youtubeChannelUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full max-w-xs inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#FF6B00] hover:bg-[#E05E00] text-black font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#FF6B00]/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                Ir al Canal de YouTube
              </a>
            </div>
          </div>

        </div>

        {/* 📋 3. ABAJO TOTAL: RE-ALINEACIÓN ORIGINAL (CUADROS ALARGADOS) */}
        <div className="space-y-6 pt-6">
          <div className="border-b border-white/10 pb-4">
            <h2 className="text-xl font-black uppercase tracking-wider text-white">
              Guía de Lanzamientos
            </h2>
            <p className="text-xs text-neutral-500 mt-1">Capítulos nuevos listos en la parrilla.</p>
          </div>

          <div className="space-y-3">
            {listaEpisodios.map((ep, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl border transition-all backdrop-blur-md ${
                  ep.estado === 'estreno' 
                    ? 'bg-[#FF6B00]/5 border-[#FF6B00]/30 shadow-[0_0_15px_rgba(255,107,0,0.05)]' 
                    : 'bg-neutral-900/20 border-white/[0.04] hover:border-white/10'
                }`}
              >
                {/* LADO IZQUIERDO: Número grande */}
                <div className="flex items-center gap-6">
                  <span className={`text-2xl font-black ${ep.estado === 'estreno' ? 'text-[#FF6B00]' : 'text-neutral-600'}`}>
                    {ep.numero}
                  </span>
                  
                  {/* CENTRO: Textos de estreno, fecha y título con blur */}
                  <div className="space-y-0.5 text-left">
                    <span className={`text-[10px] font-black uppercase tracking-widest block ${
                      ep.estado === 'estreno' ? 'text-[#FF6B00]' : 'text-neutral-400'
                    }`}>
                      Estreno
                    </span>
                    <h3 className="font-black text-sm md:text-lg uppercase tracking-tight text-white leading-tight">
                      {ep.fecha}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500/40 blur-[4px] select-none pt-0.5">
                      {ep.titulo}
                    </p>
                  </div>
                </div>

                {/* LADO DERECHO: Badge de estado */}
                <div className="mt-4 sm:mt-0">
                  {ep.estado === 'estreno' ? (
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest text-black bg-[#FF6B00] px-3 py-1 rounded-md shadow-[0_0_10px_rgba(255,107,0,0.4)] animate-pulse">
                      ¡Gran Estreno!
                    </span>
                  ) : (
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest text-neutral-500 bg-neutral-900 px-3 py-1 rounded-md border border-white/5">
                      Próximamente
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
