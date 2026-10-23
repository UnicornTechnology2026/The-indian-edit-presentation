/** Swimlanes, top to bottom. A step's `lane` is an index into this list. */
export const SOP_LANES = ["Consumer", "Promoter", "App & Back-office"] as const;

/** Colours per lane, same order as SOP_LANES. */
export const SOP_LANE_STYLES = [
  {
    badge: "border-emerald-400/60 text-emerald-200 bg-emerald-500/10",
    text: "text-emerald-200",
    dot: "border-emerald-400 text-emerald-200",
    done: "bg-emerald-400 text-black border-emerald-300",
    card: "border-emerald-400/30",
  },
  {
    badge: "border-amber-400/60 text-amber-200 bg-amber-500/10",
    text: "text-amber-200",
    dot: "border-amber-400 text-amber-200",
    done: "bg-amber-400 text-black border-amber-300",
    card: "border-amber-400/30",
  },
  {
    badge: "border-rose-400/60 text-rose-200 bg-rose-500/10",
    text: "text-rose-200",
    dot: "border-rose-400 text-rose-200",
    done: "bg-rose-400 text-black border-rose-300",
    card: "border-rose-400/30",
  },
] as const;

export interface SopStep {
  title: string;
  description: string;
  lane: number;
}

export const SOP_STEPS: SopStep[] = [
  { title: "Display QR", description: "Put up approved QR material.", lane: 1 },
  { title: "Invite", description: "Ask the guest to scan.", lane: 1 },
  {
    title: "Self-serve",
    description: "Guest scans, registers and plays.",
    lane: 0,
  },
  {
    title: "Validate",
    description: "Check the confirmation or coupon.",
    lane: 1,
  },
  { title: "Fulfil", description: "Give the eligible benefit.", lane: 1 },
  { title: "Record", description: "Result is logged and reported.", lane: 2 },
];
