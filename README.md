# Guest house site template

A fast, four-language website for a small hotel or guest house: Bulgarian,
English, Greek and Romanian. Guests ask about free dates through WhatsApp, Viber,
e-mail or a phone call, straight to the owner, with no booking platform and no
commission in between. The site is static: no server code, no database, no
cookies, no third-party fonts or trackers.

Made as a demo for guest houses in Sandanski, Bulgaria, where most small
properties have no working site of their own and none of the ones checked had
a Greek version (see the SciScend market scan). The property in this repo is
invented.

## What it does

- One page per language (`/bg/`, `/en/`, `/el/`, `/ro/`) with rooms, prices
  "from", amenities, what is nearby, FAQ and an inquiry form. `/` sends each
  visitor to their browser's language.
- The inquiry form composes the message in the guest's language and opens
  WhatsApp with it, copies it for Viber (Viber cannot pre-fill a message to a
  number), or opens an e-mail. Nothing is stored on the site.
- `hreflang` alternates, canonical URLs, Open Graph, a sitemap and schema.org
  `LodgingBusiness` data (address, check-in times, price range, languages,
  amenities), so search engines show the right language and the facts.

## Adapting it for a property

1. `src/data/property.json`: name per language, address, phone, WhatsApp and
   Viber numbers, e-mail, rooms and prices, nearby places, `site` (the domain).
   Set `demo` to `false`.
2. `src/data/i18n.ts`: the wording in each language, including the FAQ and the
   payment and pet policies. Greek and Romanian must be checked by a native
   speaker before launch.
3. Photos: replace the `.photo` placeholders with real images in `public/`.
4. `npm install && npm run build`, then upload `dist/` to any static host.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/bg/
npm run check
npm run build
```

Requires Node 22 or newer.

---

Built with Claude Opus 5.5 via Claude Code. Published by [SciScend](https://sciscend.com/).
