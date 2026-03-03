import React from 'react';
import type { ClassifiedAd } from '../data/classifiedsLibrary';
import type { UserClassifiedAd } from '../utils/classifiedsUtils';
import { formatTimestamp } from '../utils/classifiedsUtils';

type AnyAd = ClassifiedAd | UserClassifiedAd;

interface ClassifiedAdCardProps {
  ad: AnyAd;
}

function isUserAd(ad: AnyAd): ad is UserClassifiedAd {
  return 'isUserSubmitted' in ad && ad.isUserSubmitted === true;
}

export default function ClassifiedAdCard({ ad }: ClassifiedAdCardProps) {
  const userAd = isUserAd(ad) ? ad : null;

  return (
    <div
      className="relative p-3"
      style={{
        background: 'oklch(0.95 0.03 90)',
        border: '2px solid oklch(0.55 0.10 55)',
        boxShadow: '3px 3px 0 oklch(0.45 0.12 42)',
        backgroundImage: "url('/assets/generated/newsprint-texture.dim_512x512.png')",
        backgroundSize: '256px 256px',
      }}
    >
      {/* Inner border inset */}
      <div
        className="absolute inset-1 pointer-events-none"
        style={{ border: '1px dashed oklch(0.65 0.08 60 / 0.4)' }}
      />

      {/* Reader Ad badge */}
      {userAd && (
        <div className="flex items-center gap-2 mb-2">
          <span
            className="font-subheading text-xs px-2 py-0.5"
            style={{
              background: 'oklch(0.52 0.16 38)',
              color: 'oklch(0.97 0.02 85)',
              border: '1px solid oklch(0.40 0.14 38)',
              letterSpacing: '0.08em',
              fontSize: '0.6rem',
            }}
          >
            ★ READER AD ★
          </span>
          <span
            className="font-body text-xs"
            style={{ color: 'oklch(0.45 0.08 55)', fontSize: '0.65rem' }}
          >
            @{userAd.username} · {formatTimestamp(userAd.timestamp)}
          </span>
        </div>
      )}

      {/* Headline */}
      <h4
        className="font-subheading mb-1.5 leading-tight"
        style={{
          color: 'oklch(0.30 0.10 42)',
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        {ad.headline}
      </h4>

      {/* Body */}
      <p
        className="font-body leading-snug mb-2"
        style={{
          color: 'oklch(0.22 0.05 55)',
          fontSize: '0.72rem',
          lineHeight: '1.5',
          fontFamily: "'Special Elite', 'Courier New', monospace",
        }}
      >
        {ad.body}
      </p>

      {/* Contact */}
      {ad.contact && (
        <p
          className="font-subheading"
          style={{
            color: 'oklch(0.48 0.14 42)',
            fontSize: '0.62rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            borderTop: '1px solid oklch(0.65 0.08 60 / 0.5)',
            paddingTop: '0.35rem',
            marginTop: '0.25rem',
          }}
        >
          ✉ {ad.contact}
        </p>
      )}
    </div>
  );
}
