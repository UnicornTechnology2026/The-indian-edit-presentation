import type { RefObject } from 'react';
import { LAST_STEP, STEPS } from '@/data/processFlow';
import { PhaseBands } from './PhaseBands';
import { StepNode } from './StepNode';
import { TRACK_INSET, TRACK_SPAN, type Branch } from './constants';

interface TrackProps {
  step: number;
  branch: Branch;
  onSelect: (index: number) => void;
  railRef: RefObject<HTMLDivElement>;
}

/** Horizontal track: phase bands, progress line and one node per step. */
export function Track({ step, branch, onSelect, railRef }: TrackProps) {
  return (
    <div ref={railRef} className="overflow-x-auto pb-2 -mx-2 px-2">
      <div className="min-w-[920px]">
        <PhaseBands />
        <div className="relative">
          {/* grey base line */}
          <div
            className="absolute top-6 h-[3px] rounded bg-white/10"
            style={{ left: `${TRACK_INSET}%`, right: `${TRACK_INSET}%` }}
          />
          {/* gold progress line */}
          <div
            className="absolute top-6 h-[3px] rounded bg-gradient-to-r from-amber-700 via-amber-500 to-amber-300 transition-all duration-700"
            style={{ left: `${TRACK_INSET}%`, width: `${(step / LAST_STEP) * TRACK_SPAN}%` }}
          />
          <div className="grid grid-cols-11">
            {STEPS.map((s, i) => (
              <StepNode
                key={s.title}
                step={s}
                index={i}
                active={i === step}
                done={i < step}
                showNo={i === step && branch === 'no'}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
