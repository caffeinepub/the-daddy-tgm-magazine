import React, { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import {
  getArchivedIssues,
  saveIssueToArchive,
  formatDisplayDate,
  ArchivedIssue,
} from '../utils/issueUtils';
import { BookOpen, Archive } from 'lucide-react';

export default function ArchivePage() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState<ArchivedIssue[]>([]);

  useEffect(() => {
    saveIssueToArchive(new Date());
    setIssues(getArchivedIssues());
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="retro-border-thick p-4 mb-6 text-center" style={{ background: 'oklch(0.89 0.05 80)' }}>
        <div className="flex justify-center mb-2">
          <Archive size={32} style={{ color: 'oklch(0.52 0.16 38)' }} />
        </div>
        <h1 className="retro-masthead text-3xl md:text-4xl mb-1" style={{ color: 'oklch(0.35 0.12 42)' }}>
          THE ARCHIVE
        </h1>
        <p className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.55 0.08 60)' }}>
          EVERY ISSUE. EVERY DAY. ALL THE GROOVINESS.
        </p>
      </div>

      <div className="retro-divider mb-6" />

      {issues.length === 0 ? (
        <div className="retro-card p-8 text-center">
          <p className="font-heading text-xl mb-2" style={{ color: 'oklch(0.40 0.10 50)' }}>
            No past issues yet, baby!
          </p>
          <p className="font-body text-sm" style={{ color: 'oklch(0.50 0.06 60)' }}>
            Come back tomorrow for more groovy content, baby! Each day brings a brand new issue.
          </p>
          <button
            onClick={() => navigate({ to: '/' })}
            className="retro-btn mt-4"
          >
            READ TODAY'S ISSUE
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {issues.map((issue, idx) => (
            <div key={issue.dateStr}>
              {idx === 0 && (
                <div className="font-subheading text-xs tracking-widest mb-2 px-2 py-1 inline-block" style={{ background: 'oklch(0.52 0.16 38)', color: 'oklch(0.93 0.04 88)' }}>
                  ✦ LATEST ISSUE
                </div>
              )}
              <div
                className="retro-card p-4 flex flex-wrap items-center justify-between gap-3 cursor-pointer hover:shadow-retro-lg transition-shadow"
                onClick={() => navigate({ to: '/reader', search: { issue: issue.seed } })}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 flex items-center justify-center font-masthead text-lg flex-shrink-0"
                    style={{ background: 'oklch(0.52 0.16 38)', color: 'oklch(0.93 0.04 88)' }}
                  >
                    #{issue.issueNumber}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm" style={{ color: 'oklch(0.30 0.08 48)' }}>
                      Issue #{issue.issueNumber}
                    </p>
                    <p className="font-body text-xs" style={{ color: 'oklch(0.50 0.06 60)' }}>
                      {formatDisplayDate(issue.dateStr)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-body text-xs" style={{ color: 'oklch(0.55 0.06 60)' }}>
                    50 pages
                  </span>
                  <button
                    className="retro-btn flex items-center gap-1 text-xs py-1 px-3"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate({ to: '/reader', search: { issue: issue.seed } });
                    }}
                  >
                    <BookOpen size={12} />
                    READ ISSUE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="retro-divider mt-6" />
      <div className="text-center py-4">
        <p className="font-body text-xs italic" style={{ color: 'oklch(0.55 0.06 60)' }}>
          Issues are generated fresh each day. Same date = same issue. Come back daily for new content!
        </p>
      </div>
    </div>
  );
}
