<p align="center"><img src="listing/logo.png" alt="design-strategy logo" width="120"></p>

# design-strategy

Created by apxmedia.

**Research a business's competitors before you design its site.** Finds local, regional and global competitors, extracts their design systems, spots what the category misses, and recommends positioning, design direction and a 90-day marketing plan, delivered as one plain-language HTML strategy report (Word/PDF on request). Includes UI/UX inspiration from Land-book, Refero, Cosmos, Details and Spotted in Prod, and bundles [Crawl4AI](https://github.com/unclecode/crawl4ai) to crawl competitor sites to markdown and screenshots.

## Contents
- `skills/design-strategy-research/SKILL.md` — the 9-step research workflow
- `skills/crawl4ai/SKILL.md` — standalone skill: crawl pages/sites to markdown, structured JSON or screenshots with the `crwl` CLI (same content as `references/crawl4ai.md` inside the research skill, for agents that load one skill only)
- `skills/design-strategy-research/references/crawl4ai.md` — how the research workflow uses Crawl4AI
- `skills/design-strategy-research/scripts/capture.js` — Playwright capture (screenshots + design tokens) for a URL
- `skills/design-strategy-research/references/report-design.md` — how to design and write the HTML report
- `skills/design-strategy-research/assets/template.html` — starter HTML report
- `AGENTS.md` — pointer for non-Claude agents
- `skills/design-strategy-research/references/inspiration-sources.md` — how to use the inspiration sites

## Requirements
Node.js and Playwright for `capture.js`. Crawl4AI is optional: the first use runs `pip install crawl4ai` and downloads Chromium (Python 3.10+, network access). Crawl4AI is Apache-2.0 licensed and is not bundled, only called.

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
