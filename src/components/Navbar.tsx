'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div 
        className="max-w-6xl mx-auto px-4 h-22 flex items-center justify-between relative"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}
      >
        {/* LOGO INTERACTIVO RESPONSIVO */}
        <div className="flex items-center py-2">
          {/* Móvil */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden relative w-16 h-16 rounded-full overflow-hidden border border-white/10 bg-black transition-transform duration-200 active:scale-95 shadow-2xl shadow-black"
          >
            <Image src="/logo.png" alt="Menú" fill className="object-cover p-0.5" priority />
          </button>

          {/* Desktop */}
          <Link href="/" className="hidden md:block relative w-20 h-20 rounded-full overflow-hidden border border-white/10 bg-black transition-transform duration-200 hover:scale-105 active:scale-95 shadow-2xl shadow-black">
            <Image src="/logo.png" alt="Dos Locos y un Colao" fill className="object-cover p-0.5" priority />
          </Link>
        </div>

        {/* ENLACES EN SAN FRANCISCO BLACK */}
        <div className="hidden md:flex items-center space-x-10 text-[15px] font-black tracking-widest uppercase">
          <Link href="/" className="text-neutral-400 hover:text-[#E5A93C] transition-colors relative group py-2">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5A93C] transition-all group-hover:w-full" />
          </Link>
          <Link href="/episodios" className="text-neutral-400 hover:text-[#E5A93C] transition-colors relative group py-2">
            Episodios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5A93C] transition-all group-hover:w-full" />
          </Link>
          <Link href="/informacion" className="text-neutral-400 hover:text-[#E5A93C] transition-colors relative group py-2">
            Información y Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E5A93C] transition-all group-hover:w-full" />
          </Link>
        </div>

        {/* BOTÓN PREMIUM */}
        <div>
          <Link
            href="/episodios"
            className="px-6 py-3 text-xs font-black uppercase tracking-widest rounded-full bg-[#E5A93C] text-black hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/20"
          >
            Escuchar Show
          </Link>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#050505]/95 backdrop-blur-2xl border-t border-white/[0.05] animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col px-6 py-8 space-y-5 text-center font-black uppercase tracking-wider text-lg">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-neutral-200 hover:text-[#E5A93C] py-2 border-b border-white/[0.03]">🏠 Inicio</Link>
            <Link href="/episodios" onClick={() => setIsOpen(false)} className="text-neutral-200 hover:text-[#E5A93C] py-2 border-b border-white/[0.03]">🎙️ Episodios</Link>
            <Link href="/informacion" onClick={() => setIsOpen(false)} className="text-neutral-200 hover:text-[#E5A93C] py-2">✉️ Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
