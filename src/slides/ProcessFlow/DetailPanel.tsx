import { phaseOf, STEPS, type DecisionStep, type FlowStep } from '@/data/processFlow';
import { cx } from '@/utils/cx';
import type { Branch } from './constants';

/* ---------------- Decision: Yes / No cards ---------------- */

interface DecisionDetailProps {
  current: DecisionStep;
  next: FlowStep;
  branch: Branch;
  onBranch: (branch: Branch) => void;
}

function branchCardTone(selected: boolean, key: Branch): string {
  if (!selected) return 'border-white/10 bg-white/[0.03] hover:border-amber-500/40';
  return key === 'yes' ? 'bg-amber-500/20 border-amber-400' : 'bg-red-900/40 border-red-400';
}

function DecisionDetail({ current, next, branch, onBranch }: DecisionDetailProps) {
  const isYes = branch === 'yes';
  const options: { key: Branch; label: string; text: string }[] = [
    { key: 'yes', label: '✓ YES', text: `Continues to “${next.title}”.` },
    { key: 'no', label: '✕ NO', text: current.detail },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((o) => (
          <button
            key={o.key}
            onClick={() => onBranch(o.key)}
            className={cx('text-left rounded-xl p-4 border transition', branchCardTone(branch === o.key, o.key))}
          >
            <div
              className={cx(
                'text-xs font-semibold tracking-widest mb-1',
                o.key === 'yes' ? 'text-amber-400' : 'text-red-400',
              )}
            >
              {o.label}
            </div>
            <div className="text-sm text-stone-200">{o.text}</div>
          </button>
        ))}
      </div>

      <div className="mt-4 flex items-center flex-wrap gap-2 text-xs">
        <span className="px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 text-amber-100">
          {current.title}
        </span>
        <span className={isYes ? 'text-amber-400' : 'text-red-400'}>── {isYes ? 'Yes' : 'No'} ──▶</span>
        <span
          className={cx(
            'px-3 py-1.5 rounded-lg border',
            isYes ? 'border-amber-500/40 text-amber-100' : 'border-red-500/50 bg-red-950/50 text-red-200',
          )}
        >
          {isYes ? next.title : current.noLabel}
        </span>
      </div>
    </div>
  );
}

/* ---------------- Process: description + "next up" ---------------- */

interface ProcessDetailProps {
  current: FlowStep;
  next: FlowStep | undefined;
  onNext: () => void;
}

function ProcessDetail({ current, next, onNext }: ProcessDetailProps) {
  return (
    <div>
      <p className="text-lg text-stone-200 leading-relaxed">{current.detail}</p>

      {next ? (
        <button
          onClick={onNext}
          className="mt-5 w-full text-left rounded-xl p-4 border border-amber-500/30 bg-white/[0.04] hover:border-amber-400 hover:bg-amber-500/10 transition flex items-center gap-3"
        >
          <span className="text-2xl">{next.icon}</span>
          <span className="flex-1">
            <span className="block text-[10px] tracking-[.25em] uppercase text-stone-500">Next up</span>
            <span className="text-amber-100">{next.title}</span>
          </span>
          <span className="text-amber-400 text-xl">→</span>
        </button>
      ) : (
        <div className="mt-5 rounded-xl p-4 border border-amber-500/30 bg-amber-500/10 text-amber-100">
          Journey complete — every visit feeds the reporting layer.
        </div>
      )}
    </div>
  );
}

/* ---------------- Panel ---------------- */

interface DetailPanelProps {
  step: number;
  branch: Branch;
  onBranch: (branch: Branch) => void;
  onSelect: (index: number) => void;
}

export function DetailPanel({ step, branch, onBranch, onSelect }: DetailPanelProps) {
  const current = STEPS[step];
  const next: FlowStep | undefined = STEPS[step + 1];

  return (
    <div
      key={step}
      className="fade mt-5 rounded-2xl border border-amber-500/25 bg-gradient-to-br from-white/[0.06] to-transparent p-5 md:p-7 grid md:grid-cols-5 gap-6"
    >
      {/* left: identity of the step */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-3">
          <span className="font-serif text-6xl leading-none text-amber-500/80">
            {String(step + 1).padStart(2, '0')}
          </span>
          <span className="text-4xl">{current.icon}</span>
        </div>
        <div className="text-[11px] tracking-[.25em] uppercase text-stone-500 mt-3">
          {current.type === 'decision' ? 'Decision point' : 'Process step'} · {phaseOf(step)}
        </div>
        <h3 className="font-serif text-3xl text-amber-50 mt-1 leading-tight">{current.title}</h3>
        <div className="flex gap-1.5 flex-wrap mt-3">
          {current.who.map((w) => (
            <span key={w} className="text-xs px-2.5 py-1 rounded-full border border-amber-500/40 text-amber-300">
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* right: what happens */}
      <div className="md:col-span-3">
        {current.type === 'decision' && next ? (
          <DecisionDetail current={current} next={next} branch={branch} onBranch={onBranch} />
        ) : (
          <ProcessDetail current={current} next={next} onNext={() => onSelect(step + 1)} />
        )}
      </div>
    </div>
  );
}
