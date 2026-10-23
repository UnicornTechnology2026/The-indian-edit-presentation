export interface FunnelStage {
  label: string;
  description: string;
  /** Bar width in %, purely illustrative (the slide states these are not real figures). */
  width: number;
}

export interface InsightCard {
  label: string;
  description: string;
}

export const FUNNEL: FunnelStage[] = [
  { label: 'Entries', description: 'QR scans and app access', width: 100 },
  { label: 'Registrations', description: 'Completed onboarding / OTP', width: 78 },
  { label: 'Participation', description: 'Activities completed', width: 60 },
  { label: 'Redemptions', description: 'Benefits redeemed', width: 42 },
];

export const INSIGHT_CARDS: InsightCard[] = [
  { label: 'Outlet view', description: 'Performance by outlet' },
  { label: 'Drop-off', description: 'Where consumers exit' },
  { label: 'Reports', description: 'Operational reporting for Brand Operations' },
  { label: 'Campaign tuning', description: 'Rules and outlets adjusted with insights' },
];
