import React from 'react';
import { IssuePage } from '../utils/issueGenerator';
import {
  SpoofMoviePoster,
  ComicStrip,
  FakeProductAd,
  SpoofReview,
  LetterToEditor,
  BackPageItem,
} from '../data/contentLibrary';

interface PageRendererProps {
  page: IssuePage;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="review-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? '★' : '☆'}</span>
      ))}
    </span>
  );
}

function RetroDivider() {
  return (
    <div className="my-4">
      <div className="retro-divider" />
    </div>
  );
}

function MoviePosterPage({ item }: { item: SpoofMoviePoster }) {
  return (
    <div className="movie-poster p-6 md:p-10 min-h-[500px] flex flex-col justify-between">
      {/* Top credits bar */}
      <div className="text-center mb-4">
        <span className="font-subheading text-xs tracking-widest" style={{ color: 'oklch(0.76 0.16 88)' }}>
          {item.studio} PRESENTS
        </span>
      </div>

      {/* ASCII Art */}
      <div className="flex justify-center my-4">
        <pre className="ascii-art text-center" style={{ color: 'oklch(0.76 0.16 88)', fontSize: '0.65rem' }}>
          {item.asciiArt}
        </pre>
      </div>

      {/* Title */}
      <div className="text-center my-4">
        <h2
          className="retro-masthead leading-tight"
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            color: 'oklch(0.93 0.04 88)',
            textShadow: '3px 3px 0 oklch(0.40 0.12 38)',
          }}
        >
          {item.title}
        </h2>
        <p className="font-heading italic text-lg mt-2" style={{ color: 'oklch(0.76 0.16 88)' }}>
          "{item.tagline}"
        </p>
      </div>

      {/* Cast */}
      <div className="mt-4 border-t border-dashed pt-4" style={{ borderColor: 'oklch(0.76 0.16 88 / 0.4)' }}>
        <p className="font-subheading text-xs tracking-widest text-center mb-2" style={{ color: 'oklch(0.76 0.16 88)' }}>
          STARRING
        </p>
        {item.cast.map((c, i) => (
          <p key={i} className="font-body text-xs text-center" style={{ color: 'oklch(0.85 0.04 80)' }}>
            {c}
          </p>
        ))}
        <p className="font-body text-xs text-center mt-2" style={{ color: 'oklch(0.70 0.06 70)' }}>
          Directed by {item.director}
        </p>
      </div>

      {/* Bottom info */}
      <div className="flex justify-between items-end mt-4">
        <span className="font-subheading text-xs px-2 py-1" style={{ background: 'oklch(0.76 0.16 88)', color: 'oklch(0.22 0.05 55)' }}>
          {item.rating}
        </span>
        <span className="font-body text-xs" style={{ color: 'oklch(0.65 0.06 70)' }}>
          {item.year}
        </span>
      </div>
    </div>
  );
}

