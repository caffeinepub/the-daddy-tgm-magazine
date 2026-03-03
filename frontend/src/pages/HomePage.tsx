import React, { useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import {
  getTodayIssueNumber,
  getTodaySeed,
  saveIssueToArchive,
  formatDateStr,
  formatDisplayDate,
} from '../utils/issueUtils';
import { generateIssuePages } from '../utils/issueGenerator';
import { SpoofMoviePoster, FakeProductAd, SpoofReview, ComicStrip } from '../data/contentLibrary';

export default function HomePage() {
  const navigate = useNavigate();
  const today = new Date();
  const issueNumber = getTodayIssueNumber();
  const seed = getTodaySeed();
  const dateStr = formatDateStr(today);
  const displayDate = formatDisplayDate(dateStr);

  useEffect(() => {
    saveIssueToArchive(today);
  }, []);

  const pages = generateIssuePages(seed);
  const coverPage = pages[0];
  const teaserPages = pages.slice(1, 5);

  function getTeaserTitle(page: typeof pages[0]): string {
    const item = page.contentItem;
    switch (item.type) {
      case 'spoofMoviePoster': return (item as SpoofMoviePoster).title;
      case 'fakeProductAd': return (item as FakeProductAd).productName;
      case 'spoofReview': return (item as SpoofReview).movieTitle;
      case 'comicStrip': return (item as ComicStrip).title;
      case 'letterToEditor': return 'Letter to the Editor';
      case 'backPage': return 'Back Page Special';
      default: return 'Featured Content';
    }
  }

  function getTeaserSnippet(page: typeof pages[0]): string {
    const item = page.contentItem;
    switch (item.type) {
      case 'spoofMoviePoster': return `"${(item as SpoofMoviePoster).tagline}"`;
      case 'fakeProductAd': return (item as FakeProductAd).slogan;
      case 'spoofReview': return (item as SpoofReview).reviewText.slice(0, 100) + '...';
      case 'comicStrip': return (item as ComicStrip).panels[0]?.dialogue.slice(0, 100) + '...' || '';
      case 'letterToEditor': return (item as { letterBody: string }).letterBody.slice(0, 100) + '...';
      default: return 'Read more inside...';
    }
  }

  function getTypeLabel(type: string): string {
    const labels: Record<string, string> = {
      spoofMoviePoster: '🎬 MOVIE SPOOF',
      fakeProductAd: '📢 ADVERTISEMENT',
      spoofReview: '⭐ REVIEW',
      comicStrip: '💬 COMIC STRIP',
      letterToEditor: '✉️ LETTER',
      backPage: '📰 BACK PAGE',
    };
    return labels[type] || 'FEATURE';
  }

  return (
    <div>
      {/* Issue header — jersey-style issue number treatment */}
      <div className="retro-border-thick p-4 mb-6 text-center relative overflow-hidden" style={{ background: 'oklch(0.89 0.05 80)' }}>
        {/* Athletic number watermark behind content */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="jersey-number"
            style={{
              fontSize: 'clamp(6rem, 20vw, 12rem)',
              color: 'oklch(0.58 0.18 42 / 0.07)',
              WebkitTextStroke: '1px oklch(0.22 0.06 255 / 0.06)',
            }}
          >
            {issueNumber}
          </span>
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-subheading tracking-widest mb-2" style={{ color: 'oklch(0.52 0.16 38)' }}>
            {/* Jersey-style issue number badge */}
            <span
              className="jersey-number inline-block px-3 py-0.5"
              style={{
                fontSize: '1.6rem',
                color: 'oklch(0.98 0.005 90)',
                background: 'oklch(0.22 0.06 255)',
                WebkitTextStroke: '1px oklch(0.58 0.18 42)',
                lineHeight: 1.1,
              }}
            >
              #{issueNumber}
            </span>
            <span className="self-center">✦</span>
            <span className="self-center">{displayDate}</span>
            <span className="self-center">✦</span>
            <span className="self-center">PRICE: 35¢</span>
          </div>
          <div className="retro-divider-simple" />
          <p className="font-heading italic text-sm mt-2" style={{ color: 'oklch(0.40 0.10 50)' }}>
            "All the news that's unfit to print — and then some!"
          </p>
        </div>
      </div>

      {/* Athletic diagonal stripe between header and cover */}
      <div className="diagonal-stripe mb-6" />

      {/* Cover feature */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Cover poster */}
        <div>
          <div className="font-athletic text-xs tracking-widest mb-2 px-2 py-1 inline-block font-bold" style={{ background: 'oklch(0.52 0.16 38)', color: 'oklch(0.93 0.04 88)', letterSpacing: '0.12em' }}>
            THIS ISSUE'S COVER FEATURE
          </div>
          {coverPage.contentType === 'spoofMoviePoster' && (() => {
            const item = coverPage.contentItem as SpoofMoviePoster;
            return (
              <div className="movie-poster p-6 min-h-[380px] flex flex-col justify-between">
                <div className="text-center">
                  <span className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.76 0.16 88)' }}>
                    {item.studio} PRESENTS
                  </span>
                </div>
                <div className="flex justify-center my-3">
                  <pre className="ascii-art text-center" style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.6rem' }}>
                    {item.asciiArt}
                  </pre>
                </div>
                <div className="text-center">
                  <h3 className="retro-masthead text-2xl md:text-3xl" style={{ color: 'oklch(0.93 0.04 88)' }}>
                    {item.title}
                  </h3>
                  <p className="font-heading italic mt-1" style={{ color: 'oklch(0.76 0.16 88)' }}>
                    "{item.tagline}"
                  </p>
                </div>
                <div className="flex justify-between items-end mt-3">
                  <span className="font-subheading text-xs px-2 py-0.5" style={{ background: 'oklch(0.76 0.16 88)', color: 'oklch(0.22 0.05 55)' }}>
                    {item.rating}
                  </span>
                  <span className="font-body text-xs" style={{ color: 'oklch(0.65 0.06 70)' }}>{item.year}</span>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Issue info + CTA */}
        <div className="flex flex-col justify-between">
          <div className="retro-card p-5 mb-4">
            {/* Athletic-style section header */}
            <h3
              className="athletic-heading mb-3"
              style={{
                fontSize: '1.5rem',
                color: 'oklch(0.22 0.06 255)',
                textShadow: '2px 2px 0 oklch(0.58 0.18 42)',
              }}
            >
              WELCOME TO ISSUE #{issueNumber}
            </h3>
            <p className="font-body text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.30 0.08 50)' }}>
              Greetings, you groovy cat! You've stumbled upon the finest satirical rag this side of the Mississippi. 
              Fifty pages of pure, unadulterated comedy gold — movie spoofs, fake ads, comic strips, and more!
            </p>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.30 0.08 50)' }}>
              Today's issue is packed with the kind of content your mother warned you about. 
              Dig in, baby. It's all groovy.
            </p>
          </div>

          <button
            onClick={() => navigate({ to: '/reader' })}
            className="retro-btn w-full text-center text-lg py-3"
          >
            ✦ READ TODAY'S ISSUE ✦
          </button>
        </div>
      </div>

      {/* Content teasers */}
      <div className="mb-6">
        <div className="retro-divider" />
        <h3
          className="athletic-heading text-center my-4"
          style={{
            fontSize: '1.75rem',
            color: 'oklch(0.22 0.06 255)',
            textShadow: '2px 2px 0 oklch(0.58 0.18 42)',
          }}
        >
          INSIDE THIS ISSUE...
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {teaserPages.map((page) => (
            <div
              key={page.pageNumber}
              className="retro-card p-4 cursor-pointer hover:shadow-retro-lg transition-shadow"
              onClick={() => navigate({ to: '/reader', search: { page: page.pageNumber } })}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-subheading text-xs px-2 py-0.5" style={{ background: 'oklch(0.76 0.16 88)', color: 'oklch(0.22 0.05 55)' }}>
                  {getTypeLabel(page.contentType)}
                </span>
                {/* Jersey-style page number */}
                <span
                  className="jersey-number"
                  style={{
                    fontSize: '1.4rem',
                    color: 'oklch(0.22 0.06 255)',
                    WebkitTextStroke: '1px oklch(0.58 0.18 42)',
                  }}
                >
                  p.{page.pageNumber}
                </span>
              </div>
              <h4 className="retro-heading text-base mb-1" style={{ color: 'oklch(0.30 0.08 48)' }}>
                {getTeaserTitle(page)}
              </h4>
              <p className="font-body text-xs leading-relaxed mb-2" style={{ color: 'oklch(0.40 0.06 55)' }}>
                {getTeaserSnippet(page)}
              </p>
              <span className="font-athletic text-xs font-bold" style={{ color: 'oklch(0.52 0.16 38)', letterSpacing: '0.1em' }}>
                READ MORE →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="retro-divider" />
      <div className="text-center py-4">
        <p className="font-heading italic text-sm mb-3" style={{ color: 'oklch(0.45 0.08 55)' }}>
          New issue every day! Check the Archive for past issues.
        </p>
        <button
          onClick={() => navigate({ to: '/archive' })}
          className="retro-btn retro-btn-mustard"
        >
          VIEW ARCHIVE
        </button>
      </div>
    </div>
  );
}
