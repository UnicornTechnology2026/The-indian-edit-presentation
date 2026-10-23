export interface FeatureItem {
  label: string;
  optional: boolean;
}

export interface FeatureArea {
  icon: string;
  title: string;
  items: FeatureItem[];
}

/** Helpers keep the list below easy to scan. */
const core = (label: string): FeatureItem => ({ label, optional: false });
const optional = (label: string): FeatureItem => ({ label, optional: true });

export const FEATURE_AREAS: FeatureArea[] = [
  {
    icon: '📷',
    title: 'QR Scanning',
    items: [core('QR scanning and campaign entry'), core('Approved entry points'), optional('Outlet-specific QR codes')],
  },
  {
    icon: '🔐',
    title: 'User Access',
    items: [core('Registration'), core('OTP verification'), core('Edit experience entry'), optional('Profile update')],
  },
  {
    icon: '🎮',
    title: 'Consumer Experience',
    items: [core('Brand content'), core('Activity discovery'), core('Interactive engagement'), optional('Progress tracking')],
  },
  {
    icon: '✅',
    title: 'Eligibility & Validation',
    items: [core('Campaign rules'), core('Participation limits'), core('Verification'), core('Duplicate prevention')],
  },
  {
    icon: '🎁',
    title: 'Rewards & Confirmation',
    items: [
      core('Activity status'),
      core('Eligible benefit details'),
      core('Redemption instructions'),
      optional('Confirmation, if applicable'),
    ],
  },
  {
    icon: '🛠️',
    title: 'Admin: Analytics & Administration',
    items: [core('Campaign configuration'), core('Outlet management'), core('Engagement metrics'), optional('Operational reporting')],
  },
];

export type FeatureFilter = 'all' | 'core' | 'optional';

export const FEATURE_FILTERS: { value: FeatureFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'core', label: 'Core only' },
  { value: 'optional', label: 'Optional only' },
];

export const matchesFilter = (item: FeatureItem, filter: FeatureFilter): boolean =>
  filter === 'all' || (filter === 'core' ? !item.optional : item.optional);
