'use client';

import React, { useState } from 'react';

export default function InformacionPage() {
  const youtubeChannelUrl = "https://www.youtube.com/@Doslocosyuncolao/";
  const facebookPageUrl = "https://www.facebook.com/profile.php?id=61590373832211";
  const instagramPageUrl = "https://www.instagram.com/doslocosyuncolao/";
  const FORMSPREE_URL = "https://formspree.io/f/meewpkoj";

  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    const form = e.currentTarget;
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.errors ? data.errors.map((err: any) => err.message).join(', ') : 'Error al enviar.');
        setStatus('ERROR');
      }
    } catch {
      setErrorMessage('Error de conexión.');
      setStatus('ERROR');
    }
  };

  return (
    <main 
      className="min-h-screen bg-[#050505] text-[#F3F4F6] px-4 py-16 pb-24 relative"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center">
          <span className="text-xs font-black text-[#E5A93C] uppercase tracking-widest bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/5">
            ✉️ Business & Contacto
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mt-4">
            Conecta con Nosotros
          </h1>
          <div className="h-1 w-16 bg-[#9B1C1C] mx-auto mt-4 rounded-full" />
        </div>

        {/* CONTENIDO DIVIDIDO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-4xl mx-auto items-start pt-4">
          
          {/* COLUMNA REDES */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-xl font-black uppercase tracking-wider text-[#E5A93C]">¿Quiénes Somos?</h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Tres mentes metidas en el revolú del entertainment en Puerto Rico 🇵🇷. Disponibles para propuestas de auspicio, marcas comerciales e invitados bomba.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a href={youtubeChannelUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-red-500/30 transition-all group">
                <span className="text-sm font-bold text-neutral-300 group-hover:text-white">YouTube</span>
                <span className="text-xs font-semibold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md">Principal</span>
              </a>
              <a href={instagramPageUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-pink-500/30 transition-all group">
                <span className="text-sm font-bold text-neutral-300 group-hover:text-white">Instagram</span>
                <span className="text-xs font-semibold text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-md">Contenido</span>
              </a>
              <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group">
                <span className="text-sm font-bold text-neutral-300 group-hover:text-white">Facebook</span>
                <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">Comunidad</span>
              </a>
            </div>
          </div>

          {/* COLUMNA FORMULARIO CRISTAL */}
          <div className="lg:col-span-7 w-full bg-white/[0.02] border border-white/[0.05] rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
            {status === 'SUCCESS' ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 mx-auto rounded-full flex items-center justify-center text-3xl">🚀</div>
                <h3 className="text-xl font-black uppercase text-white">¡Mensaje Recibido!</h3>
                <p className="text-sm text-neutral-400 max-w-sm mx-auto">Ya va en camino al buzón de los locos. ¡Gracias por escribir!</p>
                <button onClick={() => setStatus('IDLE')} className="mt-4 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white transition-all">Enviar otro</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-neutral-400">Nombre</label>
                  <input type="text" name="nombre" required placeholder="Tu nombre" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-neutral-400">Email</label>
                  <input type="email" name="email" required placeholder="tu@email.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-neutral-400">Asunto</label>
                  <select name="asunto" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-[#E5A93C] transition-colors">
                    <option value="Propuesta de Auspicio">Propuesta de Auspicio / Negocio</option>
                    <option value="Sugerencia de Invitado">Sugerencia de Invitado</option>
                    <option value="Anécdota">Anécdota para el podcast</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-black uppercase tracking-wider text-neutral-400">Mensaje</label>
                  <textarea name="mensaje" required rows={4} placeholder="Escribe aquí..." className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E5A93C] transition-colors resize-none" />
                </div>

                {status === 'ERROR' && <div className="p-3 text-xs font-semibold text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl">⚠️ {errorMessage}</div>}

                <button type="submit" disabled={status === 'LOADING'} className="w-full py-3.5 rounded-xl bg-[#E5A93C] text-black font-black text-sm hover:bg-amber-400 transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-2">
                  {status === 'LOADING' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
