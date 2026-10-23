import type { FlowStep } from "@/data/processFlow";
import { cx } from "@/utils/cx";
import { delay } from "@/utils/anim";

interface StepNodeProps {
  step: FlowStep;
  index: number;
  active: boolean;
  done: boolean;
  showNo: boolean;
  onSelect: (index: number) => void;
}

function nodeTone(active: boolean, done: boolean, decision: boolean): string {
  if (active)
    return "bg-amber-500 border-amber-200 text-black shadow-[0_0_30px_rgba(245,166,35,.6)]";
  if (done) return "bg-amber-700/50 border-amber-500 text-amber-100";
  if (decision) return "bg-red-950 border-red-700/70 text-red-200";
  return "bg-black/70 border-stone-600 text-stone-400";
}

function labelTone(active: boolean, done: boolean): string {
  if (active) return "text-amber-200 font-medium";
  if (done) return "text-stone-300";
  return "text-stone-500 group-hover:text-stone-300";
}

function NoBranch({
  label,
  highlighted,
}: {
  label: string;
  highlighted: boolean;
}) {
  return (
    <span className="mt-2 flex flex-col items-center">
      <span
        className={cx(
          "h-4 border-l border-dashed",
          highlighted ? "border-red-400" : "border-red-800",
        )}
      />
      <span
        className={cx(
          "text-[9.5px] px-2 py-1 rounded-full border text-center leading-tight transition",
          highlighted
            ? "bg-red-600 border-red-400 text-white"
            : "border-red-800/60 text-red-300/80 bg-red-950/40",
        )}
      >
        ✕ {label}
      </span>
    </span>
  );
}

export function StepNode({
  step,
  index,
  active,
  done,
  showNo,
  onSelect,
}: StepNodeProps) {
  const decision = step.type === "decision";
  const shape = cx(
    "relative border-2 flex items-center justify-center transition-all duration-300 group-hover:border-amber-300",
    nodeTone(active, done, decision),
    active && "scale-110",
  );

  return (
    <button
      data-active={active ? "1" : "0"}
      onClick={() => onSelect(index)}
      style={delay(300 + index * 70)}
      className="pop group flex flex-col items-center px-0.5 focus:outline-none"
    >
      <div className="relative h-12 w-12 flex items-center justify-center">
        {decision ? (
          <div className={cx(shape, "w-9 h-9 rotate-45 rounded-md")}>
            {active && (
              <span className="absolute inset-0 rounded-md bg-amber-400/40 animate-ping" />
            )}
            <span className="-rotate-45 font-semibold relative">
              {done ? "✓" : "?"}
            </span>
          </div>
        ) : (
          <div className={cx(shape, "w-12 h-12 rounded-full text-xl")}>
            {active && (
              <span className="absolute inset-0 rounded-full bg-amber-400/40 animate-ping" />
            )}
            <span className="relative">{done ? "✓" : step.icon}</span>
          </div>
        )}
      </div>

      <span
        className={cx(
          "mt-2 text-[10.5px] leading-tight text-center",
          labelTone(active, done),
        )}
      >
        <span className="block text-[9px] opacity-60 mb-0.5">{index + 1}</span>
        {step.title}
      </span>

      {step.type === "decision" && (
        <NoBranch label={step.noLabel} highlighted={showNo} />
      )}
    </button>
  );
}
