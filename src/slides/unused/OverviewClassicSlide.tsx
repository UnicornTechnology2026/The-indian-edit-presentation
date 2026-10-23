import { useState } from "react";
import { Card, SlideHeading } from "@/components/ui";
import { ACTORS, OBJECTIVES } from "@/data/overview";
import { cx } from "@/utils/cx";

/** Earlier card-based version of the overview. The wheel version (OverviewSlide) replaced it. */
export function OverviewClassicSlide() {
  const [selected, setSelected] = useState(0);
  const actor = ACTORS[selected];

  return (
    <div className="p-6 md:p-10">
      <SlideHeading
        kicker=" Strategic Overview"
        title="Turning every outlet visit into a connected brand moment"
        subtitle="One programme that links what consumers do on their phone with what happens at the outlet counter."
      />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {OBJECTIVES.map((o) => (
            <Card key={o.text} className="p-4 flex gap-3 items-center">
              <span className="text-2xl">{o.icon}</span>
              <span className="text-stone-200">{o.text}</span>
            </Card>
          ))}
        </div>

        <div>
          <div className="grid grid-cols-2 gap-3 relative">
            {ACTORS.map((a, i) => (
              <button
                key={a.name}
                onClick={() => setSelected(i)}
                className={cx(
                  "rounded-xl p-4 text-center border transition",
                  selected === i
                    ? "bg-amber-500/20 border-amber-400"
                    : "border-amber-500/20 bg-white/[0.04] hover:border-amber-500/60",
                )}
              >
                <div className="text-3xl">{a.icon}</div>
                <div className="text-amber-100 mt-1 font-medium">{a.name}</div>
              </button>
            ))}
          </div>
          <div className="text-center text-amber-500 text-sm my-2">
            Consumer ⇄ App ⇄ Outlet Staff ⇄ Brand Operations
          </div>
          <Card key={selected} className="p-4 text-stone-300 text-sm fade">
            <b className="text-amber-300">{actor.name}:</b> {actor.description}
          </Card>
        </div>
      </div>
    </div>
  );
}
