import type { Callout } from "./phoneScreens";

/**
 * Labels that explain parts of the phone screen.
 *
 * Desktop: cards sit to the right of the phone, each joined to the screen by a
 * dashed line. `y` is measured in px from the top of the phone frame
 * (PhoneFrame is 470px tall, and this container matches it).
 * Mobile / tablet: the same callouts become a simple stacked list.
 */
export function Callouts({ items }: { items: Callout[] }) {
  if (items.length === 0) return null;

  return (
    <>
      {/* Desktop: positioned beside the phone */}
      <div className="hidden lg:block relative h-[470px] w-full max-w-xs fade">
        {items.map((c) => (
          <div
            key={c.title}
            style={{ top: c.y }}
            className="absolute left-0 w-full -translate-y-1/2"
          >
            {/* Dashed connector; the grid gap (w-8) reaches the phone edge */}
            <span className="absolute right-full top-1/2 w-8 border-t border-dashed border-amber-400/50" />
            <div className="rounded-lg border border-amber-500/30 bg-white/[0.04] px-3 py-2">
              <div className="text-[13px] font-medium leading-snug text-amber-200">
                {c.title}
              </div>
              <div className="text-[11px] leading-snug text-stone-300">
                {c.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / tablet: stacked list */}
      <div className="lg:hidden grid gap-2 w-full max-w-md fade">
        {items.map((c) => (
          <div
            key={c.title}
            className="rounded-lg border border-amber-500/30 bg-white/[0.04] px-3 py-2"
          >
            <div className="text-sm font-medium text-amber-200">{c.title}</div>
            <div className="text-xs text-stone-300">{c.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}
