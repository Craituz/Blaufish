import React, { useState } from 'react';
import { ArrowLeft, Fish, Snowflake, Sparkles, ShieldCheck, PlaneTakeoff, CheckCircle, ArrowRight, Download, Thermometer } from 'lucide-react';
import { NavView } from '../types/navigation';

interface InformacionViewProps {
  currentSubView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenPortal: (mode?: string) => void;
}

interface ProductItem {
  id: string;
  name: string;
  scientific: string;
  photo: string;
  grade: string;
  lipid: string;
  texture: string;
  cuts: string[];
  temp: string;
  seasons: string;
  desc: string;
}

const productsData: ProductItem[] = [
  {
    id: 'picudo',
    name: 'Pez Espada / Picudo del Pacífico',
    scientific: 'Xiphias gladius',
    photo: '/assets/picudo_hero.jpg',
    grade: 'Grado Sashimi AAA / Extra White',
    lipid: '8% - 12% (Alto contenido graso)',
    texture: 'Firme, carnosa, mantecosa, sabor dulce suave',
    cuts: ['Lomos sin piel y sin espinas', 'Bloques Saku para corte fino', 'Rodajas / Steaks con o sin piel', 'Entero G&G (Eviscerado sin agallas)'],
    temp: 'Ultracongelación a Bordo o Fresco en Hielo (0°C)',
    seasons: 'Todo el año (Pico: Mayo a Diciembre)',
    desc: 'El Picudo de la corriente de Humboldt ecuatoriana es codiciado en los restaurantes de alta cocina de Seúl y Tokio por su carne blanquísima, sin vetas oscuras y con un balance lipídico ideal para sashimi crudo o a la parrilla robata.',
  },
  {
    id: 'wahoo',
    name: 'Wahoo / Peto Oceánico',
    scientific: 'Acanthocybium solandri',
    photo: '/assets/wahoo_hero.jpg',
    grade: 'Grado Sushi #1',
    lipid: '5% - 8% (Medio-Alto)',
    texture: 'Fibra fina, extremadamente blanca y limpia',
    cuts: ['Lomos limpios sin línea de sangre', 'Porciones congeladas IQF', 'Filetes al vacío con lámina separadora'],
    temp: 'Ultracongelación a Bordo',
    seasons: 'Todo el año',
    desc: 'Conocido como "Ono" en el Pacífico, es uno de los peces más veloces del océano. Su carne blanca perlada ofrece una textura tersa y un sabor delicado, ideal para tiraditos, ceviches de alta gama y nigiris.',
  },
  {
    id: 'atun',
    name: 'Atún Aleta Amarilla & Ojo Grande',
    scientific: 'Thunnus albacares / Thunnus obesus',
    photo: '/assets/sashimi_cuts.jpg',
    grade: '#1+ Deep Ruby Sashimi',
    lipid: 'Variable según marea (>10% en época fría)',
    texture: 'Suave, untuosa, color rubí traslúcido',
    cuts: ['Saku AAA 500g', 'Lomos Center-Cut IVP', 'Kama (Collares para asado)', 'Cuchareo / Maguro Tartar'],
    temp: 'Ultracongelación a Bordo',
    seasons: 'Todo el año con cuotas CIAT',
    desc: 'Procesado inmediatamente tras el desembarque para preservar la mioglobina celular y evitar la oxidación oscura (metamioglobina). Color rojo intenso y translúcido que permanece intacto al descongelar.',
  },
];

