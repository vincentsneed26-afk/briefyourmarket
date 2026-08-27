# BriefYourMarket Design System

Token-driven UI guidance and components for **BriefYourMarket.com** — email marketing built for estate agent lead generation.

---

## 1. Context and goals

**What the product is.** BriefYourMarket is a UK B2B SaaS marketing platform for **estate agents and letting agents**. It plugs into a property CRM, segments the agency's historic contact data, and sends localised email, SMS and print campaigns that generate valuations and win instructions. Features named on the site: On Market Data, Email Marketing, Surveys, Automation, Print Marketing, Campaign Library, Reporting, Communications Managed, SMS. It is part of the **nurtur.tech** group; the site footer credits "Site by nurtur.tech".

**Audience.** Estate agency owners, directors and marketing managers — not consumers. Buying triggers are lead volume, valuations, instructions and fee income.

> **Correction to the brief.** The intake brief described the audience as "online shoppers and consumers" and the surface as an "e-commerce storefront", and flagged its own audience inference as low-confidence. It is neither. Every guideline here is written for a **B2B lead-generation marketing site** plus a campaign-management platform. If you are generating work from this system, write for agency principals.

**Goals of this system.** Ship consistent, accessible, token-driven UI fast: one semantic token set, one component contract per primitive, explicit state rules, and WCAG 2.2 AA acceptance criteria that can be tested in implementation.

### Sources used

| Source | Access | What was taken from it |
| --- | --- | --- |
| `https://www.briefyourmarket.com/` (home) | Public, read via web fetch | Hero and section copy, nav/footer IA, testimonials, asset URLs |
| `https://www.briefyourmarket.com/email-marketing/` | Public, read via web fetch | Feature-page structure, quote-form fields, benefit list, tone |
| Intake brief (pasted) | Provided | Literal colour, radius, shadow, motion and font-size values from computed styles |

**Not available.** No codebase, no Figma file, no repository and no design-system export were attached. There was no platform/app login, so **no UI kit exists for the logged-in campaign platform** — it is deliberately absent rather than invented.

---

## 2. Content fundamentals

**Voice: confident operator, not vendor.** Sentences are declarative and outcome-first. Claims are attached to numbers, and numbers are attached to an agency and a timeframe.

- **Person.** Second person for the reader's business ("**your** historic data", "**your** database"), first-person plural for the company ("**our** email platform integrates…"). First-person singular appears only in CTA labels written from the customer's mouth: "Get My Free Quote", "Reactivate My Database", "Check My CRM Compatibility", "Get These Results for My Agency".
- **Casing.** Sentence case for body copy and most headings ("Unlock the power of historic data"). Title Case appears on feature names and some hero headlines ("Email Campaigns That Win More Instructions"). Buttons use Title Case ("Book a Demo").
- **Spelling.** UK English throughout: personalised, localised, analyse, behaviour, optimised. Currency in £. Phone numbers spaced as `0344 800 84 24`.
- **Sentence length.** Hero sub-copy is one long sentence stacking benefit + mechanism + outcome. Feature bullets are a bold 2–5-word label followed by one short sentence.
- **Domain vocabulary — use it exactly.** instructions, valuations, vendors, landlords, database, archived contacts, on-market data, postcode, CRM, sends, open rate, click-through rate, multi-branding, transactional send. "Instruction" means a signed listing; never swap it for "deal" or "sale".
- **Numbers are the argument.** "39% open rate", "£100,000 in instruction fees in a single quarter", "31,000 website leads", "25+ trusted property CRMs", "unlimited sends". Never publish a figure without its agency, period or comparison.
- **Emoji: never.** Not in UI, not in marketing copy, not in email templates. No exclamation marks in UI copy either.
- **CTA rules.** Verb-first, specific, benefit-bearing. Good: "Book a Demo", "Start Automating My Campaigns", "Try the new AI Builder". Prohibited: "Click here", "Learn more" as a primary CTA, "Submit" as the only label on a lead form (the live site uses it; new work should say "Get my quote").
- **Form conventions.** Required fields carry a red asterisk plus the line `"*" indicates required fields`. Reassurance sits under the submit: `No spam. Unsubscribe anytime.`
- **Error copy.** Name the cause and the fix: "Enter a valid email address, e.g. jane@agency.co.uk." Never "Something went wrong."

**Vibe.** Practical, evidence-led, quietly ambitious. Clean white space, real product screenshots, agency logos as proof. No hype, no jargon-for-its-own-sake, no consumer playfulness.

---

## 3. Visual foundations

