---
name: design-strategy-research
description: Pre-design competitive and market research for a business's website or marketing material. Researches the industry, identifies direct/indirect competitors, opens their sites, extracts design systems (type, color, layout, copy), infers why they made those design decisions, finds shared category conventions, what competitors miss or get wrong, unmet customer gaps, and recommends positioning, design direction and marketing strategy. Use before designing or building any website, landing page, brand or marketing collateral, or when asked for "competitor research", "design research", "market analysis", "design strategy", or "what should our site do differently".
---

# Design Strategy Research

Goal: before anything is designed, produce an evidence-backed brief that says **what the category looks like, what is missing, and where we win**. Every claim cites a source (URL, screenshot, extracted value). Distinguish **observed** (seen on the site) from **inferred** (your reasoning about why). Never invent competitor facts; if a page couldn't be loaded, say so.

## Tools (any agent)
Needs: web search, a page fetcher, a headless browser (Playwright via `scripts/capture.js`, or your own browser tool), file read/write and the ability to view images. Tool names below are generic; use your agent's equivalents. If something is missing, do that step manually with what you have and flag the gap in the report.

## Inputs (ask only for what's missing, default the rest)
- Business: name, what it sells, to whom, location/market, price tier, existing site/brand assets.
- Known competitors (optional) and admired sites (optional).
- Deliverable being designed (site, landing page, deck, social, print).
- Constraints: budget, timeline, tech stack, must-keep brand elements.

If the business is vague, ask at most 3 questions, then proceed with stated assumptions.

## Working directory
Create `research/<business-slug>/` with: `competitors/<name>/` (screenshots + tokens.json), `notes.md` (running log with source URLs), `report.md` (final). Save as you go so work survives interruptions.

## Workflow

### 1. Frame the business
One paragraph: offering, target customer(s), their job-to-be-done, buying trigger, purchase risk (what makes them hesitate), primary conversion goal (call, book, buy, lead). This drives every judgement later.

### 2. Map the landscape (WebSearch)
Search the way a customer would, not the way the business describes itself: "best X in <city>", "X alternatives", "X vs Y", "<problem> solution", plus page-1 results, ads, directories, review sites (G2, Trustpilot, Google Maps, Yelp as relevant), Reddit/forums, and Awwwards/Behance/Dribbble for category design.
Build a list of 8-15 candidates and sort into:
- **Direct** (same offer, same customer) – pick 4-6 to analyze deeply.
- **Indirect/substitute** (different solution, same problem) – pick 2-3.
- **Aspirational/adjacent** (best-in-class in any space that shares the customer or interaction pattern) – pick 2-3.
Record why each was chosen and their apparent size/maturity (solo, local, funded, enterprise). Also note who the people behind them are (founders, positioning, public talks/interviews) where it informs strategy.

