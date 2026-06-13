import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0B0B0B]/90 backdrop-blur-md border-b border-neutral-900/80">
      {/* Aplicamos San Francisco con tipografía bien marcada y pesada */}
      <div 
        className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", Roboto, Helvetica, sans-serif' }}
      >
        
        {/* LOGO CIRCULAR GRANDE Y VISIBLE */}
        <Link href="/" className="flex items-center group relative z-10 py-1">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border border-neutral-800/60 bg-neutral-950 transition-transform duration-200 group-hover:scale-105 active:scale-95 shadow-xl shadow-black/80">
            <Image 
              src="/logo.png" 
              alt="Dos Locos y un Colao Logo"
              fill
              className="object-cover p-0.5" 
              priority
            />
          </div>
        </Link>

        {/* ENLACES DE NAVEGACIÓN EN ULTRA BOLD */}
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

        {/* BOTÓN DE ESCUCHAR EN NEGRITA */}
        <div>
          <Link
            href="/episodios"
            className="px-5 py-2.5 text-xs font-black uppercase tracking-widest rounded-xl bg-[#E5A93C] text-black hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/5"
          >
            Escuchar
          </Link>
        </div>

      </div>
    </nav>
  );
}