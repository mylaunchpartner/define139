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

### Added Nov 10, 2026 (MST, UTC-07:00)

The rest of the Webflow site. Every published Webflow page is now in this repo; only the unpublished draft `/online-store` was left out.

| Live URL | `data-page` / file | Source | GHL page ID |
|---|---|---|---|
| `/gym-membership-selection` | `gym-membership-selection` | code (as-is) | _(not built yet)_ |
| `/online-membership-selection` | `online-membership-selection` | code (as-is) | _(not built yet)_ |
| `/great-eight-scholarship` | `great-eight-scholarship` | code (as-is) | _(not built yet)_ |
| `/metabolic-mapping` | `metabolic-mapping` | designer (rebuilt) | _(not built yet)_ |
| `/24-7-womens-strength-studio` | `24-7-womens-strength-studio` | designer (rebuilt) | _(not built yet)_ |
| `/define139-the-slowing-of-the-metabolism` | `define139-the-slowing-of-the-metabolism` | designer (rebuilt) | _(not built yet)_ |
| `/define139-summer-sculpt` | `define139-summer-sculpt` | designer (rebuilt) | _(not built yet)_ |
| `/the-cortisol-connection` | `the-cortisol-connection` | designer (rebuilt) | _(not built yet)_ |
| `/7-day-tracker` | `7-day-tracker` | designer (rebuilt) | _(not built yet)_ |
| `/define139-free-fb-group-fat-loss-faith-for-busy-christian-women` | `define139-free-fb-group-fat-loss-faith-for-busy-christian-women` | designer (rebuilt) | _(not built yet)_ |
| `/macro-calculator-define139` | `macro-calculator-define139` | designer (rebuilt) | _(not built yet)_ |
| `/class-pass-purchased` | `class-pass-purchased` | designer (rebuilt) | _(not built yet)_ |
| `/class-pass` | `class-pass` | designer (rebuilt) | _(not built yet)_ |
| `/metabolism-reset-guide-download` | `metabolism-reset-guide-download` | designer (rebuilt) | _(not built yet)_ |
| `/check-your-inbox` | `check-your-inbox` | new | _(not built yet)_ |
| 404 page | `404` | designer (rebuilt) | _(set as the site's 404 page in GHL)_ |

### Designer-built pages

Pages that were built in the Webflow designer (not code embeds) were rebuilt from their published HTML:

- `webflow/site.css` is Webflow's stylesheet, scoped under `.d139-wf` so it can't restyle anything else on the GHL page. Fonts and background images it uses are in `assets/wf/`.
- `webflow/wf-lite.js` replaces the parts of Webflow's script those pages used: the mobile menu, FAQ accordions, pricing tabs, testimonial sliders and video popups. Scroll and hover animations were dropped, so content simply shows.
- Page files load both with `{{BASE}}` (repo root), e.g. `{{BASE}}webflow/site.css`.
- Webflow forms were replaced with GHL form embeds inside `.d139-form-slot` elements. The footer "Send a message" form on these pages is the **Default Contact Capture Form** (same registered SMS opt-in as `/request-more-info`). The four free-guide pages use their own GHL forms (`Slowing Metabolism eBook`, `Cortisol Connection eBook`, `7-Day Reset Tracker`, `Metabolism Reset Guide` – Guide Request), copied from the Threshold Focus form; all four redirect to `/check-your-inbox`.
- Rendering was checked against the live Webflow pages at desktop and phone widths. The Webflow lander pages scrolled sideways on phones; the rebuilt ones don't.

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

## GHL snippets for the pages added Nov 10

Same one-line snippet as above with each page's `data-page`. SEO titles and descriptions copied from Webflow:

- `/gym-membership-selection` — **Define139 | Gym Membership Selection** — Choose your membership. Find the program that fits your goals, schedule, and lifestyle.
- `/online-membership-selection` — **Define139 | Online Membership Selection** — Work with a Define139 coach from anywhere in the world. Science-backed nutrition, personalized training, and real accountability — delivered completely online. Every membership includes access to our coaching team and the Define139 app.
- `/great-eight-scholarship` — **The Great Eight Scholarship | Define139 Training and Fitness** — Win 8 months of personalized weight-loss coaching — completely free. I’m celebrating Define139’s 8th anniversary by giving one woman everything I have to offer. Enter in five minutes.
- `/metabolic-mapping` — **Define139 | Metabolic Mapping** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/24-7-womens-strength-studio` — **Define139 | 24/7 Women's Strength Studio** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/define139-the-slowing-of-the-metabolism` — **Define139 | The Slowing of The Metabolism** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/define139-summer-sculpt` — **Define139 | Sculpted Summer Program** — This digital guide includes weekly strength workouts with video links, high-protein meal plans, mindset coaching videos, Scripture-based devotionals, journal prompts, and habit trackers—all in one beautifully structured PDF. No more guessing. Just sustainable fat loss with grace, purpose, and a plan that works.
- `/the-cortisol-connection` — **Define139 | The Cortisol Connection** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/7-day-tracker` — **Define139 | 7-Day Faith-Based Reset Tracker** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/define139-free-fb-group-fat-loss-faith-for-busy-christian-women` — **Define139 | Free FB Group Fat Loss & Faith For Busy Christian Women** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/macro-calculator-define139` — **Macro Calculator | Define139** — Restore your metabolism, renew your energy, and rebuild your strength—without fads or extremes. Metabolic Mapping is a faith-based, science-backed coaching program designed to help women 35–65 achieve sustainable fat loss and vibrant health.
- `/class-pass-purchased` — **Class Pass Purchased! | Define139** — Thank you for your purchase of the class pass at Define139 Women's Strength Studio!
- `/class-pass` — **Get Your Class Pass | Define139** — New Group Classes have been added at Define139 Women's Strength Studio! Tuesdays and Thursdays at 5:30 pm, Saturdays at 9 am. A mix of Pilates, Move Well, and Move & Groove classes! Special pricing for members. 8-week class pass program.
- `/metabolism-reset-guide-download` — **Metabolism Reset Guide | Define139 Training & Fitness** — Download your FREE guide here to looking and feeling your best at any age!
- `/404` — **Not Found** — _(no description in Webflow; add one)_
- `/check-your-inbox` — **Check Your Inbox | Define139** — _(no description in Webflow; add one)_

Several lander pages reused the Metabolic Mapping description in Webflow; worth giving each its own.

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
