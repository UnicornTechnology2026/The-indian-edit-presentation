import type { ReactNode } from "react";
import bottle from "@/assets/newBottle.png";
import { GoldButton } from "@/components/ui";
import { cx } from "@/utils/cx";
import { QrCode } from "./QrCode";
import instagramPost from "../../assets/post.jpeg";
import couponReveal from "../../assets/coupon.png";
import adminAnalytics from "../../assets/admin.png";
import otpVerification from "../../assets/otp.png";
import loginScreen from "../../assets/login.png";

/** A label beside the phone. `y` = px from the top of the phone frame (470px tall). */
export interface Callout {
  title: string;
  text: string;
  y: number;
}
export interface PhoneScreen {
  title: string;
  callouts?: Callout[];
  image?: string;
  render?: () => ReactNode;
}

const QR_CORNERS = [
  "top-0 left-0 border-t-4 border-l-4",
  "top-0 right-0 border-t-4 border-r-4",
  "bottom-0 left-0 border-b-4 border-l-4",
  "bottom-0 right-0 border-b-4 border-r-4",
];

/** Logo, trophy/shield icons, score and jump menu. Used by the game screens. */
function AppTopBar() {
  return (
    <div className="relative flex items-center gap-1.5 px-3 pt-9">
      <div className="mr-auto font-serif text-amber-200 leading-none">
        <div className="text-sm tracking-wider">THE INDIAN</div>
        <div className="text-[7px] tracking-[.3em] text-amber-300/70 text-center">
          EDIT
        </div>
      </div>
      {["🏆", "🛡️"].map((icon) => (
        <span
          key={icon}
          className="w-6 h-6 rounded-full border border-amber-500/50 bg-black/50 text-[10px] flex items-center justify-center"
        >
          {icon}
        </span>
      ))}
      <div className="rounded-md border border-amber-500/40 bg-black/50 px-2 py-1 text-[8px] text-amber-100">
        SCORE <b className="ml-1 text-amber-300">0</b>
      </div>
    </div>
  );
}

const LEVEL_CARD = "rounded-2xl border border-amber-500/40 bg-black/55 p-3";
const LEVEL_PILL =
  "inline-block rounded-full border border-amber-500/50 bg-black/60 px-2 py-0.5 text-[7px] tracking-[.2em] text-amber-200";

