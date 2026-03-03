# Specification

## Summary
**Goal:** Add a Classifieds section to The Daddy TGM with a static library of spoof ads, a newspaper-style layout, and a user submission form.

**Planned changes:**
- Add a "Classifieds" nav link to the Navigation component alongside the existing five links, routing to `/classifieds`
- Create a `classifiedsLibrary.ts` data file with at least 30 satirical fake classified ads in 1970s Mad Magazine/National Lampoon voice, each with a category, headline, body text, and optional fake contact info across at least 5 categories (FOR SALE, PERSONALS, HELP WANTED, SERVICES OFFERED, LOST & FOUND, ANNOUNCEMENTS)
- Build a Classifieds page styled in the existing retro/athletic theme with a masthead-style page header
- Render ads in a 2–3 column newspaper-style grid on desktop (single column on mobile), grouped by category with ornamental retro category section headers and diagonal stripe dividers; each ad card uses monospace/typewriter font and an aged-paper retro border style
- Add a "Place Your Own Ad" submission form (category dropdown, headline with 60-char limit, body textarea with 200-char limit, visible counters) that stores submissions in localStorage, displays them at the top of their category, and labels them with a fake 1970s-style username (from existing `soapboxUtils`) and a timestamp

**User-visible outcome:** Users can browse a full page of satirical retro classified ads organized by category in a newspaper layout, and submit their own spoof ads that persist across page refreshes.
