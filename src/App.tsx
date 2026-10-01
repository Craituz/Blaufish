import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InfoSection } from './components/InfoSection';
import { BackedBySection } from './components/BackedBySection';
import { UseCasesSection } from './components/UseCasesSection';
import { QuienesSomosView } from './components/QuienesSomosView';
import { InformacionView } from './components/InformacionView';
import { Footer } from './components/Footer';
import { SpeciesModal } from './components/SpeciesModal';
import { NavView } from './types/navigation';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<NavView>('inicio');
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string | undefined>(undefined);

  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPortal = (mode?: string) => {
    setSelectedMode(mode);
    setIsPortalOpen(true);
  };

  const handleClosePortal = () => {
    setIsPortalOpen(false);
    setSelectedMode(undefined);
  };

  const isNosotrosGroup = ['quienes-somos', 'responsabilidad-social'].includes(currentView);
  const isInformacionGroup = ['productos', 'cadena-frio', 'trazabilidad', 'certificaciones'].includes(currentView);

  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen text-[#111111] antialiased selection:bg-[#142344] selection:text-white">
      {/* ========================================================================= */}
      {/* NAVBAR (Global across all views)                                          */}
      {/* ========================================================================= */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenPortal={() => handleOpenPortal()}
      />

      {/* ========================================================================= */}
      {/* VIEW 1: INICIO (Home with Hero Video & Flagship Sections)                 */}
      {/* ========================================================================= */}
      {currentView === 'inicio' && (
        <main className="flex flex-col">
          {/* 1. First Section: h-screen overflow-hidden wrapper (HeroSection) */}
          <div className="h-screen flex flex-col overflow-hidden relative w-full">
            <HeroSection onExplore={() => handleNavigate('productos')} />
          </div>

          {/* 2. Info Section ("Conoce Blaufish") */}
          <InfoSection
            onDiscover={() => handleNavigate('productos')}
            onNavigate={handleNavigate}
          />

          {/* 3. Backed By Section (30s Marquee de Certificaciones) */}
          <BackedBySection />

          {/* 4. Pilares Clave ("Explora Blaufish") */}
          <UseCasesSection
            onNavigate={handleNavigate}
            onOpenPortal={() => handleOpenPortal()}
          />
        </main>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: NOSOTROS (Quiénes Somos, Infraestructura, Responsabilidad Social)  */}
      {/* ========================================================================= */}
      {isNosotrosGroup && (
        <main className="flex-1">
          <QuienesSomosView
            currentSubView={currentView}
            onNavigate={handleNavigate}
            onOpenPortal={() => handleOpenPortal('Visita Técnica')}
          />
        </main>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: INFORMACIÓN (Productos, Cadena Frío, Trazabilidad, etc.)           */}
      {/* ========================================================================= */}
      {isInformacionGroup && (
        <main className="flex-1">
          <InformacionView
            currentSubView={currentView}
            onNavigate={handleNavigate}
            onOpenPortal={(mode) => handleOpenPortal(mode)}
          />
        </main>
      )}

      {/* ========================================================================= */}
      {/* FOOTER (Global)                                                           */}
      {/* ========================================================================= */}
      <Footer onNavigate={handleNavigate} onOpenPortal={() => handleOpenPortal()} />

      {/* ========================================================================= */}
      {/* INTERACTIVE MODAL / ALLOCATION DESK                                       */}
      {/* ========================================================================= */}
      <SpeciesModal
        isOpen={isPortalOpen}
        onClose={handleClosePortal}
        initialMode={selectedMode}
      />
    </div>
  );
};

export default App;
