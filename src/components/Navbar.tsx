'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0B0B]/95 backdrop-blur-md border-b border-neutral-900/80">
      {/* Contenedor Principal */}
      <div 
        className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between relative"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Roboto, Helvetica, sans-serif' }}
      >
        
        {/* LOGO INTERACTIVO (Actúa como botón de menú en celular y Home en desktop) */}
        <div className="flex items-center py-1">
          {/* En desktop redirige, en celular abre/cierra el menú */}
          <button 
            onClick={toggleMenu}
            className="block md:hidden relative w-16 h-16 rounded-full overflow-hidden border border-neutral-800 bg-neutral-950 transition-transform duration-200 active:scale-95 shadow-lg shadow-black/80"
          >
            <Image 
              src="/logo.png" 
              alt="Abrir menú Dos Locos y un Colao"
              fill
              className="object-cover p-0.5" 
              priority
            />
          </button>

          {/* Enlace limpio exclusivo para pantallas grandes (Desktop) */}
          <Link href="/" className="hidden md:block relative w-20 h-20 rounded-full overflow-hidden border border-neutral-800/60 bg-neutral-950 transition-transform duration-200 hover:scale-105 active:scale-95 shadow-xl shadow-black/80">
            <Image 
              src="/logo.png" 
              alt="Dos Locos y un Colao Logo"
              fill
              className="object-cover p-0.5" 
              priority
            />
          </Link>
        </div>

        {/* ENLACES DE NAVEGACIÓN (Desktop - Ocultos en celular) */}
        <div className="hidden md:flex items-center space-x-8 text-[16px] font-black tracking-tight uppercase">
          <Link href="/" className="text-neutral-300 hover:text-[#E5A93C] transition-colors">
            Inicio
          </Link>
          <Link href="/episodios" className="text-neutral-300 hover:text-[#E5A93C] transition-colors">
            Episodios
          </Link>
          <Link href="/informacion" className="text-neutral-300 hover:text-[#E5A93C] transition-colors">
            Información y Contacto
          </Link>
        </div>

        {/* BOTÓN DE ESCUCHAR (Siempre visible) */}
        <div>
          <Link
            href="/episodios"
            onClick={closeMenu}
            className="px-4 py-2.5 sm:px-5 sm:py-2.5 text-xs font-black uppercase tracking-widest rounded-xl bg-[#E5A93C] text-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/5"
          >
            Escuchar
          </Link>
        </div>

      </div>

      {/* 📱 MENÚ DESPLEGABLE EN CELULAR (Solo se muestra si isOpen es true) */}
      {isOpen && (
        <div 
          className="md:hidden w-full bg-[#0B0B0B] border-t border-neutral-900/60 animate-in fade-in slide-in-from-top-4 duration-200"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", Roboto, sans-serif' }}
        >
          <div className="flex flex-col px-4 py-6 space-y-4 text-center">
            <Link 
              href="/" 
              onClick={closeMenu}
              className="text-neutral-200 font-black text-lg uppercase tracking-wider py-2 hover:text-[#E5A93C] border-b border-neutral-900/40 active:bg-neutral-900/40 rounded-lg transition-all"
            >
              🏠 Inicio
            </Link>
            <Link 
              href="/episodios" 
              onClick={closeMenu}
              className="text-neutral-200 font-black text-lg uppercase tracking-wider py-2 hover:text-[#E5A93C] border-b border-neutral-900/40 active:bg-neutral-900/40 rounded-lg transition-all"
            >
              🎙️ Episodios
            </Link>
            <Link 
              href="/informacion" 
              onClick={closeMenu}
              className="text-neutral-200 font-black text-lg uppercase tracking-wider py-2 hover:text-[#E5A93C] active:bg-neutral-900/40 rounded-lg transition-all"
            >
              ✉️ Información / Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
