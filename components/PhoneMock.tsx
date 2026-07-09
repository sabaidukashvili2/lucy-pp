/**
 * Phone mockup showing a real screenshot of the Lucyd app.
 * Drop the screenshot in public/image.png.
 */
export function PhoneMock() {
  return (
    <div className="relative mx-auto w-[264px] sm:w-[292px]">
      {/* device frame */}
      <div className="relative rounded-[42px] border border-line-strong bg-surface p-2.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[34px] border border-line bg-void">
          <img
            src="/image.png"
            alt="The Lucyd app's night screen with the cue set for the REM window"
            className="block aspect-[9/19.5] w-full object-cover"
          />
        </div>
      </div>

      {/* side buttons */}
      <span className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-full bg-line-strong" />
      <span className="absolute -left-[3px] top-44 h-12 w-[3px] rounded-full bg-line-strong" />
      <span className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-full bg-line-strong" />
    </div>
  );
}
