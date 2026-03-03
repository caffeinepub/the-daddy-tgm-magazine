import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { ClassifiedCategory } from '../data/classifiedsLibrary';
import { submitUserAd, type UserClassifiedAd } from '../utils/classifiedsUtils';

const CATEGORIES: ClassifiedCategory[] = [
  'FOR SALE',
  'PERSONALS',
  'HELP WANTED',
  'SERVICES OFFERED',
  'LOST & FOUND',
  'ANNOUNCEMENTS',
];

const HEADLINE_MAX = 60;
const BODY_MAX = 200;

interface ClassifiedSubmissionFormProps {
  onAdSubmitted: (ad: UserClassifiedAd) => void;
}

export default function ClassifiedSubmissionForm({ onAdSubmitted }: ClassifiedSubmissionFormProps) {
  const [category, setCategory] = useState<ClassifiedCategory>('FOR SALE');
  const [headline, setHeadline] = useState('');
  const [body, setBody] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!headline.trim() || !body.trim()) return;
    const newAd = submitUserAd(category, headline.trim(), body.trim(), contact.trim() || undefined);
    onAdSubmitted(newAd);
    setHeadline('');
    setBody('');
    setContact('');
    setCategory('FOR SALE');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  const headlineLeft = HEADLINE_MAX - headline.length;
  const bodyLeft = BODY_MAX - body.length;

  return (
    <div
      className="relative p-5 mb-8"
      style={{
        background: 'oklch(0.28 0.07 50)',
        border: '4px double oklch(0.76 0.16 88)',
        boxShadow: '5px 5px 0 oklch(0.18 0.06 50)',
      }}
    >
      {/* Inner border */}
      <div
        className="absolute inset-2 pointer-events-none"
        style={{ border: '1px solid oklch(0.58 0.18 42 / 0.4)' }}
      />

      {/* Form header */}
      <div className="text-center mb-4">
        <div className="diagonal-stripe-thin mb-3" />
        <h3
          className="font-masthead"
          style={{
            color: 'oklch(0.76 0.16 88)',
            fontSize: '1.3rem',
            textShadow: '2px 2px 0 oklch(0.18 0.06 50)',
            letterSpacing: '0.05em',
          }}
        >
          ✦ PLACE YOUR OWN AD ✦
        </h3>
        <p
          className="font-body mt-1"
          style={{ color: 'oklch(0.75 0.06 80)', fontSize: '0.72rem' }}
        >
          Got something to sell, say, or confess? Put it in the paper, baby.
        </p>
        <div className="diagonal-stripe-thin mt-3" />
      </div>

      {submitted && (
        <div
          className="text-center py-2 px-4 mb-4 font-subheading text-sm tracking-widest"
          style={{
            background: 'oklch(0.50 0.12 128)',
            color: 'oklch(0.97 0.02 85)',
            border: '2px solid oklch(0.40 0.10 128)',
            letterSpacing: '0.12em',
          }}
        >
          ★ AD SUBMITTED! IT'S IN THE PAPER, BABY! ★
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Category */}
        <div>
          <label
            className="font-subheading block mb-1"
            style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
          >
            CATEGORY
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as ClassifiedCategory)}
            className="w-full font-subheading px-3 py-2 text-sm"
            style={{
              background: 'oklch(0.93 0.04 88)',
              border: '2px solid oklch(0.58 0.18 42)',
              color: 'oklch(0.22 0.05 55)',
              outline: 'none',
              letterSpacing: '0.08em',
              cursor: 'pointer',
            }}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Headline */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              className="font-subheading"
              style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
            >
              HEADLINE
            </label>
            <span
              className="font-body"
              style={{
                color: headlineLeft < 10 ? 'oklch(0.65 0.18 25)' : 'oklch(0.65 0.06 70)',
                fontSize: '0.65rem',
              }}
            >
              {headlineLeft} chars left
            </span>
          </div>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value.slice(0, HEADLINE_MAX))}
            placeholder="WRITE YOUR HEADLINE IN ALL CAPS FOR MAXIMUM DRAMA"
            maxLength={HEADLINE_MAX}
            required
            className="w-full font-body px-3 py-2 text-sm"
            style={{
              background: 'oklch(0.95 0.03 90)',
              border: '2px solid oklch(0.65 0.08 60)',
              color: 'oklch(0.22 0.05 55)',
              outline: 'none',
            }}
          />
        </div>

        {/* Body */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label
              className="font-subheading"
              style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
            >
              AD COPY
            </label>
            <span
              className="font-body"
              style={{
                color: bodyLeft < 20 ? 'oklch(0.65 0.18 25)' : 'oklch(0.65 0.06 70)',
                fontSize: '0.65rem',
              }}
            >
              {bodyLeft} chars left
            </span>
          </div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value.slice(0, BODY_MAX))}
            placeholder="Tell the good people of The Daddy TGM what you've got, what you want, or what you lost..."
            maxLength={BODY_MAX}
            required
            rows={4}
            className="w-full font-body px-3 py-2 text-sm resize-none"
            style={{
              background: 'oklch(0.95 0.03 90)',
              border: '2px solid oklch(0.65 0.08 60)',
              color: 'oklch(0.22 0.05 55)',
              outline: 'none',
              lineHeight: '1.6',
            }}
          />
        </div>

        {/* Contact (optional) */}
        <div>
          <label
            className="font-subheading block mb-1"
            style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.72rem', letterSpacing: '0.1em' }}
          >
            CONTACT INFO{' '}
            <span style={{ color: 'oklch(0.65 0.06 70)', fontWeight: 400 }}>(OPTIONAL)</span>
          </label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Box number, phone, or just say 'ask around'"
            className="w-full font-body px-3 py-2 text-sm"
            style={{
              background: 'oklch(0.95 0.03 90)',
              border: '2px solid oklch(0.65 0.08 60)',
              color: 'oklch(0.22 0.05 55)',
              outline: 'none',
            }}
          />
        </div>

        {/* Submit */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={!headline.trim() || !body.trim()}
            className="retro-btn w-full flex items-center justify-center gap-2 py-2.5 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={14} />
            SUBMIT MY AD TO THE PAPER
          </button>
        </div>
      </form>
    </div>
  );
}
