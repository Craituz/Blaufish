import React from 'react';
import { ArrowLeft, Anchor, HeartHandshake, CheckCircle2, ShieldCheck, MapPin, Award, ArrowRight } from 'lucide-react';
import { NavView } from '../types/navigation';

interface QuienesSomosViewProps {
  currentSubView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenPortal: () => void;
}

export const QuienesSomosView: React.FC<QuienesSomosViewProps> = ({
  currentSubView,
  onNavigate,
  onOpenPortal,
}) => {
  return (
    <div className="pt-32 md:pt-44 pb-24 px-4 md:px-6 max-w-[88rem] mx-auto">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <button
          onClick={() => onNavigate('inicio')}
          className="inline-flex items-center gap-2 text-sm font-medium text-black/60 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </button>

        {/* Sub-tab pills */}
        <div className="flex items-center gap-2 p-1.5 bg-black/5 rounded-full">
          <button
            onClick={() => onNavigate('quienes-somos')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              currentSubView === 'quienes-somos'
                ? 'bg-[#142344] text-white shadow-sm'
                : 'text-black/60 hover:text-black'
            }`}
          >
            Quiénes Somos
          </button>
          <button
            onClick={() => onNavigate('responsabilidad-social')}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              currentSubView === 'responsabilidad-social'
                ? 'bg-[#142344] text-white shadow-sm'
                : 'text-black/60 hover:text-black'
            }`}
          >
            Responsabilidad Social
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. QUIÉNES SOMOS SECTION                                                  */}
      {/* ========================================================================= */}
      {(currentSubView === 'quienes-somos' || currentSubView === 'inicio') && (
        <section className="mb-20 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-3">
                <Anchor className="w-3.5 h-3.5" />
                <span>Blaufish Cía. Ltda. • Manta, Ecuador</span>
              </div>
              <h1
                className="text-4xl md:text-6xl font-medium tracking-tight text-black leading-tight mb-6"
                style={{ letterSpacing: '-0.03em' }}
              >
                Tradición oceánica,{' '}
                <span className="text-black/50">estándares mundiales.</span>
              </h1>
              <p className="text-black/70 text-lg md:text-xl leading-relaxed mb-6 font-light">
                Fundada en Manta —puerto pesquero insignia del Pacífico ecuatoriano—, Blaufish Cía. Ltda. es una empresa familiar y comercializadora líder con más de 15 años de experiencia, especializada en la selección, calidad certificada y comercialización de pelágicos mayores de grado sashimi.
              </p>
              <p className="text-black/60 text-base leading-relaxed mb-8">
                Nuestros estrechos lazos comerciales con Asia y presencia en los mercados más exigentes de Seúl, Tokio, Los Ángeles y Europa nos permiten colocar producto de primer nivel, con ultracongelación a bordo y una cadena de custodia impecable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-black/10 pt-8">
                <div>
                  <div className="text-3xl font-medium text-black mb-1">+15 Años</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-black/50">
                    Empresa Familiar
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-medium text-black mb-1">A Bordo</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-black/50">
                    Ultracongelación a Bordo
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-medium text-black mb-1">&lt; 36h</div>
                  <div className="text-xs uppercase tracking-wider font-semibold text-black/50">
                    Tránsito Aéreo a Asia
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 border border-black/10 aspect-[4/5] relative">
                <img
                  src="/assets/master_inspector.jpg"
                  alt="Maestro Inspector de Calidad Blaufish"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
                    Control de Calidad
                  </div>
                  <div className="text-xl font-medium leading-snug mb-2">
                    Inspección individual pieza por pieza
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Evaluamos contenido graso, coloración mioglobínica y frescura organoléptica antes de cada consolidación aérea o marítima.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misión y Visión Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-black/5 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center mb-6">
                <Anchor className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-medium text-black mb-3">Nuestra Misión</h3>
              <p className="text-black/70 text-base leading-relaxed">
                Extraer y procesar de manera sustentable los mejores recursos pelágicos del Pacífico ecuatoriano, con ultracongelación a bordo para garantizar a nuestros compradores globales un producto de frescura inigualable, con trazabilidad transparente y beneficio directo a las comunidades pesqueras locales.
              </p>
            </div>

            <div
              className="p-8 md:p-10 rounded-3xl text-white shadow-sm flex flex-col justify-between"
              style={{ backgroundColor: '#2B2644' }}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-3">Nuestra Visión</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  Consolidarnos como los comerciantes de pesca blanca y pelágicos más confiables y respetados del Pacífico Sur, reconocidos en las principales subastas de pescado del mundo por nuestra pureza, ética y excelencia operativa.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}



      {/* ========================================================================= */}
      {/* 3. RESPONSABILIDAD SOCIAL Y SOSTENIBILIDAD                                 */}
      {/* ========================================================================= */}
      {(currentSubView === 'responsabilidad-social' || currentSubView === 'quienes-somos') && (
        <section id="responsabilidad" className="pt-8 border-t border-black/10 animate-in fade-in duration-300">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Compromiso Ético & Social</span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-medium text-black mb-4"
              style={{ letterSpacing: '-0.03em' }}
            >
              Responsabilidad Social & Sostenibilidad
            </h2>
            <p className="text-black/70 text-base leading-relaxed">
              La pesca responsable no es una opción, es la base de nuestra continuidad. Trabajamos mano a mano con las caletas pesqueras de la provincia de Manabí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium text-black mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Comercio Justo con el Pescador Artesanal</span>
                </h3>
                <p className="text-black/70 text-sm leading-relaxed mb-4">
                  Blaufish remunera con primas de calidad por encima del mercado local a los pescadores que aplican técnicas correctas de sangrado a bordo (metodología Ikejime adaptada), eviscerado higiénico y conservación inmediata en agua-nieve.
                </p>
                <p className="text-black/60 text-xs leading-relaxed">
                  Más de 120 familias de pescadores en San Mateo, Jaramijó y Santa Marianita forman parte de nuestro programa de abastecimiento continuo y digno.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-medium text-black mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Protección del Ecosistema Marino</span>
                </h3>
                <p className="text-black/70 text-sm leading-relaxed mb-4">
                  Nuestras flotas aliadas emplean anzuelos circulares específicos para especies objetivo que minimizan el impacto en tortugas laúd, delfines y tiburones protegidos, cumpliendo las directrices de la CIAT (Comisión Interamericana del Atún Tropical).
                </p>
                <p className="text-black/60 text-xs leading-relaxed">
                  Cero tolerancia a la pesca ilegal, no declarada y no reglamentada (INDNR).
                </p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#142344] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-medium mb-2">¿Deseas conocer más sobre nuestras operaciones?</h3>
              <p className="text-white/70 text-sm max-w-lg">
                Nuestro departamento de comercio exterior y aseguramiento de calidad está disponible para presentar auditorías y dossiers de trazabilidad.
              </p>
            </div>
            <button
              onClick={onOpenPortal}
              className="group inline-flex items-center gap-3 bg-white text-[#142344] text-sm md:text-base font-medium pl-6 pr-2 py-2 rounded-full hover:bg-white/90 transition-colors shrink-0 cursor-pointer shadow-md"
            >
              <span>Contactar a Blaufish</span>
              <div className="bg-[#142344] rounded-full p-2">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
