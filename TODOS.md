# TODOS

## Phase 2: Post-Homepage Launch

### Add Decap CMS for volunteer content editing
- **What:** Integrate Decap CMS (formerly Netlify CMS) so church volunteers can edit service times, address, welcome text, and other content through a web-based GUI instead of editing raw JSON on GitHub.
- **Why:** Non-technical volunteers need a friendly way to update content (e.g., special holiday service times, pastoral changes). Currently they'd need to edit JSON on GitHub, which risks syntax errors.
- **Pros:** Zero-friction content updates, no JSON knowledge required, Git-backed (every change is a commit).
- **Cons:** Requires Netlify Identity setup (OAuth), adds `admin/` route and `config.yml`, introduces a third-party dependency.
- **Context:** Originally specified in the design doc but deferred from MVP to reduce launch complexity. Revisit once volunteers start needing to update content regularly.
- **Depends on:** Netlify deployment must be live first. Requires Netlify Identity (free tier).

### Add secondary pages (About, Sermons, Events)
- **What:** Build dedicated pages for About Us (church history, beliefs, pastors), Sermon Archive (past recordings), and Events (calendar or upcoming list). Update nav from anchor links to real page links.
- **Why:** The homepage is a landing page for new visitors. Existing members and returning visitors need deeper content — sermon recordings, event schedules, church background.
- **Pros:** Completes the site as a full replacement for the old PHP site. Reuses existing Layout/Nav/Footer components.
- **Cons:** Each page needs its own content in both languages (doubles content maintenance). Sermon archive may need YouTube API integration.
- **Context:** The Astro component architecture was chosen specifically to make this expansion easy. Each new page is a small Astro file that imports shared components.
- **Depends on:** Homepage must be live and approved by church leadership first. Church photos and sermon recordings need to be sourced.

### Create DESIGN.md as project design source of truth
- **What:** Extract the design system (color palette, typography scale, spacing, breakpoints, shadows, border radius) from the design doc into a standalone `DESIGN.md` at the project root.
- **Why:** The design system currently lives only in `~/.gstack/projects/chccc-site/`. When adding secondary pages or components, developers need a single source of truth in the repo itself.
- **Pros:** Single reference for all design tokens. Prevents drift when multiple people contribute. Discoverable by `/design-review` and `/plan-design-review`.
- **Cons:** Another file to maintain. Minimal — the content already exists.
- **Context:** Design system was defined during /plan-design-review on 2026-03-21. Includes vermillion palette, Noto Sans typography, 8px spacing scale, responsive breakpoints.
- **Depends on:** Homepage implementation should be started first so the DESIGN.md reflects what's actually built, not just planned.
