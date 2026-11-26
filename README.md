# design-strategy

Claude plugin for pre-design research: competitor analysis, design-system extraction, gap finding, positioning and marketing strategy, with UI/UX inspiration from Land-book, Refero, Cosmos, Details and Spotted in Prod. Outputs a well-designed, plain-language HTML strategy document (Word/PDF on request).

## Contents
- `skills/design-strategy-research/SKILL.md` — the 9-step research workflow
- `skills/design-strategy-research/scripts/capture.js` — Playwright capture (screenshots + design tokens) for a URL
- `skills/design-strategy-research/references/report-design.md` — how to design and write the HTML report
- `skills/design-strategy-research/assets/template.html` — starter HTML report
- `AGENTS.md` — pointer for non-Claude agents
- `skills/design-strategy-research/references/inspiration-sources.md` — how to use the inspiration sites

## Use
Install the plugin, then ask: "Research the design strategy for <business> before we build the site."

## Examples
Three finished reports, made by running the skill. Open each `strategy.html` in a browser.

| Example | Market | Look chosen |
|---|---|---|
| [Treated pole sales](examples/treated-poles-zimbabwe/strategy.html) | Zimbabwe (local), South Africa (regional), US (global) | Plain, sturdy trades look in earth tones |
| [Independent skincare brand](examples/skincare-uk/strategy.html) | UK (local), Europe (regional), global | Warm oat and plum, soft serif |
| [Small accountancy practice](examples/accountancy-uk/strategy.html) | UK (local), Europe (regional), US (global) | Calm, trusted teal and paper, narrow column |

Each states what it could not check (bot checks, blocked pages, search-only evidence). Competitor screenshots are embedded for study only.