export const PHONE_SCREENS: PhoneScreen[] = [
  {
    title: "QR scanning",
    callouts: [
      {
        title: "Outlet QR code",
        text: "Scanned from outlet materials",
        y: 195,
      },
      {
        title: "Approved entry points",
        text: "QR or other approved channels",
        y: 325,
      },
    ],
    render: () => (
      <div className="h-full relative overflow-hidden bg-black flex flex-col items-center justify-center gap-7">
        <div className="absolute w-64 h-64 rounded-full bg-amber-500/25 blur-3xl" />

        {/* QR with gold corner brackets */}
        <div className="relative w-40 h-40">
          {QR_CORNERS.map((corner) => (
            <span
              key={corner}
              className={cx("absolute w-8 h-8 border-amber-400", corner)}
            />
          ))}
          <div className="absolute inset-5 drop-shadow-[0_0_14px_rgba(251,191,36,0.6)]">
            <QrCode className="w-full h-full" />
          </div>
        </div>

        <div className="relative text-center">
          <div className="text-amber-50 tracking-wide">Scan to enter</div>
          <div className="flex items-center justify-center gap-2 mt-1">
            <span className="h-px w-5 bg-amber-300/60" />
            <b className="font-serif text-xl text-amber-200">The Indian Edit</b>
            <span className="h-px w-5 bg-amber-300/60" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Registration",
    callouts: [
      { title: "Name and city", text: "Feed outlet-level insights", y: 218 },
      { title: "Mobile number", text: "Receives the OTP next", y: 297 },
      { title: "Privacy consent", text: "Required to unlock the edit", y: 360 },
    ],
    render: () => (
      <div className="h-full bg-black pt-4">
        <img
          src={loginScreen}
          alt="Login: enter name, city and mobile number to unlock the edit"
          className="h-full w-full object-contain object-top"
        />
      </div>
    ),
  },
  {
    title: "OTP verification",
    callouts: [
      {
        title: "Code sent to mobile",
        text: "Verifies the registered number",
        y: 225,
      },
      { title: "Six-digit code", text: "Confirm to enter the edit", y: 295 },
      {
        title: "Resend timer",
        text: "Retry OTP or ask staff for help",
        y: 365,
      },
    ],
    render: () => (
      <div className="h-full bg-black pt-4">
        <img
          src={otpVerification}
          alt="Two-factor authentication: enter verification code"
          className="h-full w-full object-cover object-top"
        />
      </div>
    ),
  },

  {
    title: "Welcome / onboarding",
    callouts: [
      { title: "Brand message", text: "Sets the tone for the edit", y: 225 },
      {
        title: "Grand Finale reward",
        text: "Shown upfront to motivate play",
        y: 345,
      },
      {
        title: "Begin Edit Tour",
        text: "Starts the engagement activity",
        y: 416,
      },
    ],
    render: () => (
      <div className="h-full relative overflow-hidden bg-black flex flex-col">
        {/* Bottle backdrop, darkened so the text stays readable */}
        <img
          src={bottle}
          className="absolute -right-8 top-10 h-72 opacity-40"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />

        {/* Top bar: logo, icons, score, jump */}
        <div className="relative flex items-center gap-1.5 px-3 pt-9">
          <div className="mr-auto font-serif text-amber-200 leading-none">
            <div className="text-sm tracking-wider">THE INDIAN</div>
            <div className="text-[7px] tracking-[.3em] text-amber-300/70 text-center">
              EDIT
            </div>
          </div>
          {["🏆", "🛡️"].map((icon) => (
            <span
              key={icon}
              className="w-6 h-6 rounded-full border border-amber-500/50 bg-black/50 text-[10px] flex items-center justify-center"
            >
              {icon}
            </span>
          ))}
          <div className="rounded-md border border-amber-500/40 bg-black/50 px-2 py-1 text-[8px] text-amber-100">
            SCORE <b className="ml-1 text-amber-300">0</b>
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-5 gap-5">
          <div className="rounded-full border border-amber-500/50 bg-black/60 px-3 py-1.5 text-[9px] tracking-[.18em] text-amber-200 uppercase">
            ◎ Welcome to the experience
          </div>

          <h3 className="font-serif text-2xl tracking-wide leading-tight text-amber-50">
            INDIA’S RICH
            <br />
            HERITAGE
            <span className="block text-amber-400">A PREMIUM BLEND</span>
          </h3>

          <div className="flex items-center gap-3 text-left">
            <span className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 flex items-center justify-center text-lg">
              🎁
            </span>
            <div>
              <div className="font-serif text-sm text-amber-50 leading-tight">
                Grand Finale Privilege Reward
              </div>
              <div className="text-[9px] text-stone-300 leading-snug mt-0.5">
                Custom 1080p Instagram post + Gold Foil Scratch Card
              </div>
            </div>
          </div>

          <GoldButton className="w-40">Begin Edit Tour</GoldButton>
        </div>
      </div>
    ),
  },

  {
    title: "Engagement activity",
    callouts: [
      { title: "Score and progress", text: "Tracked across the levels", y: 50 },
      { title: "Level 01", text: "Decode the bottle", y: 165 },
      { title: "Level 02", text: "Blend the edit", y: 307 },
      { title: "Level 03", text: "Hunt the edit", y: 425 },
    ],
    render: () => (
      <div className="h-full relative overflow-hidden bg-black">
        <img
          src={bottle}
          className="absolute -right-10 top-16 h-80 opacity-30"
          alt=""
        />
        <div className="relative h-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <AppTopBar />

          <div className="relative px-3 pb-6 mt-3 space-y-3">
            {/* Level 01 */}
            <section className={LEVEL_CARD}>
              <span className={LEVEL_PILL}>LEVEL 01</span>
              <h3 className="font-serif text-lg leading-tight text-amber-300 mt-1.5">
                DECODE
                <br />
                THE BOTTLE
              </h3>
              <div className="mt-2.5 flex justify-center">
                <span className="rounded-full bg-gradient-to-r from-amber-300 to-amber-500 text-black text-[9px] font-medium px-4 py-1.5">
                  Start The Edit →
                </span>
              </div>
            </section>

            {/* Level 02 */}
            <section className={LEVEL_CARD}>
              <span className={LEVEL_PILL}>LEVEL 02</span>
              <h3 className="font-serif text-lg leading-tight text-amber-300 mt-1.5">
                BLEND
                <br />
                THE EDIT
              </h3>

              <div className="mt-2.5 flex justify-center">
                <span className="rounded-full bg-gradient-to-r from-amber-300 to-amber-500 text-black text-[9px] font-medium px-4 py-1.5">
                  Start The Edit →
                </span>
              </div>
            </section>

            {/* Level 03 */}
            <section className={LEVEL_CARD}>
              <span className={LEVEL_PILL}>LEVEL 03</span>
              <h3 className="font-serif text-lg leading-tight text-amber-300 mt-1.5">
                HUNT
                <br />
                THE EDIT
              </h3>
              <p className="font-serif italic text-[9px] text-amber-100 mt-1">
                “Can you find all 5 The Indian Edit Bottle?”
              </p>
              <div className="mt-2.5 flex justify-center">
                <span className="rounded-full bg-gradient-to-r from-amber-300 to-amber-500 text-black text-[9px] font-medium px-4 py-1.5">
                  Start The Edit →
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Instagram Post",
    callouts: [
      { title: "Unlock your edit", text: "Shareable Instagram card", y: 233 },
      { title: "Progress score", text: "Points toward the finale", y: 312 },
      { title: "Download card", text: "Saved as a PNG to share", y: 437 },
    ],
    render: () => (
      <img
        src={instagramPost}
        alt="Instagram post card: Unlock your Edit"
        className="h-full w-full object-cover object-top"
      />
    ),
  },
  {
    title: "Coupon redeem",
    callouts: [
      {
        title: "Outlet privilege",
        text: "Tied to the participating outlet",
        y: 100,
      },
      {
        title: "Scratch and reveal",
        text: "Reveals the eligible benefit",
        y: 265,
      },
      { title: "Free 20 ml coupon", text: "Redeemed at the outlet", y: 400 },
    ],
    render: () => (
      <div className="h-full bg-black pt-4">
        <img
          src={couponReveal}
          alt="Scratch and reveal: free 20 ml coupon"
          className="h-full w-full object-cover object-top"
        />
      </div>
    ),
  },

  {
    title: "Admin dashboard",
    callouts: [
      { title: "Dashboard tabs", text: "Overview, players and scores", y: 100 },
      {
        title: "Trend chart",
        text: "Registrations and completed runs",
        y: 235,
      },
      {
        title: "Key metrics",
        text: "Registered, completed, score, play time",
        y: 385,
      },
    ],
    render: () => (
      <div className="h-full bg-black pt-4">
        <img
          src={adminAnalytics}
          alt="Admin dashboard: campaign analytics"
          className="h-full w-full object-cover object-top"
        />
      </div>
    ),
  },
];
