import { useState } from "react";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { SlideHeading } from "@/components/ui";
import { cx } from "@/utils/cx";
import { PHONE_SCREENS } from "./phoneScreens";
import { Callouts } from "./Callouts";

export function ScreensSlide() {
  const [selected, setSelected] = useState(0);
  const screen = PHONE_SCREENS[selected];

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker="05 · Illustrative Mobile Screens"
        title="Proposed UI concepts"
        subtitle="Concept layouts only — not screenshots of an existing product."
      />

      {/* Desktop: buttons on the left, phone in the middle, empty right column
          keeps the phone truly centred. Mobile: phone first, buttons below. */}
      <div className="grid gap-8 items-center lg:grid-cols-[1fr_auto_1fr]">
        {/* Phone / image (middle) */}
        <div className="order-1 lg:order-2 flex justify-center">
          {screen.image ? (
            <img
              key={selected}
              src={screen.image}
              alt={screen.title}
              className="fade w-full max-w-sm max-h-[70vh] object-contain rounded-xl"
            />
          ) : (
            screen.render && (
              <PhoneFrame>
                <div key={selected} className="h-full fade">
                  {screen.render()}
                </div>
              </PhoneFrame>
            )
          )}
        </div>

        {/* Buttons (left) */}
        <div className="order-2 lg:order-1 grid grid-cols-2 lg:grid-cols-1 gap-2 w-full max-w-md lg:max-w-xs lg:justify-self-start">
          {PHONE_SCREENS.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setSelected(i)}
              className={cx(
                "text-left rounded-lg p-3 border text-sm",
                selected === i
                  ? "bg-amber-500 text-black border-amber-400"
                  : "border-amber-500/20 bg-white/[0.04] text-stone-200 hover:border-amber-500/60",
              )}
            >
              <span className="opacity-60 mr-2">{i + 1}</span>
              {s.title}
            </button>
          ))}
        </div>

        <div
          key={selected}
          className="order-2 lg:order-3 flex justify-center lg:justify-start"
        >
          <Callouts items={screen.callouts ?? []} />
        </div>
      </div>
    </div>
  );
}