export const InformacionView: React.FC<InformacionViewProps> = ({
  currentSubView,
  onNavigate,
  onOpenPortal,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(productsData[0]);

  // Determine active tab
  const activeTab = ['productos', 'cadena-frio', 'trazabilidad', 'certificaciones', 'logistica'].includes(currentSubView)
    ? currentSubView
    : 'productos';

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
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-black/5 rounded-full">
          <button
            onClick={() => onNavigate('productos')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'productos' ? 'bg-[#142344] text-white shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            Especies & Productos
          </button>
          <button
            onClick={() => onNavigate('cadena-frio')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'cadena-frio' ? 'bg-[#142344] text-white shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            Cadena de Frío
          </button>
          <button
            onClick={() => onNavigate('trazabilidad')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'trazabilidad' ? 'bg-[#142344] text-white shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            Trazabilidad
          </button>
          <button
            onClick={() => onNavigate('certificaciones')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'certificaciones' ? 'bg-[#142344] text-white shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            Certificaciones
          </button>
          <button
            onClick={() => onNavigate('logistica')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'logistica' ? 'bg-[#142344] text-white shadow-sm' : 'text-black/60 hover:text-black'
            }`}
          >
            Logística
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. PRODUCTOS & ESPECIES TAB                                               */}
      {/* ========================================================================= */}
      {activeTab === 'productos' && (
        <section className="animate-in fade-in duration-300">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-2">
              <Fish className="w-3.5 h-3.5" />
              <span>Catálogo Técnico de Exportación</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Especies Pelágicas & Formatos de Corte
            </h1>
            <p className="text-black/70 text-base leading-relaxed">
              Selecciona una especie para inspeccionar su ficha bromatológica, formatos de empaque y disponibilidad de cuota para importadores internacionales.
            </p>
          </div>

          {/* Species Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {productsData.map((item) => {
              const isSelected = item.id === selectedProduct.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedProduct(item)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#142344] text-white border-[#142344] shadow-lg scale-[1.01]'
                      : 'bg-white hover:bg-neutral-50 text-black border-black/10 shadow-sm'
                  }`}
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 bg-neutral-100">
                    <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs uppercase font-semibold opacity-60 italic mb-0.5">
                    {item.scientific}
                  </div>
                  <div className="text-base font-medium leading-snug mb-1">{item.name}</div>
                  <div className="text-xs font-semibold opacity-80">{item.grade}</div>
                </button>
              );
            })}
          </div>

          {/* Selected Species Detail Dossier */}
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-black/5 shadow-sm mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 rounded-full bg-black/5 text-black text-xs font-semibold uppercase tracking-wider mb-3">
                  {selectedProduct.scientific}
                </div>
                <h2 className="text-3xl font-medium text-black mb-4">{selectedProduct.name}</h2>
                <p className="text-black/70 text-base leading-relaxed mb-6 font-light">
                  {selectedProduct.desc}
                </p>

                <h3 className="text-xs uppercase tracking-wider font-semibold text-black/50 mb-3">
                  Formatos de Corte Disponibles:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {selectedProduct.cuts.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F5F5] text-xs font-medium text-black">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenPortal(selectedProduct.name)}
                    className="bg-[#142344] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#1d3260] transition-colors shadow cursor-pointer"
                  >
                    Solicitar Cuota de {selectedProduct.name.split('/')[0]}
                  </button>
                </div>
              </div>

              {/* Technical Spec Sheet Card */}
              <div className="lg:col-span-5 bg-[#F5F5F5] p-6 rounded-2xl border border-black/5">
                <h3 className="text-xs uppercase tracking-widest font-bold text-black/60 mb-4 pb-2 border-b border-black/10">
                  Especificaciones Bromatológicas
                </h3>
                <div className="space-y-3.5 text-xs">
                  <div>
                    <span className="text-black/50 block">Calificación de Calidad:</span>
                    <strong className="text-black text-sm">{selectedProduct.grade}</strong>
                  </div>
                  <div>
                    <span className="text-black/50 block">Perfil Lipídico / Grasa:</span>
                    <strong className="text-black text-sm">{selectedProduct.lipid}</strong>
                  </div>
                  <div>
                    <span className="text-black/50 block">Textura y Sabor:</span>
                    <span className="text-black font-medium">{selectedProduct.texture}</span>
                  </div>
                  <div>
                    <span className="text-black/50 block">Rango Térmico de Embarque:</span>
                    <strong className="text-black text-sm">{selectedProduct.temp}</strong>
                  </div>
                  <div>
                    <span className="text-black/50 block">Temporada Alta de Marea:</span>
                    <span className="text-black font-medium">{selectedProduct.seasons}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 2. CADENA DE FRÍO TAB                                                     */}
      {/* ========================================================================= */}
      {activeTab === 'cadena-frio' && (
        <section className="animate-in fade-in duration-300">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-2">
              <Snowflake className="w-3.5 h-3.5" />
              <span>Ultracongelación a Bordo</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Ultracongelación a Bordo Sin Interrupciones
            </h1>
            <p className="text-black/70 text-base leading-relaxed">
              La ultracongelación inmediata a bordo detiene por completo la degradación celular, garantizando que el pescado conserve la textura, aroma y jugosidad natural de una captura recién extraída.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-8 rounded-3xl text-white flex flex-col justify-between" style={{ backgroundColor: '#2B2644' }}>
              <div>
                <Thermometer className="w-8 h-8 text-white/80 mb-4" />
                <h3 className="text-2xl font-medium mb-3">Ultracongelación a Bordo</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  El congelamiento rápido en alta mar fija la calidad organoléptica de la pieza desde el primer instante, salvaguardando el músculo y la firmeza del producto.
                </p>
              </div>
              <div className="text-xs text-white/50 border-t border-white/10 pt-4">
                Calidad bloqueada en origen
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-black/40 mb-2">Dataloggers USB / BLE</div>
                <h3 className="text-2xl font-medium text-black mb-3">Telemetría en Tránsito</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-4">
                  Cada caja de exportación aérea o contenedor marítimo incluye registradores digitales de temperatura que registran el histórico grado por grado hasta el desaduanaje final.
                </p>
              </div>
              <div className="text-xs text-black/50 border-t border-black/5 pt-4">
                Lectura inmediata de informe en destino
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-black/40 mb-2">Fresco en Vuelo</div>
                <h3 className="text-2xl font-medium text-black mb-3">Gel Packs & Dry Ice</h3>
                <p className="text-black/60 text-sm leading-relaxed mb-4">
                  Para envíos aéreos de pescado fresco sin congelar, empleamos cajas de poliestireno expandido de alta densidad con gel packs eutécticos que mantienen 0°C a +1°C durante 48 horas seguidas.
                </p>
              </div>
              <div className="text-xs text-black/50 border-t border-black/5 pt-4">
                Empaques aprobados por IATA Cargo
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. TRAZABILIDAD TAB                                                       */}
      {/* ========================================================================= */}
      {activeTab === 'trazabilidad' && (
        <section className="animate-in fade-in duration-300">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Transparencia en Origen</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Trazabilidad 100% de la Embarcación
            </h1>
            <p className="text-black/70 text-base leading-relaxed">
              Cada lote despachado por Blaufish cuenta con identificación plena del barco pesquero, fecha y hora de lance, coordenadas GPS de extracción y certificado oficial de captura.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-sm mb-12">
            <h3 className="text-xl font-medium text-black mb-6">El Pasaporte Digital de Cada Captura:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-[#F5F5F5]">
                <div className="text-xs font-mono font-bold text-black/40 mb-1">01 / BARCO</div>
                <div className="text-base font-semibold text-black mb-1">Registro de Zarpe</div>
                <div className="text-xs text-black/60">Matrícula de capitanía y tripulación calificada.</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F5]">
                <div className="text-xs font-mono font-bold text-black/40 mb-1">02 / GPS</div>
                <div className="text-base font-semibold text-black mb-1">Zona FAO 87</div>
                <div className="text-xs text-black/60">Geolocalización exacta de la faena en aguas del Pacífico.</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F5]">
                <div className="text-xs font-mono font-bold text-black/40 mb-1">03 / CALIDAD</div>
                <div className="text-base font-semibold text-black mb-1">Protocolo Ikejime</div>
                <div className="text-xs text-black/60">Sangrado inmediato a bordo y enfriamiento rápido en salmuera.</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F5F5F5]">
                <div className="text-xs font-mono font-bold text-black/40 mb-1">04 / CÓDIGO QR</div>
                <div className="text-base font-semibold text-black mb-1">Verificación en Destino</div>
                <div className="text-xs text-black/60">Escaneo directo en aduana y mesa de subasta para validar datos.</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 4. CERTIFICACIONES TAB                                                    */}
      {/* ========================================================================= */}
      {activeTab === 'certificaciones' && (
        <section className="animate-in fade-in duration-300">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Acreditaciones Globales de Inocuidad</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Cumplimiento Sanitario Internacional
            </h1>
            <p className="text-black/70 text-base leading-relaxed">
              Cumplimos con las normativas fitosanitarias y de bioseguridad alimentaria más exigentes del mundo para ingreso inmediato a la Unión Europea, Estados Unidos, Corea del Sur y Japón.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit mb-3">
                Unión Europea
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Registro Sanitario UE #042</h3>
              <p className="text-black/60 text-xs leading-relaxed">
                Autorización plena para comercialización en los 27 países del bloque comunitario europeo sin trabas fronterizas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full w-fit mb-3">
                Estados Unidos
              </div>
              <h3 className="text-xl font-medium text-black mb-2">FDA Biosecurity Act</h3>
              <p className="text-black/60 text-xs leading-relaxed">
                Registro y validación de instalaciones pesqueras bajo normativa de la Administración de Alimentos y Medicamentos de EE. UU.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-purple-700 bg-purple-50 px-3 py-1 rounded-full w-fit mb-3">
                Corea del Sur
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Auditoría NFQS Corea</h3>
              <p className="text-black/60 text-xs leading-relaxed">
                Aprobado por el Servicio Nacional de Gestión de Calidad de Productos Pesqueros de la República de Corea para importación directa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full w-fit mb-3">
                Inocuidad Industrial
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Certificación HACCP / BPM</h3>
              <p className="text-black/60 text-xs leading-relaxed">
                Análisis de Peligros y Puntos Críticos de Control auditado de forma permanente en cada fase de eviscerado y empaque.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full w-fit mb-3">
                Conservación Marina
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Dolphin Safe & CIAT</h3>
              <p className="text-black/60 text-xs leading-relaxed">
                Garantía certificada de cero mortalidad de delfines y adhesión estricta a vedas de la Comisión Interamericana del Atún Tropical.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <div className="text-xs font-semibold uppercase text-teal-700 bg-teal-50 px-3 py-1 rounded-full w-fit mb-3">
                Origen Oficial
              </div>
              <h3 className="text-xl font-medium text-black mb-2">Certificado Ministerio Acuacultura</h3>
              <p className="text-black/60 text-xs leading-relaxed">
                Emisión de certificados fitosanitarios y de origen oficial de la República del Ecuador para aranceles preferenciales.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. LOGÍSTICA & RUTAS TAB                                                  */}
      {/* ========================================================================= */}
      {activeTab === 'logistica' && (
        <section className="animate-in fade-in duration-300">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-black/50 mb-2">
              <PlaneTakeoff className="w-3.5 h-3.5" />
              <span>Conexión Global desde Manta</span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-3"
              style={{ letterSpacing: '-0.03em' }}
            >
              Logística Express Aérea & Marítima
            </h1>
            <p className="text-black/70 text-base leading-relaxed">
              Despachamos semanalmente con itinerarios programados hacia los principales centros de distribución del mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-2xl font-medium text-black mb-4">1. Rutas Aéreas (Menos de 36 Horas)</h3>
              <ul className="space-y-3 text-sm text-black/70 mb-6">
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Manta / Quito (UIO) → Seúl Incheon (ICN)</span>
                  <strong className="text-black font-mono">32h tránsito</strong>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Manta / Quito (UIO) → Tokio Narita (NRT)</span>
                  <strong className="text-black font-mono">34h tránsito</strong>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Manta / Guayaquil (GYE) → Miami (MIA)</span>
                  <strong className="text-black font-mono">14h tránsito</strong>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Manta / Quito (UIO) → Frankfurt (FRA)</span>
                  <strong className="text-black font-mono">22h tránsito</strong>
                </li>
              </ul>
              <button
                onClick={() => onOpenPortal('Flete Aéreo Express')}
                className="w-full bg-[#142344] text-white py-3 rounded-full text-sm font-medium hover:bg-[#1d3260] transition-colors cursor-pointer"
              >
                Solicitar Espacio Aéreo
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-2xl font-medium text-black mb-4">2. Contenedores Marítimos Reefers (-60°C)</h3>
              <ul className="space-y-3 text-sm text-black/70 mb-6">
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Puerto Manta / Guayaquil → Busan (Corea)</span>
                  <strong className="text-black font-mono">26 días marítimos</strong>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Puerto Manta / Guayaquil → Hamburgo / Rotterdam</span>
                  <strong className="text-black font-mono">18 días marítimos</strong>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Puerto Manta / Guayaquil → Los Ángeles / Long Beach</span>
                  <strong className="text-black font-mono">12 días marítimos</strong>
                </li>
                <li className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span>Capacidad por Contenedor FCL 40'</span>
                  <strong className="text-black font-mono">22 - 26 Toneladas</strong>
                </li>
              </ul>
              <button
                onClick={() => onOpenPortal('Contenedor Marítimo -60C')}
                className="w-full bg-[#142344] text-white py-3 rounded-full text-sm font-medium hover:bg-[#1d3260] transition-colors cursor-pointer"
              >
                Solicitar Reserva de Contenedor FCL
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
