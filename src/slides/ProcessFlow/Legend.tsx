import { DECISION_COUNT, STEPS } from '@/data/processFlow';

export function Legend({ step }: { step: number }) {
  return (
    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-stone-500">
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full border border-amber-500" />
        Process step
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rotate-45 border border-red-600 bg-red-950" />
        Decision point ({DECISION_COUNT})
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-4 border-t border-dashed border-red-500" />
        ‘No’ path
      </span>
      <span className="ml-auto text-stone-400">
        Step {step + 1} of {STEPS.length}
      </span>
    </div>
  );
}
