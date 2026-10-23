const SIZE = 25;

/** Decorative QR-style pattern (concept art, not a scannable code). */
function buildMatrix(): boolean[][] {
  const cells = Array.from({ length: SIZE }, () =>
    Array<boolean>(SIZE).fill(false),
  );
  const reserved = Array.from({ length: SIZE }, () =>
    Array<boolean>(SIZE).fill(false),
  );

  // Three big corner squares (with a one-module quiet gap around each).
  const finder = (r0: number, c0: number) => {
    for (let r = -1; r <= 7; r++) {
      for (let c = -1; c <= 7; c++) {
        const rr = r0 + r;
        const cc = c0 + c;
        if (rr < 0 || cc < 0 || rr >= SIZE || cc >= SIZE) continue;
        const inside = r >= 0 && r <= 6 && c >= 0 && c <= 6;
        const ring = r === 0 || r === 6 || c === 0 || c === 6;
        const core = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        reserved[rr][cc] = true;
        cells[rr][cc] = inside && (ring || core);
      }
    }
  };
  finder(0, 0);
  finder(0, SIZE - 7);
  finder(SIZE - 7, 0);

  // Small square near the bottom-right.
  for (let r = 16; r <= 20; r++) {
    for (let c = 16; c <= 20; c++) {
      const ring = r === 16 || r === 20 || c === 16 || c === 20;
      reserved[r][c] = true;
      cells[r][c] = ring || (r === 18 && c === 18);
    }
  }

  // Fixed pseudo-random fill so the pattern is identical on every render.
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (!reserved[r][c]) cells[r][c] = rand() > 0.5;
    }
  }
  return cells;
}

const MATRIX = buildMatrix();

const PATH = MATRIX.map((row, r) =>
  row.map((on, c) => (on ? `M${c} ${r}h1v1h-1z` : "")).join(""),
).join("");

export function QrCode({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      shapeRendering="crispEdges"
      className={className}
      role="img"
      aria-label="QR code"
    >
      <defs>
        <linearGradient id="qr-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3bf" />
          <stop offset="1" stopColor="#f5b301" />
        </linearGradient>
      </defs>
      <path d={PATH} fill="url(#qr-gold)" />
    </svg>
  );
}
