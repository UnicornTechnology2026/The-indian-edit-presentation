import { useState } from "react";
import {
  SOP_LANES,
  SOP_LANE_STYLES,
  SOP_STEPS,
  type SopStep,
} from "@/data/sop";
import { cx } from "@/utils/cx";

interface StepCardProps {
  index: number;
  step: SopStep;
  done: boolean;
  onToggle: (index: number) => void;
}

function StepCard({ index, step, done, onToggle }: StepCardProps) {
  const style = SOP_LANE_STYLES[step.lane];
  const isLast = index === SOP_STEPS.length - 1;

  return (
    <button
      onClick={() => onToggle(index)}
      className={cx(
        "w-full text-left rounded-xl border p-3 transition",
        done ? "bg-white/[0.09]" : "bg-white/[0.04]",
        style.card,
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cx(
            "w-7 h-7 shrink-0 rounded-full border flex items-center justify-center text-xs font-semibold",
            done ? style.done : style.dot,
          )}
        >
          {done ? "✓" : index + 1}
        </span>
        <span className="font-serif text-lg text-amber-50 leading-tight">
          {step.title}
        </span>
      </div>
      <p className="text-stone-300 text-xs mt-2">{step.description}</p>
      {!isLast && (
        <p className="text-stone-500 text-[11px] mt-2">
          Then → step {index + 2}
        </p>
      )}
    </button>
  );
}

export function SopSlide() {
  // Set of completed step indexes.
  const [done, setDone] = useState<ReadonlySet<number>>(new Set());

  const toggle = (index: number) =>
    setDone((prev) => {
      const next = new Set(prev);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  const total = SOP_STEPS.length;

  return (
    <div className="p-5 md:p-10 max-w-6xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center gap-3 text-[11px] tracking-[.35em] text-amber-500 uppercase">
          <span className="w-10 h-px bg-amber-500" />
          Outlet SOP · Standard Operating Procedure
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-amber-50 mt-1">
          Who does what, step by step.
        </h2>
        <p className="text-stone-400 mt-2 text-base max-w-2xl">
          Follow the six steps in order. Tap a step to tick it off.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-5">
        {SOP_LANES.map((lane, i) => (
          <span
            key={lane}
            className={cx(
              "px-3 py-1 rounded-full text-xs border",
              SOP_LANE_STYLES[i].badge,
            )}
          >
            {lane}
          </span>
        ))}
      </div>

      {/* Mobile / tablet: one vertical flow */}
      <div className="lg:hidden relative">
        <div className="absolute left-[26px] top-6 bottom-6 w-px bg-amber-500/25" />
        <ol className="space-y-3">
          {SOP_STEPS.map((step, i) => (
            <li key={step.title} className="relative pl-[60px]">
              <span
                className={cx(
                  "absolute left-0 top-3 w-[52px] text-center text-[10px] leading-tight",
                  SOP_LANE_STYLES[step.lane].text,
                )}
              >
                {SOP_LANES[step.lane]}
              </span>
              <StepCard
                index={i}
                step={step}
                done={done.has(i)}
                onToggle={toggle}
              />
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop: swimlanes */}
      <div className="hidden lg:block rounded-2xl border border-amber-500/20 overflow-hidden">
        {SOP_LANES.map((lane, laneIndex) => (
          <div
            key={lane}
            className={cx(
              "flex",
              laneIndex > 0 && "border-t border-amber-500/15",
            )}
          >
            <div
              className={cx(
                "w-36 shrink-0 p-4 flex items-center text-sm font-medium border-r border-amber-500/15",
                SOP_LANE_STYLES[laneIndex].text,
              )}
            >
              {lane}
            </div>
            <div className="grid grid-cols-6 gap-2 flex-1 p-3">
              {SOP_STEPS.map((step, i) =>
                step.lane === laneIndex ? (
                  <StepCard
                    key={step.title}
                    index={i}
                    step={step}
                    done={done.has(i)}
                    onToggle={toggle}
                  />
                ) : (
                  <div key={step.title} /> // empty cell keeps the grid aligned
                ),
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Progress */}
      <div className="mt-5 flex items-center gap-3">
        <div className="h-2 flex-1 rounded bg-white/10">
          <div
            className="h-full bg-amber-500 rounded transition-all"
            style={{ width: `${(done.size / total) * 100}%` }}
          />
        </div>
        <span className="text-stone-400 text-sm">
          {done.size}/{total} steps
        </span>
        <button
          onClick={() => setDone(new Set())}
          className="px-3 py-1 rounded-full border border-amber-500/40 text-amber-300 text-xs"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