function ComicStripPage({ item }: { item: ComicStrip }) {
  return (
    <div className="retro-card p-4 md:p-6">
      <h2 className="retro-heading text-center text-xl md:text-2xl mb-1" style={{ color: 'oklch(0.35 0.12 42)' }}>
        {item.title}
      </h2>
      <div className="retro-divider mb-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {item.panels.map((panel, i) => (
          <div key={i} className="comic-panel p-3 min-h-[140px] flex flex-col justify-between">
            {/* Panel number */}
            <div className="flex justify-between items-start mb-2">
              <span className="font-subheading text-xs px-1" style={{ background: 'oklch(0.22 0.05 55)', color: 'oklch(0.93 0.04 88)' }}>
                {i + 1}
              </span>
              <span className="font-subheading text-xs" style={{ color: 'oklch(0.52 0.16 38)' }}>
                {panel.character}
              </span>
            </div>

            {/* Stick figure */}
            <div className="text-center my-2">
              <pre className="ascii-art inline-block" style={{ fontSize: '0.55rem', color: 'oklch(0.25 0.06 50)' }}>
                {` O\n/|\\\n/ \\`}
              </pre>
            </div>

            {/* Dialogue bubble */}
            <div className="relative mt-2">
              <div
                className="p-2 font-body text-xs leading-snug"
                style={{
                  background: 'oklch(0.97 0.01 90)',
                  border: '2px solid oklch(0.22 0.05 55)',
                  borderRadius: '4px',
                  color: 'oklch(0.18 0.06 50)',
                }}
              >
                "{panel.dialogue}"
              </div>
              {panel.action && (
                <p className="font-body text-xs italic mt-1" style={{ color: 'oklch(0.50 0.08 60)' }}>
                  {panel.action}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {item.caption && (
        <div className="mt-4 text-center">
          <div className="retro-divider-simple" />
          <p className="font-heading italic text-sm mt-2" style={{ color: 'oklch(0.45 0.10 50)' }}>
            {item.caption}
          </p>
        </div>
      )}
    </div>
  );
}

function FakeAdPage({ item }: { item: FakeProductAd }) {
  return (
    <div className="ad-box p-6 md:p-10 min-h-[500px] flex flex-col">
      {/* Starburst badge */}
      <div className="flex justify-end mb-2">
        <div className="starburst w-20 h-20 flex items-center justify-center">
          <span className="font-subheading text-xs text-center leading-tight" style={{ color: 'oklch(0.22 0.05 55)' }}>
            NEW!
          </span>
        </div>
      </div>

      {/* Product name */}
      <h2
        className="retro-masthead text-center mb-2"
        style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
          color: 'oklch(0.52 0.16 38)',
          textShadow: '2px 2px 0 oklch(0.35 0.10 38)',
        }}
      >
        {item.productName}
      </h2>

      <div className="retro-divider my-3" />

      {/* Slogan */}
      <p className="font-heading italic text-xl text-center mb-4" style={{ color: 'oklch(0.35 0.12 42)' }}>
        "{item.slogan}"
      </p>

      {/* Body copy */}
      <div className="flex-1 my-4">
        <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.25 0.06 50)' }}>
          {item.bodyCopy}
        </p>
      </div>

      {/* Price */}
      {item.price && (
        <div className="text-center my-3">
          <span
            className="font-subheading text-lg px-4 py-1"
            style={{ background: 'oklch(0.76 0.16 88)', color: 'oklch(0.22 0.05 55)', border: '2px solid oklch(0.60 0.14 80)' }}
          >
            ONLY {item.price}
          </span>
        </div>
      )}

      {/* Fine print */}
      {item.finePrint && (
        <p className="font-body mt-4 italic" style={{ color: 'oklch(0.55 0.06 60)', fontSize: '0.6rem' }}>
          *{item.finePrint}
        </p>
      )}
    </div>
  );
}

function ReviewPage({ item }: { item: SpoofReview }) {
  return (
    <div className="retro-card p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-4">
        <span className="font-subheading text-xs tracking-widest px-3 py-1" style={{ background: 'oklch(0.52 0.16 38)', color: 'oklch(0.93 0.04 88)' }}>
          MOVIE REVIEW
        </span>
      </div>

      <h2 className="retro-heading text-2xl md:text-3xl text-center mb-2" style={{ color: 'oklch(0.30 0.08 48)' }}>
        {item.movieTitle}
      </h2>

      <div className="flex justify-center mb-4">
        <StarRating rating={item.rating} />
        <span className="font-subheading text-sm ml-2" style={{ color: 'oklch(0.50 0.08 55)' }}>
          ({item.rating}/5)
        </span>
      </div>

      <RetroDivider />

      {/* Review text */}
      <div className="letter-box mb-4">
        <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.22 0.05 55)', fontStyle: 'normal' }}>
          {item.reviewText}
        </p>
      </div>

      {/* Reviewer */}
      <div className="text-right">
        <p className="font-heading font-bold text-sm" style={{ color: 'oklch(0.40 0.10 48)' }}>
          — {item.reviewer}
        </p>
        <p className="font-body text-xs italic" style={{ color: 'oklch(0.55 0.06 60)' }}>
          {item.publication}
        </p>
      </div>

      {/* Decorative corner */}
      <div className="mt-4 flex justify-center">
        <span className="font-body text-xs" style={{ color: 'oklch(0.65 0.08 60)' }}>
          ✦ ✦ ✦
        </span>
      </div>
    </div>
  );
}

