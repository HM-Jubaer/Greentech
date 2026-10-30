# GreenTech System Limited: Website Audit

**Site:** https://greentech.com.bd/
**Audited:** 31 Oct 2026
**Benchmark:** StarTech (https://www.startech.com.bd/)
**Platform:** OpenCart (jQuery + Bootstrap theme)
**Goal:** Turn a strong showroom business into one that also sells online, with the shop counter (POS), warehouse stock and website running from a single system.

---

## TL;DR

GreenTech already has the hard parts: a deep catalogue (desktops, laptops, components, CCTV, networking, printing, gaming), four outlets in Agrabad, a service centre, and existing customers.

The website does not yet do the one thing an online shop must do, which is take an order you can trust. The product page says, in Bangla, **"We don't take any orders online. Call to confirm stock and visit the showroom,"** but it also shows **Add to Cart** and **Buy Now** buttons. Prices of ৳0.00, more than 12 phone numbers, wrong category links and a stock status that has to be confirmed by phone all tell customers the site is not connected to real inventory.

The fix is more than a new skin. It is a storefront **wired to the same stock and price data the shop counter uses.** The redesign in this repo (`index.html`, `product.html`, `style-guide.html`) shows the front end. The next document covers the platform.

---

## 1. Critical: blocks online selling

| # | Problem | Evidence | Why it matters |
|---|---|---|---|
| 1.1 | **The site says it takes no online orders, yet shows cart and Buy Now buttons.** | Product page, yellow notice: *"আমাদের অনলাইনে কোন অর্ডার নেওয়া হয় না… কল দিয়ে স্টক সম্পর্কে নিশ্চিত হোন এবং সরাসরি শো-রুম ভিজিট করুন"*, placed directly under `Add to Cart` / `Buy Now`. | Customers can't tell whether they can buy. Anyone who orders anyway will be disappointed. This is the single biggest trust breaker. |
| 1.2 | **Prices and stock aren't live.** | Header notice asks customers to confirm stock and price by phone before ordering. The "Best Monitor" and "Best Gadget" sections show many items at **৳0.00** marked Pre-Order or Out of Stock, or with no status at all. | ৳0.00 reads as broken or free. Customers leave for a shop that shows a real price, such as StarTech. |
| 1.3 | **There is no clear purchase path.** | No checkout step, payment methods (bKash, Nagad, card, COD, EMI) or delivery options appear at product or cart level. The footer links to "Payment terms" and delivery pages, but nothing in the buying flow points to them. | Even a willing buyer doesn't know how to pay or when the item will arrive. |
| 1.4 | **The main product image can render blank.** | On the RTX 3060 product page, the main image area showed as an empty pale-blue box in our test (lazy-load placeholder). | The photo is the first thing a buyer checks. A blank box looks like a missing product. |

## 2. High: costs trust and sales today

| # | Problem | Evidence |
|---|---|---|
| 2.1 | **Too many phone numbers, one of them invalid.** | More than 12 different numbers across the header, notices, footer and product page (01729080310/11/12/13/14/15, 01706355476/78/79, 01818540233, 01790003666, 01841995444…). The footer lists **`0179080310` twice, which is 10 digits and not a valid BD mobile number.** `tel:` and WhatsApp links contain stray spaces. |
| 2.2 | **Featured category tiles link to the wrong place.** | "Accessories" goes to a Corsair PSU, "Gaming Chair" to an IP-COM network switch, "Hard Disk" to a Long battery, and "Case Cooler" to Casing. |
| 2.3 | **Breadcrumbs are broken.** | The product page breadcrumb shows the product name twice, with no `Home › Components › Graphics Card` path, so customers can't step back to the category. |
| 2.4 | **Catalogue data errors.** | "WD Green SN350 250GB" sits on a `wd-blue-sn580…` URL. "TP-Link EC220-G5 (AC1200)" is described with Wi-Fi 6 / 802.11ax specs. HP DeskJet 2320 is "Out of Stock" but still priced. |
| 2.5 | **Menus show empty categories and typos.** | Items with a count of 0 are visible ("Laptop RAM 0", "Asus 0"). "POS/**Lavel**/ID card Printer". URL slugs include `externa-internall-dvdrw`, `pc-powre-monitor`, `server-worksatation-storage`, `fanteck-gaming-mouse`. |
| 2.6 | **The homepage has no `<h1>`, and section subtitles are copy-pasted.** | "Latest Trending Product on Market" appears under Latest Product, Best Monitor and Best Gadget. |

## 3. Medium: design, UX and accessibility

**Brand and visual design**
- The navy header (`#253460`) and blue category tiles don't come from the logo. The logo's own colors, **green `#00A651`, orange `#F57F20` and leaf `#8FC73E`**, are muted against navy.
- Four different button colors compete: orange search, blue cart, navy Add to Cart and green Buy Now. Nothing signals which action matters most.
- The page uses a stock OpenCart theme with little visual hierarchy. Every section has the same weight.

**Product cards and pages**
- Product names are cut off in cards ("Colorful IGame GeFo…"), so the model and capacity, which are the details buyers compare on, are hidden.
- "Ex Tax" shows the same number as the price, which adds noise without information.
- The product page is missing **warranty length near the price, delivery time and cost, EMI, stock per outlet, compare, and Q&A.** Customers have to phone to find out.
- Body text on the product page is about 11–12px, which is hard to read and especially poor on phones.
- The important Bangla notice is shown as a yellow highlight that looks like an error.

**Accessibility**
- 5 images on the homepage have no `alt` text, including all hero banners.
- The headline offers ("সুলভ মূল্যে সেরা কম্পোনেন্টস শুধুমাত্র GREENTECH-এ") are baked into images. Screen readers and Google can't read them, and they can't be translated or updated without a designer.

**Mobile**
- A viewport meta tag is present. **We couldn't verify the phone layout in this pass**, so a device check comes next. Most BD shoppers browse on phones, so this needs priority.

## 4. SEO and performance

| Item | Status |
|---|---|
| JSON-LD (Product + BreadcrumbList) | ✅ Present. Keep it and fix the breadcrumb data. |
| Open Graph tags | ✅ Present |
| Meta description | ⚠️ A keyword-stuffed list ("Laptop, Brand PC, CCTV/IP Camera/XVR/NVR, Router…"). Rewrite as a sentence that earns a click. |
| Titles | ⚠️ The `<title>` and `<h1>` use different product names ("RTX3060" vs "RTX 3060 Ultra W OC 12G L-V"). |
| Page weight | ⚠️ About 5,000 DOM nodes and 71 images on the homepage, plus 16 scripts. Load time was fine on our connection (about 1.5s), but this will feel slow on 4G. |
| Bot protection | ⚠️ The server returned **HTTP 406** to a plain, non-browser request. Check in Google Search Console that Googlebot and price-comparison crawlers aren't blocked as well. |

## 5. What's working (keep it)

- **A broad, deep catalogue** with sensible top-level groups.
- **A PC Builder** already exists. This is a StarTech-level feature, and it needs to be made central.
- **Real outlets.** Four locations on SK Mujib Road, Agrabad, plus a service centre, are a trust advantage that pure online shops don't have. The website should sell this.
- **Bangla communication.** The audience is right. It needs consistent design, not images of text.
- **Structured spec tables** on product pages, which are easy to restyle.

## 6. Gap vs. StarTech-level shops

| Customer expectation | GreenTech today | Redesign |
|---|---|---|
| Real price, or a clear "Call for price" / "Pre-order" | ৳0.00 | Stock-state badges, never ৳0 |
| Live stock | "Call to confirm" | Stock per outlet on the product page |
| Search with suggestions | Basic box | Category-scoped search bar (live suggestions in the build) |
| Filter by specs (socket, VRAM, capacity) | ❌ | Planned for the category page |
| Compare | Present but buried | Compare action on every card |
| EMI shown | ❌ | "EMI from ৳X/mo" on the product page |
| Delivery time and cost | ❌ | Delivery estimator + Click & Collect |
| Warranty up front | Hidden in a tab | Warranty chip next to the price |
| One hotline | 12+ numbers | One hotline + WhatsApp, with department numbers in the footer |
| Order tracking | ❌ | "Track order" in the top bar |

---

## 7. Priority fixes (even before the rebuild)

These can be done this week on the current OpenCart site:

1. **Remove or reword the "no online orders" notice.** Either hide the Add to Cart / Buy Now buttons, or start accepting orders (COD + bKash).
2. Replace every **৳0.00** with "Call for price" or "Pre-order", and hide out-of-stock items from the homepage sections.
3. Fix the invalid footer number `0179080310` and the spaces in the `tel:` / WhatsApp links.
4. Re-point the four wrong category tiles.
5. Hide categories with a count of 0 and fix the typos and slugs (with 301 redirects).
6. Add `alt` text to the banners.

## 8. Next step

The **platform proposal** comes next: one system for the **online store + shop POS + inventory**, so a sale at the counter in Agrabad updates the website stock instantly, and an online order reserves the item in the right outlet. That proposal will be `docs/02-platform-proposal.md`.
