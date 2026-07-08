/**
 * Minimal phone mockup showing Lucy's night screen. Pure markup, no images,
 * so it stays crisp on OLED. Deep black, white type, one steel accent.
 */
export function PhoneMock() {
  return (
    <div className="relative mx-auto w-[264px] sm:w-[292px]">
      {/* device frame */}
      <div className="relative rounded-[42px] border border-line-strong bg-surface p-2.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[34px] border border-line bg-void">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="flex h-[560px] flex-col px-6 pb-8 pt-14">
            {/* status row */}
            <div className="flex items-center justify-between text-[11px] text-faint">
              <span>1:24</span>
              <span className="label-kicker !text-[0.58rem] !tracking-[0.2em]">
                Wind-down
              </span>
            </div>

            {/* the breathing ring */}
            <div className="mt-14 flex flex-1 flex-col items-center justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center">
                <span className="absolute inset-0 rounded-full border border-line" />
                <span className="absolute inset-3 rounded-full border border-steel/50" />
                <span className="lucy-breathe absolute inset-6 rounded-full border border-steel/80" />
                <div className="text-center">
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-steel">
                    REM window
                  </p>
                  <p className="mt-1 text-2xl font-black tracking-tight text-ink">
                    Cue set
                  </p>
                </div>
              </div>

              <p className="mt-12 text-center text-[0.95rem] leading-relaxed text-mist">
                Rest easy.
                <br />
                Lucy&rsquo;s got the night.
              </p>
            </div>

            {/* bottom pill */}
            <div className="mt-6 rounded-full border border-line-strong px-5 py-3 text-center text-sm font-semibold text-ink">
              Good night
            </div>
          </div>
        </div>
      </div>

      {/* side buttons */}
      <span className="absolute -left-[3px] top-28 h-12 w-[3px] rounded-full bg-line-strong" />
      <span className="absolute -left-[3px] top-44 h-12 w-[3px] rounded-full bg-line-strong" />
      <span className="absolute -right-[3px] top-36 h-16 w-[3px] rounded-full bg-line-strong" />
    </div>
  );
}
