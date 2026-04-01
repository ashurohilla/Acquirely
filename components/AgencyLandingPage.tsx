"use client"

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import A3FlywheelSection from "@/components/A3FlywheelSection";
import CostBreakdownSection from "@/components/CostBreakdownSection";
import FlywheelProofSection from "@/components/FlywheelProofSection";
import GrowthSystemProblemSection from "@/components/GrowthSystemProblemSection";
import PricingSection from "@/components/PricingSection";

const qualificationStats = [
  {
    value: "₹30Cr+",
    label: "Annual Ad Spend Managed",
  },
  {
    value: "1%",
    label: "Top 1% Meta Performance Marketing Team",
  },
  {
    value: "₹3L+",
    label: "Built for Brands Spending ₹3L+ per Month on Ads",
  },
];

const fitPoints = [
  "Spending ₹3L+ per month on Meta Ads",
  "Growth has plateaued while scaling",
  "ROAS fluctuates unpredictably",
  "Your current agency runs ads but doesn't build growth systems",
  "You want a structured performance marketing strategy",
];

const notFitPoints = [
  "Just launching your brand",
  "Still testing product-market fit",
  "Looking for the cheapest agency",
  "Not ready for aggressive scaling",
  "Expecting instant results without data",
]
export default function AgencyLandingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] text-slate-950">
      <section className="relative isolate min-h-[696px] overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] text-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-[35px] lg:px-20">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-4">
              <span className="absolute left-[3px] top-0 h-3.5 w-2.5 rounded-t-full border-2 border-white border-b-0" />
              <span className="absolute left-[5px] top-[15px] h-[3px] w-[3px] rounded-full bg-white" />
            </div>
            <span className="font-['Montserrat'] text-[26px] font-extrabold leading-none tracking-[-0.03em] text-[#FAFAFA]">
              Acquirely
            </span>
          </div>

          <div className="mt-[43px] grid gap-14 lg:grid-cols-[598px_1fr] lg:items-start">
            <div className="max-w-[598px]">
              <div className="inline-flex h-[34px] items-center gap-3 border border-[#4338CA] bg-[#312E81] px-[10px] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#A5B4FC]">
                <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                Accepting 2 new d2c brands this month
              </div>

              <h1 className="mt-6 font-['Montserrat'] text-[48px] font-extrabold leading-[48px] tracking-[-0.5px] text-white">
                <span className="block">Scale Your Brand from</span>
                <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_45%,#FB923C_100%)] bg-clip-text text-transparent">
                  ₹3L to ₹50L+ Monthly
                </span>
                <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_100%)] bg-clip-text text-transparent">
                  Ad Spend
                </span>
                <span className="block">on Meta - Profitably</span>
              </h1>

              <p className="mt-11 max-w-[598px] font-['Open_Sans'] text-[18px] font-normal leading-[29px] text-white">
                We don't just run Meta Ads campaigns. We build performance
                marketing systems. Our A3 Flywheel Model identifies winning
                creatives, scales them strategically, and stabilizes ROAS, even
                during Meta algorithm changes
              </p>

              <Link
                href="#"
                className="mt-[29px] inline-flex h-[60px] w-full max-w-[341px] items-center justify-center bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 text-center font-['Inter'] text-[18px] font-bold leading-[29px] text-white transition hover:brightness-110"
              >
                Book Your Growth Diagnosis Call →
              </Link>

              <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <div className="flex items-center">
                    {["#991B1B", "#1D4ED8", "#7C2D12", "#6B7280"].map((color, index) => (
                      <div
                        key={index}
                        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#3730A3]"
                        style={{
                          marginLeft: index === 0 ? 0 : -12,
                          background: `linear-gradient(135deg, ${color} 0%, #E5E7EB 100%)`,
                        }}
                      />
                    ))}
                    <div className="relative -ml-3 grid h-10 w-10 place-items-center rounded-full border-2 border-[#3730A3] bg-[linear-gradient(135deg,#6366F1_0%,#4F46E5_100%)] font-['Inter'] text-[12px] font-bold text-white">
                      +84
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-[#FFA227]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current stroke-0" />
                        ))}
                      </div>
                      <span className="font-['Inter'] text-[14px] font-semibold leading-5 text-white">
                        4.9/5
                      </span>
                    </div>
                    <p className="mt-0.5 font-['Inter'] text-[12px] font-normal leading-4 text-[#94A3B8]">
                      from 88 agency founders in the program
                    </p>
                  </div>
                </div>

                <div className="hidden h-10 w-px bg-[#334155] lg:block" />

                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-md border border-[#047857] bg-[#022C22]">
                    <CheckCircle2 className="h-4 w-4 text-[#34D399]" />
                  </div>
                  <p className="font-['Inter'] text-[12px] leading-4 text-[#CBD5E1]">
                    Results guaranteed
                    <br />
                    or full refund
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-[99px]">
              <div className="ml-auto h-[313px] w-full max-w-[564px] rounded-[8px] bg-[#D9D9D9]" />
              <div className="absolute bottom-[-25px] left-0 flex h-[62px] w-[181px] items-center rounded-2xl border border-white/10 bg-white/5 px-[17px] shadow-[0px_0px_40px_rgba(99,102,241,0.15),0px_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-[6px] lg:left-[-96px]">
                <div className="grid h-9 w-9 place-items-center rounded-lg border border-[#047857] bg-[#064E3B] text-[16px] text-[#34D399]">
                  ↗
                </div>
                <div className="ml-3 font-['Inter']">
                  <p className="text-[14px] font-semibold leading-5 text-white">
                    +$18,200 MRR
                  </p>
                  <p className="text-[12px] font-normal leading-4 text-[#94A3B8]">
                    added in 90 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="bg-[#F6F6F6]">
          <div className="mx-auto grid max-w-[1440px] gap-y-8 px-6 py-8 lg:grid-cols-3 lg:px-[79px] lg:py-[34px]">
            {qualificationStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center ${
                  index < qualificationStats.length - 1
                    ? "lg:border-r lg:border-black/70"
                    : ""
                }`}
              >
                <p className="font-['Sora'] text-[30px] font-extrabold leading-9 text-[#252525]">
                  {stat.value}
                </p>
                <p className="mt-1 font-['Inter'] text-[14px] leading-5 text-[#707984]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-20 lg:px-20 lg:pb-24">
          <div className="mx-auto max-w-[690px] text-center">
            <h2 className="font-['Montserrat'] text-[40px] font-extrabold leading-[36px]">
              <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text text-transparent">
                Who This Is For
              </span>
              <span className="text-black"> And Who It Isn't</span>
            </h2>
            <p className="mx-auto mt-8 max-w-[627px] font-['Open_Sans'] text-[18px] leading-7 text-[#7B8BA0]">
              We only work with agency owners who are ready to commit. Read
              carefully this isn't for everyone, and that's by design.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1128px] gap-5 lg:grid-cols-2">
            <div className="rounded-[14px] border border-[#065F46] bg-[#F1FBF8] p-[33px]">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-[#047857] bg-[#022C22]">
                  <CheckCircle2 className="h-5 w-5 text-[#34D399]" />
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-[20px] font-bold leading-7 text-black">
                    This Is For You
                  </h3>
                  <p className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[0.6px] text-[#059669]">
                    You're the right fit
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                {fitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#047857] bg-[#022C22]">
                      <CheckCircle2 className="h-3 w-3 text-[#34D399]" />
                    </div>
                    <p className="font-['Open_Sans'] text-[14px] font-semibold leading-5 text-black">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="mt-12 inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#059669] font-['Inter'] text-[14px] font-bold text-white transition hover:brightness-110"
              >
                Yes, I'm Ready — Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[14px] border border-[#F87171] bg-[#FEF5F5] p-[33px]">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-[#991B1B] bg-[#450A0A]">
                  <span className="text-[20px] leading-none text-[#F87171]">×</span>
                </div>
                <div>
                  <h3 className="font-['Montserrat'] text-[20px] font-bold leading-7 text-black">
                    Not For You
                  </h3>
                  <p className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[0.6px] text-[#F87171]">
                    Please don't apply
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                {notFitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#991B1B] bg-[#450A0A]">
                      <span className="text-[12px] leading-none text-[#F87171]">×</span>
                    </div>
                    <p className="font-['Open_Sans'] text-[14px] font-semibold leading-5 text-black">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 inline-flex h-[50px] w-full items-center justify-center gap-2 rounded-[6px] border border-[#94A3B8] font-['Inter'] text-[14px] font-semibold text-[#94A3B8]">
                <span className="text-base">⊘</span>
                This Program Is Not For You
              </div>
            </div>
          </div>

          <p className="mt-9 text-center font-['Inter'] text-[14px] leading-5 text-[#94A3B8]">
            Not sure if you qualify?{" "}
            <Link href="#" className="font-semibold text-[#818CF8] underline">
              Apply anyway
            </Link>{" "}
            — we'll let you know within 24 hours.
          </p>
        </div>
      </section>

      <GrowthSystemProblemSection />
      <A3FlywheelSection />
      <FlywheelProofSection />
      <PricingSection />
      <CostBreakdownSection />
    </main>
  );
}
