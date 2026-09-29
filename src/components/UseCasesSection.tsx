import React, { useState } from 'react';
import { ArrowRight, Plane, Ship, Scissors } from 'lucide-react';

interface UseCasesSectionProps {
  onSelectMode: (mode: string) => void;
}

interface ExportMode {
  id: string;
  tag: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  specs: { label: string; val: string }[];
  bgImage: string;
  videoUrl?: string;
}

const modes: ExportMode[] = [
  {
    id: 'air-freight',
    tag: 'Logística Prioritaria',
    title: 'Chárteres Aéreos Directos',
    description:
      'Vuelos semanales con monitoreo continuo de temperatura hacia Seúl-Incheon (ICN), Tokio-Narita (NRT), Los Ángeles (LAX) y Frankfurt (FRA), desembarcando pescado de grado sashimi en las lonjas de subasta en menos de 36 horas de marea.',
    icon: Plane,
    specs: [
      { label: 'Tiempo de Tránsito', val: '< 36 Horas' },
      { label: 'Rango Térmico', val: '-1°C a 0°C Gel Eutéctico' },
      { label: 'Mercados Principales', val: 'Japón, Corea del Sur, EE.UU.' },
    ],
    bgImage: '/assets/korea_logistics.jpg',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4',
  },
  {
    id: 'super-freeze',
    tag: 'Volumen Mayorista',
    title: 'Contenedores Reefers Supercongelados',
    description:
      'Contenedores marítimos de 40 pies High Cube operando permanentemente en régimen supercongelado. Concebidos para grandes distribuidores de sushi, ahumaderos y plantas de reprocesamiento en Asia y Europa.',
    icon: Ship,
    specs: [
      { label: 'Capacidad por FCL', val: '22 - 26 Toneladas Métricas' },
      { label: 'Temperatura Sostenida', val: 'Supercongelado' },
      { label: 'Puerto de Salida', val: 'Manta / Guayaquil (EC)' },
    ],
    bgImage: '/assets/wahoo_hero.jpg',
  },
  {
    id: 'custom-processing',
    tag: 'Valor Agregado Gastronómico',
    title: 'Bloques Saku & Lomos Porcionados',
    description:
      'Procesamiento en sala blanca certificada HACCP: lomos limpios sin piel, sin espinas, sin línea de sangre oscura, bloques rectangulares Saku para corte rápido y filetes empacados al vacío termoformado.',
    icon: Scissors,
    specs: [
      { label: 'Tipo de Corte', val: 'Natural o Tratamiento O2' },
      { label: 'Empaque Master', val: 'Caja 10kg Master Carton / IVP' },
      { label: 'Calificación', val: 'Grado #1 & Sashimi AAA' },
    ],
    bgImage: '/assets/sashimi_cuts.jpg',
  },
];

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ onSelectMode }) => {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const activeMode = modes[activeModeIndex];

  return (
    <section id="modos-exportacion" className="bg-[#F5F5F5] px-6 py-24">
      <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="md:pr-12 md:pt-2">
          {/* Eyebrow */}
          <div className="text-black/60 text-sm mb-2 font-medium tracking-wide uppercase">
            Blaufish en el Comercio Internacional
          </div>

          {/* Heading */}
          <h2
            className="text-5xl md:text-6xl font-medium leading-none mb-6"
            style={{ letterSpacing: '-0.04em' }}
          >
            Modos de comercialización
          </h2>

          {/* Paragraph */}
          <p className="text-black/60 text-base leading-relaxed max-w-sm mb-10 font-light">
            Blaufish diseña soluciones de flete marítimo y aéreo a la medida para importadores, grupos hoteleros internacionales y lonjas mayoristas que requieren suministro continuo con cuotas asignadas.
          </p>

          {/* Interactive Mode Selector Tabs */}
          <div className="flex flex-col gap-3 max-w-md">
            {modes.map((mode, idx) => {
              const Icon = mode.icon;
              const isSelected = idx === activeModeIndex;

              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveModeIndex(idx)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all text-left cursor-pointer ${
                    isSelected
                      ? 'bg-[#142344] text-white border-[#142344] shadow-md'
                      : 'bg-white/80 hover:bg-white text-black border-black/5 hover:border-black/15 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected ? 'bg-white/10 text-white' : 'bg-black/5 text-black'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider font-semibold opacity-60 mb-0.5">
                        {mode.tag}
                      </div>
                      <div className="text-base font-medium">{mode.title}</div>
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform ${
                      isSelected
                        ? 'bg-white text-[#142344] translate-x-1'
                        : 'bg-black/5 text-black/50'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Large card with video/image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[640px] md:min-h-[720px] shadow-2xl bg-neutral-900 group">
          {activeMode.videoUrl ? (
            <video
              key={activeMode.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover absolute inset-0 w-full h-full pointer-events-none opacity-85 transition-opacity duration-700"
            >
              <source src={activeMode.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${activeMode.bgImage})` }}
            />
          )}

          {/* Contrast scrim overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none" />

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-12 min-h-[640px] md:min-h-[720px]">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider mb-4 w-fit border border-white/20">
              {activeMode.tag}
            </div>

            <h3
              className="text-white text-4xl md:text-5xl font-medium leading-tight mb-5"
              style={{ letterSpacing: '-0.03em' }}
            >
              {activeMode.title}
            </h3>

            <p className="text-white/80 text-base max-w-md mb-6 leading-relaxed font-light">
              {activeMode.description}
            </p>

            {/* Mode Specs pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-lg">
              {activeMode.specs.map((s, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3"
                >
                  <div className="text-[11px] uppercase tracking-wider text-white/50 mb-1">
                    {s.label}
                  </div>
                  <div className="text-white text-xs font-medium">{s.val}</div>
                </div>
              ))}
            </div>

            {/* Inline-flex link with leading circular icon */}
            <button
              onClick={() => onSelectMode(activeMode.title)}
              className="group inline-flex items-center gap-3 text-white text-base font-medium self-start cursor-pointer transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center group-hover:bg-white transition-colors">
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="group-hover:underline underline-offset-4">
                Solicitar Especificaciones & Asignación
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
