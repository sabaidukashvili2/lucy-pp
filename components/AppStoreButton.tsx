import { site } from "@/lib/site";

/**
 * Primary download button: white fill, black text (per brand rules).
 * When the App Store listing isn't live yet we show an honest "coming to
 * the App Store" state instead of a dead link.
 */
export function AppStoreButton({
  size = "lg",
  className = "",
}: {
  size?: "lg" | "md";
  className?: string;
}) {
  const pad = size === "lg" ? "px-7 py-4 text-[0.98rem]" : "px-5 py-3 text-sm";

  const AppleGlyph = (
    <svg width="18" height="18" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );

  if (!site.appStoreLive) {
    return (
      <span
        className={`inline-flex items-center gap-3 rounded-full border border-line-strong bg-transparent font-semibold text-ink ${pad} ${className}`}
      >
        {AppleGlyph}
        <span className="flex flex-col leading-none text-left">
          <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-steel">
            Coming soon
          </span>
          <span className="mt-1">On the App Store</span>
        </span>
      </span>
    );
  }

  return (
    <a
      href={site.appStoreUrl}
      className={`group inline-flex items-center gap-3 rounded-full bg-ink font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5 ${pad} ${className}`}
    >
      {AppleGlyph}
      <span className="flex flex-col leading-none text-left">
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-black/60">
          Download on the
        </span>
        <span className="mt-1">App Store</span>
      </span>
    </a>
  );
}
