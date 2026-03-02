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
        <div className="font-subheading text-sm tracking-wider" style={{ color: 'oklch(0.35 0.12 42)' }}>
          PAGE {currentPage} OF 50
        </div>
        <button
          onClick={() => navigate({ to: '/' })}
          className="font-subheading text-xs tracking-widest"
          style={{ color: 'oklch(0.52 0.16 38)' }}
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
      <div className="flex items-center justify-between gap-4 mb-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage <= 1}
          className="retro-btn flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
        >
          <ChevronLeft size={16} />
          PREV PAGE
        </button>

        {/* Page indicator */}
        <div className="text-center">
          <div className="font-subheading text-sm tracking-widest" style={{ color: 'oklch(0.35 0.12 42)' }}>
            {currentPage} / 50
          </div>
          <div className="flex gap-0.5 mt-1 justify-center flex-wrap max-w-xs">
            {Array.from({ length: 50 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className="w-2 h-2 rounded-none transition-colors"
                style={{
                  background: i + 1 === currentPage
                    ? 'oklch(0.52 0.16 38)'
                    : i + 1 < currentPage
                    ? 'oklch(0.65 0.08 60)'
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
              className="font-subheading text-xs mx-1 px-2 py-0.5 hover:underline"
              style={{
                color: currentPage === p ? 'oklch(0.52 0.16 38)' : 'oklch(0.45 0.08 55)',
                fontWeight: currentPage === p ? 'bold' : 'normal',
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
