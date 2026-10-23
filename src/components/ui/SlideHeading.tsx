import { delay } from "@/utils/anim";

interface SlideHeadingProps {
  /** Small uppercase label above the title, e.g. "03 · Proposed Consumer Journey". */
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SlideHeading({ kicker, title, subtitle }: SlideHeadingProps) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 text-[11px] tracking-[.35em] text-amber-500 uppercase">
        <span className="draw-x w-10 h-px bg-amber-500" />
        {kicker}
      </div>
      <h2
        style={delay(100)}
        className="rise font-serif text-3xl md:text-4xl text-amber-50 mt-1"
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={delay(220)}
          className="rise text-stone-400 mt-1 text-sm max-w-3xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
