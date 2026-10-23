import { Fragment, useState } from 'react';
import { Card, SlideHeading } from '@/components/ui';
import { ARCHITECTURE_LAYERS } from '@/data/architecture';
import { cx } from '@/utils/cx';

export function ArchitectureSlide() {
  const [hovered, setHovered] = useState<number | null>(null);
  const lastIndex = ARCHITECTURE_LAYERS.length - 1;

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="09 · Technology Architecture"
        title="Proposed layered architecture"
        subtitle="Indicative design for discussion with the technology team; final choices to be confirmed."
      />
      <div className="flex flex-col md:flex-row items-stretch gap-2">
        {ARCHITECTURE_LAYERS.map((layer, i) => (
          <Fragment key={layer.name}>
            <Card
              className={cx('flex-1 p-4 transition cursor-default', hovered === i && '!border-amber-400 bg-amber-500/10')}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="text-3xl">{layer.icon}</div>
              <div className="text-amber-100 font-medium mt-1">{layer.name}</div>
              <div className="text-stone-400 text-sm mt-1">{layer.description}</div>
            </Card>
            {i < lastIndex && <span className="text-amber-500 self-center rotate-90 md:rotate-0">→</span>}
          </Fragment>
        ))}
      </div>
      <Card className="p-3 mt-4 text-center text-stone-400 text-sm">
        Outlet staff access redemption status through the same app layer · All data flows into the Admin &amp;
        analytics layer
      </Card>
    </div>
  );
}
