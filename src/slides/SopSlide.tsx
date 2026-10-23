import { useState } from 'react';
import { SlideHeading } from '@/components/ui';
import { SOP_LANES, SOP_STEPS } from '@/data/sop';
import { cx } from '@/utils/cx';

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
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="07 · Outlet SOP Diagram"
        title="Swimlane: who does what"
        subtitle="Tap a step to tick it off and follow the routine."
      />

      <div className="overflow-x-auto">
        <div className="min-w-[760px]">
          {SOP_LANES.map((laneName, laneIndex) => (
            <div key={laneName} className="flex border-b border-amber-500/15">
              <div className="w-28 shrink-0 py-4 text-amber-400 text-sm font-medium">{laneName}</div>
              <div className="grid grid-cols-6 gap-2 flex-1 py-2">
                {SOP_STEPS.map((step, i) =>
                  step.lane === laneIndex ? (
                    <button
                      key={step.title}
                      onClick={() => toggle(i)}
                      className={cx(
                        'rounded-lg p-2 text-xs text-left border',
                        done.has(i)
                          ? 'bg-amber-500 text-black border-amber-400'
                          : 'bg-white/[0.04] border-amber-500/30 text-stone-200',
                      )}
                    >
                      <b>
                        {i + 1}. {step.title}
                      </b>
                      <br />
                      {step.description}
                    </button>
                  ) : (
                    <div key={step.title} /> // empty cell keeps the grid aligned
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 flex-1 rounded bg-white/10">
          <div
            className="h-full bg-amber-500 rounded transition-all"
            style={{ width: `${(done.size / total) * 100}%` }}
          />
        </div>
        <span className="text-stone-400 text-sm">
          {done.size}/{total} steps
        </span>
      </div>
    </div>
  );
}
