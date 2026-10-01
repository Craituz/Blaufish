import React, { useState } from 'react';
import { ArrowRight, Anchor, Fish, HeartHandshake, Sparkles } from 'lucide-react';
import { NavView } from '../types/navigation';

interface UseCasesSectionProps {
  onNavigate: (view: NavView) => void;
  onOpenPortal?: (mode?: string) => void;
}

interface PillarItem {
  id: string;
  view: NavView;
  tag: string;
  badge: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  buttonLabel: string;
  bgImage: string;
  highlights: { label: string; val: string }[];
}

const pillars: PillarItem[] = [
  {
    id: 'quienes-somos',
    view: 'quienes-somos',
    tag: 'Nuestra Historia • Manta, Ecuador',
    badge: 'Empresa Familiar',
    title: 'Quiénes Somos',
    headline: 'Tradición marina con visión de estándares mundiales',
    description:
      'Fundada en Manta —puerto pesquero insignia del Pacífico ecuatoriano—, Blaufish Cía. Ltda. es una empresa familiar y comercializadora líder con más de 15 años de experiencia, con estrechos lazos comerciales internacionales.',
    icon: Anchor,
    buttonLabel: 'Conocer Quiénes Somos',
    bgImage: '/assets/master_inspector.jpg',
    highlights: [
      { label: 'Sede Principal', val: 'Puerto de Manta, Manabí' },
      { label: 'Trayectoria', val: '+15 Años de Experiencia' },
      { label: 'Control', val: 'Inspección Pieza por Pieza' },
    ],
  },
  {
    id: 'productos',
    view: 'productos',
    tag: 'Catálogo de Especies',
    badge: 'Calidad de Exportación',
    title: 'Especies & Productos',
    headline: 'Picudo y Wahoo de primera selección',
    description:
      'Pescados de carne firme, textura consistente y sabor delicado. Seleccionados con ultracongelación a bordo para mantener intacta su estructura celular y frescura óptima.',
    icon: Fish,
    buttonLabel: 'Ver Catálogo y Fichas Técnicas',
    bgImage: '/assets/picudo_hero.jpg',
    highlights: [
      { label: 'Especies Clave', val: 'Picudo & Wahoo' },
      { label: 'Conservación', val: 'Ultracongelación a Bordo' },
      { label: 'Mercado', val: 'Nacional e Internacional' },
    ],
  },
  {
    id: 'responsabilidad-social',
    view: 'responsabilidad-social',
    tag: 'Compromiso Ético & Social',
    badge: 'Sostenibilidad',
    title: 'Responsabilidad Social',
    headline: 'Comercio justo con pescadores y cuidado del océano',
    description:
      'Trabajamos mano a mano con las caletas pesqueras de la provincia de Manabí. Fomentamos artes de pesca selectivas, respeto a las normativas de la CIAT y remuneración justa.',
    icon: HeartHandshake,
    buttonLabel: 'Explorar Responsabilidad Social',
    bgImage: '/assets/korea_logistics.jpg',
    highlights: [
      { label: 'Comunidades', val: 'San Mateo, Jaramijó y Marianita' },
      { label: 'Buenas Prácticas', val: 'Normativas CIAT & FAO 87' },
      { label: 'Compromiso', val: 'Cero Pesca Ilegal (INDNR)' },
    ],
  },
];

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onNavigate, onOpenPortal }) => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = pillars[activePillarIndex];

  return (
    <section id="pilares-blaufish" className="bg-[#F5F5F5] px-6 py-20 md:py-24 border-t border-black/5">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 lg:pr-6">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pilares Fundamentales • Blaufish</span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-medium tracking-tight text-black leading-tight mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Conoce lo esencial de nuestra operación.
          </h2>

          {/* Paragraph */}
          <p className="text-black/60 text-base leading-relaxed mb-8 font-light">
            Explora de manera directa las áreas más importantes de Blaufish: nuestra identidad corporativa, las especies pelágicas que ofrecemos y el compromiso social en nuestro origen.
          </p>

          {/* Interactive Pillar Selector Cards */}
          <div className="flex flex-col gap-3 mb-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = idx === activePillarIndex;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#142344] text-white border-[#142344] shadow-md'
                      : 'bg-white hover:bg-neutral-50 text-black border-black/5 hover:border-black/15 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div
                        className={`text-[11px] uppercase tracking-wider font-semibold mb-0.5 ${
                          isSelected ? 'text-white/60' : 'text-black/50'
                        }`}
                      >
                        {pillar.badge}
                      </div>
                      <div className="text-base font-medium leading-snug">{pillar.title}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate(pillar.view);
                      }}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all inline-flex items-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'bg-white text-[#142344] hover:bg-white/90 shadow-sm'
                          : 'bg-black/5 text-black/70 hover:bg-black hover:text-white'
                      }`}
                    >
                      <span>Ir a sección</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct portal prompt */}
          {onOpenPortal && (
            <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-0.5">
                  Atención Inmediata
                </div>
                <div className="text-sm font-medium text-black">
                  ¿Tienes una consulta o cotización directa?
                </div>
              </div>
              <button
                type="button"
                onClick={() => onOpenPortal()}
                className="bg-[#142344] text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-[#1d3260] transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                Abrir Portal
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Large cinematic card with photo & navigation (7 cols) */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden min-h-[520px] md:min-h-[580px] shadow-2xl bg-neutral-900 group flex flex-col justify-end">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${activePillar.bgImage})` }}
          />

          {/* Contrast gradient scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 pointer-events-none" />

          {/* Content overlay */}
          <div className="relative z-10 p-8 md:p-12 text-white flex flex-col justify-end">
            <div className="inline-block px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4 w-fit border border-white/20">
              {activePillar.tag}
            </div>

            <h3
              className="text-3xl md:text-5xl font-medium leading-tight mb-4 text-white"
              style={{ letterSpacing: '-0.03em' }}
            >
              {activePillar.headline}
            </h3>

            <p className="text-white/80 text-sm md:text-base max-w-xl mb-6 leading-relaxed font-light">
              {activePillar.description}
            </p>

            {/* Highlights pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8 max-w-xl">
              {activePillar.highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3"
                >
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mb-1">
                    {h.label}
                  </div>
                  <div className="text-white text-xs font-medium leading-tight">{h.val}</div>
                </div>
              ))}
            </div>

            {/* Main Action Button to navigate directly */}
            <div>
              <button
                type="button"
                onClick={() => onNavigate(activePillar.view)}
                className="group inline-flex items-center gap-3 bg-white text-[#142344] text-sm md:text-base font-medium pl-6 pr-2 py-2 rounded-full hover:bg-white/95 transition-all cursor-pointer shadow-lg hover:shadow-xl"
              >
                <span>{activePillar.buttonLabel}</span>
                <div className="bg-[#142344] rounded-full p-2 group-hover:scale-105 transition-transform">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
