/** Swimlanes, top to bottom. A step's `lane` is an index into this list. */
export const SOP_LANES = ['Consumer', 'Outlet Staff', 'App & Back-office'] as const;

export interface SopStep {
  title: string;
  description: string;
  lane: number;
}

export const SOP_STEPS: SopStep[] = [
  { title: 'Display QR', description: 'Place approved QR material', lane: 1 },
  { title: 'Invite', description: 'Invite consumer to scan', lane: 1 },
  { title: 'Self-serve', description: 'Scan, register, participate', lane: 0 },
  { title: 'Validate', description: 'Check confirmation / coupon status', lane: 1 },
  { title: 'Fulfil', description: 'Provide eligible benefit per rules', lane: 1 },
  { title: 'Record', description: 'Status logged and reported', lane: 2 },
];
