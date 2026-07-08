import Link from "next/link";
import { LucyMark } from "./LucyMark";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <LucyMark />
            <p className="mt-4 text-sm leading-relaxed text-mist">
              {site.tagline}
            </p>
            <p className="mt-4 text-xs text-faint">
              Built on real sleep science, not mysticism.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol title="Product">
              <FooterLink href="/#science">The science</FooterLink>
              <FooterLink href="/#how-it-works">How it works</FooterLink>
              <FooterLink href="/#pricing">Pricing</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
            </FooterCol>

            <FooterCol title="Legal">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Use</FooterLink>
            </FooterCol>

            <FooterCol title="Support">
              <FooterLink href="/support">Support</FooterLink>
              <FooterLink href={`mailto:${site.supportEmail}`}>
                Contact
              </FooterLink>
            </FooterCol>
          </div>
        </div>

        <div className="hairline mt-12" />

        <div className="mt-6 flex flex-col gap-2 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.developer}. All rights reserved.
          </p>
          <p>
            Made for better nights. Lucy stores your journal on your device.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-faint">
        {title}
      </h4>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-mist transition-colors hover:text-ink">
        {children}
      </Link>
    </li>
  );
}
