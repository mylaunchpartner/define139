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

**Website pages** (Sites → Websites → Define139):

| Live URL | `data-page` / file | Source | GHL page ID |
|---|---|---|---|
| `/gym-membership-selection` | `gym-membership-selection` | code (as-is) | ucbSylHgtXiXDkGGL2tg |
| `/online-membership-selection` | `online-membership-selection` | code (as-is) | 8m36OUmubmmMtI6PZouW |
| `/great-eight-scholarship` | `great-eight-scholarship` | code (as-is) | M7ZpIuqIgiT9kEzh2Wg4 |
| `/metabolic-mapping` | `metabolic-mapping` | designer (rebuilt) | aMtfMzuDPpcKLdGbTTjw |
| `/24-7-womens-strength-studio` | `24-7-womens-strength-studio` | designer (rebuilt) | n4wpmG0ksA5MLa4Ksukr |
| `/define139-summer-sculpt` | `define139-summer-sculpt` | designer (rebuilt) | za20nxaktz65qSc4jAnA |
| `/define139-free-fb-group-fat-loss-faith-for-busy-christian-women` | `define139-free-fb-group-fat-loss-faith-for-busy-christian-women` | designer (rebuilt) | GYxYUJYAaloA2KnCd6iH |
| `/macro-calculator-define139` | `macro-calculator-define139` | designer (rebuilt) | kXxtzEcVuaAfPDWRZWg2 |
| `/class-pass` | `class-pass` | designer (rebuilt) | L0gMCk44NwXVNRIgk1Bf |
| `/class-pass-purchased` | `class-pass-purchased` | designer (rebuilt) | 2wOnfwAugdTIBmzoJxww |
| `/page-not-found` | `404` | designer (rebuilt) | YPyvuQPvVDLvCXjzo7Ml (set as the site's 404 page in GHL) |

**Free-guide funnels** (Sites → Funnels). Every page that hands out a PDF is a two-step funnel: step 1 is the opt-in page, step 2 tells them to check their email. Each guide's GHL form redirects to its own step 2. Step paths keep the old Webflow URLs, so links already out there still work once the funnels are on the domain.

| Funnel (ID) | Step | Live URL | `data-page` / file | GHL page ID |
|---|---|---|---|---|
| Free Guide: The Slowing of the Metabolism (`Iso8REsnF3zWCOSm1V8t`) | 1 | `/define139-the-slowing-of-the-metabolism` | `define139-the-slowing-of-the-metabolism` | qcnndnB2aNLIFHpcAK5Q |
| | 2 | `/check-your-inbox-slowing-metabolism` | `check-your-inbox-slowing-metabolism` | n3UwpLsIgyYeLFXZdRJS |
| Free Guide: The Cortisol Connection (`8vtj6pnhIUYaRdbmQmSz`) | 1 | `/the-cortisol-connection` | `the-cortisol-connection` | dIemtESRqlsZcPXsJ3Wb |
| | 2 | `/check-your-inbox-cortisol-connection` | `check-your-inbox-cortisol-connection` | QnUetqbz3NDR8f8AHmIV |
| Free Guide: 7-Day Faith-Based Reset Tracker (`ESBJWqNnvVwf3ug83rhg`) | 1 | `/7-day-tracker` | `7-day-tracker` | R9wU2DJwrL1nZivuKUyv |
| | 2 | `/check-your-inbox-7-day-tracker` | `check-your-inbox-7-day-tracker` | SD9HFub3lU6RwBe6mELr |
| Free Guide: Metabolism Reset Guide (`xsk6gpFQgDkTpjVgEcN7`) | 1 | `/metabolism-reset-guide-download` | `metabolism-reset-guide-download` | DLfzVhvam8f6DsZYVOJk |
| | 2 | `/check-your-inbox-metabolism-reset-guide` | `check-your-inbox-metabolism-reset-guide` | sAXfzZCepJb4rxTeLMpB |

The check-your-inbox pages use the Threshold Focus confirmation design with the guide's name on top. Their buttons go to `/metabolic-mapping-online-programs` and the free consult booking link.

### Checkout + contract funnels (Nov 2026 prices)

GHL folder **UPDATED Checkout + Contract Funnels**, domain `join.define139.com`. Each product has a four-step funnel:

1. `/contract-<slug>` — repo top block + the product's GHL form (`<product> Contract Form`). The form redirects to step 2; submitting it fires the "Send Contract" workflow, which emails the matching contract template.
2. `/check-your-email-<slug>` — tells them to sign the contract in their inbox. The contract template's "redirect to custom URL" points to step 3.
3. `/checkout-<slug>` — repo top block + the GHL one-step order form (product set on the step's Products tab). Order completion goes to step 4.
4. `/thank-you-<slug>`.

Page files are generated by `tools/build_funnel_pages.py` from `tools/funnel-templates/` — edit the templates or the PRODUCTS list there and rerun it rather than editing the 36 files by hand.

**Routing:** the eight funnels were cloned from Gym Membership, so their embeds still say `data-page="funnel-gym-membership-…"`. `core.js` loads the page from the step URL instead (`/checkout-<slug>` → `pages/funnel-<slug>-checkout.html`, `/check-your-email-<slug>` → `…-holding.html`) for any `data-page` that starts with `funnel-`. If that file doesn't exist it falls back to the embed's own `data-page`. Keep step URLs in this exact pattern.

| Funnel (ID) | Slug | Contract form |
|---|---|---|
| Gym Membership (`5CDtYhCJuKtKJtliNdWC`) | `gym-membership` | Gym Membership Contract Form |
| Gym + Private Training - 1 session per week (`faMy3Zo619WbqTzENbaP`) | `gym-private-training-1x` | Gym + Private Training - 1 session per week Contract Form |
| Gym + Private Training - 2 sessions per week (`AuZqhqh2CX64dARTcn6e`) | `gym-private-training-2x` | Gym + Private Training - 2 sessions per week Contract Form |
| Gym + Private Training - 3 sessions per week (`ocrLK0TYtbqjPKw1a15E`) | `gym-private-training-3x` | Gym + Private Training - 3 sessions per week Contract Form |
| Gym + Group Training - 2 sessions per week (`i8OsselQBUPA9UPDKSh6`) | `gym-group-training-2x` | Gym + Group Training - 2 sessions per week Contract Form |
| Gym + Nutrition Coaching (`A2uH0gwAlswN4sKbYFgH`) | `gym-nutrition-coaching` | Gym + Nutrition Coaching Contract Form |
| Online Nutrition and Fitness Coaching - Personal (`8Fsj7cC0t3ksoKfPOmXw`) | `online-coaching-personal` | Online Nutrition and Fitness Coaching - Personal Contract Form |
| Online Nutrition and Fitness Coaching - Group (`NCafNq2NWGngSLuiZ1cU`) | `online-coaching-group` | Online Nutrition and Fitness Coaching - Group Contract Form |
| Nutrition Coaching Add-On (`xi3OhTuVeHjDD7Z22VBB`) | `nutrition-coaching-add-on` | Nutrition Coaching Add-On Contract Form |

### Designer-built pages

Pages that were built in the Webflow designer (not code embeds) were rebuilt from their published HTML:

- `webflow/site.css` is Webflow's stylesheet, scoped under `.d139-wf` so it can't restyle anything else on the GHL page. Fonts and background images it uses are in `assets/wf/`.
- `webflow/wf-lite.js` replaces the parts of Webflow's script those pages used: the mobile menu, FAQ accordions, pricing tabs, testimonial sliders and video popups. Scroll and hover animations were dropped, so content simply shows.
- Page files load both with `{{BASE}}` (repo root), e.g. `{{BASE}}webflow/site.css`.
- Webflow forms were replaced with GHL form embeds inside `.d139-form-slot` elements. The footer "Send a message" form on these pages is the **Default Contact Capture Form** (same registered SMS opt-in as `/request-more-info`). The four free-guide pages use their own GHL forms (`Slowing Metabolism eBook`, `Cortisol Connection eBook`, `7-Day Reset Tracker`, `Metabolism Reset Guide` – Guide Request), copied from the Threshold Focus form; each redirects to its own funnel's step 2 (`https://www.define139.com/check-your-inbox-…`).
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

- **SEO title:** Define139 | Online Nutrition & Fitness Coaching
- **SEO description:** Group or personal online nutrition and fitness coaching for women. Restore your metabolism and rebuild your strength with faith-based, science-backed coaching—no fads or extremes.

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
- `/page-not-found` (`404`) — **Not Found** — _(no description in Webflow; add one)_
- `/check-your-inbox-slowing-metabolism`, `/check-your-inbox-cortisol-connection`, `/check-your-inbox-7-day-tracker`, `/check-your-inbox-metabolism-reset-guide` — **Check Your Inbox | Define139** — _(new pages; add a description)_

Several lander pages reused the Metabolic Mapping description in Webflow; worth giving each its own.

## Current SEO titles and descriptions (set Nov 17, 2026, 8:56 AM MST, UTC-07:00)

These replace the Webflow titles and descriptions listed above (several Nov 10 pages had picked up the Privacy Policy title, and many reused the Metabolic Mapping description). Every page now has a unique title under 70 characters and a unique description under 155 characters, as GHL's SEO checker wants. They are set in each page's builder (SEO & AI search optimization → Content) and saved; they go live when the pages are published to the domain.

| Page | SEO title | Meta description |
|---|---|---|
| `/` | Define139 | Strength Studio & Online Fat Loss Programs | A women's strength studio in Bluefield, WV and online fat loss coaching to restore your metabolism, rooted in science, strength, and Scripture. |
| `/womens-strength-studio` | Define139 | Women's Strength Studio in Bluefield, WV | Strength training, group and private coaching, and 24/7 access at Define139 Women's Strength Studio in Bluefield, WV. Memberships from $19/week. |
| `/metabolic-mapping-online-programs` | Define139 | Metabolic Mapping Online Programs | Faith-based, science-backed online coaching that helps women 35-65 restore their metabolism, rebuild strength, and achieve sustainable fat loss. |
| `/privacy-policy` | Privacy Policy | Define139 Training & Fitness | How Define139 Training & Fitness collects, uses, and protects your personal information, including text message (SMS) communications. |
| `/terms-of-service` | Terms of Service | Define139 Training & Fitness | The terms for using define139.com and Define139 Training & Fitness services, including SMS messaging, payments, and program participation. |
| `/glp-1-strength-sculpt` | GLP-1 Strength & Sculpt | Define139 Training & Fitness | A 6-month small-group strength program for people on a GLP-1 in Bluefield, WV. Two coached sessions a week, six people max. |
| `/glp-1-interest-confirmation` | Thank You | GLP-1 Strength & Sculpt | Define139 | Thanks for your interest in GLP-1 Strength & Sculpt at Define139 in Bluefield, WV. Greta will reach out soon with next steps. |
| `/request-more-info` | Request More Info | Define139 Training & Fitness | Tell us about your goals and a Define139 coach will reach out within 24 hours about our Bluefield, WV strength studio or online coaching. |
| `/request-info-confirmation` | Thank You | Define139 Training & Fitness | We got your info and will be in touch within 24 hours. Explore Define139 Women's Strength Studio or our online nutrition and health coaching. |
| `/free-threshold-focus-ebook-download` | Free Threshold Focus Holiday eBook | Define139 | Enjoy the holidays without waiting for January. Get Define139's free Threshold Focus eBook with the two-plate strategy and a simple holiday plan. |
| `/check-your-inbox-for-your-free-threshold-focus-ebook` | Check Your Inbox: Threshold Focus eBook | Define139 | Your free Threshold Focus eBook is on its way. Check your email for the download link from Define139 Training & Fitness. |
| `/gym-membership-selection` | Gym Membership Options | Define139 Bluefield, WV | Choose your Define139 Women's Strength Studio membership in Bluefield, WV and find the option that fits your goals, schedule, and lifestyle. |
| `/online-membership-selection` | Online Coaching Programs | Define139 | Work with a Define139 coach from anywhere. Science-backed nutrition, personalized training, and real accountability, delivered completely online. |
| `/great-eight-scholarship` | The Great Eight Scholarship | Define139 Training and Fitness | Win 8 months of personalized weight-loss coaching, completely free. Celebrate Define139's 8th anniversary and enter the Great Eight in five minutes. |
| `/metabolic-mapping` | Metabolic Mapping Coaching for Women | Define139 | Online, faith-based coaching that helps women restore their metabolism, lose body fat, build strength, and stop yo-yo dieting for good. |
| `/24-7-womens-strength-studio` | 24/7 Women's Strength Studio in Bluefield, WV | Define139 | 24/7 gym access, guided workouts in the Define139 app, and a free Get Started session at Define139 Women's Strength Studio in Bluefield, WV. |
| `/define139-summer-sculpt` | Sculpted Summer Program Download | Define139 | Download your 12-week Sculpted Summer workout and nutrition program: strength workouts, high-protein meal plans, devotionals, and habit trackers. |
| `/define139-free-fb-group-fat-loss-faith-for-busy-christian-women` | Free Facebook Group: Fat Loss & Faith | Define139 | Join Define139's free Facebook group for busy Christian women ready to stop dieting, end weight regain, and pursue fat loss rooted in faith. |
| `/macro-calculator-define139` | Free Macro Calculator | Define139 | Use Define139's free macro calculator to estimate your daily protein, carbs, and fat for your goals. Take charge of your nutrition today. |
| `/class-pass` | Get Your Class Pass | Define139 | Reserve your spot in Define139's 8-week group class pass at our women's strength studio in Bluefield, WV. Special pricing for members. |
| `/class-pass-purchased` | Class Pass Purchased! | Define139 | You're all set! Thank you for purchasing the Define139 Class Pass. Watch your email for next steps. |
| `/page-not-found` | Page Not Found | Define139 | Sorry, we couldn't find that page. Head back to define139.com to explore our women's strength studio and online coaching programs. |
| `/define139-the-slowing-of-the-metabolism` | Free Guide: The Slowing of the Metabolism | Define139 | Is your metabolism slowing down or just misunderstood? Download Define139's free guide on why metabolism changes and what you can do about it. |
| `/check-your-inbox-slowing-metabolism` | Check Your Inbox: The Slowing of the Metabolism | Define139 | Your free Slowing of the Metabolism guide is on its way. Check your email for the download link from Define139 Training & Fitness. |
| `/the-cortisol-connection` | Free Guide: The Cortisol Connection | Define139 | Tired, puffy, and stuck no matter how clean you eat? Get Define139's free guide on how cortisol affects fat loss and what to do about it. |
| `/check-your-inbox-cortisol-connection` | Check Your Inbox: The Cortisol Connection | Define139 | Your free Cortisol Connection guide is on its way. Check your email for the download link from Define139 Training & Fitness. |
| `/7-day-tracker` | Free 7-Day Faith-Based Reset Tracker | Define139 | Feeling overwhelmed by your health journey? Download Define139's free 7-Day Faith-Based Reset Tracker and let faith and small steps lead the way. |
| `/check-your-inbox-7-day-tracker` | Check Your Inbox: 7-Day Reset Tracker | Define139 | Your free 7-Day Faith-Based Reset Tracker is on its way. Check your email for the download link from Define139 Training & Fitness. |
| `/metabolism-reset-guide-download` | Free Metabolism Reset Guide | Define139 | Download Define139's free Metabolism Reset Guide and learn 10 steps to looking and feeling your best at any age. |
| `/check-your-inbox-metabolism-reset-guide` | Check Your Inbox: Metabolism Reset Guide | Define139 | Your free Metabolism Reset Guide is on its way. Check your email for the download link from Define139 Training & Fitness. |

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

- Nov 17, 2026: Greta dropped the "Metabolic Mapping" name. The service is now **Online Nutrition & Fitness Coaching** with **Group Coaching** and **Personal Coaching** options. Page copy uses the new names; URL paths (`/metabolic-mapping-online-programs`, `/metabolic-mapping`), the GHL calendar slug `metabolic-mapping-info-call`, and contract URLs `contract-mm-*` are unchanged so existing links keep working. Testimonials that named the program use a bracketed edit: "[online coaching]". `great-eight-scholarship` is a past giveaway whose prize was named Metabolic Mapping and was left as-is.

- This repo is public (needed for free GitHub Pages). Never commit passwords, API keys or private notes.
- The GHL editor canvas doesn't run scripts. Use **Preview** to see pages.
