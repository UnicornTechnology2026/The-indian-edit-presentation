import { LAST_STEP } from '@/data/processFlow';

interface ControlsProps {
  step: number;
  playing: boolean;
  onPrev: () => void;
  onNext: () => void;
  onTogglePlay: () => void;
}

const BASE = 'px-3.5 py-1.5 rounded-full text-sm border transition disabled:opacity-30 ';
const GHOST = BASE + 'border-amber-500/40 text-amber-300';
const PRIMARY = BASE + 'bg-amber-500 border-amber-400 text-black font-medium hover:bg-amber-400 min-w-[132px]';

function playLabel(playing: boolean, step: number): string {
  if (playing) return '❚❚ Pause';
  if (step >= LAST_STEP) return '↺ Replay journey';
  return '▶ Play journey';
}

export function Controls({ step, playing, onPrev, onNext, onTogglePlay }: ControlsProps) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <button onClick={onPrev} disabled={step === 0} className={GHOST} aria-label="Previous step">
        ←
      </button>
      <button onClick={onTogglePlay} className={PRIMARY}>
        {playLabel(playing, step)}
      </button>
      <button onClick={onNext} disabled={step >= LAST_STEP} className={GHOST} aria-label="Next step">
        →
      </button>
    </div>
  );
}
