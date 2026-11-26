# Agensi listing copy: design-strategy-research

**Title:** Design Strategy Research: competitors, design gaps and positioning before you build

**One-line description:** Researches your market (local, regional and global competitors), pulls their design systems, explains why they designed it that way, finds the gaps, and delivers a plain-language HTML strategy document.

**Category / tags (suggested):** design, research, marketing, web design, competitor analysis, branding

**Works with:** any agent that reads SKILL.md and has web search, a page fetcher and a headless browser (tested in Claude Code only).

## What it does
1. Confirms the business's home market, then maps competitors in three tiers: local, regional, global (plus substitutes).
2. Captures each site with desktop and mobile screenshots and extracted design tokens (fonts, colours, type scale, radii, shadows, CTAs).
3. Profiles positioning, structure, visuals, trust signals and conversion paths.
4. Infers why each design decision was made, with a confidence level.
5. Compares everything to find shared conventions, what competitors miss or get wrong, and unmet customer gaps.
6. Gathers UI/UX inspiration (Land-book, Refero, Cosmos, Details, Spotted in Prod) where reachable.
7. Recommends positioning, design direction, site structure and a 90-day marketing plan.
8. Delivers one self-contained, mobile-friendly HTML document styled to fit the business's domain, in simple language.

## Needs
- Web search and page fetching
- Node.js with Playwright (for screenshots and design tokens), or the agent's own browser tool
- Network access to the sites being researched

## Honest limits
- Sites behind logins, paywalls or bot checks are not bypassed; the report says what could not be checked.
- Customer-voice evidence depends on public reviews and forums; it does not replace interviews.
- Tested on one business (treated pole sales, Zimbabwe) with one agent.

## Suggested price
Free to start while it has one test run behind it, or a low price band for focused single-purpose skills. Decide in the Agensi dashboard.

## Package
`design-strategy-research.zip` (folder `design-strategy-research/` with `SKILL.md`, `scripts/`, `references/`, `assets/`; 36 KB).
