import React, { useState, useEffect } from 'react';
import { classifiedsLibrary } from '../data/classifiedsLibrary';
import { loadUserAds, type UserClassifiedAd } from '../utils/classifiedsUtils';
import ClassifiedsGrid from '../components/ClassifiedsGrid';
import ClassifiedSubmissionForm from '../components/ClassifiedSubmissionForm';

export default function ClassifiedsPage() {
  const [userAds, setUserAds] = useState<UserClassifiedAd[]>([]);

  useEffect(() => {
    setUserAds(loadUserAds());
  }, []);

  function handleAdSubmitted(newAd: UserClassifiedAd) {
    setUserAds((prev) => [newAd, ...prev]);
  }

  return (
    <div>
      {/* Page masthead */}
      <div
        className="relative text-center py-6 mb-6 overflow-hidden"
        style={{
          background: 'oklch(0.22 0.06 48)',
          border: '4px double oklch(0.76 0.16 88)',
          boxShadow: '6px 6px 0 oklch(0.18 0.06 50)',
          backgroundImage: "url('/assets/generated/newsprint-texture.dim_512x512.png')",
          backgroundSize: '256px 256px',
        }}
      >
        {/* Inner border */}
        <div
          className="absolute inset-2 pointer-events-none"
          style={{ border: '1px solid oklch(0.58 0.18 42 / 0.5)' }}
        />

        <div className="diagonal-stripe mb-4" />

        <div className="relative px-4">
          <p
            className="font-subheading tracking-widest mb-1"
            style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.7rem', letterSpacing: '0.3em' }}
          >
            THE DADDY TGM PRESENTS
          </p>
          <h1
            className="retro-masthead masthead-flicker"
            style={{
              color: 'oklch(0.93 0.04 88)',
              fontSize: 'clamp(1.8rem, 6vw, 3.2rem)',
              lineHeight: 1,
              textShadow: '3px 3px 0 oklch(0.45 0.12 42), 5px 5px 10px oklch(0.18 0.06 50 / 0.6)',
            }}
          >
            WANT ADS
          </h1>
          <h2
            className="font-subheading tracking-widest mt-1"
            style={{
              color: 'oklch(0.76 0.16 88)',
              fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
              letterSpacing: '0.35em',
            }}
          >
            &amp; ODDITIES
          </h2>

          <div
            className="flex items-center gap-3 mt-3 justify-center"
          >
            <div className="flex-1 max-w-24" style={{ height: '2px', background: 'oklch(0.58 0.18 42)' }} />
            <p
              className="font-body text-center"
              style={{ color: 'oklch(0.65 0.06 70)', fontSize: '0.65rem', fontStyle: 'italic' }}
            >
              "Where the desperate meet the delusional since 1971"
            </p>
            <div className="flex-1 max-w-24" style={{ height: '2px', background: 'oklch(0.58 0.18 42)' }} />
          </div>
        </div>

        <div className="diagonal-stripe mt-4" />
      </div>

      {/* Submission form */}
      <ClassifiedSubmissionForm onAdSubmitted={handleAdSubmitted} />

      {/* Classifieds grid */}
      <ClassifiedsGrid staticAds={classifiedsLibrary} userAds={userAds} />

      {/* Footer note */}
      <div
        className="text-center py-4 mt-4"
        style={{
          borderTop: '3px double oklch(0.48 0.14 42)',
        }}
      >
        <p
          className="font-body"
          style={{ color: 'oklch(0.45 0.08 55)', fontSize: '0.65rem', fontStyle: 'italic' }}
        >
          The Daddy TGM assumes no responsibility for the accuracy of these advertisements, the sanity of their authors,
          or any transactions resulting therefrom. Caveat emptor, baby.
        </p>
      </div>
    </div>
  );
}
