# Inspiration sources (UI / UX / visual)

Used in SKILL.md step 3b. Goal: collect 8-15 references that show how the best products solve the same *patterns* (hero, pricing, onboarding, checkout, dashboards), not just the same industry. Record for each: URL, what it shows, why it works, what to borrow as a principle.

| Source | Best for | How to access |
|---|---|---|
| Land-book (land-book.com) | Landing page layouts, hero/section patterns, category galleries | Public gallery; browse by category/style/color, or search `site:land-book.com <keyword>` |
| Refero (refero.design) | Real product UI screens and user flows (onboarding, pricing, settings, checkout) | Searchable library; free tier is limited, full access needs the user's login |
| Cosmos (cosmos.so) | Mood boards, visual/brand/art direction, imagery and type references | Search and public clusters; much needs an account |
| Details (details.so) | Small UI craft: micro-interactions, components, polish | Public pages where available |
| Spotted in Prod (spottedinprod.com) | Design seen in shipped products by respected teams; what leading products actually do | Public pages; search `site:spottedinprod.com <topic>` |

## Access rules
1. Try in this order: a connected MCP/connector for the source if one exists (check ToolSearch/ListConnectors/SearchMcpRegistry for "refero", "cosmos", "land-book") -> WebFetch on public pages -> WebSearch with `site:<domain> <keyword>` -> Playwright screenshots (`scripts/capture.js`) of the gallery or a specific entry.
2. Logged-in content: only through the user's own browser session (Claude in Chrome or the built-in browser), with the user's approval. Never ask for passwords or work around paywalls or login walls; if blocked, say what was unavailable.
3. Respect each site's terms. Do not bulk-scrape or redistribute images. Reference by link and screenshot for internal analysis only; the report cites the URL.
4. These sites change; if a URL or search pattern fails, search the web for the current one and note it.

## Query recipes
- Pattern: "<pattern> <industry>" (e.g. "pricing page SaaS", "booking flow dental").
- Style: mood words from the brief (editorial, brutalist, warm, premium) + category.
- Flow: "onboarding", "checkout", "empty state", "settings" for Refero/Spotted in Prod.
- Always also search one adjacent industry with the same customer behaviour.

## Output per reference
`| Source | URL | Pattern | What it does | Why it works (inferred) | Borrow / avoid |`
Then synthesize: recurring patterns across references, how they compare to the direct competitors, and which 3-5 ideas feed the design direction.
