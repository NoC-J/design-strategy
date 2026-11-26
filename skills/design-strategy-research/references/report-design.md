# Designing the strategy document

## 1. Pick a look that fits the reader
| Domain | Feel | Type | Colour | Layout |
|---|---|---|---|---|
| Law, finance, consulting | Calm, trusted | Serif headings, clean sans body | Navy, stone, one muted accent | Narrow column, generous space, thin rules |
| Health, wellness | Warm, safe | Rounded sans | Soft greens/blues, warm white | Big cards, friendly icons |
| Tech, SaaS | Sharp, modern | Geometric sans, mono for data | Dark or white + one vivid accent | Bento grid, data-heavy |
| Creative, fashion, food | Expressive | Display serif or bold grotesk | Brand-adjacent, high contrast | Large type, asymmetric, big images |
| Trades, local services | Plain, reliable | Sturdy sans | Primary colour + neutral | Simple blocks, big numbers |
| Kids, education | Playful | Rounded, large | Bright, limited palette | Chunky shapes, illustrations |
Derive the actual palette/type from the research (the recommended direction), so the document previews the strategy. State the choice in one line in the appendix.

## 2. Structure (in this order)
1. **Hero**: business, date, one-sentence answer ("Position yourself as ...").
2. **At a glance**: 4-6 cards: the position, top 3 findings, top 3 actions.
3. **How to read this** (2 lines) + sticky mini nav.
4. **The business and customer**: a persona card + "what stops them buying" list.
5. **The landscape**: competitor cards (screenshot, one-line verdict, strength, weakness).
6. **Side-by-side table**: sticky header; ticks/dots, not paragraphs.
7. **Why they designed it that way**: for each decision, a row: *What they did → Why (our guess) → How sure*, with a confidence pill.
8. **What everyone does** (conventions), **what nobody does** (whitespace), **what they get wrong** (with evidence).
9. **Positioning map**: 2x2 SVG, competitors as dots, our target as a highlighted dot.
10. **Gaps customers feel**: ranked horizontal bars (frequency x pain) with real customer quotes.
11. **Inspiration board**: reference cards (source, screenshot link, what to borrow).
12. **Our direction**: palette swatches with hex + contrast ratio, type specimen, layout sketch (simple SVG wireframe of hero/section order), tone-of-voice do/don't.
13. **Marketing plan**: channels table, message pillars, first 30/60/90 days roadmap (SVG timeline or columns).
14. **Risks and open questions**, **Next steps** checklist.
15. **Sources and limits**.

## 3. Visual components (all inline, no libraries)
- Cards, pills (confidence: high green / medium amber / low grey), callout boxes ("So what?").
- Tables with zebra rows, sticky header, `overflow-x:auto` wrapper on mobile.
- Inline SVG: positioning map, bar charts, timeline, wireframe sketches, simple icons. Label everything directly; no legend lookup. Include `<title>` for accessibility.
- Colour swatches as styled divs; type specimens set in the recommended fonts (system fallback if not installed).
- Screenshots as `<img>` with alt text and caption; max-width 100%.
- One idea per section; a heading that states the takeaway ("Nobody shows prices") rather than a label ("Pricing").

## 4. Technical rules
- One `.html` file, `<meta viewport>`, CSS variables for colours/type, light and dark via `prefers-color-scheme`.
- Responsive from 360px; body text 16-18px, line length 60-75 characters, contrast AA.
- Semantic HTML (header/main/section/table/figure), alt text, no colour-only meaning, keyboard-reachable nav.
- No external scripts. At most one web-font import, with a system-font fallback; the document must still read well offline.
- Print-friendly: `@media print` hides nav, avoids breaking cards.

## 5. Writing rules (simple, not shallow)
- Short sentences. Everyday words ("use" not "leverage"). Explain any needed term in a few words the first time.
- Lead with the answer, then the evidence. Numbers and examples beat adjectives.
- Keep the substance: every finding keeps its *what we saw, why it matters, what to do*. Cut filler, never meaning.
- Label guesses as guesses ("We think ... because ...").
- Quotes from customers verbatim, with source link.
- Aim for a reader who has never done design research and has 10 minutes: the At a glance section must stand alone.
