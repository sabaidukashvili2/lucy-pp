import Link from "next/link";

export function LegalLayout({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="text-sm text-mist transition-colors hover:text-ink"
      >
        &larr; Back to Lucyd
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-faint">Last updated: {updated}</p>
        {intro && (
          <p className="mt-6 text-lg leading-relaxed text-mist">{intro}</p>
        )}
      </header>

      <div className="hairline my-12" />

      <div className="legal-prose">{children}</div>
    </article>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 text-2xl font-bold tracking-tight text-ink">
      {children}
    </h2>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[1.02rem] leading-relaxed text-mist">{children}</p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mb-4 space-y-2.5 pl-1">{children}</ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-[1.02rem] leading-relaxed text-mist">
      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-steel" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
