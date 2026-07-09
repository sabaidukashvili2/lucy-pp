import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, H2, P, UL, LI } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Lucyd handles your data. Short version: your journal and dream data stay on your device, there are no accounts, and we do not track you.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="July 7, 2026"
      intro="Lucyd is designed so that your dream life stays yours. There are no accounts and no server of ours collecting your entries. This policy explains, plainly, what the app does and does not do with your information."
    >
      <H2>The short version</H2>
      <UL>
        <LI>No user accounts, no login, and no backend server run by us.</LI>
        <LI>
          Your journal entries, goals, dream signs, reminders, and preferences
          are stored on your device.
        </LI>
        <LI>
          Dream-sign detection runs on-device using Apple&rsquo;s
          NaturalLanguage framework. Your journal text is not sent anywhere.
        </LI>
        <LI>No third-party analytics SDK, no ad tracking, and no data selling.</LI>
        <LI>Our App Store privacy label reflects this: no tracking.</LI>
      </UL>

      <H2>Who we are</H2>
      <P>
        Lucyd is made by {site.developer} (&ldquo;we,&rdquo; &ldquo;us&rdquo;).
        The app&rsquo;s bundle identifier is{" "}
        <code className="text-steel">{site.bundleId}</code>. You can reach us
        anytime at{" "}
        <a
          href={`mailto:${site.supportEmail}`}
          className="text-steel underline underline-offset-4"
        >
          {site.supportEmail}
        </a>
        .
      </P>

      <H2>Information stored on your device</H2>
      <P>
        The heart of Lucyd is your practice, and it lives locally. The following
        is created and kept on your device, not on our servers:
      </P>
      <UL>
        <LI>Dream journal entries you write as text.</LI>
        <LI>Voice recordings and their transcripts, when you journal by voice.</LI>
        <LI>Dream signs and recurring symbols that Lucyd tags for you.</LI>
        <LI>Your goals, trigger reminders, cue choices, and app preferences.</LI>
      </UL>
      <P>
        Because this data is on your device, deleting the app removes it. We have
        no copy to delete for you, because we never had one.
      </P>

      <H2>Permissions the app may request</H2>
      <P>
        Lucyd only asks for what a given feature needs, and you can decline or
        change these anytime in your iOS Settings.
      </P>
      <UL>
        <LI>
          <strong className="text-ink">Notifications.</strong> Used to schedule
          your reality-check reminders and night-time prompts. These are local
          notifications set on your device, not push messages from a server.
        </LI>
        <LI>
          <strong className="text-ink">Microphone and Speech.</strong> Used only
          when you choose to journal by voice. Recording and transcription
          support your journaling and are not sent to us.
        </LI>
        <LI>
          <strong className="text-ink">HealthKit.</strong> Optional. If you
          connect an Apple Watch, Lucyd can read sleep and heart data to detect
          REM more precisely and time your cue. This is read on-device to run
          the feature and is not shared with us. Lucyd does not write your health
          data to any server.
        </LI>
      </UL>

      <H2>Subscriptions and payments</H2>
      <P>
        Lucyd&rsquo;s subscriptions are handled through Apple In-App Purchase and
        managed with RevenueCat, a subscription infrastructure provider.
      </P>
      <UL>
        <LI>
          Apple processes all payment information. We never see your name, card
          number, or billing details.
        </LI>
        <LI>
          RevenueCat receives a random, app-generated identifier and your
          purchase status so the app can unlock the features you paid for and
          restore purchases across your devices. It does not receive your name
          or payment details from us.
        </LI>
        <LI>
          You can review RevenueCat&rsquo;s and Apple&rsquo;s own privacy
          practices in their respective policies.
        </LI>
      </UL>

      <H2>What we do not do</H2>
      <UL>
        <LI>We do not run analytics or advertising SDKs in the app.</LI>
        <LI>We do not track you across apps or websites.</LI>
        <LI>We do not sell or rent your information to anyone.</LI>
        <LI>We do not build profiles of you for advertising.</LI>
      </UL>

      <H2>Children</H2>
      <P>
        Lucyd is not directed to children under 13, and we do not knowingly
        collect information from them. If you believe a child has provided
        information through the app, contact us and we will help.
      </P>

      <H2>Your choices and control</H2>
      <P>
        You are in control at all times. You can edit or delete individual
        journal entries in the app, revoke any permission in iOS Settings, and
        remove all locally stored data by deleting the app. To manage or cancel
        a subscription, use your Apple ID subscription settings.
      </P>

      <H2>Changes to this policy</H2>
      <P>
        If we change how the app handles data, we will update this page and the
        &ldquo;last updated&rdquo; date above. Meaningful changes will be
        reflected in the app or on this site.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about privacy? Email{" "}
        <a
          href={`mailto:${site.supportEmail}`}
          className="text-steel underline underline-offset-4"
        >
          {site.supportEmail}
        </a>
        . You can also read our{" "}
        <Link href="/terms" className="text-steel underline underline-offset-4">
          Terms of Use
        </Link>
        .
      </P>
    </LegalLayout>
  );
}
