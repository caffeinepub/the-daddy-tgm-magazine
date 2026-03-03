import React, { useState, useEffect, useCallback } from 'react';
import { useSearch, useNavigate } from '@tanstack/react-router';
import { getTodaySeed, getTodayIssueNumber, saveIssueToArchive, formatDisplayDate, formatDateStr } from '../utils/issueUtils';
import { generateIssuePages, IssuePage } from '../utils/issueGenerator';
import PageRenderer from '../components/PageRenderer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReaderPage() {
  const search = useSearch({ strict: false }) as { page?: number; issue?: number };
  const navigate = useNavigate();

  const seed = search.issue ?? getTodaySeed();
  const issueNumber = search.issue ?? getTodayIssueNumber();
  const initialPage = search.page ? Math.max(1, Math.min(50, Number(search.page))) : 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [animKey, setAnimKey] = useState(0);
  const [pages, setPages] = useState<IssuePage[]>([]);

  useEffect(() => {
    const generated = generateIssuePages(seed);
    setPages(generated);
    saveIssueToArchive(new Date());
  }, [seed]);

  const goToPage = useCallback((pageNum: number) => {
    const clamped = Math.max(1, Math.min(50, pageNum));
    setCurrentPage(clamped);
    setAnimKey((k) => k + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const today = new Date();
  const displayDate = formatDisplayDate(formatDateStr(today));
  const activePage = pages[currentPage - 1];

  return (
    <div>
      {/* Reader header */}
      <div className="retro-border p-3 mb-4 flex flex-wrap items-center justify-between gap-2" style={{ background: 'oklch(0.89 0.05 80)' }}>
        <div>
          <span className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.52 0.16 38)' }}>
            ISSUE #{issueNumber}
          </span>
          <span className="font-body text-xs ml-2" style={{ color: 'oklch(0.55 0.06 60)' }}>
            · {displayDate}
          </span>
        </div>

        {/* Jersey-style page indicator */}
        <div className="flex items-baseline gap-1">
          <span
            className="jersey-number"
            style={{
              fontSize: '2rem',
              color: 'oklch(0.22 0.06 255)',
              WebkitTextStroke: '1.5px oklch(0.58 0.18 42)',
              lineHeight: 1,
            }}
          >
            {currentPage}
          </span>
          <span className="font-athletic font-bold text-sm" style={{ color: 'oklch(0.55 0.06 60)', letterSpacing: '0.05em' }}>
            / 50
          </span>
        </div>

        <button
          onClick={() => navigate({ to: '/' })}
          className="font-athletic font-bold text-xs tracking-widest"
          style={{ color: 'oklch(0.52 0.16 38)', letterSpacing: '0.1em' }}
        >
          ← BACK TO HOME
        </button>
      </div>

      {/* Page content */}
      <div className="mb-6 min-h-[500px]">
        {activePage ? (
          <div key={animKey}>
            <PageRenderer page={activePage} />
          </div>
        ) : (
          <div className="retro-card p-8 text-center">
            <p className="font-body text-lg" style={{ color: 'oklch(0.40 0.08 55)' }}>
              Loading page...
            </p>
          </div>
        )}
      </div>

      {/* Navigation controls */}
      <div className="retro-divider mb-4" />

      {/* Athletic diagonal stripe above nav controls */}
      <div className="diagonal-stripe-thin mb-4" />

      <div className="flex items-center justify-between gap-4 mb-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
          className="retro-btn flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ChevronLeft size={16} />
          PREV PAGE
        </button>

        {/* Page indicator — jersey number treatment */}
        <div className="text-center">
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span
              className="jersey-number"
              style={{
                fontSize: '2.5rem',
                color: 'oklch(0.22 0.06 255)',
                WebkitTextStroke: '2px oklch(0.58 0.18 42)',
                lineHeight: 1,
              }}
            >
              {currentPage}
            </span>
            <span
              className="athletic-heading"
              style={{
                fontSize: '1rem',
                color: 'oklch(0.55 0.06 60)',
              }}
            >
              / 50
            </span>
          </div>
          <div className="flex gap-0.5 mt-1 justify-center flex-wrap max-w-xs">
            {Array.from({ length: 50 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className="w-2 h-2 rounded-none transition-colors"
                style={{
                  background: i + 1 === currentPage
                    ? 'oklch(0.22 0.06 255)'
                    : i + 1 < currentPage
                    ? 'oklch(0.58 0.18 42)'
                    : 'oklch(0.80 0.04 75)',
                }}
                title={`Page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage >= 50}
          className="retro-btn flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          NEXT PAGE
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Jump to page */}
      <div className="text-center">
        <span className="font-body text-xs" style={{ color: 'oklch(0.55 0.06 60)' }}>
          Jump to:{' '}
          {[1, 10, 20, 30, 40, 50].map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className="font-athletic font-bold text-xs mx-1 px-2 py-0.5 hover:underline"
              style={{
                color: currentPage === p ? 'oklch(0.22 0.06 255)' : 'oklch(0.45 0.08 55)',
                fontWeight: currentPage === p ? '900' : '700',
                letterSpacing: '0.05em',
              }}
            >
              {p}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
}