function LetterPage({ item }: { item: LetterToEditor }) {
  return (
    <div className="retro-card p-6 md:p-8">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="retro-masthead text-2xl md:text-3xl" style={{ color: 'oklch(0.52 0.16 38)' }}>
          LETTERS TO THE EDITOR
        </h2>
        <p className="font-subheading text-xs tracking-widest mt-1" style={{ color: 'oklch(0.55 0.08 60)' }}>
          YOUR GROOVY THOUGHTS & COMPLAINTS
        </p>
      </div>

      <div className="retro-divider mb-4" />

      {/* Letter */}
      <div className="letter-box mb-4">
        <p className="font-body text-sm leading-relaxed" style={{ color: 'oklch(0.22 0.05 55)' }}>
          {item.letterBody}
        </p>
      </div>

      {/* Signature */}
      <div className="text-right mb-4">
        <p className="font-heading font-bold text-sm" style={{ color: 'oklch(0.40 0.10 48)' }}>
          — {item.name}
        </p>
        <p className="font-body text-xs italic" style={{ color: 'oklch(0.55 0.06 60)' }}>
          {item.location}
        </p>
      </div>

      {/* Editor's note */}
      {item.editorNote && (
        <div
          className="p-3 mt-2"
          style={{
            background: 'oklch(0.86 0.06 78)',
            borderLeft: '4px solid oklch(0.50 0.12 128)',
          }}
        >
          <p className="font-subheading text-xs tracking-wider mb-1" style={{ color: 'oklch(0.35 0.10 120)' }}>
            ED'S NOTE:
          </p>
          <p className="font-body text-xs italic" style={{ color: 'oklch(0.30 0.08 50)' }}>
            {item.editorNote}
          </p>
        </div>
      )}
    </div>
  );
}

function BackPageContent({ item }: { item: BackPageItem }) {
  return (
    <div className="back-page p-6 md:p-10">
      {/* Decorative border inside */}
      <div className="absolute inset-4 border-2 border-dashed pointer-events-none" style={{ borderColor: 'oklch(0.76 0.16 88 / 0.4)' }} />

      <div className="relative z-10 text-center w-full">
        {/* Starburst */}
        <div className="flex justify-center mb-4">
          <div className="starburst w-24 h-24" />
        </div>

        <h2
          className="retro-masthead mb-4"
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'oklch(0.76 0.16 88)',
            textShadow: '3px 3px 0 oklch(0.30 0.08 40)',
          }}
        >
          {item.title}
        </h2>

        <div className="w-32 h-1 mx-auto mb-4" style={{ background: 'oklch(0.76 0.16 88)' }} />

        <div
          className="p-4 md:p-6 max-w-2xl mx-auto text-left"
          style={{
            background: 'oklch(0.20 0.06 42 / 0.6)',
            border: '1px solid oklch(0.76 0.16 88 / 0.3)',
          }}
        >
          <p className="font-body text-sm leading-relaxed whitespace-pre-line" style={{ color: 'oklch(0.90 0.03 85)' }}>
            {item.content}
          </p>
        </div>

        {item.subContent && (
          <p className="font-body text-xs mt-4 italic" style={{ color: 'oklch(0.65 0.06 70)' }}>
            {item.subContent}
          </p>
        )}

        <div className="mt-6">
          <span className="font-masthead text-2xl" style={{ color: 'oklch(0.76 0.16 88)' }}>
            ✦ THE END ✦
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PageRenderer({ page }: PageRendererProps) {
  const { contentType, contentItem } = page;

  return (
    <div className="page-turn-anim">
      {contentType === 'spoofMoviePoster' && (
        <MoviePosterPage item={contentItem as SpoofMoviePoster} />
      )}
      {contentType === 'comicStrip' && (
        <ComicStripPage item={contentItem as ComicStrip} />
      )}
      {contentType === 'fakeProductAd' && (
        <FakeAdPage item={contentItem as FakeProductAd} />
      )}
      {contentType === 'spoofReview' && (
        <ReviewPage item={contentItem as SpoofReview} />
      )}
      {contentType === 'letterToEditor' && (
        <LetterPage item={contentItem as LetterToEditor} />
      )}
      {contentType === 'backPage' && (
        <BackPageContent item={contentItem as BackPageItem} />
      )}
    </div>
  );
}
