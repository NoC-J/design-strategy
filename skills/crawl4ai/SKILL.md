---
name: crawl4ai
description: Use when the user wants to crawl, scrape or extract content from a web page or whole site, take a screenshot of a URL or website, convert a URL to markdown, pull structured data (prices, listings, articles) from pages, crawl JS-rendered or login-protected sites, or says "crawl4ai", "crwl", "scrape this site", "get this page as markdown", "deep crawl".
---

# Crawl4AI

Drive the `crwl` command-line tool from the Crawl4AI library. Prefer it over WebFetch when a page needs JavaScript rendering, when many pages must be crawled, or when structured extraction is needed.

## 1. Check setup first (once per session)

```bash
export CRAWL4AI_NO_CLOUD_NOTICE=1   # hides the promo banner that pollutes output
command -v crwl || pip install --break-system-packages crawl4ai
crwl --help >/dev/null && python -m playwright install chromium 2>&1 | tail -1
```

If `playwright install` or a crawl fails with a network/download error, the environment blocks the browser download or the target site. Say so plainly and stop; do not retry other ways.

## 2. Common commands

| Goal | Command |
|---|---|
| Page to markdown | `crwl crawl URL -o markdown` |
| Pruned "fit" markdown (less boilerplate) | `crwl crawl URL -o markdown-fit` |
| Full result as JSON (links, media, metadata) | `crwl crawl URL -o all` |
| Save to a file | add `-O out.md` |
| Only part of a page | `-c "css_selector=#main"` |
| Wait for lazy content | `-c "wait_for=css:.item,scan_full_page=true"` |
| Ask a question about the page (needs LLM key) | `-q "question"` |
| Multi-page crawl | `--deep-crawl bfs --max-pages 20` (also `dfs`, `best-first`) |
| Structured data via CSS schema (no LLM) | `-e extract.yml -s schema.json -o json` |
| Structured data via LLM | `-j "what to extract"` (needs a provider key; run `crwl config list`) |
| Screenshot | see section 3 |
| Logged-in sites | user creates a profile with `crwl profiles`, then `-p NAME` |

Browser options: `-b "headless=true,viewport_width=1280"`. Crawler options: `-c "key=value,..."`. Run `crwl examples` for config-file samples.

## 3. Screenshots

The CLI returns screenshots as base64 inside the JSON result; save it, then decode:

```bash
crwl crawl URL -c "screenshot=true,screenshot_wait_for=2" -o all -O shot.json
python3 -I -c "import json,base64;d=json.load(open('shot.json'));open('shot.png','wb').write(base64.b64decode(d['screenshot']))"
```

- Full page is the default; add `force_viewport_screenshot=true` for just the visible viewport.
- Size/mobile view: `-b "viewport_width=390,viewport_height=844"`. Sharper image: `device_scale_factor=2`.
- `screenshot_wait_for=N` waits N seconds first (lazy images, animations).
- Send the PNG to the user with the file-sharing tool, and view it yourself before claiming it looks right. Several URLs: loop the two commands per URL with distinct filenames.
- If the image is blank or shows a cookie wall/bot block, say so rather than delivering it as success.

## 4. Rules

- Always write large results to a file (`-O`) and read only the needed part; never dump whole sites into the conversation.
- Caching is bypassed by default; pass `-c "cache_mode=enabled"` to reuse earlier results.
- For deep crawls start small (`--max-pages 5`), check the output, then scale.
- Respect the site: check robots/terms for bulk crawling, keep page counts reasonable, and never use `-p` profiles or credentials the user has not explicitly provided for this task.
- Report failures as they are (status codes, blocked pages); do not present empty output as a successful crawl.
- For the full Python API (`AsyncWebCrawler`, `CrawlerRunConfig`, extraction strategies), see https://docs.crawl4ai.com and write a script only when the CLI is not enough.
