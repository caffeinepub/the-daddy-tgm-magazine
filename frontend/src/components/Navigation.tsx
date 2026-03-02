import React, { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/reader', label: 'Read Issue' },
  { to: '/archive', label: 'Archive' },
  { to: '/soapbox', label: 'The Soapbox' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav style={{ background: 'oklch(0.30 0.08 50)', borderBottom: '3px solid oklch(0.58 0.18 42)' }}>
      <div className="max-w-5xl mx-auto px-4">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-1 py-1">
          {navLinks.map((link) => {
            const isActive = link.to === '/' ? currentPath === '/' : currentPath.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link-retro ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center justify-between py-2">
          <span className="font-subheading text-sm tracking-widest" style={{ color: 'oklch(0.76 0.16 88)' }}>
            ✦ NAVIGATE ✦
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1"
            style={{ color: 'oklch(0.93 0.04 88)' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-2 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = link.to === '/' ? currentPath === '/' : currentPath.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link-retro block text-center py-2 ${isActive ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
