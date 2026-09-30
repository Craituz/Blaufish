import React from 'react';
import { ArrowRight, ThermometerSnowflake, ShieldCheck } from 'lucide-react';
import { NavView } from '../types/navigation';

interface InfoSectionProps {
  onDiscover: () => void;
  onNavigate: (view: NavView) => void;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ onDiscover, onNavigate }) => {
  return (
    <section id="conoce-blaufish" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto">
        {/* Row 1: 2-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Column */}
          <div>
            <h2
              className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
              style={{ letterSpacing: '-0.03em' }}
            >
              Conoce Blaufish.
            </h2>

            {/* Navy pill "Ver Especies & Cortes" button with white arrow circle */}
            <button
              onClick={() => onNavigate('productos')}
              className="group inline-flex items-center gap-3 bg-[#142344] text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-[#1d3260] transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg"
            >
              <span>Ver Especies & Cortes</span>
              <div className="bg-white rounded-full p-2 group-hover:bg-white/95 transition-colors">
                <ArrowRight className="w-4 h-4 text-[#142344] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
              Blaufish es una empresa comercializadora ecuatoriana de referencia en pesca pelágica, suministrando capturas de grado sushi y sashimi con ultracongelación a bordo directamente a los principales centros mundiales de distribución.
            </p>
          </div>
        </div>

        {/* Row 2: 4-column card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Spans 2 cols on lg, with high-res authentic harvest imagery */}
          <div
            onClick={() => onNavigate('productos')}
            className="lg:col-span-2 rounded-2xl relative overflow-hidden group p-7 min-h-80 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{
              backgroundImage: 'url(/assets/picudo_hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 35%',
            }}
          >
            {/* Luminous frosted diffuse scrim: softly diffuses background edges and hard lines */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 backdrop-blur-[3px] pointer-events-none group-hover:opacity-95 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-white/70 pointer-events-none" />

            {/* Title (top) */}
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-black/60 mb-2">
                Pesquería de Altura • Corriente de Humboldt
              </span>
              <h3
                className="text-black text-2xl font-medium leading-snug"
                style={{ letterSpacing: '-0.02em' }}
              >
                Pureza de la Corriente de Humboldt
              </h3>
            </div>

            {/* Body (bottom) */}
            <div className="relative z-10">
              <p className="text-black/80 text-base max-w-sm font-normal leading-relaxed">
                Acceso directo a Pez Espada (Picudo) y Wahoo capturados por flotas artesanales selectivas bajo rigurosas buenas prácticas pesqueras.
              </p>
            </div>
          </div>

          {/* Card 2: Solid #2B2644 */}
          <div
            onClick={() => onNavigate('cadena-frio')}
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between shadow-sm transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#2B2644' }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 mb-6">
                <ThermometerSnowflake className="w-5 h-5" />
              </div>
              <h3 className="text-white text-2xl font-medium leading-snug whitespace-pre-line mb-3">
                {'Ultracongelación\na Bordo.'}
              </h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              El congelamiento inmediato en alta mar fija la estructura celular, preservando el color natural y la textura original.
            </p>
          </div>

          {/* Card 3: Solid #2B2644 */}
          <div
            onClick={() => onNavigate('trazabilidad')}
            className="rounded-2xl p-7 min-h-80 flex flex-col justify-between shadow-sm transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#2B2644' }}
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-white text-2xl font-medium leading-snug whitespace-pre-line mb-3">
                {'100% Trazabilidad\nSatelital de Flota.'}
              </h3>
            </div>
            <p className="text-white/60 text-base leading-relaxed">
              Cada partida cuenta con geolocalización GPS de captura, fecha de lance, registro de embarcación y código QR verificable en destino.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
