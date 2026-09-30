import React, { useState } from 'react';
import { X, CheckCircle, ThermometerSnowflake, FileText, Send, Building } from 'lucide-react';

interface SpeciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: string;
}

interface SpecieItem {
  id: string;
  name: string;
  photo: string;
  grade: string;
  fatContent: string;
  cuts: string;
  temp: string;
  description: string;
}

const speciesList: SpecieItem[] = [
  {
    id: 'picudo',
    name: 'Pez Espada / Picudo del Pacífico',
    photo: '/assets/picudo_hero.jpg',
    grade: 'Grado Sashimi AAA Extra White',
    fatContent: 'Alto Contenido Graso (>8%)',
    cuts: 'Lomos limpios, Saku, Rodajas/Steaks, Entero G&G',
    temp: 'Ultracongelación a Bordo o Fresco en Hielo (0°C)',
    description:
      'Apreciado por su carne blanca brillante, textura densa y sabor delicado. Extraído por palangre artesanal selectivo en aguas frías de Humboldt.',
  },
  {
    id: 'wahoo',
    name: 'Wahoo',
    photo: '/assets/wahoo_hero.jpg',
    grade: 'Grado Sushi #1',
    fatContent: 'Medio-Alto (5-8%)',
    cuts: 'Lomos deshuesados, Porciones IQF al vacío',
    temp: 'Ultracongelación a Bordo',
    description:
      'Carne sumamente blanca y limpia con dulzor oceánico. Muy solicitada por los maestros de sushi en Seúl, Tokio y Nueva York.',
  },
];

export const SpeciesModal: React.FC<SpeciesModalProps> = ({ isOpen, onClose, initialMode }) => {
  const [selectedSpecies, setSelectedSpecies] = useState(speciesList[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    destination: 'Seúl Incheon (ICN) - Aéreo',
    volume: '2.5 Toneladas Métricas (Chárter Aéreo)',
    mode: initialMode || 'Chárter Aéreo Express',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#F5F5F5] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-black/10 flex flex-col">
        {/* Modal Header */}
        <div className="sticky top-0 bg-[#F5F5F5]/90 backdrop-blur px-6 md:px-8 py-5 border-b border-black/5 flex items-center justify-between z-10">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-black/50">
              Mesa de Comercio Exterior • Manta
            </span>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-black">
              Portal de Clientes & Solicitud de Cuotas
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-black/70 hover:text-black transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8">
          {submitted ? (
            <div className="py-12 text-center max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#142344] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-medium tracking-tight text-black mb-3">
                Solicitud Registrada
              </h3>
              <p className="text-black/70 text-sm md:text-base mb-8 leading-relaxed">
                Estimado(a) <strong>{formData.name || formData.company || 'Cliente'}</strong>, hemos recibido su solicitud de asignación de cuota para{' '}
                <strong>{selectedSpecies.name}</strong> con destino a{' '}
                <strong>{formData.destination}</strong> bajo la referencia{' '}
                <span className="font-mono font-semibold text-[#142344] bg-[#142344]/5 px-2 py-0.5 rounded">BF-2026-EC</span>. Nuestro oficial comercial se pondrá en contacto dentro de las próximas 2 horas hábiles.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="bg-[#142344] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#1d3260] transition-colors cursor-pointer"
              >
                Cerrar Portal
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Species Specs */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-3">
                  1. Selección de Especie & Calidad
                </h4>
                <div className="flex flex-col gap-2.5 mb-6">
                  {speciesList.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSpecies(item)}
                      className={`flex items-center gap-3.5 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedSpecies.id === item.id
                          ? 'bg-[#142344] text-white border-[#142344] shadow'
                          : 'bg-white hover:bg-neutral-50 text-black border-black/5'
                      }`}
                    >
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-14 h-14 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-sm leading-tight mb-1">{item.name}</div>
                        <div className="text-[11px] font-semibold opacity-80">
                          {item.grade}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Selected Item Overview */}
                <div className="bg-white p-5 rounded-2xl border border-black/5 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-wider text-black/40 mb-2">
                    Ficha Técnica de Origen
                  </div>
                  <p className="text-black/80 text-xs leading-relaxed mb-4 font-light">
                    {selectedSpecies.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-[#F5F5F5] p-2.5 rounded-xl">
                      <span className="text-black/50 block text-[11px]">Formatos de Corte:</span>
                      <strong className="text-black leading-tight block mt-0.5">{selectedSpecies.cuts}</strong>
                    </div>
                    <div className="bg-[#F5F5F5] p-2.5 rounded-xl">
                      <span className="text-black/50 block text-[11px]">Régimen Térmico:</span>
                      <strong className="text-black leading-tight block mt-0.5">{selectedSpecies.temp}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Allocation Form */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-black/50 mb-3">
                  2. Datos del Importador & Logística
                </h4>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-black/60 mb-1">
                      Nombre de la Empresa / Importador
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Tokyo Marine Foods Co., Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-black/60 mb-1">
                        Contacto Responsable
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nombre y apellido"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-black/60 mb-1">
                        Correo Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="import@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-black/60 mb-1">
                        Puerto / Aeropuerto Destino
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-white border border-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-black"
                      >
                        <option>Seúl Incheon (ICN) - Aéreo</option>
                        <option>Tokio Narita (NRT) - Aéreo</option>
                        <option>Los Ángeles (LAX) - Aéreo</option>
                        <option>Frankfurt (FRA) - Aéreo</option>
                        <option>Puerto de Busan - Marítimo FCL</option>
                        <option>Puerto de Hamburgo - Marítimo FCL</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-black/60 mb-1">
                        Volumen Requerido
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full bg-white border border-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-black"
                      >
                        <option>500 kg - Muestra Comercial</option>
                        <option>2.5 TM - Despacho Aéreo Express</option>
                        <option>5.0 TM - Programa Semanal</option>
                        <option>1 x Contenedor FCL 40' (24 TM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200/60 p-3 rounded-xl text-emerald-900 text-xs flex items-start gap-2.5 mt-1">
                    <ThermometerSnowflake className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>
                      Incluye datalogger electrónico de monitoreo térmico y Certificado Oficial de Origen de la República del Ecuador.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#142344] text-white text-base font-medium py-3 rounded-full hover:bg-[#1d3260] transition-colors shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Enviar Solicitud a Mesa de Comercio Exterior
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
