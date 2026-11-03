# Define139 Training & Fitness — website

Source for define139.com, moving from Webflow into GoHighLevel (Define139 sub-account `tUuiYsfY6o3C9cIKnKiN`, Sites → Websites → **Define139**, website ID `upyVbvobrER5gNF14mna`). Same setup as accreditedinterchange.com and mylaunchpartner.ai: each GHL page holds one Custom Code element, and everything else loads from this repo through GitHub Pages. **Make changes here, not in GHL.**

## How it works

Each page's custom-code embed contains only:

```html
<div id="d139-root" data-page="PAGE-NAME"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

`loader.js` is a tiny stub that loads `core.js` with a cache key that changes every minute. `core.js` fetches `pages/<data-page>.html`, swaps `{{ASSETS}}` for this repo's `assets/` folder, puts the page in place, runs its scripts, and strips GHL's section/row padding so the page runs edge to edge.

## Pages

Every page that was code-only in Webflow is here. Pages that needed several Webflow embeds (Webflow caps each embed's length) are merged into one file; there is no length limit here.

| Live URL | `data-page` / file | Webflow embeds merged | GHL page ID |
|---|---|---|---|
| `/` | `home` | 1 | 8ee9rCy2O9LkYumlq4ac |
| `/womens-strength-studio` | `womens-strength-studio` | 2 | 2ifjIGXTszCfhUKDx9SV |
| `/metabolic-mapping-online-programs` | `metabolic-mapping-online-programs` | 2 | rhdxe6EjZ69a3fapJt3Q |
| `/privacy-policy` | `privacy-policy` | 1 | lEVmmH6HP1ms3VtgOuce |
| `/terms-of-service` | `terms-of-service` | 1 | oZxbYLmSjsa2fbAxwXvK |
| `/glp-1-strength-sculpt` | `glp-1-strength-sculpt` | 4 | fCMfSC27nIDAOFqdG2pD |
| `/glp-1-interest-confirmation` | `glp-1-interest-confirmation` | 1 | XzlRtVYGvnu5iUminhCA |
| `/request-more-info` | `request-more-info` | 1 | D97MpX9uKKKfMxdpc5op |
| `/request-info-confirmation` | `request-info-confirmation` | 1 | o3JdMavCNa7A3vnZVAn7 |
| `/free-threshold-focus-ebook-download` | `free-threshold-focus-ebook-download` | 1 | R6PLuv3djqu4JUp1vy3a |
| `/check-your-inbox-for-your-free-threshold-focus-ebook` | `check-your-inbox-for-your-free-threshold-focus-ebook` | 1 | bLEURIKZGFaU4MH33FTf |

Pages built with the Webflow designer (not code) are not in this repo yet.

`/privacy-policy` and `/terms-of-service` must keep these exact paths. The toll-free SMS registration points reviewers to them.

Page titles and meta descriptions are set in GHL (builder → SEO & AI search optimization), not in these files.

## GHL setup (one time per page)

All 11 pages are built (Nov 3, 2026). For a new page: Section → 1-column Row → **Code** element → Open Code Editor → paste the snippet **on one line** (the GHL code editor drops the code on save if it contains a line break) → Save → SEO & AI search optimization → title/description → save the page.

Preview a GHL page before the domain points to it: `https://sites.leadconnectorhq.com/preview/<GHL page ID>?notrack=true`

The loader also clears GHL's fixed white page-background layer (`.bgCover`) so each page's own background shows, as it did in Webflow.

## GHL snippets and SEO

SEO titles and descriptions are copied from the live Webflow pages.

### `/`

- **SEO title:** Define139 | Strength Studio & Online Fat Loss Programs
- **SEO description:** Define139 is a women's strength studio and online fat loss coaching program designed to restore your metabolism and renew your spirit. No fads—just sustainable results rooted in science, strength, and Scripture.

```html
<div id="d139-root" data-page="home"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/womens-strength-studio`

- **SEO title:** Define139 | Women's Strength Studio
- **SEO description:** Join Define139 Women's Strength Studio for women-only strength training, personal coaching, and a supportive community built for lasting results.

```html
<div id="d139-root" data-page="womens-strength-studio"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/metabolic-mapping-online-programs`

- **SEO title:** Define139 | Metabolic Mapping Online Programs
- **SEO description:** Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.

```html
<div id="d139-root" data-page="metabolic-mapping-online-programs"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/privacy-policy`

- **SEO title:** Privacy Policy
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="privacy-policy"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/terms-of-service`

- **SEO title:** Terms of Service
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="terms-of-service"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/glp-1-strength-sculpt`

- **SEO title:** GLP-1 Strength & Sculpt | Define139 Training & Fitness
- **SEO description:** A 6-month small-group strength program for people on a GLP-1. Two coached sessions a week, six people max. Starts the week of Oct 26 in Bluefield, WV.

```html
<div id="d139-root" data-page="glp-1-strength-sculpt"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/glp-1-interest-confirmation`

- **SEO title:** GLP-1 Interest Confirmation
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="glp-1-interest-confirmation"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/request-more-info`

- **SEO title:** Request More Info
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="request-more-info"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/request-info-confirmation`

- **SEO title:** Request Info Confirmation
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="request-info-confirmation"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/free-threshold-focus-ebook-download`

- **SEO title:** FREE Threshold Focus eBook | Download
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="free-threshold-focus-ebook-download"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

### `/check-your-inbox-for-your-free-threshold-focus-ebook`

- **SEO title:** Check Your Inbox for your FREE Threshold Focus eBook
- **SEO description:** _(none set in Webflow — add one)_

```html
<div id="d139-root" data-page="check-your-inbox-for-your-free-threshold-focus-ebook"></div>
<script src="https://mylaunchpartner.github.io/define139/loader.js"></script>
```

## Making a change

1. Edit the page file in `pages/` and commit to `main`.
2. GitHub Pages republishes in about a minute. Visitors see it within about 10 minutes, depending on cache.

## Preview without GHL

`https://mylaunchpartner.github.io/define139/?page=metabolic-mapping-online-programs`

## Assets

Images live in `assets/` so nothing depends on Webflow once its site plan ends. Page files reference them as `{{ASSETS}}file.jpg`. Photos were resized (staff 900px wide, hero 2400px) and saved as JPG.

## `source/webflow/`

The embed code as it was in Webflow (pulled from the live pages on Nov 3, 2026, 09:30 MST, UTC-07:00), kept for reference. Not loaded by the site. Differences in `pages/`: images point to `assets/`, embeds are merged, the Metabolic Mapping duplicate wrapper `<div>` is removed, and the homepage includes its page-level popup code. `request-more-info` includes its page-level head script that hides the homepage popup after a visitor has requested info.

## Notes

- This repo is public (needed for free GitHub Pages). Never commit passwords, API keys or private notes.
- The GHL editor canvas doesn't run scripts. Use **Preview** to see pages.
