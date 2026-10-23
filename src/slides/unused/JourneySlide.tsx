import { useState } from 'react';
import { Card, SlideHeading } from '@/components/ui';
import { JOURNEY } from '@/data/journey';
import { cx } from '@/utils/cx';

export function JourneySlide() {
  const [selected, setSelected] = useState(0);
  const step = JOURNEY[selected];

  const details = [
    { label: '🧑 Consumer action', value: step.consumerAction },
    { label: '📱 App touchpoint', value: step.appTouchpoint },
    { label: '🧑‍💼 Outlet staff', value: step.staffRole },
  ];

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="03 · Proposed Consumer Journey"
        title="Seven steps, three touchpoints"
        subtitle="Select a step to see the consumer action, app touchpoint and outlet staff involvement."
      />

      <div className="flex gap-1 overflow-x-auto pb-2">
        {JOURNEY.map((s, i) => (
          <button
            key={s.name}
            onClick={() => setSelected(i)}
            className={cx(
              'min-w-[110px] flex-1 rounded-lg p-3 text-left border',
              selected === i
                ? 'bg-amber-500 text-black border-amber-400'
                : 'border-amber-500/20 bg-white/[0.04] text-stone-200 hover:border-amber-500/60',
            )}
          >
            <div className="text-xs opacity-70">Step {i + 1}</div>
            <div className="font-medium text-sm leading-tight">{s.name}</div>
            {s.optional && <div className="text-[10px] mt-1 uppercase">Optional</div>}
          </button>
        ))}
      </div>

      <div key={selected} className="mt-4 grid md:grid-cols-3 gap-3 fade">
        {details.map((d) => (
          <Card key={d.label} className="p-5">
            <div className="text-amber-400 text-sm mb-2">{d.label}</div>
            <div className="text-stone-200">{d.value}</div>
          </Card>
        ))}
      </div>

      <div className="mt-4 flex items-center text-xs text-stone-400 gap-2">
        <span className="w-3 h-3 rounded bg-amber-500" />
        Selected
        <span className="ml-4 border border-dashed border-stone-500 px-2 rounded">
          Optional step: Redeem or Continue
        </span>
      </div>
    </div>
  );
}
