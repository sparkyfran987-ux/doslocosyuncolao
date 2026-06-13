import React from 'react';

interface Episode {
  id: number;
  title: string;
  date: string;
  duration: string;
}

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <div className="group bg-podcast-card rounded-2xl p-6 border border-neutral-800/80 hover:border-podcast-gold/40 transition-all duration-300 flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-podcast-gold/5">
      
      <div className="space-y-2">
        {/* Metadata: Fecha y Duración */}
        <div className="flex items-center justify-between text-xs font-semibold text-podcast-gold uppercase tracking-wider">
          <span>{episode.date}</span>
          <span className="bg-neutral-800 px-2.5 py-1 rounded-md text-gray-400 group-hover:bg-neutral-750">
            {episode.duration}
          </span>
        </div>

        {/* Título del Episodio */}
        <h3 className="text-xl font-bold text-white group-hover:text-podcast-gold transition-colors line-clamp-2">
          {episode.title}
        </h3>
        
        {/* Breve texto de relleno (luego vendrá del feed o JSON) */}
        <p className="text-sm text-gray-400 line-clamp-2">
          Entérate de los secretos mejor guardados del mundo del espectáculo y las anécdotas que nadie se atreve a contar.
        </p>
      </div>

      {/* Botón de reproducción falso (por ahora) */}
      <div className="pt-2 flex items-center justify-between">
        <span className="text-xs text-gray-500">Click para detalles</span>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-podcast-gold/10 text-podcast-gold group-hover:bg-podcast-gold group-hover:text-black transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 ml-0.5"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}