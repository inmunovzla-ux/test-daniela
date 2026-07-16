import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' means light text/elements for dark backgrounds; 'dark' means dark text/elements for light backgrounds
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showText = true,
}) => {
  const isLight = variant === 'light';
  
  // Brand Colors matching the concept board exactly
  const blueColor = '#0D2B45';
  const goldColor = '#C89A3C';
  const grayColor = '#7D9BA0';
  
  const textColor = isLight ? '#FFFFFF' : blueColor;

  return (
    <div id="brand-logo-container" className={`flex items-center gap-3.5 flex-shrink-0 ${className}`}>
      {/* Brand Icon SVG - 100% transparent vector matching the brand board */}
      <svg
        id="brand-logo-icon"
        viewBox="0 0 100 100"
        className="w-12 h-12 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Beautiful outer crescent on the left - matches the provided logo image */}
        <path
          d="M 38 14 A 36 36 0 0 0 38 86 A 32 36 0 0 1 38 14 Z"
          fill={isLight ? '#FFFFFF' : blueColor}
          fillOpacity={isLight ? '0.85' : '0.9'}
        />

        {/* Globe Grid Circle */}
        <circle
          cx="38"
          cy="50"
          r="30"
          stroke={isLight ? '#FFFFFF' : blueColor}
          strokeWidth="1.5"
          strokeOpacity={isLight ? '0.35' : '0.45'}
        />
        {/* Longitude Arcs */}
        <path
          d="M38 20 A 30 30 0 0 0 38 80"
          stroke={isLight ? '#FFFFFF' : blueColor}
          strokeWidth="1"
          strokeOpacity={isLight ? '0.2' : '0.25'}
          strokeDasharray="2 2"
        />
        <path
          d="M38 20 A 15 30 0 0 0 38 80"
          stroke={isLight ? '#FFFFFF' : blueColor}
          strokeWidth="1.2"
          strokeOpacity={isLight ? '0.3' : '0.35'}
        />
        {/* Latitude Arcs */}
        <path
          d="M12 38 Q 38 46 64 38"
          stroke={isLight ? '#FFFFFF' : blueColor}
          strokeWidth="1"
          strokeOpacity={isLight ? '0.2' : '0.25'}
          strokeDasharray="2 2"
        />
        <path
          d="M8 50 Q 38 60 68 50"
          stroke={isLight ? '#FFFFFF' : blueColor}
          strokeWidth="1.2"
          strokeOpacity={isLight ? '0.3' : '0.35'}
        />
        <path
          d="M12 62 Q 38 72 64 62"
          stroke={isLight ? '#FFFFFF' : blueColor}
          strokeWidth="1"
          strokeOpacity={isLight ? '0.2' : '0.25'}
          strokeDasharray="2 2"
        />

        {/* Golden Flight Trail */}
        <path
          d="M 28 62 C 34 56, 56 50, 78 28"
          stroke={goldColor}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Golden Passenger Airplane Silhouette flying up-right */}
        <g transform="translate(78, 28) rotate(-40)" fill={goldColor}>
          <path d="M -7 0 C -7 -0.5 -6 -2.5 -6 -3 L -5 -3 C -5 -2 -4.5 -1 -4 -0.5 L -1 -4.5 C -1 -5 -0.5 -5.5 0 -5.5 L 1 -5.5 L 0 -0.5 L 3.5 -0.5 C 4 -0.5 5 -0.2 5.5 0 C 5 -0.2 4 0.5 3.5 0.5 L 0 0.5 L 1 5.5 L 0 5.5 C -0.5 5.5 -1 5 -1 4.5 L -4 0.5 C -4.5 1 -5 2 -5 3 L -6 3 C -6 2.5 -7 0.5 -7 0 Z" />
        </g>

        {/* Silhouette of a woman walking with wheeled suitcase */}
        <g fill={isLight ? '#FFFFFF' : blueColor}>
          {/* Head & Hair bundle */}
          <circle cx="48" cy="38" r="2.8" />
          <path d="M49.5 37.5 C50.5 37.5 51 38.5 51 39 C51 39.5 50 40 49.5 40 Z" />
          
          {/* Torso / Blazer / Elegant walking pose */}
          <path d="M44.5 42 C46.5 41.5 48.5 42 49.5 44 C50.5 46 49.5 51 47.5 53.5 C47 52.5 46 51 45 50 C45.5 48.5 45.8 47 45.3 45.5 C44.5 44.5 44 43.5 44.5 42 Z" />

          {/* Stepping Legs */}
          {/* Left Leg (backwards) */}
          <path d="M45.5 53 C46.2 55.5 47.5 58.5 48.5 61.5 L46.5 62 C45.5 59.2 44.3 56 43.5 53.5 Z" />
          {/* Right Leg (forward) */}
          <path d="M47.2 53 C48.5 56 50.5 59 52 61 C52.5 61.5 52.2 62 51.5 62 C50 60 47.8 57 46.5 53.5 Z" />

          {/* Arm pulling luggage */}
          <path d="M45.5 43.5 L40.5 50.5 L39.8 51.5 C39.2 52.2 38.7 52.5 38.2 52.5 C37.7 52.5 37.2 52 37.2 51.5 C37.2 51 37.7 50.5 38.2 50 L38.7 49.5 C39.2 49 42.5 42.5 44.5 41.8 Z" />
        </g>

        {/* Tilted Suitcase connected to the pulling arm */}
        <g transform="translate(39.5, 51.5) rotate(26)" fill={isLight ? '#FFFFFF' : blueColor}>
          {/* Extension Rod */}
          <line x1="0" y1="0" x2="-4" y2="5.5" stroke={isLight ? '#FFFFFF' : blueColor} strokeWidth="1" />
          {/* Suitcase Body */}
          <rect x="-7.5" y="5.5" width="6.5" height="11.5" rx="1.2" />
          {/* Wheels */}
          <circle cx="-6.8" cy="17.5" r="0.8" />
          <circle cx="-1.7" cy="17.5" r="0.8" />
        </g>
      </svg>

      {/* Brand Text - Styled precisely to match Concept 1 */}
      {showText && (
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Vertical Divider line */}
          <div
            className={`h-9 w-[1px] flex-shrink-0 ${
              isLight ? 'bg-white/20' : 'bg-brand-blue/20'
            }`}
            style={{ backgroundColor: isLight ? 'rgba(255, 255, 255, 0.2)' : 'rgba(11, 36, 71, 0.2)' }}
          />
          
          <div id="brand-text-container" className="flex flex-col select-none justify-center flex-shrink-0 whitespace-nowrap">
            <div className="flex flex-col leading-[1.05] whitespace-nowrap">
              <span
                id="brand-title-word1"
                className="font-heading text-[17px] sm:text-[19px] font-medium tracking-wide whitespace-nowrap"
                style={{ color: textColor }}
              >
                Asesorías
              </span>
              <div className="flex items-baseline -mt-0.5 whitespace-nowrap">
                <span
                  id="brand-title-word2"
                  className="font-heading italic font-normal lowercase text-[15px] sm:text-[17px] mr-1.5 whitespace-nowrap"
                  style={{ color: goldColor }}
                >
                  al
                </span>
                <span
                  id="brand-title-word3"
                  className="font-heading text-[17px] sm:text-[19px] font-medium tracking-wide whitespace-nowrap"
                  style={{ color: textColor }}
                >
                  Migrante
                </span>
              </div>
            </div>
            <span 
              id="brand-slogan" 
              className="text-[6px] sm:text-[7px] font-sans tracking-[0.22em] uppercase text-zinc-400 mt-1 block whitespace-nowrap"
            >
              Traspasamos fronteras con el respaldo correcto
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