**Colour.** Two brand colours do the work: **brand cyan `#1da9e1`** (every primary action, links, eyebrows, active states, icon accents) and **navy `#1c2b4a`** (footer, dark proof sections, secondary buttons, strong borders). Text is warm-neutral grey: `#242424` primary, `#585858` secondary, `#858585` tertiary. Surfaces are white with a `#f5f5f5` grey band alternating between sections; hairlines are `#e5e7eb`. Success / warning / danger were **added** (`#17a673`, `#f0a020`, `#d92d20`) — the marketing site has no visible semantic set. Max two background colours per page beyond white.

**Type.** One geometric sans across the whole system. **Substitution: Poppins** — no font binaries were obtainable from the site (Elementor serves Google Fonts and the CSS was not reachable), so Poppins stands in as the closest match to the site's rounded, geometric SaaS voice. Weights in use: 300/400/500/600/700. Headings 600–700 with `-0.01/-0.02em` tracking; body 400 at 1.65 line-height; UI labels 500 at 14px; eyebrows 13px/600 uppercase with 0.08em tracking in brand cyan. Size ramp: 11 · 12 · 13 · 14 · 16 · 18 · 20 · 24 · 30 · 38 · 48 · 60 (the 12–24 steps are literal measured values).

**Spacing and layout.** 4px grid, with literal 2 / 3 / 6 / 13px steps kept for dense controls. Container max 1200px with 24px gutters; sections separated by 80px desktop / 48px mobile. Layout is a plain two-column split — copy left, product image right — alternating direction down the page. The header is **sticky** with a soft shadow; nothing else is fixed. Content-first: no decorative chrome, no sidebars on marketing pages.

**Backgrounds and imagery.** No gradients, no textures, no patterns, no hand-drawn illustration. Backgrounds are flat white, flat grey `#f5f5f5`, or flat navy. Imagery is **real product screenshots** — desktop campaign builder crops and an iPhone showing a live agency email — plus client logo PNGs on white and a dark integration-logo board. Colour vibe is cool and neutral, matching the cyan/navy palette; no grain, no duotone, no warm filters. Photography is used sparingly (stock hero imagery exists on some feature pages) and is never tinted.

**Corner radii — a deliberate split.** Tight for UI (2 / 3 / 6px: inputs 3px, cards 6px), very large for expressive shapes (25 / 50 / 80 / 100px and pill). **Buttons are full pills.** Media blocks use 25px.

**Cards.** White, 6px radius, 1px `#e5e7eb` border, 24px padding, **no shadow by default**. Shadow only when raised or hovered. Never a coloured left border.

**Shadows.** Exactly two, both literal: `--shadow-1` = `0 1px 6px rgba(0,0,0,.12), 0 1px 4px rgba(0,0,0,.12)` (resting cards, sticky header, switch thumb); `--shadow-2` = `0 0 20px rgba(0,0,0,.1)` (hover lift, dropdowns, overlays). No inner shadows anywhere. Borders carry hierarchy first; elevation second.

**Animation.** Restrained and functional. 150ms for control colour and focus, 300ms for card hover and dropdown open, 400ms for section reveal and the off-canvas mobile panel. Easing `cubic-bezier(.4,0,.2,1)`. Fades and 2px translations only — no bounce, no spring, no scale-up, no parallax, no auto-playing carousels. Everything collapses to 0ms under `prefers-reduced-motion`.

**Hover states.** Solid buttons darken one step (cyan `#1da9e1 → #1795c8`); ghost/outline buttons fill with a 5% brand tint (`--sky-50` / `--navy-50`); nav links turn cyan; cards lift 2px and gain `--shadow-2` plus a cyan border; table rows tint to `#fafafa`. Never opacity fades on hover.

**Press states.** One step darker again (`#1279a3`) plus a 1px downward nudge. No shrink/scale.

**Focus.** A 2px cyan outline at 2px offset **plus** a 3px `rgba(29,169,225,.45)` ring. On navy or cyan backgrounds, switch to the white ring. Removing focus styling is prohibited.

**Disabled.** Grey `#ededed` fill, `#858585` label, `not-allowed` cursor, no shadow, no transform. Never rely on opacity alone.

**Transparency and blur.** Almost none. The only sanctioned translucency is the focus ring, the modal scrim `rgba(17,28,48,.55)`, and text over a photograph — which gets a **solid or near-solid capsule/panel**, never a blur or a gradient scrim.

---

## 4. Iconography

