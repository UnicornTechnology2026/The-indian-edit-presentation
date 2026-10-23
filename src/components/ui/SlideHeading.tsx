interface SlideHeadingProps {
  /** Small uppercase label above the title, e.g. "03 · Proposed Consumer Journey". */
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SlideHeading({ kicker, title, subtitle }: SlideHeadingProps) {
  return (
    <div className="mb-5">
      <div className="text-[11px] tracking-[.3em] text-amber-500 uppercase">{kicker}</div>
      <h2 className="font-serif text-3xl md:text-4xl text-amber-50 mt-1">{title}</h2>
      {subtitle && <p className="text-stone-400 mt-1 text-sm max-w-3xl">{subtitle}</p>}
    </div>
  );
}
