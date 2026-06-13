import Hero from "@/components/Hero";

export default function Home() {
  const fbPageUrl = encodeURIComponent("https://www.facebook.com/profile.php?id=61590373832211");

  // Cartelera con títulos ocultos bajo el blur
  const proximosEpisodios = [
    { numero: "01", titulo: "El Revolú del Entretenimiento", fecha: "Estreno Lunes 15 de Junio", estado: "estreno" },
    { numero: "02", titulo: "Episodio Secreto Oculto Backstage", fecha: "Lunes, 22 de Junio", estado: "espera" },
    { numero: "03", titulo: "Contenido Confidencial No Revelado", fecha: "Lunes, 29 de Junio", estado: "espera" },
    { numero: "04", titulo: "Historias Secretas Detrás de Cámara", fecha: "Lunes, 06 de Julio", estado: "espera" },
    { numero: "05", titulo: "Gran Cierre de Temporada Sorpresa", fecha: "Lunes, 13 de Julio", estado: "espera" },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F3F4F6] pb-24">
      {/* 1. Banner Principal */}
      <Hero />

      {/* 2. Sección Contenido Dividido (Facebook + Lista de Episodios con Animación Hover) */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: FEED DE FACEBOOK */}
          <div className="space-y-6">
            <div className="border-l-4 border-[#E5A93C] pl-4">
              <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                Últimas Publicaciones
              </h2>
              <p className="text-sm text-neutral-400">Sigue la actividad directo desde su página</p>
            </div>

            {/* Contenedor del Iframe de Facebook */}
            <div className="w-full bg-[#161616] rounded-3xl p-5 border border-neutral-800/60 shadow-2xl flex justify-center overflow-hidden max-w-xl mx-auto lg:mx-0">
              <iframe 
                src={`https://www.facebook.com/plugins/page.php?href=${fbPageUrl}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                width="500" 
                height="600" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="rounded-2xl max-w-full bg-neutral-900"
              />
            </div>
          </div>

          {/* COLUMNA DERECHA: LISTA DE EPISODIOS ENIGMÁTICOS CON MOVIMIENTO */}
          <div className="space-y-6">
            <div className="border-l-4 border-[#9B1C1C] pl-4">
              <h2 className="text-2xl font-black uppercase tracking-wider text-white">
                Próximos Episodios
              </h2>
              <p className="text-sm text-neutral-400">Cartelera de lanzamientos confirmados</p>
            </div>

            {/* Lista estructurada con efectos de movimiento (Hover) */}
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              {proximosEpisodios.map((ep) => (
                <div 
                  key={ep.numero} 
                  className={`p-5 rounded-2xl border relative overflow-hidden flex items-center min-h-[92px] bg-[#161616]/20 border-neutral-900/60 cursor-pointer 
                    transition-all duration-300 ease-out 
                    hover:-translate-y-1.5 hover:bg-[#161616]/40 
                    ${
                      ep.estado === 'estreno' 
                        ? 'border-red-900/40 hover:border-red-500/30 shadow-md hover:shadow-xl hover:shadow-red-950/20' 
                        : 'hover:border-neutral-700/50 shadow-sm hover:shadow-lg hover:shadow-black/40'
                    }`}
                >
                  
                  {/* 🔴 CAPA EN EL MEDIO PARA EL EPISODIO 1 (ROJO Y PARPADEANTE) */}
                  {ep.estado === 'estreno' && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/20">
                      <div className="flex items-center gap-2 bg-[#9B1C1C] border border-red-500/40 px-5 py-2.5 rounded-xl shadow-xl animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-white shadow-md" />
                        <span className="text-sm font-black tracking-wider text-white uppercase">
                          {ep.fecha}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 🔒 CAPA EN EL MEDIO PARA LOS EPISODIOS FUTUROS (NEUTRO CON CANDADO) */}
                  {ep.estado === 'espera' && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10">
                      <div className="flex items-center gap-2 bg-black/80 border border-neutral-800 px-4 py-2 rounded-xl shadow-xl backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#E5A93C" className="w-4 h-4 shrink-0">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <span className="text-xs font-black tracking-wide text-neutral-300 uppercase">
                          {ep.fecha}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 👁️ CONTENIDO DISTORSIONADO DE FONDO (Permanece estático y borroso) */}
                  <div className="w-full flex items-center gap-4 transition-all blur-[7px] opacity-25 scale-[0.98] pointer-events-none select-none">
                    
                    {/* Número ficticio */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 bg-neutral-900 text-neutral-600 border border-neutral-800">
                      {ep.numero}
                    </div>

                    {/* Textos de relleno tapados por el blur */}
                    <div className="space-y-1 flex-1">
                      <span className="text-xs font-bold tracking-wider uppercase text-neutral-400">
                        Próximamente
                      </span>
                      <h3 className="font-bold text-base md:text-lg text-white">
                        {ep.titulo}
                      </h3>
                    </div>

                  </div>

                </div>
              ))}
            </div>

            {/* Recordatorio inferior */}
            <p className="text-xs text-center lg:text-left text-neutral-500 font-medium max-w-xl mx-auto lg:mx-0 pt-2">
              📌 Los títulos y reproductores oficiales se habilitarán exclusivamente en la pestaña de <span className="text-neutral-400 font-semibold">«Episodios»</span> al llegar su fecha.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}