# GreenTech: One System for Website & Showroom

Proposal and brand work for **[GreenTech System Limited](https://greentech.com.bd/)**, a computer retailer in Agrabad, Chattogram: one connected system for the website, the shop POS and inventory, under the owner's control.

## Live pages

| Path | What it is |
|---|---|
| [`index.html`](index.html) | **Client proposal** (main page): problem → one system → full control → brand → next step. Bangla-first with English keywords. |
| [`style-guide.html`](style-guide.html) | **Style guide**: logo, color, type, components, price/stock states, voice, a11y. Linked from the proposal. |

## Not linked (work in progress / internal)

| Path | What it is |
|---|---|
| `drafts/home.html` | Homepage design draft (on hold, UI to be reworked manually) |
| `drafts/product.html` | Product page design draft (on hold) |
| `docs/01-site-audit.md` | Detailed audit of the current site |
| `changesInProposal.md` | Review notes on the proposal |

## Assets

| Path | What it is |
|---|---|
| `assets/css/tokens.css` | Design tokens (colors, type, spacing). This is the source of truth. |
| `assets/css/main.css` | Shared components |
| `assets/css/proposal.css` | Proposal page styles |
| `assets/js/icons.js` | SVG icon sprite (injected at runtime) |
| `assets/js/proposal.js` | Proposal: progress bar, active section, pinned problem stack, reveal |
| `assets/js/main.js` | Draft-page interactions (cart, tabs, gallery, etc.) |

Plain HTML/CSS/JS with **no build step and no dependencies** except Google Fonts.

## Colors

| | Hex | Role |
|---|---|---|
| Green | `#00A651` | Logo / brand. Text and buttons use Green 700 `#007A3D` |
| Orange | `#F57F20` | Logo / deals. Always dark text on it |
| Leaf | `#8FC73E` | Logo / highlights |
| Indigo | `#4B3FE0` | **New** supporting color: links, accents |
| Night | `#14123A` | **New** dark surfaces: the logo is most vivid here |
| Mist | `#F6F5FF` | Soft section background |

The logo itself is unchanged; Indigo and Night are website-only.

## Run locally

Open `index.html` in a browser, or run `npx serve .`

## Deploy (Vercel)

**Add New → Project → Import** this repo. Framework preset: **Other**, no build command, output directory `./`. `vercel.json` enables clean URLs (`/style-guide`).

## Before going live

- [ ] **Logo:** the logo is a redrawn SVG approximation. Ask GreenTech for the original vector file.
- [ ] **Sample data:** dashboard figures in the proposal and stock/review data in the drafts are illustrative.
- [ ] **Phone numbers:** their current footer shows `0179080310` (invalid). We assumed `01729080310`; confirm with the client.
