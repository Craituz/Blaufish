import React, { useRef, useState } from 'react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { BrandMarquee } from './BrandMarquee';

interface HeroSectionProps {
  onExplore: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="flex-1 px-3 sm:px-6 md:px-8 pt-24 md:pt-32 pb-4 md:pb-6 flex items-end">
      {/* Inner card */}
      <div
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-100"
        style={{ height: 'calc(100vh - 120px)' }}
      >
        {/* Background Video: object-[75%_center] en móvil para ver más a la derecha, md:object-center en escritorio */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-[75%_center] md:object-center absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Authentic Blaufish ocean background */}
          <source src="/assets/ocean_background.mp4" type="video/mp4" />
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            type="video/mp4"
          />
        </video>

        {/* Crisp Light Gradient Scrim for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/10 md:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent pointer-events-none" />

        {/* Audio Toggle in bottom corner */}
        <button
          onClick={toggleSound}
          className="absolute bottom-6 right-6 z-20 p-2.5 rounded-full bg-white/80 backdrop-blur text-black/80 hover:bg-white hover:text-black transition-colors shadow cursor-pointer"
          title={isMuted ? 'Activar sonido del océano' : 'Silenciar'}
          aria-label="Alternar audio del océano"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-start h-full p-6 md:p-12 pt-24 md:pt-36">
          {/* Heading */}
          <h1
            className="text-black text-5xl md:text-6xl lg:text-7xl font-medium leading-tight max-w-2xl mb-4"
            style={{ letterSpacing: '-0.04em' }}
          >
            Más de 15 Años
            <br />
            De Experiencia
          </h1>

          {/* Paragraph */}
          <p
            className="text-black/75 text-base md:text-lg max-w-lg mb-8 leading-relaxed font-light"
            style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
          >
            Blaufish es una empresa familiar de comerciantes de pelágicos con más de 15 años de experiencia y estrechos lazos comerciales
            con Asia. Calidad garantizada con ultracongelación a bordo.
          </p>

          {/* Pill button with trailing arrow inside white circle */}
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-3 bg-[#142344] text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-[#1d3260] transition-colors duration-200 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <span>Explorar Productos</span>
            <div className="bg-white rounded-full p-2 group-hover:bg-white/95 transition-colors">
              <ArrowRight className="w-5 h-5 text-[#142344] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          {/* Brand Marquee (inside hero, below button) */}
          <BrandMarquee />
        </div>
      </div>
    </div>
  );
};
