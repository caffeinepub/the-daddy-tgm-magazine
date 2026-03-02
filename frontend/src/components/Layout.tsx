import React from 'react';
import Masthead from './Masthead';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'tgm-magazine');

  return (
    <div className="min-h-screen flex flex-col vignette">
      <header>
        <Masthead />
        <Navigation />
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      <footer style={{ background: 'oklch(0.22 0.06 48)', borderTop: '3px double oklch(0.58 0.18 42)' }}>
        <div className="max-w-5xl mx-auto px-4 py-4 text-center">
          <div className="retro-divider-simple mb-3" />
          <p className="font-subheading text-xs tracking-widest mb-1" style={{ color: 'oklch(0.76 0.16 88)' }}>
            THE DADDY "TGM" · THE GROOVY MAGAZINE
          </p>
          <p className="font-body text-xs mb-2" style={{ color: 'oklch(0.65 0.06 70)' }}>
            © {year} The Daddy TGM. All rights reserved, baby. All content is satirical parody fiction.
          </p>
          <p className="font-body text-xs" style={{ color: 'oklch(0.55 0.06 65)' }}>
            Built with{' '}
            <span style={{ color: 'oklch(0.65 0.18 25)' }}>♥</span>
            {' '}using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'oklch(0.76 0.16 88)', textDecoration: 'underline' }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
