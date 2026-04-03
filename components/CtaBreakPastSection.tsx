import Link from "next/link";
export default function CtaBreakPastSection() {
  return (
    <section className="bg-[#101828] py-28 text-center">
      <div className="mx-auto max-w-[1024px] px-4">
        {/* Main Heading */}
        <h2 className="font-montserrat text-[48px] font-bold leading-[58px] tracking-[-1px] text-white">
          Ready to Break Past
          <br />
          {/* Apply Gradient to the specific text */}
          <span className="bg-gradient-to-r from-[#818CF8] to-[#F97316] bg-clip-text text-transparent">
            ₹3L per Month?
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="mx-auto mt-6 max-w-[600px] font-open-sans text-[18px] leading-6 text-[#A3A3A3]">
          If you&apos;re serious about building a predictable revenue engine with
          scalable Meta Ads, let&apos;s talk.
        </p>

        {/* CTA Button */}
        
        <div className="mt-12 flex items-center justify-center gap-2">
          <Link href="applynow" className="flex items-center gap-2.5 rounded border-2 border-white bg-white px-6 py-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.1)] transition hover:bg-white/90">
          <button className="flex items-center gap-2.5 rounded border-2 border-white bg-white px-6 py-3.5 shadow-[0_4px_18px_rgba(15,23,42,0.1)] transition hover:bg-white/90">
            <span className="font-montserrat text-[18px] font-bold leading-6 text-[#101828]">
              Book Your Growth Diagnosis Call
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#101828]"
              >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
            </svg>
          </button>
                </Link>
        </div>

        {/* Powered By Line */}
        <div className="mt-20 border-t border-white/5 pt-8">
          <p className="font-open-sans text-[14px] tracking-wide text-[#4B5563]">
            Powered by{" "}
            <a 
              href="https://saasscale.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-[#818CF8] transition-colors hover:text-[#F97316]"
            >
              ScaleSaaS
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}