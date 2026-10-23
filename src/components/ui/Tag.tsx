import { cx } from '@/utils/cx';

/** "Core" / "Optional" pill. */
export function Tag({ optional = false }: { optional?: boolean }) {
  return (
    <span
      className={cx(
        'text-[10px] px-1.5 py-0.5 rounded-full border',
        optional ? 'border-stone-500 text-stone-400' : 'border-amber-500/60 text-amber-400',
      )}
    >
      {optional ? 'Optional' : 'Core'}
    </span>
  );
}
