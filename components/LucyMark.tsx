/**
 * Lucyd logo lockup. The logo image already contains the name, so no separate
 * text is rendered. Drop the artwork in public/logo.png (or change the src
 * below to /logo.svg). Height is fixed so it sits on the header/footer line;
 * width scales automatically.
 */
export function LucyMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Lucyd"
      className={`h-12 w-auto ${className}`}
    />
  );
}
