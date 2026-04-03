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
  { title: "Media Buyer", subtitle: "Paid ads specialist", inHouse: "₹60K–₹90K/mo", icon: Megaphone, iconBg: "bg-[#EFF6FF]", iconColor: "text-[#3B82F6]" },
  { title: "Designer", subtitle: "Creative & ad visuals", inHouse: "₹40K–₹70K/mo", icon: Brush, iconBg: "bg-[#FAF5FF]", iconColor: "text-[#A855F7]" },
  { title: "Copywriter", subtitle: "Ad copy & landing pages", inHouse: "₹30K–₹50K/mo", icon: Copy, iconBg: "bg-[#FFFBEB]", iconColor: "text-[#F59E0B]" },
  { title: "Analytics Expert", subtitle: "Data & reporting", inHouse: "₹50K–₹80K/mo", icon: BarChart3, iconBg: "bg-[#ECFDF5]", iconColor: "text-[#10B981]" },
  { title: "CRO Specialist", subtitle: "Conversion optimization", inHouse: "₹45K–₹75K/mo", icon: Gauge, iconBg: "bg-[#FFF1F2]", iconColor: "text-[#F43F5E]" },
  { title: "Tools & Software", subtitle: "SaaS stack & licenses", inHouse: "₹15K–₹25K/mo", icon: Sparkles, iconBg: "bg-[#ECFEFF]", iconColor: "text-[#06B6D4]" },
  { title: "Hiring & HR Costs", subtitle: "Recruitment, benefits, PF", inHouse: "₹20K–₹40K/mo", icon: UserRoundPlus, iconBg: "bg-[#FFF7ED]", iconColor: "text-[#F97316]", agencyValue: "₹0" },
];

const valueCards = [
  { title: "₹1.5L+", subtitle: "Average monthly savings", icon: DollarSign, iconBg: "bg-[#D1FAE5]", iconColor: "text-[#059669]" },
  { title: "Day 1", subtitle: "Ready to launch instantly", icon: Clock3, iconBg: "bg-[#E0E7FF]", iconColor: "text-[#4F46E5]" },
  { title: "Zero Risk", subtitle: "No long-term contracts", icon: ShieldCheck, iconBg: "bg-[#FEF3C7]", iconColor: "text-[#D97706]" },
];

