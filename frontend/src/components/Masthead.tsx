import React from 'react';

export default function Masthead() {
  return (
    <div className="text-center py-4 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, oklch(0.22 0.06 48) 0%, oklch(0.30 0.08 50) 100%)' }}>
      {/* Decorative top border */}
      <div className="w-full h-1 mb-3" style={{ background: 'repeating-linear-gradient(90deg, oklch(0.76 0.16 88) 0px, oklch(0.76 0.16 88) 8px, oklch(0.58 0.18 42) 8px, oklch(0.58 0.18 42) 16px)' }} />

      {/* Issue banner */}
      <div className="inline-block mb-1 px-4 py-0.5 text-xs font-subheading tracking-widest" style={{ background: 'oklch(0.76 0.16 88)', color: 'oklch(0.22 0.05 55)' }}>
        ✦ THE GROOVIEST RAG ON THE RACK ✦
      </div>

      {/* Main masthead */}
      <div className="masthead-flicker">
        <h1
          className="retro-masthead leading-none"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            color: 'oklch(0.93 0.04 88)',
            textShadow: '4px 4px 0px oklch(0.48 0.14 42), 7px 7px 12px oklch(0.2 0.06 40 / 0.5)',
          }}
        >
          THE DADDY
        </h1>
        <div className="flex items-center justify-center gap-3 mt-1">
          <div className="h-px flex-1" style={{ background: 'oklch(0.76 0.16 88)' }} />
          <h2
            className="retro-masthead px-4"
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
              color: 'oklch(0.76 0.16 88)',
              textShadow: '3px 3px 0px oklch(0.40 0.12 38)',
            }}
          >
            "TGM"
          </h2>
          <div className="h-px flex-1" style={{ background: 'oklch(0.76 0.16 88)' }} />
        </div>
        <p className="font-subheading text-xs tracking-widest mt-1" style={{ color: 'oklch(0.78 0.10 80)' }}>
          THE GROOVY MAGAZINE · EST. 1970 · PRICE: 35¢
        </p>
      </div>

      {/* Decorative bottom border */}
      <div className="w-full h-1 mt-3" style={{ background: 'repeating-linear-gradient(90deg, oklch(0.76 0.16 88) 0px, oklch(0.76 0.16 88) 8px, oklch(0.58 0.18 42) 8px, oklch(0.58 0.18 42) 16px)' }} />
    </div>
  );
}
