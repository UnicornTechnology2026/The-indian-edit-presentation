export interface JourneyStep {
  name: string;
  consumerAction: string;
  appTouchpoint: string;
  staffRole: string;
  optional: boolean;
}

export const JOURNEY: JourneyStep[] = [
  {
    name: 'Discover',
    consumerAction: 'Learns of The Indian Edit via brand communication or in-outlet promotion.',
    appTouchpoint: 'Campaign communication',
    staffRole: 'Displays approved promotion material',
    optional: false,
  },
  {
    name: 'Enter',
    consumerAction: 'Scans a QR code or uses an approved entry point.',
    appTouchpoint: 'QR scanning and campaign entry',
    staffRole: 'Keeps the QR point visible and accessible',
    optional: false,
  },
  {
    name: 'Register',
    consumerAction: 'Completes onboarding and OTP verification.',
    appTouchpoint: 'Registration and OTP verification',
    staffRole: 'Offers help if the consumer is stuck',
    optional: false,
  },
  {
    name: 'Explore',
    consumerAction: 'Views available experiences, content and activities.',
    appTouchpoint: 'Home screen and activity discovery',
    staffRole: 'Can introduce the experience',
    optional: false,
  },
  {
    name: 'Participate',
    consumerAction: 'Completes the relevant engagement activity.',
    appTouchpoint: 'Interactive activity and progress tracking',
    staffRole: 'Light-touch assistance only',
    optional: false,
  },
  {
    name: 'Redeem or Continue',
    consumerAction: 'Receives an eligible benefit or next step per approved rules.',
    appTouchpoint: 'Result, coupon and redemption instructions',
    staffRole: 'Validates and fulfils per SOP',
    optional: true,
  },
  {
    name: 'Measure',
    consumerAction: 'No consumer action required.',
    appTouchpoint: 'Engagement data captured',
    staffRole: 'Outlet activity feeds reports; Brand team reviews metrics',
    optional: false,
  },
];
