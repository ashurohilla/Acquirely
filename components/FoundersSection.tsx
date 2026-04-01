import Link from "next/link";

const founders = [
  {
    name: "Kunal Mandal",
    role: "Founder, Acquirely",
    title: "Campaign Execution & Performance Lead",
    description:
      "Kunal has battle-tested hundreds of ad variations across sectors - spotting patterns, plugging leaks, and turning cold traffic into paying customers with freakish consistency.",
    image:
      "linear-gradient(180deg, rgba(255,255,255,0)_52%, rgba(0,0,0,0.72)_100%), radial-gradient(circle at 50% 20%, #3b2c24 0%, #161616 62%)",
  },
  {
    name: "Mausam Arora",
    role: "Founder, Acquirely",
    title: "Strategic Architect & Growth Lead",
    description:
      "Mausam architects high-conversion funnels for founders who need results without bloated teams or endless experiments. His playbook blends deep GTM thinking with ruthless execution that unlocks scale.",
    image:
      "linear-gradient(180deg, rgba(255,255,255,0)_52%, rgba(0,0,0,0.72)_100%), radial-gradient(circle at 50% 20%, #b7bcc4 0%, #6b7280 55%, #1f2937 100%)",
  },
];

function FounderCard({
  name,
  role,
  title,
  description,
  image,
}: {
  name: string;
  role: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <div className="relative h-[290px] w-full" style={{ background: image }}>
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/65 to-transparent px-4 pb-4 pt-16 text-white">
          <div>
            <h3 className="text-[24px] font-semibold leading-7">{name}</h3>
            <p className="mt-1 text-[12px] text-white/80">{role}</p>
          </div>
          <div className="grid h-7 w-7 place-items-center rounded bg-white/20 text-[12px] font-semibold">in</div>
        </div>
      </div>
      <div className="px-4 pb-5 pt-4">
        <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4F46E5]">{title}</p>
        <p className="mt-3 text-[14px] leading-6 text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}

export default function FoundersSection() {
  return (
    <section className="bg-white">
      <div className="bg-[#5A769F]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-7 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-[105px]">
          <div className="text-white">
            <h2 className="text-[24px] font-semibold leading-8">Stop Overpaying. Start Growing.</h2>
            <p className="mt-1 max-w-[470px] text-[13px] leading-5 text-white/80">
              Get a full performance marketing team for a fraction of the cost. No hiring, no overhead, no drama.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-white px-6 text-[13px] font-medium text-[#4F46E5] transition hover:bg-slate-100"
            >
              View Pricing Plans
            </Link>
            <Link
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-[13px] font-medium text-white transition hover:bg-neutral-800"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-16 lg:py-20">
        <div className="text-center">
          <div className="inline-flex h-[26px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-3">
            <span className="h-2 w-2 rounded-full bg-[#5332E2]" />
            <span className="text-[10px] font-semibold uppercase tracking-[1.2px] text-[#5332E2]">Meet the founders</span>
          </div>

          <h2 className="mt-7 text-[34px] font-semibold leading-[1.05] text-[#262626] sm:text-[40px] lg:text-[48px]">
            The Minds Behind Acquirely
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-7 text-[#8A8A8A]">
            Two seasoned strategists with decades of combined experience building brands that dominate their markets.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1110px] gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
}
