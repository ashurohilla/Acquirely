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
  {
    title: "Media Buyer",
    subtitle: "Paid ads specialist",
    inHouse: "₹60K–₹90K/mo",
    icon: Megaphone,
    iconBg: "bg-[#EFF6FF]",
    iconColor: "text-[#3B82F6]",
  },
  {
    title: "Designer",
    subtitle: "Creative & ad visuals",
    inHouse: "₹40K–₹70K/mo",
    icon: Brush,
    iconBg: "bg-[#FAF5FF]",
    iconColor: "text-[#A855F7]",
  },
  {
    title: "Copywriter",
    subtitle: "Ad copy & landing pages",
    inHouse: "₹30K–₹50K/mo",
    icon: Copy,
    iconBg: "bg-[#FFFBEB]",
    iconColor: "text-[#F59E0B]",
  },
  {
    title: "Analytics Expert",
    subtitle: "Data & reporting",
    inHouse: "₹50K–₹80K/mo",
    icon: BarChart3,
    iconBg: "bg-[#ECFDF5]",
    iconColor: "text-[#10B981]",
  },
  {
    title: "CRO Specialist",
    subtitle: "Conversion optimization",
    inHouse: "₹45K–₹75K/mo",
    icon: Gauge,
    iconBg: "bg-[#FFF1F2]",
    iconColor: "text-[#F43F5E]",
  },
  {
    title: "Tools & Software",
    subtitle: "SaaS stack & licenses",
    inHouse: "₹15K–₹25K/mo",
    icon: Sparkles,
    iconBg: "bg-[#ECFEFF]",
    iconColor: "text-[#06B6D4]",
  },
  {
    title: "Hiring & HR Costs",
    subtitle: "Recruitment, benefits, PF",
    inHouse: "₹20K–₹40K/mo",
    icon: UserRoundPlus,
    iconBg: "bg-[#FFF7ED]",
    iconColor: "text-[#F97316]",
    agencyValue: "₹0",
  },
];

