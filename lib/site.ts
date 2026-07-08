/**
 * Central place for site-wide constants. Swap the placeholders below once
 * the App Store listing is live.
 */
export const site = {
  name: "Lucy",
  tagline: "Being awake inside your own dreams.",
  developer: "Axon Labs",
  bundleId: "com.axonlabs.lucy",
  domain: "lucyd.app",
  url: "https://lucyd.app",
  supportEmail: "siduka14@gmail.com",

  // TODO: replace with the real App Store listing URL once published.
  appStoreUrl: "https://apps.apple.com/app/lucy",
  appStoreLive: false,

  pricing: {
    yearly: "$19.99 / year",
    monthly: "$4.99 / month",
    trialDays: 7,
  },
} as const;

export const nav = [
  { label: "The science", href: "/#science" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Privacy", href: "/#privacy" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;
