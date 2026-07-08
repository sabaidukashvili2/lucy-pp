# Lucy website

Marketing and legal site for **Lucy**, the lucid dreaming trainer by Axon Labs.
Built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

> Being awake inside your own dreams.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - production build
- `npm run start` - serve the production build

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx          Home (hero, science, how it works, features, privacy, pricing, FAQ, download)
  privacy/          Privacy Policy
  terms/            Terms of Use
  support/          Support / help
  robots.ts         robots.txt
  sitemap.ts        sitemap.xml
components/         Header, Footer, PhoneMock, AppStoreButton, UI kit, legal layout
lib/site.ts         Central constants (URLs, pricing, contact)
```

## Brand

- Deep OLED black background, stark white type, one muted "surgical steel"
  accent (`#a3adb8`). No indigo/purple, no gradients, no glow.
- Primary buttons: white fill, black text.
- Font: Satoshi (loaded from Fontshare).
- Copy voice: warm companion. No em dashes or en dashes in user-facing copy.

## Before launch

Edit `lib/site.ts`:

- Set `appStoreUrl` to the real App Store listing.
- Flip `appStoreLive` to `true` once the app is live (this turns the
  "Coming soon" buttons into real download links).
- Confirm pricing and contact email.

The brand name on this site is **Lucy** (not Lucyd). The domain remains
`lucyd.app`, and the privacy policy is served at `/privacy`
(https://lucyd.app/privacy).
