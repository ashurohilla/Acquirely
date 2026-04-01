import Link from "next/link";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Growth Package",
    subtitle: "For brands ready to scale systematically",
    price: "₹1,50,000",
    suffix: "/month",
    addOn: "+ 12% of ad spend",
    features: [
      "20-30 creative tests per month",
      "Full A3 Flywheel implementation",
      "Weekly strategy calls",
      "Campaign management (Meta + Google)",
      "Monthly performance reports",
      "Landing page optimization",
    ],
    cta: "Apply Now",
    dark: false,
    popular: false,
  },
  {
    name: "Scale Package",
    subtitle: "For aggressive growth & market domination",
    price: "₹2,50,000",
    suffix: "/month",
    addOn: "+ 10% of ad spend",
    features: [
      "40+ creative tests per month",
      "Advanced A3 Flywheel + predictive modeling",
      "Dedicated account manager",
      "Full-funnel optimization (Meta, Google, YouTube)",
      "Bi-weekly strategy sessions",
      "Creative production support",
      "Real-time dashboard access",
    ],
    cta: "Scale Now →",
    dark: true,
    popular: true,
  },
];

function PricingCard({
  name,
  subtitle,
  price,
  suffix,
  addOn,
  features,
  cta,
  dark,
  popular,
}: {
  name: string;
  subtitle: string;
  price: string;
  suffix: string;
  addOn: string;
  features: string[];
  cta: string;
  dark: boolean;
  popular: boolean;
}) {
  return (
    <div
      className={`relative rounded-[18px] border p-7 shadow-[0_4px_18px_rgba(15,23,42,0.06)] ${
        dark
          ? "border-[#111827] bg-[#111827] text-white"
          : "border-[#E5E7EB] bg-white text-[#111827]"
      }`}
    >
      {popular ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22C55E] px-5 py-2 font-['Inter'] text-[14px] font-bold leading-4 text-white">
          Most Popular
        </div>
      ) : null}

      <h3 className="font-['Montserrat'] text-[22px] font-bold leading-8">
        {name}
      </h3>
      <p
        className={`mt-1 font-['Open_Sans'] text-[14px] leading-6 ${
          dark ? "text-[#94A3B8]" : "text-[#6B7280]"
        }`}
      >
        {subtitle}
      </p>

      <div className="mt-6 border-t border-black/10 pt-6">
        <div className="flex items-end gap-1">
          <span className="font-['Montserrat'] text-[48px] font-extrabold leading-none tracking-[-0.04em]">
            {price}
          </span>
          <span
            className={`mb-1 font-['Open_Sans'] text-[16px] font-semibold ${
              dark ? "text-[#CBD5E1]" : "text-[#475569]"
            }`}
          >
            {suffix}
          </span>
        </div>
        <p
          className={`mt-2 font-['Open_Sans'] text-[15px] font-semibold ${
            dark ? "text-[#94A3B8]" : "text-[#94A3B8]"
          }`}
        >
          {addOn}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center">
              <Check className="h-4 w-4 text-[#22C55E]" strokeWidth={3} />
            </div>
            <p
              className={`font-['Open_Sans'] text-[15px] leading-7 ${
                dark ? "text-white" : "text-[#334155]"
              }`}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className={`mt-8 inline-flex h-[52px] w-full items-center justify-center rounded-[10px] border font-['Inter'] text-[18px] font-bold transition ${
          dark
            ? "border-white/20 bg-white text-[#111827] hover:bg-slate-100"
            : "border-[#D1D5DB] bg-white text-[#111827] hover:bg-slate-50"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-[122px] lg:py-24">
        <div className="mx-auto max-w-[880px] text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-5">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
              Pricing
            </span>
          </div>

          <h2 className="mt-8 font-['Montserrat'] text-[40px] font-extrabold leading-[44px] tracking-[-0.03em]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_45%,#F97316_100%)] bg-clip-text text-transparent">
              Transparent, Performance-
            </span>
            <span className="text-black">Aligned Pricing</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[662px] font-['Open_Sans'] text-[18px] leading-7 text-[#7B8BA0]">
            Most brands approach advertising without a structured scaling
            framework. Instead of a system, they rely on random actions that
            don't compound growth. Here's what actually happens:
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
