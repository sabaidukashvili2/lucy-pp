/**
 * Minimal Lucy wordmark. A thin steel ring (awareness / the moon) set
 * before the name in heavy Satoshi. No gradients, no glow.
 */
export function LucyMark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="9" cy="9" r="7.25" stroke="var(--color-steel)" strokeWidth="1.5" />
        <circle cx="11.4" cy="6.6" r="2.1" fill="var(--color-steel)" />
      </svg>
      <span className="text-[1.06rem] font-black tracking-tight text-ink">
        Lucy
      </span>
    </span>
  );
}
