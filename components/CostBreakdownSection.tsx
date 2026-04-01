import {
  BarChart3,
  Brush,
  Clock3,
  Copy,
  DollarSign,
  Gauge,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UserRoundPlus,
} from "lucide-react";

const costRows = [
  { title: "Media Buyer", subtitle: "Paid ads specialist", inHouse: "Rs.60K-Rs.90K/mo", icon: Megaphone, iconBg: "bg-[#EFF6FF]", iconColor: "text-[#3B82F6]" },
  { title: "Designer", subtitle: "Creative & ad visuals", inHouse: "Rs.40K-Rs.70K/mo", icon: Brush, iconBg: "bg-[#FAF5FF]", iconColor: "text-[#A855F7]" },
  { title: "Copywriter", subtitle: "Ad copy & landing pages", inHouse: "Rs.30K-Rs.50K/mo", icon: Copy, iconBg: "bg-[#FFFBEB]", iconColor: "text-[#F59E0B]" },
  { title: "Analytics Expert", subtitle: "Data & reporting", inHouse: "Rs.50K-Rs.80K/mo", icon: BarChart3, iconBg: "bg-[#ECFDF5]", iconColor: "text-[#10B981]" },
  { title: "CRO Specialist", subtitle: "Conversion optimization", inHouse: "Rs.45K-Rs.75K/mo", icon: Gauge, iconBg: "bg-[#FFF1F2]", iconColor: "text-[#F43F5E]" },
  { title: "Tools & Software", subtitle: "SaaS stack & licenses", inHouse: "Rs.15K-Rs.25K/mo", icon: Sparkles, iconBg: "bg-[#ECFEFF]", iconColor: "text-[#06B6D4]" },
  { title: "Hiring & HR Costs", subtitle: "Recruitment, benefits, PF", inHouse: "Rs.20K-Rs.40K/mo", icon: UserRoundPlus, iconBg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]", agencyValue: "Rs.0" },
];

const valueCards = [
  { title: "Rs.1.5L+", subtitle: "Average monthly savings", icon: DollarSign, iconBg: "bg-[#D1FAE5]", iconColor: "text-[#059669]" },
  { title: "Day 1", subtitle: "Ready to launch instantly", icon: Clock3, iconBg: "bg-[#E0E7FF]", iconColor: "text-[#4F46E5]" },
  { title: "Zero Risk", subtitle: "No long-term contracts", icon: ShieldCheck, iconBg: "bg-[#FEF3C7]", iconColor: "text-[#D97706]" },
];

function ValueCard({
  title,
  subtitle,
  icon: Icon,
  iconBg,
  iconColor,
}: {
  title: string;
  subtitle: string;
  icon: typeof DollarSign;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E5E5E5] bg-white px-6 py-5 shadow-[0_4px_18px_rgba(15,23,42,0.04)]">
      <div className="flex items-center gap-4">
        <div className={`grid h-10 w-10 place-items-center rounded-lg ${iconBg}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
        <div>
          <p className="text-[18px] font-medium leading-7 text-[#171717]">{title}</p>
          <p className="text-[12px] leading-4 text-[#737373]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default function CostBreakdownSection() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-[1024px] px-4 sm:px-6">
        <div className="text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-4">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
              Cost Breakdown
            </span>
          </div>

          <h2 className="mt-5 text-[31px] font-bold leading-[1.05] tracking-[-0.5px] text-white sm:text-[36px] lg:text-[40px] lg:leading-[32px]">
            Why Pay More for Less?
          </h2>
          <p className="mx-auto mt-6 max-w-[645px] text-[16px] leading-6 text-[#a3a3a3] sm:text-[18px] sm:leading-5">
            See exactly what you'd spend building an in-house team vs. partnering with us.
            The numbers speak for themselves.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.12)]">
          <div className="min-w-[860px]">
            <div className="grid grid-cols-[1.4fr_1.4fr_1.4fr] rounded-t-2xl overflow-hidden">
              <div className="border-b border-r border-[#E5E5E5] bg-[#F9FAFB] px-6 py-5">
                <p className="text-[12px] font-medium uppercase tracking-[1.2px] text-[#A3A3A3]">Role / Resource</p>
              </div>
              <div className="relative border-b border-x border-[#6366F1] bg-[#496690] px-6 py-5 text-center">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#34D399] px-3 py-1 text-[12px] uppercase tracking-[0.3px] text-[#064E3B]">
                  Best Value
                </div>
                <p className="text-[16px] font-medium leading-6 text-white">Our Agency</p>
                <p className="text-[12px] text-[#C7D2FE]">Full-service team</p>
              </div>
              <div className="border-b border-l border-[#E5E5E5] bg-[#F9FAFB] px-6 py-5 text-center">
                <p className="text-[16px] font-medium leading-6 text-[#404040]">In-House Team</p>
                <p className="text-[12px] text-[#A3A3A3]">Hiring yourself</p>
              </div>
            </div>

            {costRows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.title} className="grid grid-cols-[1.4fr_1.4fr_1.4fr] border-b border-[#F5F5F5] last:border-b-0">
                  <div className="flex items-center gap-3 border-r border-[#F5F5F5] px-6 py-4">
                    <div className={`grid h-8 w-8 place-items-center rounded-lg ${row.iconBg}`}>
                      <Icon className={`h-4 w-4 ${row.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-[14px] leading-5 text-[#262626]">{row.title}</p>
                      <p className="text-[12px] leading-4 text-[#A3A3A3]">{row.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center border-x border-[#E0E7FF] bg-[#EEF2FF] px-6 py-4">
                    <span className="text-[14px] leading-5 text-[#4338CA]">{row.agencyValue ?? "Included"}</span>
                  </div>

                  <div className="flex items-center justify-center border-l border-[#F5F5F5] px-6 py-4">
                    <span className="text-[14px] leading-5 text-[#404040]">{row.inHouse}</span>
                  </div>
                </div>
              );
            })}

            <div className="grid grid-cols-[1.4fr_1.4fr_1.4fr] overflow-hidden rounded-b-2xl">
              <div className="border-r border-[#404040] bg-[#171717] px-6 py-6">
                <p className="text-[16px] leading-6 text-white">Monthly Total</p>
                <p className="text-[12px] leading-4 text-[#A3A3A3]">All-in cost estimate</p>
              </div>

              <div className="border-x border-[#6366F1] bg-[#496690] px-6 py-4 text-center">
                <p className="text-[24px] font-medium leading-[30px] text-white">Rs.35K-Rs.65K</p>
                <p className="mt-1 text-[12px] text-[#C7D2FE]">per month</p>
                <div className="mt-2 inline-flex rounded-lg bg-[#34D399] px-3 py-1 text-[12px] text-[#064E3B]">
                  Save up to 82%
                </div>
              </div>

              <div className="border-l border-[#404040] bg-[#171717] px-6 py-4 text-center">
                <p className="text-[24px] font-medium leading-[30px] text-[#D4D4D4] line-through">Rs.2.2L-Rs.3.5L</p>
                <p className="mt-1 text-[12px] text-[#DADADA]">per month</p>
                <div className="mt-2 inline-flex rounded-lg bg-[#7F1D1D] px-3 py-1 text-[12px] text-[#FCA5A5]">
                  High overhead
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
