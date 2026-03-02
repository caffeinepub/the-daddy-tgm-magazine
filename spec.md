# Specification

## Summary
**Goal:** Build "The Daddy TGM," a fully frontend satirical online magazine with a 1970s retro aesthetic, daily seeded content issues, a page-by-page reader, community posting, and archive — all persisted via localStorage.

**Planned changes:**
- Apply a 1970s retro visual theme: warm earth-tone color palette (browns, oranges, mustard, avocado green, burnt sienna), bold retro serif fonts for headings, typewriter/monospace font for body text, CSS-simulated aged newsprint background with grain/vignette, and decorative retro borders/dividers throughout
- Display a prominent masthead "THE DADDY 'TGM'" with tagline "The Grooviest Rag on the Rack" on every page
- Implement top navigation with five routes: Home, Read Issue, Archive, The Soapbox, About; collapses to compact/hamburger on mobile
- Date-based daily issue system: compute a deterministic issue number from `new Date()`, save visited issue dates to localStorage
- Implement a seedable PRNG (e.g., mulberry32) to generate a consistent 50-page issue layout per seed
- Build a content library of 200+ unique items across six categories in 1970s Mad Magazine / National Lampoon satirical style: spoof movie poster panels, movie spoof comic strip panels (CSS div-based), fake 1970s product ads, sarcastic movie reviews, fake letters to the editor, and back-page full-bleed jokes/ads
- Build the 50-page magazine reader with Previous/Next navigation, "Page X of 50" indicator, CSS fade/slide transition between pages, and page 50 always showing a back-page item
- Build the Home page with today's issue cover (issue number, date, featured spoof movie poster), "Read Today's Issue" CTA, and 3–4 content teasers linking to specific reader pages
- Build the Archive page reading localStorage history, listing issues newest-first with date, issue number, and "Read Issue" link; empty state message if no past issues
- Build The Soapbox community feed: users can post messages stored in localStorage, posts show fake auto-generated 1970s-style usernames and timestamps, "Groovy!" like button with persisted count, inline reply threading, newest-first feed
- Build the About page as a satirical fake editorial page with founding story, 4+ fake staff bios, fake address, fake publication details, and humorous mission statement in 1970s voice
- Fully responsive layout, optimized for desktop; reader stacks vertically on mobile

**User-visible outcome:** Users can visit a fully styled 1970s satirical magazine site, read a unique 50-page daily issue generated from today's date, browse past issues in the archive, post and reply in The Soapbox community feed, and explore the comedic About page — all without any backend or login.
