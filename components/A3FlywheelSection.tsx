const flywheelPhases = [
  {
    code: "A1",
    title: "Testing Phase",
    timeframe: "Month 1-2",
    description:
      "We deploy a structured creative testing matrix - 15-20 ad variations across hooks, angles, and formats. Every rupee generates data, not just impressions.",
    tags: ["Hook Testing", "Audience Mapping", "Funnel Validation"],
    accent: "from-[#686CF2] to-[#7A84F6]",
    badgeClass: "border-[#CFD5FD] bg-[#EDEFFF] text-[#4F49E9]",
    tagBorder: "border-[#CFD5FD]",
  },
  {
    code: "A2",
    title: "Scaling Phase",
    timeframe: "Month 2-4",
    description:
      "Winners from A1 get scaled using data-driven budget rules - not emotion. We use ROAS thresholds, frequency caps, and audience expansion signals to scale without killing performance.",
    tags: ["ROAS-Based Scaling", "Lookalike Expansion"],
    accent: "from-[#FA781C] to-[#FA8D36]",
    badgeClass: "border-[#FEDFBA] bg-[#FFF7ED] text-[#EA580C]",
    tagBorder: "border-[#FEDFBA]",
  },
  {
    code: "A3",
    title: "Optimization Phase",
    timeframe: "Ongoing",
    description:
      "Insights from scaling feed back into new creative briefs. The flywheel compounds - each cycle produces better creatives, lower CAC, and higher ROAS than the last.",
    tags: ["Creative Iteration", "CAC Reduction", "LTV Maximization"],
    accent: "from-[#2ECF95] to-[#14BC84]",
    badgeClass: "border-[#BEF6DD] bg-[#ECFDF5] text-[#047A57]",
    tagBorder: "border-[#BEF6DD]",
  },
];

function FlywheelDiagramPlaceholder() {
  return (
    <div className="rounded-[14px] bg-white p-3 shadow-[0px_0px_4px_rgba(0,0,0,0.18)] sm:p-5">
      <div className="rounded-[14px] border border-[#E9E6E0] bg-[#FFFDFC] p-4 sm:p-8">
        <div className="flex min-h-[260px] items-center justify-center sm:min-h-[320px]">
          <div className="relative flex w-full max-w-[640px] items-center justify-center gap-2 sm:gap-4">
            <div className="flex h-[210px] w-[230px] flex-col justify-between rounded-[22px] bg-[#C9D7FB] p-5">
              <div className="mx-auto rounded bg-[#152C4C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Campaign 1
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="rounded bg-[#173150] px-1 py-2 text-center text-[8px] font-semibold text-white"
                  >
                    Ad {index + 1}
                  </div>
                ))}
              </div>
              <div className="mx-auto rounded bg-[#152C4C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Winners
              </div>
            </div>

            <div className="flex h-[210px] w-[92px] flex-col items-center justify-center rounded-[22px] bg-[#FFC15C]">
              <div className="rounded bg-[#152C4C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Scale
              </div>
              <div className="mt-10 rounded bg-[#152C4C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Proven
              </div>
            </div>

            <div className="flex h-[210px] w-[92px] flex-col justify-between rounded-[22px] bg-[#C9D7FB] p-4">
              <div className="mx-auto rounded bg-[#152C4C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Campaign 2
              </div>
              <div className="mx-auto h-16 w-[10px] rounded bg-[#173150]" />
              <div className="grid grid-cols-3 gap-1">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="h-9 rounded bg-[#173150]" />
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-[7%] top-[8%] h-[72%] w-[26%] rounded-[14px] border border-dashed border-[#5B6472]" />
              <div className="absolute right-[8%] top-[12%] h-[72%] w-[15%] rounded-[14px] border border-dashed border-[#5B6472]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function A3FlywheelSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-6 lg:px-20 lg:py-[84px]">
        <div className="mx-auto max-w-[687px] text-center">
          <div className="inline-flex h-[34px] items-center gap-2 rounded-[4px] border border-[#CFD5FD] bg-[#EDEFFF] px-[10px]">
            <span className="text-base">+</span>
            <span className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[#5332E2] sm:text-[12px]">
              The A3 Flywheel Solution
            </span>
          </div>

          <h2 className="mt-8 text-[31px] font-extrabold leading-[1.08] text-black sm:text-[36px] lg:text-[40px] lg:leading-[44px]">
            <span className="block">The Growth System Built for the</span>
            <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] bg-clip-text text-transparent">
              New Meta Ads Era
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[662px] text-[16px] leading-7 text-[#7B8BA0] sm:text-[18px]">
            Most brands approach advertising without a structured scaling framework.
            Instead of a system, they rely on random actions that don't compound growth.
            Here's what actually happens:
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[480px_minmax(0,1fr)] lg:items-start lg:gap-12">
          <div className="space-y-10">
            {flywheelPhases.map((phase) => (
              <div key={phase.code} className="flex items-start gap-4 sm:gap-[29px]">
                <div
                  className={`grid h-[53px] w-[53px] shrink-0 place-items-center rounded-[10px] bg-gradient-to-br ${phase.accent}`}
                >
                  <span className="text-[26px] font-extrabold leading-[44px] text-white">
                    {phase.code}
                  </span>
                </div>

                <div className="pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[16px] font-semibold leading-7 text-black">
                      {phase.title}
                    </h3>
                    <span
                      className={`rounded-[4px] border px-[7px] py-[2px] text-[12px] font-semibold leading-[17px] sm:text-[14px] ${phase.badgeClass}`}
                    >
                      {phase.timeframe}
                    </span>
                  </div>

                  <p className="mt-1 max-w-[433px] text-[14px] font-medium leading-6 text-[#7B8BA0] sm:text-[15px] sm:leading-5">
                    {phase.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {phase.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-[4px] border bg-white px-[7px] py-[3px] text-[11px] leading-4 text-[#7B8BA0] sm:text-[12px] ${phase.tagBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pt-4">
            <FlywheelDiagramPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