function ValueCard({ title, subtitle, icon: Icon, iconBg, iconColor }: any) {
  return (
    <div className="flex flex-1 items-center gap-4 rounded-2xl border border-[#E5E5E5] bg-white px-6 py-5 shadow-sm">
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        <Icon className={`h-5 w-5 ${iconColor}`} />
      </div>
      <div>
        <p className="font-montserrat text-[18px] font-medium leading-7 text-[#171717]">{title}</p>
        <p className="font-open-sans text-[12px] leading-4 text-[#737373]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function CostBreakdownSection() {
  return (
    <section className="bg-white py-[100px]">
      <div className="mx-auto flex max-w-[1024px] flex-col items-center px-4">
        {/* Badge */}
        <div className="flex h-[34px] items-center gap-2 rounded border border-[#CFD5FD] bg-[#EDEFFF] px-4">
          <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
          <span className="font-inter text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
            Cost Breakdown
          </span>
        </div>

        {/* Header */}
        <h2 className="mt-5 font-montserrat text-[40px] font-bold leading-[32px] tracking-[-0.5px] text-[#171717]">
          Why Pay More for Less?
        </h2>
        <p className="mt-6 max-w-[645px] text-center font-inter text-[18px] leading-5 text-[#737373]">
          See exactly what you'd spend building an in-house team vs. partnering with us. The numbers speak for themselves.
        </p>

        {/* Comparison Table */}
      <div className="mt-16 w-full">
  {/* 1. OUTER WRAPPER: Handles the badge positioning. No overflow here. */}
  <div className="relative mx-auto">
    
    {/* THE BADGE: Positioned relative to this outer wrapper */}
    <div className="absolute top-0 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#34D399] px-3 py-1 text-[12px] font-bold uppercase tracking-[0.3px] text-[#064E3B] shadow-md">
      Best Value
    </div>

    {/* 2. INNER TABLE: Handles the border, rounding, and horizontal scroll */}
    <div className="overflow-x-auto rounded-2xl border border-[#E5E5E5] bg-white shadow-xl">
      <div className="min-w-[800px]">
        
        {/* Table Header */}
        <div className="grid grid-cols-3 text-center">
          <div className="flex flex-col items-start justify-center border-b border-r border-[#E5E5E5] bg-[#F9FAFB] px-6 py-5">
            <span className="font-montserrat text-[12px] tracking-[1.2px] text-[#A3A3A3]">ROLE / RESOURCE</span>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-[#6366F1] bg-[#496690] px-6 py-5">
            <p className="font-montserrat text-[16px] font-medium text-white">Our Agency</p>
            <p className="font-open-sans text-[12px] text-[#C7D2FE]">Full-service team</p>
          </div>

          <div className="flex flex-col items-center justify-center border-b border-l border-[#E5E5E5] bg-[#F9FAFB] px-6 py-5 text-center">
            <p className="font-montserrat text-[16px] font-medium text-[#404040]">In-House Team</p>
            <p className="font-open-sans text-[12px] text-[#A3A3A3]">Hiring yourself</p>
          </div>
        </div>

        {/* Table Rows */}
        {costRows.map((row) => (
          <div key={row.title} className="grid grid-cols-3 border-b border-[#F5F5F5] last:border-b-0">
            <div className="flex items-center gap-3 border-r border-[#F5F5F5] px-6 py-4">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${row.iconBg}`}>
                <row.icon className={`h-4 w-4 ${row.iconColor}`} />
              </div>
              <div>
                <p className="font-open-sans text-[14px] leading-5 text-[#262626]">{row.title}</p>
                <p className="font-open-sans text-[12px] leading-4 text-[#A3A3A3]">{row.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center justify-center border-x border-[#E0E7FF] bg-[#EEF2FF] px-6 py-4">
              <span className="font-open-sans text-[14px] font-medium text-[#4338CA]">{row.agencyValue ?? "Included"}</span>
            </div>

            <div className="flex items-center justify-center border-l border-[#F5F5F5] px-6 py-4 text-center">
              <span className="font-open-sans text-[14px] text-[#404040]">{row.inHouse}</span>
            </div>
          </div>
        ))}

        {/* Total Footer */}
        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-center border-r border-[#404040] bg-[#171717] px-6 py-6">
            <p className="font-open-sans text-[16px] text-white">Monthly Total</p>
            <p className="font-open-sans text-[12px] text-[#A3A3A3]">All-in cost estimate</p>
          </div>

          <div className="flex flex-col items-center justify-center border-x border-[#6366F1] bg-[#496690] px-6 py-4 text-center">
            <p className="font-montserrat text-[24px] font-medium text-white">₹35K–₹65K</p>
            <p className="mt-1 font-work-sans text-[12px] text-[#C7D2FE]">per month</p>
            <div className="mt-2 inline-flex rounded-lg bg-[#34D399] px-3 py-1 font-work-sans text-[12px] text-[#064E3B]">
              Save up to 82%
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-l border-[#404040] bg-[#171717] px-6 py-4 text-center">
            <p className="font-poppins text-[24px] font-medium text-[#D4D4D4] line-through">₹2.2L–₹3.5L</p>
            <p className="mt-1 font-work-sans text-[12px] text-[#DADADA]">per month</p>
            <div className="mt-2 inline-flex rounded-lg bg-[#7F1D1D] px-3 py-1 font-work-sans text-[12px] text-[#FCA5A5]">
              High overhead
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Bottom Cards */}
        <div className="mt-8 flex w-full flex-col gap-4 md:flex-row">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}