The site's icon usage is **sparse and bespoke**: individual SVG files uploaded per feature (`icon-map-pin.svg`, `icon-graph.svg`), the wordmark `brief-your-market-logo.svg`, and the standalone glyph `brief-your-market-icon.svg`. There is **no icon font, no sprite sheet and no single icon library** in evidence. Social icons in the footer are Elementor's built-in set. Emoji are never used. Unicode characters are used only as text micro-glyphs (check marks in benefit lists, arrows in CTAs) — that convention is preserved here for check marks and chevrons.

**Rules.**
1. Feature icons are **line SVGs at ~48px in brand cyan**, one per feature card, aligned top-left above the card title. Import the real file; do not redraw.
2. Small UI glyphs (chevrons, close, arrows) may be Unicode characters or a matching 1.5px-stroke line set. If a library is needed, use **Lucide** from CDN — closest stroke weight and geometry to the two known SVGs — and flag the substitution in the file. *(Flagged: no Lucide usage is shipped in this system; components use text glyphs only.)*
3. Every icon-only control needs an `IconButton label`. Decorative icons get `alt=""` / `aria-hidden`.
4. Never mix filled and outlined icon styles in one view.

**Asset status.** The **logo is supplied and in use**: `assets/logo.svg` (full-colour horizontal lockup with strapline, 342×113) and `assets/logo-reversed.svg` (reversed, for navy / cyan / photographic backgrounds). Lockup colours are speech mark `#1ca9e1`, wordmark `#1d1e1c`, strapline `#424241`, nurtur accent `#5ec1ca`. Use `logo-reversed.svg` on any dark surface — never recolour, outline or rebuild the mark. The remaining **imagery** (feature SVGs, product screenshots, client logos) could not be downloaded into `assets/`; those references still point at live `briefyourmarket.com` URLs, so they render online only.

---

## 5. Component rules

Every component defines **default, hover, focus-visible, active, disabled** and — where applicable — **loading** and **error**. Contracts live in each `<Name>.d.ts`; usage guidance in each `<Name>.prompt.md`.

### Inventory (19 exports)

**`components/actions/`** — `Button`, `IconButton`
**`components/forms/`** — `Field`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `RadioGroup`, `Switch`
**`components/display/`** — `Card`, `Badge`, `Tag`, `StatTile`, `DataTable`
**`components/navigation/`** — `NavBar`, `Tabs`
**`components/feedback/`** — `Alert`, `Spinner`

### Intentional additions

No component library was provided, so this is an authored standard set sized to the observed page density (95 buttons, 63 links, 11 lists, 7 navigation elements, 6 inputs, 1 card, 1 table on the pages read). Beyond that observed inventory these were added deliberately:

- `StatTile` — the site's proof numbers are currently plain text; they need one consistent treatment.
- `Badge` / `Tag` — required for campaign status and audience segments in any platform work.
- `Alert`, `Spinner`, `Switch`, `DataTable` — no marketing-page counterpart, but unavoidable for the campaign platform.
- Semantic success/warning/danger colours — no source values existed.

### Universal rules

- **Tokens only.** Never a raw hex, px font-size or one-off radius in component or page work. Use the semantic layer (`--action-primary-bg`, `--text-secondary`), not the base ramp (`--sky-400`, `--ink-600`).
- **Keyboard.** Everything interactive is reachable by Tab in DOM order, activates on Enter, and buttons also on Space. `Tabs` uses roving tabindex + arrow keys. Dropdowns close on Escape and return focus to their trigger. No positive `tabindex`.
- **Pointer.** Hover states must never be the only carrier of meaning. Cursor `pointer` on actions, `not-allowed` on disabled.
- **Touch.** Minimum 44×44px effective target. `Button size="md"` (40px) satisfies this with its vertical padding; `size="sm"` is desktop-only. Hover-only dropdowns must also open on tap.
- **Responsive.** Two-column splits collapse to one below 900px; section padding drops 80→48px; `DataTable` scrolls horizontally inside its bordered wrapper; `NavBar` collapses to an off-canvas panel below 1024px.
- **Long content.** Headings and body wrap (`text-wrap: pretty`); badges never wrap; table cells wrap rather than truncate unless a tooltip carries the full value; buttons keep `white-space: nowrap` and shrink by size step, never by ellipsis.
- **Empty states.** Every list and table states what is missing **and** the next action: "No campaigns yet. Create your first campaign." Never "N/A" or a blank cell.

---

## 6. Accessibility — testable acceptance criteria

Target: **WCAG 2.2 AA**.

