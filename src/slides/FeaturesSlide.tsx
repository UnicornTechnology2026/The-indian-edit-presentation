import { useState } from "react";
import { SlideHeading } from "@/components/ui";
import { FEATURE_AREAS, type FeatureArea } from "@/data/features";
import { cx } from "@/utils/cx";

/* ------------------------------------------------------------------ */
/* Left list: one button per capability area                           */
/* ------------------------------------------------------------------ */

interface AreaButtonProps {
  area: FeatureArea;
  index: number;
  selected: boolean;
  onSelect: () => void;
}

function AreaButton({ area, index, selected, onSelect }: AreaButtonProps) {
  return (
    <button
      onClick={onSelect}
      aria-pressed={selected}
      className={cx(
        "w-full flex items-center gap-4 rounded-xl border px-4 py-3 text-left transition",
        selected
          ? "bg-amber-500/15 border-amber-400 shadow-[0_0_24px_rgba(245,166,35,.15)]"
          : "bg-white/[0.04] border-amber-500/20 hover:border-amber-500/60",
      )}
    >
      <span
        className={cx(
          "font-serif text-3xl w-9 shrink-0 leading-none",
          selected ? "text-amber-400" : "text-amber-500/50",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <span className="text-2xl shrink-0">{area.icon}</span>

      <span className="flex-1 min-w-0">
        <span
          className={cx(
            "block font-medium leading-tight",
            selected ? "text-amber-50" : "text-amber-100",
          )}
        >
          {area.title}
        </span>
        <span className="block text-[11px] text-stone-500 mt-0.5">
          {area.items.length} capabilities
        </span>
      </span>

      <span
        className={cx(
          "text-lg transition",
          selected ? "text-amber-400 translate-x-0.5" : "text-stone-600",
        )}
      >
        →
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Right panel: details of the selected area                           */
/* ------------------------------------------------------------------ */

interface DetailPanelProps {
  area: FeatureArea;
  index: number;
  className?: string;
}

function DetailPanel({ area, index, className }: DetailPanelProps) {
  return (
    <section
      className={cx(
        "fade rounded-2xl border border-amber-500/25 bg-gradient-to-br from-white/[0.06] to-transparent p-5 md:p-7",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-4">
        <span className="font-serif text-6xl leading-none text-amber-500/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-4xl">{area.icon}</span>
      </div>
      <h3 className="font-serif text-3xl text-amber-50 mt-3 leading-tight">
        {area.title}
      </h3>

      {/* Capabilities */}
      <ul className="mt-5 space-y-2">
        {area.items.map((item) => (
          <li
            key={item.label}
            className="flex items-center gap-3 rounded-lg border border-amber-500/20 bg-white/[0.04] px-4 py-3"
          >
            <span className="w-2.5 h-2.5 rotate-45 bg-amber-500 shrink-0" />
            <span className="flex-1 text-stone-200">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Slide                                                               */
/* ------------------------------------------------------------------ */

export function FeaturesSlide() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SlideHeading
          kicker=" Key App Functionalities"
          title="Six capability areas"
          subtitle="Pick an area to see what the app does there."
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-5">
        <ul className="lg:col-span-2 space-y-2">
          {FEATURE_AREAS.map((area, i) => (
            <li key={area.title}>
              <AreaButton
                area={area}
                index={i}
                selected={selected === i}
                onSelect={() => setSelected(i)}
              />
            </li>
          ))}
        </ul>

        {/* key re-mounts the panel so the fade-in plays on every change */}
        <DetailPanel
          key={selected}
          area={FEATURE_AREAS[selected]}
          index={selected}
          className="lg:col-span-3"
        />
      </div>
    </div>
  );
}
