import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Growth Package",
    subtitle: "For brands ready to scale systematically",
    price: "Rs.1,50,000",
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
    price: "Rs.2,50,000",
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
    cta: "Scale Now",
    dark: true,
    popular: true,
  },
];

function PricingCard(props: (typeof pricingPlans)[number]) {
  const { name, subtitle, price, suffix, addOn, features, cta, dark, popular } = props;

  return (
    <div
      className={`relative rounded-[18px] border p-6 shadow-[0_4px_18px_rgba(15,23,42,0.06)] sm:p-7 ${
        dark ? "border-[#111827] bg-[#111827] text-white" : "border-[#E5E7EB] bg-white text-[#111827]"
      }`}
    >
      {popular ? (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22C55E] px-5 py-2 text-[14px] font-bold leading-4 text-white">
          Most Popular
        </div>
      ) : null}

      <h3 className="text-[22px] font-bold leading-8">{name}</h3>
      <p className={`mt-1 text-[14px] leading-6 ${dark ? "text-[#94A3B8]" : "text-[#6B7280]"}`}>
        {subtitle}
      </p>

      <div className="mt-6 border-t border-black/10 pt-6">
        <div className="flex flex-wrap items-end gap-1">
          <span className="text-[38px] font-extrabold leading-none tracking-[-0.04em] sm:text-[48px]">
            {price}
          </span>
          <span className={`mb-1 text-[16px] font-semibold ${dark ? "text-[#CBD5E1]" : "text-[#475569]"}`}>
            {suffix}
          </span>
        </div>
        <p className="mt-2 text-[15px] font-semibold text-[#94A3B8]">{addOn}</p>
      </div>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center">
              <Check className="h-4 w-4 text-[#22C55E]" strokeWidth={3} />
            </div>
            <p className={`text-[15px] leading-7 ${dark ? "text-white" : "text-[#334155]"}`}>{feature}</p>
          </div>
        ))}
      </div>

      <Link
        href="#"
        className={`mt-8 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-[10px] border text-[16px] font-bold transition sm:text-[18px] ${
          dark
            ? "border-white/20 bg-white text-[#111827] hover:bg-slate-100"
            : "border-[#D1D5DB] bg-white text-[#111827] hover:bg-slate-50"
        }`}
      >
        {cta}
        {dark ? <ArrowRight className="h-4 w-4" /> : null}
      </Link>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-[122px] lg:py-24">
        <div className="mx-auto max-w-[880px] text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-5">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
              Pricing
            </span>
          </div>

          <h2 className="mt-8 text-[31px] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
            <span className="bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_45%,#F97316_100%)] bg-clip-text text-transparent">
              Transparent, Performance-
            </span>
            <span className="text-black">Aligned Pricing</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[662px] text-[16px] leading-7 text-[#7B8BA0] sm:text-[18px]">
            Most brands approach advertising without a structured scaling framework.
            Instead of a system, they rely on random actions that don't compound growth.
            Here's what actually happens:
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
