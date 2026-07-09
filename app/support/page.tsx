import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Lucyd: contact us, manage your subscription, restore purchases, and control your data.",
  alternates: { canonical: "/support" },
};

const topics = [
  {
    q: "Manage or cancel a subscription",
    a: "Open the Settings app on your iPhone, tap your name, then Subscriptions, and choose Lucyd. From there you can change plans or cancel. Cancelling stops the next renewal, and access continues until the period you already paid for ends.",
  },
  {
    q: "Restore a purchase",
    a: "If you reinstalled Lucyd or switched devices, open the app and use Restore Purchases. Your subscription is tied to your Apple ID, so make sure you are signed in with the same one.",
  },
  {
    q: "Free trial and billing",
    a: "If your plan includes a free trial, you pay nothing on the first day and we remind you before it ends. To avoid being charged, cancel at least 24 hours before the trial ends.",
  },
  {
    q: "Change app permissions",
    a: "Notifications, Microphone and Speech, and HealthKit can all be adjusted in the iOS Settings app under Lucyd. Turning a permission off only affects the feature that uses it.",
  },
  {
    q: "Delete your data",
    a: "Your journal and dream data are stored on your device. You can delete individual entries in the app, or remove everything by deleting the app. We have no server copy of your entries.",
  },
  {
    q: "Apple Watch and REM detection",
    a: "The Apple Watch is optional. It lets Lucyd detect REM more precisely for cue timing. Phone-only mode works well too, using timed REM windows.",
  },
];

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-mist transition-colors hover:text-ink"
      >
        &larr; Back to Lucyd
      </Link>

      <header className="mt-8">
        <p className="label-kicker">Support</p>
        <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
          We are here to help.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-mist">
          The fastest way to reach a human is email. Tell us what is happening
          and, if it helps, your iOS version and device.
        </p>
        <a
          href={`mailto:${site.supportEmail}`}
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[0.98rem] font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
        >
          Email {site.supportEmail}
        </a>
      </header>

      <div className="hairline my-14" />

      <h2 className="text-2xl font-bold tracking-tight">Common questions</h2>
      <div className="mt-8 space-y-5">
        {topics.map((t) => (
          <div
            key={t.q}
            className="rounded-[var(--radius-card)] border border-line bg-surface/50 p-6"
          >
            <h3 className="text-lg font-semibold text-ink">{t.q}</h3>
            <p className="mt-2.5 text-[0.98rem] leading-relaxed text-mist">
              {t.a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap gap-6 text-sm">
        <Link href="/privacy" className="text-steel underline underline-offset-4">
          Privacy Policy
        </Link>
        <Link href="/terms" className="text-steel underline underline-offset-4">
          Terms of Use
        </Link>
      </div>
    </div>
  );
}
