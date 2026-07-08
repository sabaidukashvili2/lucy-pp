import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, H2, P, UL, LI } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms for using Lucy, including subscriptions, auto-renewal, free trials, and how to cancel.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      updated="July 7, 2026"
      intro="These terms cover your use of Lucy. By downloading or using the app, you agree to them. Please read the subscription section closely so there are no surprises."
    >
      <H2>The app</H2>
      <P>
        Lucy is an iOS app by {site.developer} that helps you practice lucid
        dreaming using a science-backed routine. Lucy is a wellness and training
        tool. It is not a medical device and does not diagnose, treat, or cure
        any condition. If you have a sleep disorder or health concern, please
        talk to a qualified professional.
      </P>

      <H2>License</H2>
      <P>
        We grant you a personal, non-transferable, non-exclusive license to use
        Lucy on Apple devices you own or control, subject to the App Store Terms
        of Service and these terms. You agree not to copy, reverse engineer, or
        resell the app except where the law allows.
      </P>

      <H2>Subscriptions</H2>
      <P>
        Lucy is a paid app. A single membership unlocks the full app (a hard
        paywall). Subscriptions are auto-renewing and are sold through Apple
        In-App Purchase.
      </P>
      <UL>
        <LI>
          Plans include a yearly option (about {site.pricing.yearly}) and a
          monthly option (about {site.pricing.monthly}), along with trial and
          premium variants. Exact pricing is shown in the app and the App Store,
          and it may vary by region and change over time.
        </LI>
        <LI>
          Some plans include a {site.pricing.trialDays}-day free trial. You pay
          nothing on the day you start, we remind you before the trial ends, and
          you are then billed unless you cancel first.
        </LI>
        <LI>
          Your subscription renews automatically at the end of each period
          unless you turn off auto-renew at least 24 hours before it ends.
        </LI>
        <LI>
          Your Apple ID is charged at confirmation of purchase and at each
          renewal.
        </LI>
      </UL>

      <H2>Free trials</H2>
      <P>
        If your plan offers a free trial, any unused portion is forfeited when
        you buy a subscription, where applicable. If you do not want to be
        charged, cancel at least 24 hours before the trial ends.
      </P>

      <H2>Managing and cancelling</H2>
      <P>
        You can manage or cancel your subscription anytime in your App Store
        settings, under your Apple ID. Cancelling stops the next renewal. Access
        continues until the end of the period you already paid for.
      </P>

      <H2>Refunds</H2>
      <P>
        Purchases are processed by Apple, so refund requests are handled by Apple
        under the App Store Terms of Service. We do not process payments and
        cannot issue charges or refunds directly.
      </P>

      <H2>Your content</H2>
      <P>
        Your journal entries and other content you create stay on your device
        and belong to you. See our{" "}
        <Link href="/privacy" className="text-steel underline underline-offset-4">
          Privacy Policy
        </Link>{" "}
        for how the app handles your information. You are responsible for keeping
        your own device backups if you want to preserve your entries.
      </P>

      <H2>Acceptable use</H2>
      <P>
        Use Lucy for your own personal practice. Do not use the app to break the
        law, interfere with its operation, or attempt to access parts of the
        service you are not meant to.
      </P>

      <H2>No guarantees</H2>
      <P>
        Lucid dreaming is a skill that varies from person to person. Lucy applies
        methods drawn from published research, but results differ and are not
        guaranteed. The app is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, to the fullest extent
        permitted by law.
      </P>

      <H2>Limitation of liability</H2>
      <P>
        To the extent permitted by law, {site.developer} is not liable for
        indirect, incidental, or consequential damages arising from your use of
        the app. Nothing in these terms limits rights you have that cannot be
        limited by law.
      </P>

      <H2>Changes</H2>
      <P>
        We may update these terms as the app evolves. When we do, we will change
        the &ldquo;last updated&rdquo; date above. Continuing to use Lucy after a
        change means you accept the updated terms.
      </P>

      <H2>Contact</H2>
      <P>
        Questions about these terms? Email{" "}
        <a
          href={`mailto:${site.supportEmail}`}
          className="text-steel underline underline-offset-4"
        >
          {site.supportEmail}
        </a>
        .
      </P>
    </LegalLayout>
  );
}
