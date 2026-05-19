# Camicissima Clone (Static Frontend)

A static frontend clone of [camicissima.it](http://camicissima.it/) built with plain **HTML5, CSS3, vanilla JavaScript** and **Bootstrap 5** (via CDN). No build step required — just open `index.html` in any modern browser.

## What's inside

```
camicissima-clone/
├── index.html        # The full homepage markup
├── css/
│   └── style.css     # Custom styles (over Bootstrap 5)
├── js/
│   └── script.js     # Vanilla JS for product carousel, mega menu, drawer, cart demo
└── README.md         # This file
```

## How to run

Just open `index.html` directly in your browser:

```bash
# from the project folder
open index.html      # macOS
start index.html     # Windows
xdg-open index.html  # Linux
```

Or serve with any static server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

No build / no install needed — Bootstrap, Bootstrap Icons and Google Fonts are loaded via CDN.

## Features replicated

- **Sticky header** with elegant Pinyon Script logo (`Camicissima Milano · since 1931`)
- **Top promo bar**
- **Primary navigation** with all original anchor links:
  - `#camicie-uomo` Camicie Da Uomo
  - `#abbigliamento` Abbigliamento
  - `#accessori` Accessori
  - `#camicie-donna` Camicie Da Donna
  - `#cerimonia` Look Da Cerimonia
  - `#giftcards` Gift Cards
  - `#franchising` Franchising
- **Hover mega-menu** with 4 category panels (Camicie, Abbigliamento, Accessori, Donna), each with sub-links and promotional image card
- **Hero carousel** (Bootstrap) with 3 slides: Non-Iron 1+1=4, Focus Fancy, New Collection SS26 — using original banner images
- **Best Seller products carousel** — horizontal scroll with arrow buttons, 6 real products with images, discounted prices and multibuy formula
- **Category grid** (Camicie Uomo · Abbigliamento · Accessori · Camicie Donna) with hover zoom
- **Brand story section** with image and CTA
- **Multibuy formula banner**
- **Newsletter signup** (with success message)
- **Login modal** (Bootstrap) — email/password + Facebook/Google social buttons
- **Footer** with 4 columns + social icons + payment icons + copyright
- **Mobile drawer menu** with backdrop
- **Cart badge** demo counter
- Fully **responsive** across desktop, tablet and mobile
- All interactive elements work: carousel, mega menu, modal, newsletter form, mobile drawer

## Tech / dependencies (all via CDN)

- Bootstrap 5.3.3 (CSS + JS bundle)
- Bootstrap Icons 1.11.3
- Google Fonts: Pinyon Script, Cormorant Garamond, Inter

## Notes

- Product, category and banner **images are pulled from the Camicissima CDN** so the look is faithful. They will resolve as long as you have internet access. A couple of fallback images use Unsplash.
- This is a **frontend-only** clone for demo/educational purposes — no backend, no real cart, no real payments, no real authentication. Form submissions and the cart counter are simulated client-side.
- All trademarks belong to their respective owners. Not affiliated with Fenicia S.p.A.
