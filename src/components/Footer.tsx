import React from 'react';
import { Anchor, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { NavView } from '../types/navigation';

interface FooterProps {
  onNavigate: (view: NavView) => void;
  onOpenPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPortal }) => {
  return (
    <footer className="bg-[#F5F5F5] px-6 pt-16 pb-12 border-t border-black/10">
      <div className="max-w-[88rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <button
              onClick={() => onNavigate('inicio')}
              className="flex items-center mb-4 text-left cursor-pointer group"
            >
              <img
                src="/assets/logo.png"
                alt="Blaufish"
                className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </button>
            <p className="text-black/60 text-sm leading-relaxed max-w-sm mb-6 font-light">
              Blaufish Cía. Ltda. es una comercializadora pesquera ecuatoriana con sede principal en Manta, Manabí. Empresa familiar con más de 15 años de experiencia, estrechos lazos comerciales con Asia y ultracongelación a bordo.
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-black/50 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Puerto de Manta: 0°56′S 80°43′W • Manabí, Ecuador</span>
              </div>
              <div className="flex items-center gap-2">
                <Anchor className="w-3.5 h-3.5 shrink-0" />
                <span>Despacho Portuario Manta & Aeropuertos GYE / UIO</span>
              </div>
            </div>
          </div>

          {/* Column 1: Nosotros */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-black/40 mb-4">
              Nosotros
            </h4>
            <ul className="space-y-2.5 text-sm text-black/70">
              <li>
                <button
                  onClick={() => onNavigate('quienes-somos')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Quiénes Somos
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate('responsabilidad-social')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Responsabilidad Social
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('trazabilidad')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Trazabilidad de Flota
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Información & Especies */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-black/40 mb-4">
              Información Técnica
            </h4>
            <ul className="space-y-2.5 text-sm text-black/70">
              <li>
                <button
                  onClick={() => onNavigate('productos')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Pez Espada (Picudo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('productos')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Wahoo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cadena-frio')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Cadena de Frío -60°C
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('trazabilidad')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Trazabilidad Satelital
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('certificaciones')}
                  className="hover:text-black transition-colors text-left cursor-pointer"
                >
                  Certificaciones & Calidad
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacto & Certificaciones */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-black/40 mb-4">
              Aseguramiento
            </h4>
            <ul className="space-y-2 text-xs text-black/70 mb-6">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Registro Sanitario UE #042</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Auditoría NFQS Corea del Sur</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Registro FDA Biosecurity Act</span>
              </li>
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Certificación HACCP / BPM</span>
              </li>
            </ul>

            <button
              onClick={onOpenPortal}
              className="inline-flex items-center gap-2 text-xs font-semibold text-black bg-black/5 hover:bg-black/10 px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contactar Mesa Exterior</span>
            </button>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-xs text-black/50 gap-4">
          <div>
            © {new Date().getFullYear()} Blaufish Cía. Ltda. Todos los derechos reservados. Comercio Pesquero Ecuador.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('certificaciones')} className="hover:text-black cursor-pointer">
              Cumplimiento Sanitario
            </button>
            <button onClick={() => onNavigate('cadena-frio')} className="hover:text-black cursor-pointer">
              Ultracongelación a Bordo
            </button>
            <button onClick={() => onNavigate('trazabilidad')} className="hover:text-black cursor-pointer">
              Trazabilidad Satelital
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
