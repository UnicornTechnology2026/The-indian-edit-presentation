export interface Role {
  icon: string;
  name: string;
  responsibilities: string[];
}

export const ROLES: Role[] = [
  { icon: '🧑', name: 'Consumer', responsibilities: ['Scans and registers', 'Completes the activity', 'Presents the coupon'] },
  { icon: '📱', name: 'Mobile App', responsibilities: ['Guides the journey', 'Applies campaign rules', 'Issues confirmation'] },
  { icon: '🧑‍💼', name: 'Outlet Staff', responsibilities: ['Displays QR material', 'Assists when needed', 'Fulfils eligible benefits'] },
  { icon: '📊', name: 'Brand Operations', responsibilities: ['Sets campaign rules', 'Manages outlets', 'Reviews performance'] },
];
