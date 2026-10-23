export interface OutletStep {
  icon: string;
  title: string;
  description: string;
}

export const OUTLET_STEPS: OutletStep[] = [
  { icon: '📋', title: 'Brief & Setup', description: 'Brand Operations briefs the outlet on the approved campaign and SOP.' },
  { icon: '🪧', title: 'Display', description: 'Staff place approved QR materials at agreed points in the outlet.' },
  { icon: '🤝', title: 'Invite & Assist', description: 'Staff invite consumers to scan and help only if needed.' },
  { icon: '✅', title: 'Validate & Fulfil', description: 'Staff check confirmation and fulfil eligible benefits per rules.' },
  { icon: '📊', title: 'Report', description: 'Outcomes are recorded and reviewed by Brand Operations.' },
];
