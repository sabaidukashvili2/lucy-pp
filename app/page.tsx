import Link from "next/link";
import { AppStoreButton } from "@/components/AppStoreButton";
import { PhoneMock } from "@/components/PhoneMock";
import { Faq } from "@/components/Faq";
import { Section, Kicker, Card, Icon, type IconName } from "@/components/ui";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatStrip />
      <Science />
      <HowItWorks />
      <Features />
      <Privacy />
      <Pricing />
      <FaqSection />
      <DownloadCta />
    </>
  );
}

/* ----------------------------------------------------------------- Hero */
function Hero() {
  return (
    <Section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Kicker>Lucid dreaming trainer</Kicker>
          <h1 className="mt-5 text-balance text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Being awake inside your own dreams.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-mist">
            Lucy trains lucid dreaming with nothing but your phone, built on
            real sleep science. She learns your dreams, nudges your awareness by
            day, and plays your cue at just the right moment while you sleep.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <AppStoreButton size="lg" />
            <Link
              href="#science"
              className="rounded-full border border-line-strong px-6 py-4 text-[0.98rem] font-semibold text-ink transition-colors hover:border-steel"
            >
              See the science
            </Link>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-faint">
            <span className="text-steel">
              <Icon name="lock" />
            </span>
            No accounts. No cloud. Your journal stays on your device.
          </p>
        </div>

        <div className="relative">
          <PhoneMock />
        </div>
      </div>
    </Section>
  );
}

/* ----------------------------------------------------------- Stat strip */
function StatStrip() {
  const stats = [
    { big: "0.74 to 2.11", small: "lucid dreams per week in the study, roughly tripled" },
    { big: "4 to 6", small: "dreams a night, about 2 hours of dreaming total" },
    { big: "No. 1", small: "predictor of lucidity is how well you recall dreams" },
    { big: "~46%", small: "MILD success when you fall back asleep within 5 minutes" },
  ];

  return (
    <Section className="pb-8">
      <div className="hairline" />
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 py-14 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.big}>
            <dt className="text-3xl font-black tracking-tight text-ink sm:text-4xl">
              {s.big}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-mist">{s.small}</dd>
          </div>
        ))}
      </dl>
      <div className="hairline" />
    </Section>
  );
}

