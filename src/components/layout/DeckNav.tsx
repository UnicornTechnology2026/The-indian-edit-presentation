import { cx } from '@/utils/cx';

interface DeckNavProps {
  current: number;
  total: number;
  onGo: (index: number) => void;
}

/** Bottom bar: previous / progress dots / next. */
export function DeckNav({ current, total, onGo }: DeckNavProps) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <nav className="flex items-center justify-between gap-3 px-4 py-3 border-t border-amber-500/20 bg-black/60">
      <button
        onClick={() => onGo(current - 1)}
        disabled={isFirst}
        aria-label="Previous slide"
        className="px-3 py-1.5 rounded-full border border-amber-500/40 text-amber-300 disabled:opacity-30"
      >
        ←
      </button>

      <div className="flex gap-1.5 overflow-x-auto">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => onGo(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === current}
            className={cx(
              'h-2 rounded-full transition-all',
              i === current ? 'w-6 bg-amber-400' : 'w-2 bg-stone-600 hover:bg-stone-400',
            )}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-stone-500 hidden sm:block">
          {current + 1} / {total}
        </span>
        <button
          onClick={() => onGo(current + 1)}
          disabled={isLast}
          aria-label="Next slide"
          className="px-3 py-1.5 rounded-full bg-amber-500 text-black disabled:opacity-30"
        >
          →
        </button>
      </div>
    </nav>
  );
}
