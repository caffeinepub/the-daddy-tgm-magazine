import React from 'react';
import type { ClassifiedAd, ClassifiedCategory } from '../data/classifiedsLibrary';
import type { UserClassifiedAd } from '../utils/classifiedsUtils';
import ClassifiedAdCard from './ClassifiedAdCard';

const CATEGORY_ORNAMENTS: Record<ClassifiedCategory, string> = {
  'FOR SALE': '★',
  'PERSONALS': '♥',
  'HELP WANTED': '⚡',
  'SERVICES OFFERED': '✦',
  'LOST & FOUND': '◆',
  'ANNOUNCEMENTS': '✪',
};

const CATEGORY_ORDER: ClassifiedCategory[] = [
  'FOR SALE',
  'PERSONALS',
  'HELP WANTED',
  'SERVICES OFFERED',
  'LOST & FOUND',
  'ANNOUNCEMENTS',
];

interface ClassifiedsGridProps {
  staticAds: ClassifiedAd[];
  userAds: UserClassifiedAd[];
}

export default function ClassifiedsGrid({ staticAds, userAds }: ClassifiedsGridProps) {
  return (
    <div>
      {CATEGORY_ORDER.map((category) => {
        const catUserAds = userAds.filter((a) => a.category === category);
        const catStaticAds = staticAds.filter((a) => a.category === category);
        const totalAds = catUserAds.length + catStaticAds.length;
        if (totalAds === 0) return null;

        const ornament = CATEGORY_ORNAMENTS[category];

        return (
          <section key={category} className="mb-8">
            {/* Category header */}
            <div className="mb-3">
              {/* Diagonal stripe accent */}
              <div className="diagonal-stripe-thin mb-2" />

              <div className="flex items-center gap-3 px-1">
                <div
                  className="flex-1 h-px"
                  style={{ background: 'oklch(0.48 0.14 42)' }}
                />
                <h3
                  className="font-subheading text-center px-3 py-1"
                  style={{
                    color: 'oklch(0.97 0.02 85)',
                    background: 'oklch(0.35 0.12 42)',
                    border: '2px solid oklch(0.58 0.18 42)',
                    outline: '1px solid oklch(0.76 0.16 88)',
                    outlineOffset: '2px',
                    fontSize: '0.85rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {ornament} {category} {ornament}
                </h3>
                <div
                  className="flex-1 h-px"
                  style={{ background: 'oklch(0.48 0.14 42)' }}
                />
              </div>

              <div className="diagonal-stripe-thin mt-2" />
            </div>

            {/* Ads grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* User ads first */}
              {catUserAds.map((ad) => (
                <ClassifiedAdCard key={ad.id} ad={ad} />
              ))}
              {/* Static ads */}
              {catStaticAds.map((ad) => (
                <ClassifiedAdCard key={ad.id} ad={ad} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
