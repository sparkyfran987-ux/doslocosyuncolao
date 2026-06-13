'use client';

import React, { useState } from 'react';

export default function InformacionPage() {
  const youtubeChannelUrl = "https://www.youtube.com/@Doslocosyuncolao/";
  const facebookPageUrl = "https://www.facebook.com/profile.php?id=61590373832211";
  const instagramPageUrl = "https://www.instagram.com/doslocosyuncolao/";

  // URL Oficial conectada a tu cuenta de Formspree
  const FORMSPREE_URL = "https://formspree.io/f/meewpkoj";

  // Estados para manejar el envío del formulario
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset(); // Limpia los campos automáticamente
      } else {
        const data = await response.json();
        setErrorMessage(data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Ocurrió un error al enviar.');
        setStatus('ERROR');
      }
    } catch (error) {
      setErrorMessage('Error de conexión. Inténtalo de nuevo más tarde.');
      setStatus('ERROR');
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-[#F3F4F6] px-4 py-16 pb-24">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* 1. ENCABEZADO */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-extrabold text-[#E5A93C] uppercase tracking-widest bg-[#E5A93C]/10 px-3 py-1 rounded-md border border-[#E5A93C]/20">
            ✉️ BUSINESS & CONTACTO
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
            Conecta con nosotros
          </h1>
          <div className="h-1 w-20 bg-[#9B1C1C] mt-3 rounded-full" />
        </div>

        {/* 2. CONTENIDO DIVIDIDO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-4xl mx-auto items-start pt-4">
          
          {/* COLUMNA IZQUIERDA: DETALLES, EMAIL Y REDES */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <div className="border-l-4 border-[#9B1C1C] pl-4">
                <h2 className="text-xl font-black uppercase tracking-wider text-white">
                  ¿Quiénes Somos?
                </h2>
                <p className="text-sm text-neutral-400 mt-1">Tres mentes metidas en el revolú del entertainment.</p>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Ya sea para comerciales, auspiciar tu negocio en nuestros episodios, proponernos un invitado bomba o simplemente tirar una sugerencia, estamos abiertos a negociar. 
              </p>
            </div>

            <div className="space-y-3">
              <a 
                href="mailto:doslocosyuncolao@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#161616]/40 border border-neutral-900/60 transition-all hover:border-neutral-800/80 group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#E5A93C] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Email Oficial</h4>
                  <p className="text-xs sm:text-sm font-medium text-neutral-200">doslocosyuncolao@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#161616]/40 border border-neutral-900/60">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Desde</h4>
                  <p className="text-sm font-medium text-neutral-200">Puerto Rico 🇵🇷</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-2">
                Nuestras Plataformas
              </h3>
              
              <div className="flex flex-col gap-2">
                <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 rounded-xl bg-red-600/5 border border-red-900/20 hover:bg-red-600/10 hover:border-red-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-red-500"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">YouTube</span>
                  </div>
                  <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md">Principal</span>
                </a>

                <a href={instagramPageUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 rounded-xl bg-pink-600/5 border border-pink-900/20 hover:bg-pink-600/10 hover:border-pink-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-pink-500"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                    <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">Instagram</span>
                  </div>
                  <span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-md">Contenido</span>
                </a>

                <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3.5 rounded-xl bg-blue-600/5 border border-blue-900/20 hover:bg-blue-600/10 hover:border-blue-500/40 transition-all group">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                    <span className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors">Facebook Página</span>
                  </div>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">Comunidad</span>
                </a>
              </div>
            </div>

          </div>

          {/* COLUMNA DERECHA: FORMULARIO ACTIVO */}
          <div className="lg:col-span-7 w-full bg-[#161616] border border-neutral-800/60 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-950/10 blur-2xl rounded-full pointer-events-none" />
            
            {status === 'SUCCESS' ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto rounded-2xl flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">¡Mensaje Recibido!</h3>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
                  Ya el mensaje va de camino al buzón de los locos. Le meteremos ojo lo antes posible. ¡Gracias por escribir!
                </p>
                <button
                  onClick={() => setStatus('IDLE')}
                  className="mt-4 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-all"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Campo Nombre */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Nombre / Empresa</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required
                    placeholder="Ej. Juan Pérez o Marca X"
                    className="w-full bg-[#0B0B0B] border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5A93C] transition-colors"
                  />
                </div>

                {/* Campo Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full bg-[#0B0B0B] border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5A93C] transition-colors"
                  />
                </div>

                {/* Campo Asunto */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Asunto</label>
                  <select 
                    name="asunto"
                    className="w-full bg-[#0B0B0B] border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-[#E5A93C] transition-colors"
                  >
                    <option value="Propuesta de Auspicio">Propuesta de Auspicio / Negocio</option>
                    <option value="Sugerencia de Invitado">Sugerencia de Invitado</option>
                    <option value="Anécdota / Chisme">Anécdota para el podcast</option>
                    <option value="Otro Asunto">Otro asunto</option>
                  </select>
                </div>

                {/* Campo {Mensaje} */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Mensaje</label>
                  <textarea 
                    name="mensaje"
                    required
                    rows={4}
                    placeholder="Cuéntanos de qué se trata el negocio o el mensaje..."
                    className="w-full bg-[#0B0B0B] border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#E5A93C] transition-colors resize-none"
                  />
                </div>

                {status === 'ERROR' && (
                  <div className="p-3 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">
                    ⚠️ {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'LOADING'}
                  className="w-full py-3.5 rounded-xl bg-[#E5A93C] disabled:bg-neutral-800 disabled:text-neutral-500 text-black font-extrabold text-sm hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/10 active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {status === 'LOADING' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-neutral-500 border-t-neutral-200 rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensaje'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
