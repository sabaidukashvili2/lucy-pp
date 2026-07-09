import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="label-kicker">Lost the thread</p>
      <h1 className="mt-5 text-5xl font-black tracking-tight">
        This page slipped away.
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-mist">
        Like most dreams, it is hard to find once you wake. Let us get you back
        to somewhere solid.
      </p>
      <Link
        href="/"
        className="mt-9 rounded-full bg-ink px-7 py-4 text-[0.98rem] font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
      >
        Back to Lucyd
      </Link>
    </div>
  );
}
