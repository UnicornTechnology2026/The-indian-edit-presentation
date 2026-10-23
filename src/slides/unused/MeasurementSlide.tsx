import { useState } from 'react';
import { Card, SlideHeading } from '@/components/ui';
import { FUNNEL, INSIGHT_CARDS } from '@/data/measurement';
import { cx } from '@/utils/cx';

export function MeasurementSlide() {
  const [selected, setSelected] = useState(0);
  const stage = FUNNEL[selected];

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="09 · Measurement & Reporting"
        title="What the brand team will track"
        subtitle="Illustrative funnel shape — not actual figures."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          {FUNNEL.map((s, i) => (
            <button key={s.label} onClick={() => setSelected(i)} className="block w-full text-left">
              <div
                className={cx(
                  'h-11 rounded-lg flex items-center px-4 text-sm transition-all',
                  selected === i ? 'bg-amber-500 text-black' : 'bg-amber-500/25 text-amber-100',
                )}
                style={{ width: `${s.width}%` }}
              >
                {s.label}
              </div>
            </button>
          ))}
          <Card key={selected} className="p-4 mt-3 text-stone-300 text-sm fade">
            <b className="text-amber-300">{stage.label}:</b> {stage.description}
          </Card>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {INSIGHT_CARDS.map((c) => (
            <Card key={c.label} className="p-4">
              <div className="text-amber-100 font-medium">{c.label}</div>
              <div className="text-stone-400 text-sm">{c.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
