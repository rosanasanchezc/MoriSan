import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'emblem' | 'horizontal' | 'compact';
  colorTheme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  colorTheme = 'dark',
  size = 'md'
}) => {
  const isLight = colorTheme === 'light';
  const strokeColor = isLight ? '#FFFFFF' : '#2B2B2B';
  const textColor = isLight ? '#FFFFFF' : '#2B2B2B';
  const terracottaColor = '#A35C37';

  if (variant === 'emblem') {
    const dimension = size === 'sm' ? 120 : size === 'lg' ? 220 : 160;
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        <svg
          width={dimension}
          height={dimension}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 hover:scale-[1.02]"
        >
          {/* Top border */}
          <line x1="30" y1="30" x2="170" y2="30" stroke={strokeColor} strokeWidth="5" />
          
          {/* Left border */}
          <line x1="30" y1="30" x2="30" y2="165" stroke={strokeColor} strokeWidth="5" />
          
          {/* Right border */}
          <line x1="170" y1="30" x2="170" y2="165" stroke={strokeColor} strokeWidth="5" />
          
          {/* Bottom left corner return */}
          <line x1="30" y1="165" x2="52" y2="165" stroke={strokeColor} strokeWidth="5" />
          
          {/* Bottom right corner return */}
          <line x1="148" y1="165" x2="170" y2="165" stroke={strokeColor} strokeWidth="5" />

          {/* Subtitle center line */}
          <g>
            <text
              x="100"
              y="97"
              textAnchor="middle"
              fill={textColor}
              fontFamily="Montserrat, sans-serif"
              fontSize="9.5"
              fontWeight="500"
              letterSpacing="0.8"
            >
              CORTINAS <tspan fill={terracottaColor} fontSize="11" dy="-0.5">•</tspan><tspan dy="0.5"> PERSIANAS </tspan><tspan fill={terracottaColor} fontSize="11" dy="-0.5">•</tspan><tspan dy="0.5"> TOLDOS</tspan>
            </text>
          </g>

          {/* Main Brand Wordmark MoriSan */}
          <text
            x="100"
            y="171"
            textAnchor="middle"
            fill={terracottaColor}
            fontFamily="Montserrat, sans-serif"
            fontSize="26"
            fontWeight="600"
            letterSpacing="-0.5"
          >
            MoriSan
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2 select-none ${className}`}>
        <div className="w-8 h-8 relative border-2 border-[#2B2B2B] flex items-center justify-center">
          <span className="font-display font-bold text-xs text-[#A35C37]">MS</span>
        </div>
        <span className={`font-display font-semibold tracking-tight text-lg ${isLight ? 'text-white' : 'text-[#2B2B2B]'}`}>
          Mori<span className="text-[#A35C37]">San</span>
        </span>
      </div>
    );
  }

  // Horizontal variant (Ideal for Top Bar & Footers)
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Mini Architectural Frame Icon */}
      <div className="w-9 h-9 relative shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          <line x1="10" y1="10" x2="90" y2="10" stroke={strokeColor} strokeWidth="6" />
          <line x1="10" y1="10" x2="10" y2="85" stroke={strokeColor} strokeWidth="6" />
          <line x1="90" y1="10" x2="90" y2="85" stroke={strokeColor} strokeWidth="6" />
          <line x1="10" y1="85" x2="25" y2="85" stroke={strokeColor} strokeWidth="6" />
          <line x1="75" y1="85" x2="90" y2="85" stroke={strokeColor} strokeWidth="6" />
          <circle cx="50" cy="50" r="6" fill={terracottaColor} />
          <line x1="30" y1="50" x2="40" y2="50" stroke={strokeColor} strokeWidth="3" />
          <line x1="60" y1="50" x2="70" y2="50" stroke={strokeColor} strokeWidth="3" />
          <text
            x="50"
            y="91"
            textAnchor="middle"
            fill={terracottaColor}
            fontFamily="Montserrat, sans-serif"
            fontSize="18"
            fontWeight="700"
          >
            MS
          </text>
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1">
          <span className={`font-display font-bold text-xl md:text-2xl tracking-tight ${isLight ? 'text-white' : 'text-[#2B2B2B]'}`}>
            Mori<span className="text-[#A35C37]">San</span>
          </span>
        </div>
        <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-display font-medium text-stone-400 mt-1">
          Cortinas <span className="text-[#A35C37]">•</span> Persianas <span className="text-[#A35C37]">•</span> Toldos
        </span>
      </div>
    </div>
  );
};
