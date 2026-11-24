"""Generate the Nov 2026 checkout + contract funnel pages from templates.

Each product gets four page files in pages/:
  funnel-<slug>-contract.html   (top block above the GHL contract form)
  funnel-<slug>-holding.html    (check-your-email page)
  funnel-<slug>-checkout.html   (top block above the GHL order form)
  funnel-<slug>-thank-you.html
Run: python3 tools/build_funnel_pages.py
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
TPL = ROOT / "tools" / "funnel-templates"
OUT = ROOT / "pages"
JOIN = "https://join.define139.com"
TERM = "3-Month Commitment"
SHELL = (TPL / "_shell.css").read_text()

PRODUCTS = [
    # slug, chip name, price, kind
    ("gym-membership", "Gym Membership", "$19/week", "gym"),
    ("gym-private-training-1x", "Gym + Private Training · 1 Session/Week", "$79/week", "gym"),
    ("gym-private-training-2x", "Gym + Private Training · 2 Sessions/Week", "$119/week", "gym"),
    ("gym-private-training-3x", "Gym + Private Training · 3 Sessions/Week", "$159/week", "gym"),
    ("gym-group-training-2x", "Gym + Group Training · 2 Sessions/Week", "$59/week", "gym"),
    ("gym-nutrition-coaching", "Gym + Nutrition Coaching", "$89/week", "gym"),
    ("online-coaching-personal", "Online Personal Coaching", "$79/week", "online"),
    ("online-coaching-group", "Online Group Coaching", "$39/week", "online"),
    ("nutrition-coaching-add-on", "Nutrition Coaching Add-On", "+$59/week", "addon"),
]

GYM_ITEM = """        <div class="d139-next-item">
          <div class="d139-next-dot"></div>
          <span>Your gym access code information will be included in your welcome email</span>
        </div>"""

APP_ITEM = """        <div class="d139-next-item">
          <div class="d139-next-dot"></div>
          <span>Download the Define139 app to access your workouts and connect with your coach<div class="d139-app-links"><a href="https://apps.apple.com/us/app/define139-training-and-fitness/id6752301620" target="_blank" rel="noopener">App Store</a><a href="https://play.google.com/store/apps/details?id=com.trainerize.define139virtualgymcoach&amp;pcampaignid=web_share" target="_blank" rel="noopener">Google Play</a></div></span>
        </div>"""

SESSION_CTA = """
      <div class="d139-session-cta">
        <p class="d139-session-label">Your Next Step</p>
        <p class="d139-session-text">Every new member gets a complimentary “Get Started” training session — a personalized walkthrough of the app, the equipment, and your first week’s plan. No cost, no obligation.</p>
        <a href="https://complimentarysession.define139.com/complimentary-training-session-page" class="d139-session-btn">Book Your Complimentary Session &nbsp;↗</a>
      </div>
"""

KIND = {
    "gym": dict(
        AGREEMENT_WORD="Membership",
        CONTRACT_SUB="Before completing your payment, all new members sign a membership agreement that outlines the terms of their commitment. Enter your info below and we’ll send it straight to your email — once signed, you’ll be taken directly to payment.",
        CHECKOUT_SUB="You’re officially one step away from starting your journey with Define139. Enter your payment details below to activate your membership.",
        TY_EYEBROW="You’re In!",
        TY_H1='Welcome to <span class="gold">Define139</span>',
        TY_SUB="Your membership is confirmed and your payment has been processed. You’ll receive a personalized welcome email shortly with everything you need to get started.",
        TY_MIDDLE_ITEM=GYM_ITEM,
        TY_SESSION_CTA=SESSION_CTA,
        TY_NOTE_LABEL="Membership",
    ),
    "online": dict(
        AGREEMENT_WORD="Coaching",
        CONTRACT_SUB="Before completing your payment, all new clients sign a coaching agreement that outlines the terms of their commitment. Enter your info below and we’ll send it straight to your email — once signed, you’ll be taken directly to payment.",
        CHECKOUT_SUB="You’re officially one step away from starting your journey with Define139. Enter your payment details below to start your coaching.",
        TY_EYEBROW="You’re In!",
        TY_H1='Welcome to <span class="gold">Define139</span>',
        TY_SUB="Your coaching is confirmed and your payment has been processed. You’ll receive a personalized welcome email shortly with everything you need to get started.",
        TY_MIDDLE_ITEM=APP_ITEM,
        TY_SESSION_CTA="",
        TY_NOTE_LABEL="Program",
    ),
    "addon": dict(
        AGREEMENT_WORD="Coaching",
        CONTRACT_SUB="Adding nutrition coaching to your current package starts a new 3-month commitment. Enter your info below and we’ll send the agreement straight to your email — once signed, you’ll be taken directly to payment.",
        CHECKOUT_SUB="You’re one step away from adding personal nutrition coaching to your package. Enter your payment details below to get started.",
        TY_EYEBROW="You’re All Set!",
        TY_H1='Nutrition Coaching <span class="gold">Added</span>',
        TY_SUB="Your nutrition coaching add-on is confirmed and your payment has been processed. You’ll receive an email shortly with your next steps.",
        TY_MIDDLE_ITEM="",
        TY_SESSION_CTA="",
        TY_NOTE_LABEL="Add-On",
    ),
}

PAGES = {
    "contract": "contract-top.html",
    "holding": "holding.html",
    "checkout": "checkout-top.html",
    "thank-you": "thank-you.html",
}


def render(text, values):
    for k, v in values.items():
        text = text.replace("{{" + k + "}}", v)
    left = [p for p in ("{{NAME", "{{PRICE", "{{TERM", "{{TY_", "{{CHECKOUT", "{{CONTRACT", "{{AGREEMENT") if p in text]
    if left:
        raise SystemExit(f"unfilled placeholder(s) {left}")
    return text


def main():
    for slug, name, price, kind in PRODUCTS:
        values = dict(KIND[kind])
        values.update(
            NAME=name,
            PRICE=price,
            TERM=TERM,
            AGREEMENT_LOWER=values["AGREEMENT_WORD"].lower(),
            CHECKOUT_URL=f"{JOIN}/checkout-{slug}",
        )
        for page, tpl in PAGES.items():
            src = (TPL / tpl).read_text().replace("</style>", SHELL + "</style>", 1)
            html = render(src, values)
            (OUT / f"funnel-{slug}-{page}.html").write_text(html)
    print(f"wrote {len(PRODUCTS) * len(PAGES)} files")


if __name__ == "__main__":
    main()