/* -------------------------------------------------------------- Science */
function Science() {
  const facts = [
    {
      icon: "phone" as IconName,
      title: "Phone only, no lab",
      body: "The first study to provoke lucid dreams at home on a normal smartphone. No headband, no wires.",
    },
    {
      icon: "target" as IconName,
      title: "A cue paired with awareness",
      body: "Before sleep, a sound is paired with a short mindfulness routine. Later that cue is replayed during REM.",
    },
    {
      icon: "moon" as IconName,
      title: "Timed to your REM",
      body: "You dream 4 to 6 times a night. Lucy aims the cue at those windows, when lucidity is possible.",
    },
  ];

  return (
    <Section id="science" className="py-24">
      <div className="max-w-3xl">
        <Kicker>The science</Kicker>
        <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
          Grounded in the Northwestern 2024 study.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-mist">
          Lucy is built on Targeted Lucidity Reactivation, or TLR. In 2024,
          Konkoly and colleagues at Northwestern showed, for the first time,
          that you can provoke lucid dreams at home with an ordinary smartphone.
          A short pre-sleep routine pairs a sound cue with a moment of
          awareness. Then, during REM, that same cue is played back to spark
          lucidity.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {facts.map((f) => (
          <Card key={f.title}>
            <Icon name={f.icon} />
            <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-mist">
              {f.body}
            </p>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface/40 p-7">
        <p className="text-sm leading-relaxed text-faint">
          Source: Konkoly et al. (2024), &ldquo;Provoking lucid dreams at home
          with sensory cues paired with pre-sleep cognitive training.&rdquo;
          Reported lucid dreams rose from an average of 0.74 to 2.11 per week.
          Lucy applies this method. It does not guarantee results, and lucid
          dreaming remains a skill you build with practice.
        </p>
      </div>
    </Section>
  );
}

/* --------------------------------------------------------- How it works */
function HowItWorks() {
  const steps = [
    {
      icon: "sun" as IconName,
      when: "Day",
      title: "Reality checks that fit your dreams",
      body: "Lucy sends personalized trigger reminders based on the dreams you have most, say being chased, so a quick reality check becomes second nature.",
    },
    {
      icon: "moon" as IconName,
      when: "Night",
      title: "A wind-down, then your cue during REM",
      body: "A two-minute priming settles your mind. Then Lucy plays your cue sound during REM windows, timed on your phone or read from your Apple Watch.",
    },
    {
      icon: "pen" as IconName,
      when: "Morning",
      title: "Journal, and Lucy retunes",
      body: "Capture your dream by text or voice. On-device AI tags recurring dream signs and retunes your triggers for the night ahead.",
    },
  ];

  return (
    <Section id="how-it-works" className="py-24">
      <div className="max-w-3xl">
        <Kicker>How it works</Kicker>
        <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
          One gentle loop, day and night.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-mist">
          You bring the curiosity. Lucy brings the timing, the cue, and the
          memory of every dream you log.
        </p>
      </div>

      <ol className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.when}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <Icon name={s.icon} />
                <span className="text-sm font-mono text-faint">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-5 label-kicker">{s.when}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-mist">
                {s.body}
              </p>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------------------------------------- Features */
function Features() {
  const features = [
    { icon: "chip" as IconName, title: "On-device dream signs", body: "Recurring symbols are tagged locally, never uploaded." },
    { icon: "mic" as IconName, title: "Voice or text journaling", body: "Speak it half-asleep or type it. Whatever you will actually do." },
    { icon: "watch" as IconName, title: "Apple Watch REM", body: "Optional, for sharper timing. Phone-only works great too." },
    { icon: "target" as IconName, title: "Personalized triggers", body: "Reminders shaped by the dreams you have most." },
    { icon: "bell" as IconName, title: "Local notifications", body: "Scheduled on-device. Nothing pushed from a server." },
    { icon: "phone" as IconName, title: "No hardware needed", body: "Just your phone. Backed by the research to work that way." },
  ];

  return (
    <Section className="py-24">
      <div className="max-w-3xl">
        <Kicker>What is inside</Kicker>
        <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
          Everything for the practice, nothing you do not need.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title}>
            <Icon name={f.icon} />
            <h3 className="mt-5 text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">
              {f.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- Privacy */
function Privacy() {
  const points = [
    "No user accounts, no login, and no backend server of ours.",
    "Journal entries, goals, dream signs, and reminders live on your device.",
    "Dream-sign detection runs on-device with Apple's NaturalLanguage framework.",
    "Subscriptions go through Apple In-App Purchase, managed by RevenueCat, which only ever sees a random app-generated ID and your purchase status.",
    "Notifications are scheduled locally, not pushed from a server.",
    "No third-party analytics SDK, no ad tracking, and no data selling.",
  ];

  return (
    <Section id="privacy" className="py-24">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Kicker>Privacy</Kicker>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
            Your dreams never leave your phone.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist">
            Privacy is not a setting in Lucy, it is the architecture. There is
            nowhere for us to read your journal, because it never reaches us.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-line-strong px-4 py-2 text-sm text-steel">
              App Privacy label: no tracking
            </span>
            <Link
              href="/privacy"
              className="rounded-full border border-line-strong px-4 py-2 text-sm text-ink transition-colors hover:border-steel"
            >
              Read the full policy
            </Link>
          </div>
        </div>

        <ul className="space-y-4">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-4 rounded-[14px] border border-line bg-surface/40 p-5"
            >
              <span className="mt-0.5 shrink-0 text-steel" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[0.98rem] leading-relaxed text-mist">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------- Pricing */
function Pricing() {
  return (
    <Section id="pricing" className="py-24">
      <div className="max-w-3xl">
        <Kicker>Pricing</Kicker>
        <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
          One membership. The whole app.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-mist">
          Lucy is a paid app with a single membership that unlocks everything.
          Some plans start with a {site.pricing.trialDays}-day free trial, so
          you pay nothing today and we remind you before it ends.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Card className="flex flex-col">
          <p className="label-kicker">Yearly</p>
          <p className="mt-4 text-4xl font-black tracking-tight text-ink">
            {site.pricing.yearly}
          </p>
          <p className="mt-3 text-[0.95rem] text-mist">
            Best value for building a lasting practice. Includes a{" "}
            {site.pricing.trialDays}-day free trial on eligible plans.
          </p>
          <div className="mt-7">
            <AppStoreButton size="md" />
          </div>
        </Card>

        <Card className="flex flex-col">
          <p className="label-kicker">Monthly</p>
          <p className="mt-4 text-4xl font-black tracking-tight text-ink">
            {site.pricing.monthly}
          </p>
          <p className="mt-3 text-[0.95rem] text-mist">
            Month to month, cancel anytime in your App Store settings.
          </p>
          <div className="mt-7">
            <AppStoreButton size="md" />
          </div>
        </Card>
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-faint">
        Prices are set in the App Store and may vary by region and over time.
        Subscriptions renew automatically until cancelled. You can manage or
        cancel anytime under your Apple ID. See the{" "}
        <Link href="/terms" className="text-steel underline underline-offset-4">
          Terms of Use
        </Link>{" "}
        for the full details.
      </p>
    </Section>
  );
}

/* ------------------------------------------------------------------ FAQ */
function FaqSection() {
  return (
    <Section id="faq" className="py-24">
      <div className="max-w-3xl">
        <Kicker>FAQ</Kicker>
        <h2 className="mt-5 text-balance text-4xl font-black tracking-tight sm:text-5xl">
          The honest answers.
        </h2>
      </div>
      <Faq />
    </Section>
  );
}

/* -------------------------------------------------------- Download call */
function DownloadCta() {
  return (
    <Section id="download" className="py-24">
      <div className="relative overflow-hidden rounded-[28px] border border-line bg-surface/60 px-8 py-20 text-center sm:px-16">
        <Kicker>Tonight</Kicker>
        <h2 className="mx-auto mt-5 max-w-2xl text-balance text-4xl font-black tracking-tight sm:text-6xl">
          Tonight could be the night.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
          Set your cue, rest easy, and let Lucy watch for the moment you can
          wake up inside the dream.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppStoreButton size="lg" />
          <a
            href={`mailto:${site.supportEmail}`}
            className="text-sm text-faint transition-colors hover:text-ink"
          >
            Questions first? Talk to us.
          </a>
        </div>
      </div>
    </Section>
  );
}
