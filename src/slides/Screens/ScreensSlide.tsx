import { useState } from 'react';
import { PhoneFrame } from '@/components/phone/PhoneFrame';
import { SlideHeading } from '@/components/ui';
import { cx } from '@/utils/cx';
import { PHONE_SCREENS } from './phoneScreens';

export function ScreensSlide() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="05 · Illustrative Mobile Screens"
        title="Proposed UI concepts"
        subtitle="Concept layouts only — not screenshots of an existing product."
      />
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <PhoneFrame>
          <div key={selected} className="h-full fade">
            {PHONE_SCREENS[selected].render()}
          </div>
        </PhoneFrame>

        <div className="grid grid-cols-2 gap-2 flex-1 w-full">
          {PHONE_SCREENS.map((screen, i) => (
            <button
              key={screen.title}
              onClick={() => setSelected(i)}
              className={cx(
                'text-left rounded-lg p-3 border text-sm',
                selected === i
                  ? 'bg-amber-500 text-black border-amber-400'
                  : 'border-amber-500/20 bg-white/[0.04] text-stone-200 hover:border-amber-500/60',
              )}
            >
              <span className="opacity-60 mr-2">{i + 1}</span>
              {screen.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
