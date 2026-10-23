export interface ArchitectureLayer {
  icon: string;
  name: string;
  description: string;
}

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  { icon: '📡', name: 'Channels', description: 'QR on outlet materials · Brand communication · Approved entry points' },
  { icon: '📱', name: 'Mobile web app', description: 'React + Tailwind interface · Journey screens · Activity & coupon views' },
  { icon: '⚙️', name: 'Services', description: 'OTP verification provider · Campaign & eligibility rules · Coupon logic' },
  { icon: '🗄️', name: 'Data layer', description: 'Supabase: registrations, activity results, coupons' },
  { icon: '📊', name: 'Admin & analytics', description: 'Campaign configuration · Outlet management · Reports' },
];