| # | Criterion | Pass / fail check |
| --- | --- | --- |
| A1 | Body text contrast | `--text-primary` on `--surface-base` ≥ 4.5:1 (16.5:1). **Fail** if `--text-tertiary` (#858585, 3.5:1) is used below 18px or for essential copy. |
| A2 | Non-text contrast | Control borders and the focus ring ≥ 3:1 against their background. Cyan on white = 2.4:1, so **cyan is never a border's only signal** on white. |
| A3 | Focus visible | Every interactive element shows the 2px outline + 3px ring on keyboard focus. **Fail** on any `outline:none` without replacement. |
| A4 | Keyboard operable | Complete every flow (nav → feature page → quote form → submit) with keyboard only, no trap. |
| A5 | Names and roles | Every `IconButton` has `label`; every input has a programmatic `<label>`; every `RadioGroup` has a `<legend>`. Axe reports 0 name/role violations. |
| A6 | Error identification | Invalid fields set `aria-invalid="true"` and are described by the error node via `aria-describedby`; the message names the fix. |
| A7 | Status messages | Success/failure use `role="status"` (`role="alert"` for danger) and are announced without moving focus. |
| A8 | Target size | Every touch target ≥ 44×44px at ≤768px width (measure in devtools). |
| A9 | Reduced motion | With `prefers-reduced-motion: reduce`, no transform or opacity transition exceeds 0ms except the spinner (slowed, not stopped). |
| A10 | Reflow | 320px width and 200% zoom produce no horizontal scrolling except inside `DataTable`. |
| A11 | Colour independence | Every status uses text or a glyph plus colour — never colour alone. |

---

## 7. Anti-patterns — prohibited

- Raw hex values, ad-hoc px font sizes, or a radius outside the token set.
- `outline: none` without a replacement indicator; hover-only affordances.
- `--text-tertiary` for body copy; cyan text on cyan or navy fills.
- Gradients (especially blue-purple), blur scrims, textures, drop-shadowed text.
- Cards with a coloured left border; rounded "emoji cards"; icon soup.
- Placeholders used as labels; `Submit` as the only lead-form CTA; "Click here" links.
- Bouncing, springing or scaling animation; auto-playing carousels; parallax.
- A figure without its source, agency or timeframe.
- Inventing platform (logged-in) screens — no source was available; leave the surface blank and say so.
- Drawing or approximating the BriefYourMarket logo. Use the real file.

---

## 8. QA checklist

- [ ] Only semantic tokens in the diff — grep for `#`, `px` font sizes, `border-radius:` literals.
- [ ] Every interactive element: default / hover / focus-visible / active / disabled verified; loading and error where applicable.
- [ ] Keyboard-only pass on the full flow; Escape closes every overlay; focus returns to the trigger.
- [ ] Axe (or equivalent) reports 0 critical/serious issues.
- [ ] Contrast measured for every new colour pairing (A1, A2).
- [ ] 320px, 768px, 1024px, 1440px checked; tables scroll, columns collapse, nothing clips.
- [ ] Long-content, empty and error states screenshotted.
- [ ] `prefers-reduced-motion` honoured.
- [ ] UK spelling; sentence-case body; Title Case CTAs; no emoji; every figure attributed.
- [ ] Real brand assets referenced — no redrawn logo, no placeholder mark.

---

## 9. Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` list only.
- `thumbnail.html` — homepage tile.
- `readme.md` — this guide.
- `SKILL.md` — Agent Skills front matter for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `layout.css`
**`css/`** — `base.css` (element resets, link and focus defaults, `.bym-container`, `.bym-eyebrow`), `components.css` (all `.bym-*` class hooks and their states)
**`guidelines/`** — 19 foundation specimen cards across the **Colors**, **Type**, **Spacing** and **Brand** groups
**`components/`** — `actions/`, `forms/`, `display/`, `navigation/`, `feedback/`; each with `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `*.card.html` specimen
**`ui_kits/marketing-site/`** — click-through recreation of briefyourmarket.com: `index.html`, `SiteChrome.jsx`, `HomeScreen.jsx`, `EmailMarketingScreen.jsx`, `QuoteScreen.jsx`, `README.md`
**`assets/`** — `logo.svg`, `logo-reversed.svg` (supplied brand lockups), plus `README.md` listing the remaining imagery source URLs (see §4)

**`templates/marketing-page/`** — `MarketingPage.dc.html`, a reusable lead-gen landing page (sticky header, hero, navy proof band, feature cards, quote form, footer) built from the primitives; `ds-base.js` loads this system's CSS and bundle.