const valueCards = [
  {
    title: "₹1.5L+",
    subtitle: "Average monthly savings",
    icon: DollarSign,
    iconBg: "bg-[#D1FAE5]",
    iconColor: "text-[#059669]",
  },
  {
    title: "Day 1",
    subtitle: "Ready to launch instantly",
    icon: Clock3,
    iconBg: "bg-[#E0E7FF]",
    iconColor: "text-[#4F46E5]",
  },
  {
    title: "Zero Risk",
    subtitle: "No long-term contracts",
    icon: ShieldCheck,
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#D97706]",
  },
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
          <p className="font-['Montserrat'] text-[18px] font-medium leading-7 text-[#171717]">
            {title}
          </p>
          <p className="font-['Open_Sans'] text-[12px] leading-4 text-[#737373]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CostBreakdownSection() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-[1024px] px-6">
        <div className="text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-4">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="font-['Inter'] text-[12px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">
              Cost Breakdown
            </span>
          </div>

          <h2 className="mt-5 font-['Montserrat'] text-[40px] font-bold leading-[32px] tracking-[-0.5px] text-[#171717]">
            Why Pay More for Less?
          </h2>
          <p className="mx-auto mt-7 max-w-[645px] font-['Inter'] text-[18px] leading-5 text-[#737373]">
            See exactly what you'd spend building an in-house team vs.
            partnering with us. The numbers speak for themselves.
          </p>
        </div>

        <div className="mt-14 rounded-2xl border border-[#E5E5E5] bg-white shadow-[0_10px_40px_rgba(15,23,42,0.12)]">
          <div className="grid grid-cols-[1.4fr_1.4fr_1.4fr] rounded-t-2xl overflow-hidden">
            <div className="border-b border-r border-[#E5E5E5] bg-[#F9FAFB] px-6 py-5">
              <p className="font-['Montserrat'] text-[12px] font-normal uppercase tracking-[1.2px] text-[#A3A3A3]">
                Role / Resource
              </p>
            </div>
            <div className="relative border-b border-x border-[#6366F1] bg-[#496690] px-6 py-5 text-center">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-[#34D399] px-3 py-1 font-['Open_Sans'] text-[12px] uppercase tracking-[0.3px] text-[#064E3B]">
                Best Value
              </div>
              <p className="font-['Montserrat'] text-[16px] font-normal leading-6 text-white">
                Our Agency
              </p>
              <p className="font-['Open_Sans'] text-[12px] text-[#C7D2FE]">
                Full-service team
              </p>
            </div>
            <div className="border-b border-l border-[#E5E5E5] bg-[#F9FAFB] px-6 py-5 text-center">
              <p className="font-['Montserrat'] text-[16px] font-normal leading-6 text-[#404040]">
                In-House Team
              </p>
              <p className="font-['Open_Sans'] text-[12px] text-[#A3A3A3]">
                Hiring yourself
              </p>
            </div>
          </div>

          {costRows.map((row) => {
            const Icon = row.icon;
            return (
              <div
                key={row.title}
                className="grid grid-cols-[1.4fr_1.4fr_1.4fr] border-b border-[#F5F5F5] last:border-b-0"
              >
                <div className="flex items-center gap-3 border-r border-[#F5F5F5] px-6 py-4">
                  <div className={`grid h-8 w-8 place-items-center rounded-lg ${row.iconBg}`}>
                    <Icon className={`h-4 w-4 ${row.iconColor}`} />
                  </div>
                  <div>
                    <p className="font-['Open_Sans'] text-[14px] leading-5 text-[#262626]">
                      {row.title}
                    </p>
                    <p className="font-['Open_Sans'] text-[12px] leading-4 text-[#A3A3A3]">
                      {row.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center border-x border-[#E0E7FF] bg-[#EEF2FF] px-6 py-4">
                  <span className="font-['Open_Sans'] text-[14px] leading-5 text-[#4338CA]">
                    {row.agencyValue ?? "Included"}
                  </span>
                </div>

                <div className="flex items-center justify-center border-l border-[#F5F5F5] px-6 py-4">
                  <span className="font-['Open_Sans'] text-[14px] leading-5 text-[#404040]">
                    {row.inHouse}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="grid grid-cols-[1.4fr_1.4fr_1.4fr] overflow-hidden rounded-b-2xl">
            <div className="border-r border-[#404040] bg-[#171717] px-6 py-6">
              <p className="font-['Open_Sans'] text-[16px] leading-6 text-white">
                Monthly Total
              </p>
              <p className="font-['Open_Sans'] text-[12px] leading-4 text-[#A3A3A3]">
                All-in cost estimate
              </p>
            </div>

            <div className="border-x border-[#6366F1] bg-[#496690] px-6 py-4 text-center">
              <p className="font-['Montserrat'] text-[24px] font-normal leading-[30px] text-white">
                ₹35K–₹65K
              </p>
              <p className="mt-1 font-['Work_Sans'] text-[12px] text-[#C7D2FE]">
                per month
              </p>
              <div className="mt-2 inline-flex rounded-lg bg-[#34D399] px-3 py-1 font-['Work_Sans'] text-[12px] text-[#064E3B]">
                Save up to 82%
              </div>
            </div>

            <div className="border-l border-[#404040] bg-[#171717] px-6 py-4 text-center">
              <p className="font-['Poppins'] text-[24px] font-normal leading-[30px] text-[#D4D4D4] line-through">
                " 2.2L " 3.5L
              </p>
              <p className="mt-1 font-['Work_Sans'] text-[12px] text-[#DADADA]">
                per month
              </p>
              <div className="mt-2 inline-flex rounded-lg bg-[#7F1D1D] px-3 py-1 font-['Work_Sans'] text-[12px] text-[#FCA5A5]">
                High overhead
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
