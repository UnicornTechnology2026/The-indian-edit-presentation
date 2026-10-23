import type { ReactNode } from 'react';
import bottle from '@/assets/newBottle.png';
import { GoldButton } from '@/components/ui';
import { cx } from '@/utils/cx';

export interface PhoneScreen {
  title: string;
  render: () => ReactNode;
}

const QR_CORNERS = [
  'top-0 left-0 border-t-4 border-l-4',
  'top-0 right-0 border-t-4 border-r-4',
  'bottom-0 left-0 border-b-4 border-l-4',
  'bottom-0 right-0 border-b-4 border-r-4',
];

const OTP_DIGITS = 6;
const OTP_FILLED = 3;

export const PHONE_SCREENS: PhoneScreen[] = [
  {
    title: 'QR scanning',
    render: () => (
      <div className="h-full bg-stone-900 flex flex-col items-center justify-center gap-4">
        <div className="w-36 h-36 relative">
          {QR_CORNERS.map((corner) => (
            <span key={corner} className={cx('absolute w-7 h-7 border-amber-400', corner)} />
          ))}
          <div className="absolute inset-6 pat" />
        </div>
        <div className="text-amber-100 text-center">
          Scan to enter
          <br />
          <b className="font-serif text-lg">The Indian Edit</b>
        </div>
      </div>
    ),
  },
  {
    title: 'OTP verification',
    render: () => (
      <div className="p-5 pt-10 space-y-4">
        <div className="font-serif text-xl text-amber-100">Verify your number</div>
        <div className="text-stone-400">Enter the 6-digit code sent to your mobile.</div>
        <div className="flex gap-1">
          {Array.from({ length: OTP_DIGITS }, (_, i) => (
            <div
              key={i}
              className="flex-1 h-9 rounded border border-amber-500/50 text-center leading-9 text-amber-200"
            >
              {i < OTP_FILLED ? '•' : ''}
            </div>
          ))}
        </div>
        <GoldButton>Verify &amp; Continue</GoldButton>
        <div className="text-center text-stone-500">Resend code</div>
      </div>
    ),
  },
  {
    title: 'Welcome / onboarding',
    render: () => (
      <div className="h-full flex flex-col items-center justify-end pb-6 bg-gradient-to-b from-red-950 to-black">
        <img src={bottle} className="h-56 mb-3" alt="" />
        <div className="font-serif text-xl text-amber-100">Welcome to the Edit</div>
        <div className="text-stone-400 text-center px-6 mb-3">Discover, play and unlock what’s next.</div>
        <GoldButton className="w-40">Begin</GoldButton>
      </div>
    ),
  },
  {
    title: 'Home',
    render: () => (
      <div className="p-4 pt-9 space-y-3">
        <div className="text-stone-400">Welcome back</div>
        <div className="font-serif text-xl text-amber-100">Your Edit</div>
        {['🎮 Today’s activity', '🎁 My coupon', '📍 Outlet details'].map((item) => (
          <div key={item} className="rounded-lg border border-amber-500/30 bg-white/5 p-3 text-amber-100">
            {item}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Engagement activity',
    render: () => (
      <div className="p-4 pt-9 space-y-3">
        <div className="flex justify-between text-stone-400">
          <span>Question 2 of 5</span>
          <span>40%</span>
        </div>
        <div className="h-1.5 rounded bg-white/10">
          <div className="h-full w-2/5 bg-amber-500 rounded" />
        </div>
        <div className="rounded-lg bg-white/5 p-3 text-amber-50">Sample activity prompt appears here</div>
        {['Option A', 'Option B', 'Option C'].map((option, i) => (
          <div
            key={option}
            className={cx(
              'rounded-lg border p-2.5',
              i === 1 ? 'border-amber-400 bg-amber-500/20 text-amber-100' : 'border-white/10 text-stone-300',
            )}
          >
            {option}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Completion',
    render: () => (
      <div className="h-full flex flex-col items-center justify-center gap-3 text-center px-5">
        <div className="w-16 h-16 rounded-full bg-amber-500 text-black text-3xl flex items-center justify-center">✓</div>
        <div className="font-serif text-xl text-amber-100">Activity complete</div>
        <div className="text-stone-400">Your result is confirmed.</div>
        <GoldButton className="w-full">View my reward</GoldButton>
      </div>
    ),
  },
  {
    title: 'Coupon redeem',
    render: () => (
      <div className="p-4 pt-9 space-y-3">
        <div className="font-serif text-xl text-amber-100">Your coupon</div>
        <div className="rounded-xl border-2 border-dashed border-amber-500 p-4 text-center bg-amber-500/10">
          <div className="text-stone-400">Eligible benefit</div>
          <div className="text-amber-300 text-lg font-serif my-1">Benefit details</div>
          <div className="tracking-widest text-amber-100">CODE-XXXX</div>
        </div>
        <div className="text-stone-400 text-center">Show this screen to outlet staff</div>
        <GoldButton>Redeem</GoldButton>
      </div>
    ),
  },
  {
    title: 'Profile & history (Admin)',
    render: () => (
      <div className="p-4 pt-9 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-amber-500/30" />
          <div>
            <div className="text-amber-100">Participant</div>
            <div className="text-stone-500">Registered mobile</div>
          </div>
        </div>
        <div className="text-amber-400 mt-2">Activity history</div>
        {['Activity completed', 'Coupon issued', 'Coupon redeemed'].map((event) => (
          <div key={event} className="flex justify-between border-b border-white/10 py-1.5 text-stone-300">
            <span>{event}</span>
            <span className="text-stone-500">Date</span>
          </div>
        ))}
      </div>
    ),
  },
];
