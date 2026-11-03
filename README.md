# Define139 Training & Fitness — website

Source for define139.com, moving from Webflow into GoHighLevel (Define139 sub-account `tUuiYsfY6o3C9cIKnKiN`). Same setup as accreditedinterchange.com and mylaunchpartner.ai: each GHL page holds one Custom Code element, and everything else loads from this repo through GitHub Pages. **Make changes here, not in GHL.**

## How it works

Each page's custom-code embed contains only:

```html
<div id="d139-root" data-page="PAGE-NAME"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

`loader.js` is a tiny stub that loads `core.js` with a cache key that changes every minute. `core.js` fetches `pages/<data-page>.html`, swaps `{{ASSETS}}` for this repo's `assets/` folder, puts the page in place, runs its scripts, and strips GHL's section/row padding so the page runs edge to edge.

## Pages

| Live URL | `data-page` | File | Source | Status |
|---|---|---|---|---|
| `/metabolic-mapping-online-programs` | `metabolic-mapping-online-programs` | `pages/metabolic-mapping-online-programs.html` | Webflow embeds 1 + 2 | Converted |
| `/` | — | — | Webflow | Not started |
| `/womens-strength-studio` | — | — | Webflow | Not started |
| `/privacy-policy` | — | — | Webflow | Not started |
| `/terms-of-service` | — | — | Webflow | Not started |

`/privacy-policy` and `/terms-of-service` must keep these exact paths. The toll-free SMS registration points reviewers to them.

Page titles and meta descriptions are set in GHL (builder → SEO & AI search optimization), not in these files.

## GHL setup (one time per page)

Full-width Section, padding 0 → 1-column Row → **Custom JS/HTML** element → paste that page's snippet. Set the live URL in Websites → Pages → ⋮ → Settings → Path.

## Making a change

1. Edit the page file in `pages/` and commit to `main`.
2. GitHub Pages republishes in about a minute. Visitors see it within about 10 minutes, depending on cache.

## Preview without GHL

`https://mylaunchpartner.github.io/define139/?page=metabolic-mapping-online-programs`

## Assets

Images live in `assets/` so nothing depends on Webflow once its site plan ends. Page files reference them as `{{ASSETS}}file.jpg`. Photos were resized (staff 900px wide, hero 2400px) and saved as JPG.

## `source/webflow/`

The embeds exactly as they were in Webflow, kept for reference. Not loaded by the site.

## Notes

- This repo is public (needed for free GitHub Pages). Never commit passwords, API keys or private notes.
- The GHL editor canvas doesn't run scripts. Use **Preview** to see pages.
