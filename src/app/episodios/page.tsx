import React from 'react';

export default function EpisodiosPage() {
  const youtubeChannelUrl = "https://www.youtube.com/@Doslocosyuncolao/";

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F3F4F6] px-4 py-16 pb-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* 1. ENCABEZADO DE LA PÁGINA */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-extrabold text-[#E5A93C] uppercase tracking-widest bg-[#E5A93C]/10 px-3 py-1 rounded-md border border-[#E5A93C]/20">
            🔥 PROMOCIONALES OFICIALES
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
            Calentando los motores
          </h1>
          <div className="h-1 w-20 bg-[#9B1C1C] mt-3 rounded-full" />
        </div>

        {/* 2. VIDEO HORIZONTAL GRANDE ARRIBA */}
        <div className="w-full max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden border border-neutral-800/80 bg-neutral-950 shadow-2xl shadow-black/60">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ba8PqOeSKuw?si=kDM_e_qnkvVycdXZ"
            title="Dos locos y un colao - Promo Oficial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* 3. SECCIÓN INFERIOR COMPARTIDA (Short a la izquierda + Cuadros a la derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto pt-4">
          
          {/* COLUMNA IZQUIERDA: SHORT VERTICAL (Ocupa 5 de 12 columnas) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[310px] aspect-[9/16] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl shadow-red-950/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Rymc7PSAfEk"
                title="Dos Locos y un Colao - Mensaje Oficial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: CUADROS INFORMATIVOS (Ocupa 7 de 12 columnas) */}
          <div className="lg:col-span-7 flex flex-col gap-6 w-full justify-center">
            
            {/* CUADRO DEL EPISODIO 1 (CON BLUR Y TARJETA ROJA) */}
            <div className="p-6 rounded-3xl border border-neutral-900 bg-[#161616]/20 relative overflow-hidden flex items-center min-h-[130px] select-none shadow-lg">
              
              {/* Capa flotante centralizada roja parpadeante */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/40">
                <div className="flex flex-col items-center gap-1 bg-[#9B1C1C] border border-red-500/40 px-5 py-3 rounded-2xl shadow-2xl animate-pulse text-center w-[85%]">
                  <span className="text-xs font-black tracking-widest text-red-200 uppercase">
                    Primer Episodio
                  </span>
                  <span className="text-sm font-black tracking-wider text-white uppercase">
                    Estreno Lunes 15 de Junio
                  </span>
                </div>
              </div>

              {/* Contenido borroso de fondo */}
              <div className="w-full flex items-center gap-4 transition-all blur-[7px] opacity-25 scale-[0.98] pointer-events-none">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black bg-neutral-900 text-neutral-600 border border-neutral-800">
                  01
                </div>
                <div className="space-y-1 flex-1">
                  <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                    Próximamente
                  </span>
                  <h3 className="font-bold text-lg text-white">
                    Contenido Oculto Altamente Confidencial
                  </h3>
                </div>
              </div>

            </div>

            {/* CUADRO DE SUSCRIPCIÓN A YOUTUBE */}
            <div className="p-6 rounded-3xl border border-neutral-800/60 bg-[#161616] flex flex-col justify-between gap-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-red-900/40 hover:shadow-xl hover:shadow-red-950/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-red-500 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  ¿Quieres ver el episodio completo?
                </div>
                <h3 className="text-xl font-black text-white">
                  Asegura tu puesto en el estreno
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Ya tienes un adelanto en los videos. El lunes soltamos el primer episodio completo sin filtros. ¡Suscríbete al canal oficial ya mismo!
                </p>
              </div>

              <a
                href={youtubeChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-red-600 text-white font-extrabold text-sm hover:bg-red-500 transition-all shadow-lg shadow-red-950/40 active:scale-95 duration-200 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Suscribirse al canal
              </a>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}