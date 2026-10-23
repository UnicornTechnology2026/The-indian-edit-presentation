import { OUTLET_OWNERS, OUTLET_PRINCIPLES, OUTLET_STEPS } from "@/data/outlet";
import { cx } from "@/utils/cx";
import { delay } from "@/utils/anim";

export function OutletSlide() {
  return (
    <div className="p-5 md:p-10 max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 text-[11px] tracking-[.35em] text-amber-500 uppercase">
          <span className="draw-x w-10 h-px bg-amber-500" />
          Execution at the Outlet
        </div>

        <h2
          style={delay(100)}
          className="rise font-serif text-3xl md:text-5xl text-amber-50 mt-1"
        >
          Five simple steps.
        </h2>
        <p
          style={delay(220)}
          className="rise text-stone-400 mt-2 text-base max-w-2xl"
        >
          The same routine at every outlet, so every guest gets the same
          experience. The brand team sets it up and reviews it. Promoter run it
          on the day.
        </p>
      </div>

      {/* Mobile: vertical list. Desktop: one row with a connecting line. */}
      <div className="relative">
        <div
          style={delay(300)}
          className="draw-x hidden md:block absolute left-[10%] right-[10%] top-[34px] h-px bg-amber-500/30"
        />
        <div
          style={delay(300)}
          className="draw-y md:hidden absolute left-[33px] top-8 bottom-8 w-px bg-amber-500/30"
        />

        <ol className="grid md:grid-cols-5 gap-6 md:gap-3">
          {OUTLET_STEPS.map((step, i) => {
            const owner = OUTLET_OWNERS[step.owner];
            return (
              <li
                key={step.title}
                style={delay(350 + i * 160)}
                className="rise relative flex md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0"
              >
                <span
                  style={delay(400 + i * 160)}
                  className="pop relative z-10 shrink-0 w-[68px] h-[68px] rounded-full bg-[#14080b] border border-amber-400/70 flex items-center justify-center text-3xl"
                >
                  {step.icon}
                </span>
                <div className="md:mt-4">
                  <div className="text-[11px] tracking-[.25em] text-amber-500">
                    0{i + 1}
                  </div>
                  <div className="font-serif text-2xl text-amber-50 leading-tight">
                    {step.title}
                  </div>
                  <p className="text-stone-200 text-sm mt-1">{step.text}</p>
                  <ul className="mt-2 space-y-1">
                    {step.details.map((d) => (
                      <li
                        key={d}
                        className="text-stone-400 text-xs leading-snug"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={cx(
                      "inline-block mt-3 px-2.5 py-0.5 rounded-full text-[11px] border",
                      owner.className,
                    )}
                  >
                    {owner.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-3">
        {OUTLET_PRINCIPLES.map((p, i) => (
          <div
            key={p.title}
            style={delay(1200 + i * 120)}
            className="rise lift rounded-xl border border-amber-500/20 bg-white/[0.04] px-4 py-3"
          >
            <div className="font-serif text-lg text-amber-50">{p.title}</div>
            <div className="text-stone-400 text-sm mt-0.5">{p.text}</div>
          </div>
        ))}
      </div>

      <div
        style={delay(1600)}
        className="rise mt-4 rounded-xl border border-dashed border-amber-500/30 px-5 py-3 flex items-center gap-3 text-stone-200 text-sm"
      >
        <span
          className="spin-slow text-amber-400 text-xl"
          style={{ animationDuration: "6s" }}
        >
          ↻
        </span>
        <span>
          Results from <b className="text-amber-100">Report</b> improve the next{" "}
          <b className="text-amber-100">Brief</b>.
        </span>
      </div>
    </div>
  );
}
