import { PHASES } from "@/data/processFlow";
import { delay } from "@/utils/anim";

/**
 * Phase labels (Enter / Qualify / …) spanning the steps they cover.
 * `grid-cols-11` is static because Tailwind needs literal class names —
 * update it if the number of STEPS changes.
 */
export function PhaseBands() {
  return (
    <div className="grid grid-cols-11 mb-4">
      {PHASES.map((phase, i) => (
        <div
          key={phase.name}
          style={{ gridColumn: `span ${phase.count}`, ...delay(150 + i * 120) }}
          className="rise px-1"
        >
          <div className="text-[10px] tracking-[.25em] uppercase text-amber-500/80 text-center border-b border-amber-500/30 pb-1.5">
            {phase.name}
          </div>
        </div>
      ))}
    </div>
  );
}
