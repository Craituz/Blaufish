import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Anchor, Sparkles, Building2, HeartHandshake, Fish, Snowflake, ShieldCheck, PlaneTakeoff, PhoneCall } from 'lucide-react';
import { NavView } from '../types/navigation';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  onOpenPortal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'nosotros' | 'informacion' | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (menu: 'nosotros' | 'informacion') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  const nosotrosSub = [
    {
      id: 'quienes-somos' as NavView,
      title: 'Quiénes Somos',
      desc: 'Historia, filosofía de pesca responsable y visión oceánica desde Manta.',
      icon: Anchor,
    },
    {
      id: 'infraestructura' as NavView,
      title: 'Infraestructura y Planta',
      desc: 'Planta de procesamiento HACCP, cuartos de almacenamiento y logística en frío.',
      icon: Building2,
    },
    {
      id: 'responsabilidad-social' as NavView,
      title: 'Responsabilidad Social',
      desc: 'Apoyo activo a caletas de pescadores artesanales y sostenibilidad del ecosistema marino.',
      icon: HeartHandshake,
    },
  ];

  const infoSub = [
    {
      id: 'productos' as NavView,
      title: 'Especies y Productos',
      desc: 'Picudo (Pez Espada), Wahoo, Atún y Dorado en cortes sashimi, saku y lomos.',
      icon: Fish,
    },
    {
      id: 'cadena-frio' as NavView,
      title: 'Ultracongelación a Bordo',
      desc: 'Congelamiento inmediato a bordo y telemetría térmica ininterrumpida.',
      icon: Snowflake,
    },
    {
      id: 'trazabilidad' as NavView,
      title: 'Trazabilidad y Flota',
      desc: 'Seguimiento satelital GPS de embarcaciones, coordenadas de captura y bitácora legal.',
      icon: Sparkles,
    },
    {
      id: 'certificaciones' as NavView,
      title: 'Certificaciones y Calidad',
      desc: 'Acreditaciones internacionales: HACCP, FDA, UE #042, NFQS Corea e IATTC.',
      icon: ShieldCheck,
    },
    {
      id: 'logistica' as NavView,
      title: 'Logística y Comercio Internacional',
      desc: 'Vuelos chárter directos <36h y contenedores marítimos supercongelados.',
      icon: PlaneTakeoff,
    },
  ];

  const isNosotrosActive = ['quienes-somos', 'infraestructura', 'responsabilidad-social'].includes(currentView);
  const isInfoActive = ['productos', 'cadena-frio', 'trazabilidad', 'certificaciones', 'logistica'].includes(currentView);

  return (
    <nav className="absolute top-0 left-0 right-0 z-40 px-4 md:px-6 py-4 md:py-5">
      <div className="max-w-[88rem] mx-auto flex items-center justify-between">
        {/* Brand: Logo oficial de Blaufish bien posicionado y sin texto redundante */}
        <button
          onClick={() => onNavigate('inicio')}
          className="flex items-center group cursor-pointer focus:outline-none py-1"
          aria-label="Ir a Inicio - Blaufish"
        >
          <img
            src="/assets/logo.png"
            alt="Blaufish"
            style={{ height: '75px', width: 'auto' }}
            className="object-contain"
          />

        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full border border-black/5 shadow-sm">
          {/* Inicio */}
          <button
            onClick={() => onNavigate('inicio')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${currentView === 'inicio'
              ? 'bg-[#142344] text-white shadow-sm'
              : 'text-gray-700 hover:text-black hover:bg-black/5'
              }`}
          >
            Inicio
          </button>

          {/* Nosotros Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('nosotros')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate('quienes-somos')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${isNosotrosActive
                ? 'bg-[#142344] text-white shadow-sm'
                : 'text-gray-700 hover:text-black hover:bg-black/5'
                }`}
            >
              <span>Nosotros</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'nosotros' ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === 'nosotros' && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-black/10 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="text-[10px] uppercase font-bold tracking-wider text-black/40 px-3 py-1.5 border-b border-black/5 mb-1">
                  Empresa & Filosofía
                </div>
                {nosotrosSub.map((item) => {
                  const Icon = item.icon;
                  const isItemActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setActiveDropdown(null);
                      }}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${isItemActive ? 'bg-black/5 text-black' : 'hover:bg-black/5 text-gray-800 hover:text-black'
                        }`}
                    >
                      <div className="p-2 rounded-lg bg-black/5 text-black shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-black">{item.title}</div>
                        <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Información Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('informacion')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => onNavigate('productos')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${isInfoActive
                ? 'bg-[#142344] text-white shadow-sm'
                : 'text-gray-700 hover:text-black hover:bg-black/5'
                }`}
            >
              <span>Información</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'informacion' ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {activeDropdown === 'informacion' && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-black/10 p-2.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="text-[10px] uppercase font-bold tracking-wider text-black/40 px-3 py-1.5 border-b border-black/5 mb-1">
                  Especies, Calidad y Operaciones
                </div>
                {infoSub.map((item) => {
                  const Icon = item.icon;
                  const isItemActive = currentView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setActiveDropdown(null);
                      }}
                      className={`w-full flex items-start gap-3 p-2.5 rounded-xl text-left transition-colors cursor-pointer ${isItemActive ? 'bg-black/5 text-black' : 'hover:bg-black/5 text-gray-800 hover:text-black'
                        }`}
                    >
                      <div className="p-2 rounded-lg bg-black/5 text-black shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-black">{item.title}</div>
                        <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{item.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right CTA: Portal de Clientes + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPortal}
            className="bg-[#142344] text-white text-sm md:text-base font-medium px-5 md:px-7 py-2 md:py-2.5 rounded-full hover:bg-[#1d3260] transition-colors duration-200 shadow-sm hover:shadow cursor-pointer"
          >
            Portal de Clientes
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-black/5 rounded-full transition-colors cursor-pointer"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-2 p-5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-black/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
          {/* Inicio */}
          <button
            onClick={() => {
              onNavigate('inicio');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left font-medium text-base py-2 px-3 rounded-xl ${currentView === 'inicio' ? 'bg-[#142344] text-white' : 'text-gray-900'
              }`}
          >
            Inicio
          </button>

          {/* Nosotros Group */}
          <div className="border-t border-black/5 pt-2">
            <div className="text-xs uppercase font-bold tracking-wider text-black/40 px-3 mb-2">
              Nosotros
            </div>
            <div className="flex flex-col gap-1">
              {nosotrosSub.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left text-sm py-2 px-3 rounded-xl flex items-center justify-between ${currentView === item.id ? 'bg-[#142344] text-white font-medium' : 'text-gray-700 hover:bg-black/5'
                    }`}
                >
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Información Group */}
          <div className="border-t border-black/5 pt-2">
            <div className="text-xs uppercase font-bold tracking-wider text-black/40 px-3 mb-2">
              Información
            </div>
            <div className="flex flex-col gap-1">
              {infoSub.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left text-sm py-2 px-3 rounded-xl flex items-center justify-between ${currentView === item.id ? 'bg-[#142344] text-white font-medium' : 'text-gray-700 hover:bg-black/5'
                    }`}
                >
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Mobile */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPortal();
            }}
            className="w-full bg-[#142344] hover:bg-[#1d3260] text-white py-3 rounded-full font-medium text-center mt-2 shadow transition-colors cursor-pointer"
          >
            Solicitar Asignación / Cuotas
          </button>
        </div>
      )}
    </nav>
  );
};