### 3. Capture each site
For each selected competitor, run the capture script (Playwright is preinstalled; don't reinstall):

```bash
node scripts/capture.js https://example.com research/<slug>/competitors/<name>
```

It saves desktop and mobile screenshots (fold + full page) and `tokens.json` (fonts, type sizes, colors, radii, shadows, CSS variables, CTAs, nav labels, headings). Then **look at the screenshots** (open the PNGs with your image-viewing tool) and use WebFetch/WebSearch for the pages the script can't see: pricing, about, key service/product page, a conversion flow, blog/resources, reviews. If a site blocks automation, use screenshots from search results/archive.org or fall back to WebFetch text, and flag the gap.

### 3b. Gather UI/UX inspiration
Read `references/inspiration-sources.md` and collect references from Land-book, Refero, Cosmos, Details and Spotted in Prod for the page types and flows being designed (hero, pricing, onboarding, checkout, etc.), including one adjacent industry. Log each with the output table there. Treat as inspiration for principles, not templates to copy.

### 4. Profile each competitor (use the template below)
Fill one profile per site in `notes.md`:

| Area | What to record |
|---|---|
| Positioning | Headline, subhead, value prop, who it's addressed to, tone of voice, proof claims |
| Information architecture | Nav items, page count, primary CTA and where it repeats, conversion path steps |
| Visual system | Typefaces + roles, scale, palette (hex, with role: brand/accent/surface/text), spacing density, radius/shadow style, imagery type (photo/illustration/3D/UI), iconography, motion |
| Layout | Hero pattern, section order, grid, use of whitespace, mobile adaptation |
| Trust & proof | Logos, testimonials, reviews, certifications, numbers, guarantees, team/people |
| Conversion mechanics | CTA wording, forms length, pricing transparency, friction, urgency, chat/booking |
| Content & SEO signals | Title/meta, heading structure, blog/resources, local/entity signals |
| Performance & accessibility (quick) | Load feel, contrast problems, tap targets, alt text, obvious breakage |
| Marketing footprint | Channels visible (social, ads, email capture, partnerships, reviews), cadence, standout campaigns |

### 5. Infer the "why" behind decisions
For each competitor, for each major decision (palette, type, hero, density, CTA, imagery), write: **Decision → likely intent → target audience signal → evidence → confidence (high/med/low)**. Ask: what audience, price point, or trust problem does this choice solve? What would they have been reacting to? Example: "Serif display + muted earth palette + sparse copy → signals premium/craft to higher-income buyers; evidence: pricing hidden, 'by appointment' CTA; confidence med."

### 6. Cross-competitor synthesis
Build comparison tables across all sites, then answer:
1. **Category conventions** – what >60% share (palette family, hero pattern, nav, imagery, claims). These are what customers expect; breaking them has a cost.
2. **Table stakes** – what you must include to be credible.
3. **Saturated clichés** – what is so common it no longer differentiates (stock imagery, identical taglines, same blue).
4. **What they miss** – absent trust proof, unclear pricing, poor mobile, no clear next step, thin content, inaccessible, ignored audience segments.
5. **What they get wrong** – friction, confusing copy, misleading visuals, contrast failures, slow pages. Cite evidence.
6. **What they do brilliantly** – patterns worth adopting/adapting, and why they work.
7. **Whitespace** – unoccupied positions on a 2x2 (e.g., price vs. personality, expert vs. friendly), unused colors/tones, unserved audience segments.

### 7. Customer gap analysis
Mine reviews, Reddit/forum threads, Q&A, 1-3 star reviews of competitors, and "alternatives" searches. Extract recurring complaints, unmet needs, unanswered questions, jobs-to-be-done, objections, and language customers actually use (verbatim phrases). Map each gap to: **who feels it → which competitors fail it → can the business credibly serve it → how the site/marketing would show it.** Rank by (frequency x severity x credibility x ease).

### 8. Recommendations
- **Positioning**: a one-sentence position and 2-3 differentiators we can truthfully own; the line we should be known for.
- **Design direction**: what to follow (convention worth keeping for credibility), what to break deliberately, and why. Give concrete starting values: type pairing and scale, palette with roles and contrast check, layout/hero concept, imagery direction, tone of voice, motion level. Flag anything that is an inference rather than a requirement.
- **Site/content structure**: page list, section order for the key pages, primary CTA and conversion path, proof placement, must-have content that competitors lack.
- **Marketing strategy**: best-fit channels (with rationale from where competitors and customers are), messaging pillars per audience segment, content/SEO opportunities (keywords/questions competitors don't answer), trust-building plays, offers/lead magnets, launch sequence, KPIs.
- **Risks & open questions**: what could invalidate the analysis, what needs user research or client input.
- **Prioritized next steps**: quick wins vs. build items.

### 9. Report
Deliver the strategy as **one self-contained HTML file**: `research/<slug>/strategy.html` (inline CSS, inline SVG, local screenshots embedded or linked; opens in any browser, works offline, no build step). Read `references/report-design.md` first, start from `assets/template.html`, and follow it for design, illustrations and writing style.
- Design the document for its reader and domain (a law firm gets a different look than a skate brand). Pick a look from the table in `report-design.md`; don't ship the template's default styling unchanged.
- Use illustrations and visuals, not walls of text: positioning map, comparison tables, palette swatches, type specimens, screenshot cards, gap-ranking bars, a roadmap.
- Write in plain language (see the writing rules in `report-design.md`).
- Check it before delivering: open it with a headless browser at 1440px and 390px wide, view the screenshots, fix overflow, contrast and empty sections.
- Other formats only if asked or if the agent has the tool: publish the HTML as a shareable page (e.g. an Artifact), or export Word/PDF (Claude Docs / docx skill / print-to-PDF from the browser).
- End the chat reply with a short summary and the file path or link, never the whole report.

Report contents:
1. Executive summary (position, 5 key findings, top recommendations) – half a page.
2. Business frame & assumptions.
3. Competitor set and selection rationale; inspiration board (references table).
4. Comparison matrix (positioning, visuals, conversion, trust) with screenshots linked.
5. Per-competitor profiles with "why" inferences.
6. Synthesis (conventions, misses, mistakes, strengths, whitespace).
7. Customer gaps (ranked).
8. Recommendations (positioning, design, content, marketing, next steps).
9. Appendix: source list, extracted tokens, limitations (pages not loaded, stale data, small sample).

## Quality rules
- Cite a URL or file for every competitor claim; date the research.
- Sample size honesty: say how many sites were reviewed and what was not.
- Separate fact, inference and opinion; give confidence on inferences.
- Look at actual screenshots, not just tokens; computed styles show only what rendered.
- Don't copy competitor assets or wording; extract principles.
- Recommendations must trace back to a finding; delete any that don't.
- Check recommended color pairs for WCAG AA contrast before proposing them.
- Respect robots/terms; only view public pages, never log in or submit forms on competitor sites.
- Keep the report scannable: visuals, tables and short bullets over prose; simple words, no jargon without a one-line explanation.
