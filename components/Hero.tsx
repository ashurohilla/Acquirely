

import Link from "next/link";
import { ArrowRight, Check, CrossIcon, Star } from "lucide-react";
import Image from "next/image";
import logo from "@/app/assests/logo.png"
import growthicon from "@/app/assests/growthicon.png"
import Client1 from "@/app/assests/Client1.png"
import Client2 from "@/app/assests/Client2.png"
import Client3 from "@/app/assests/Client3.png"
import Client4 from "@/app/assests/Client4.png"
import checkericon from "@/app/assests/checkricon.png"
import Script from "next/script"; // Import this at the top

const qualificationStats = [
  { value: "₹30Cr+", label: "Annual Ad Spend Managed" },
  { value: "1%", label: "Top 1% Meta Performance Marketing Team" },
  { value: "₹3L+", label: "Built for Brands Spending ₹3L+ per Month on Ads" },
];

const fitPoints = [
  "Spending Rs.3L+ per month on Meta Ads",
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
];

export default function AgencyLandingPage() {
  return (
    <main className="overflow-hidden bg-[#f7f9fc] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[linear-gradient(115.83deg,#0F0C29_0%,#1A1560_40%,#24243E_100%)] text-white">
        <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-7 sm:px-6 lg:px-20 lg:pb-12 lg:pt-[35px]">
          <div className="flex items-center gap-2">
           
           <Image src={logo} alt="Brand Logo" width={100} height={24} className="h-6 w-auto">

           </Image>
          </div>

          <div className="mt-10 grid gap-10 lg:mt-[43px] lg:grid-cols-[598px_1fr] lg:items-start">
            <div className="max-w-[598px]">
              <div className="inline-flex min-h-[34px] max-w-full items-center gap-3 border border-[#4338CA] bg-[#312E81] px-[10px] py-2 text-[10px] font-semibold uppercase tracking-[1.2px] text-[#A5B4FC] sm:text-[12px]">
                <span className="h-2 w-2 rounded-full bg-[#34D399]" />
                Accepting 2 new d2c brands this month
              </div>

              <h1 className="mt-6 text-[30px] font-Montserrat leading-[1.1] lg:tracking-[-0.5px] text-white sm:text-[40px] lg:text-[48px] lg:leading-[48px]">
                <span className="block">Scale Your Brand from</span>
                <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_25%,#F97316_80%)] bg-clip-text text-transparent">
                  Rs. 3L to Rs. 50L+ Monthly
                </span>
                <span className="block bg-[linear-gradient(90deg,#818CF8_0%,#C084FC_100%)] bg-clip-text text-transparent">
                  Ad Spend
                </span>
                <span className="block">on Meta - Profitably</span>
              </h1>

                <p
                className="mt-8 max-w-[598px] text-[16px] font-opensans leading-7 text-white/90 sm:text-[17px] lg:mt-11 lg:text-[18px] lg:leading-[29px] "
                style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                We don't just run Meta Ads campaigns. We build performance
                marketing systems. Our A3 Flywheel Model identifies winning
                creatives, scales them strategically, and stabilizes ROAS, even
                during Meta algorithm changes.
                </p>

              <Link
                href="applynow"
                className="mt-8 inline-flex min-h-[56px] w-full max-w-[351px] font-opensans items-center justify-center gap-2 bg-[linear-gradient(102.78deg,#6366F1_0%,#4F46E5_100%)] px-5 text-center text-[16px]  leading-6 text-white transition hover:brightness-110 sm:text-[18px]"
              >
                Book Your Growth Diagnosis Call
                <ArrowRight className="h-4 w-4" />
              </Link>

              <div className="mt-6 flex flex-col gap-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex items-center">
                    {[Client1, Client2, Client3, Client4].map((client, index) => (
                      <Image
                      key={index}
                      src={client}
                      alt={`Client ${index + 1}`}
                      className="-ml-3 h-12 w-12 rounded-full border-1 border-[#3730A3] transition-transform duration-300 hover:scale-110"
                      />
                    ))}
                    <div className="relative -ml-3 grid h-10 w-10 place-items-center rounded-full border-2 border-[#3730A3] bg-[linear-gradient(135deg,#6366F1_0%,#4F46E5_100%)] text-[12px] font-bold text-white">
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
                      <span className="text-[14px] font-semibold leading-5 text-white">4.9/5</span>
                    </div>
                    <p className="mt-0.5 text-[12px] font-normal leading-4 text-[#94A3B8]">
                      from 88 agency founders in the program
                    </p>
                  </div>
                    <div className="flex items-center gap-2.5 border-l-0 border-[#334155] pl-0 sm:border-l sm:pl-5">
                 <Image src={checkericon} alt="Check Icon" className="h-8 w-8" />
                  <p className="text-[12px] leading-4 text-[#CBD5E1]">
                    Results guaranteed
                    <br />
                    or full refund
                  </p>
                </div>
                </div>

              
              </div>
            </div>

<div className="relative ml-14 pt-2 lg:pt-[99px] hidden lg:block">
  {/* Move scripts to Next.js Script components */}
 <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/embed/nm2ou94x6d.js" strategy="afterInteractive" type="module" />

      {/* 2. Style Tag with Hydration protection */}
      <style dangerouslySetInnerHTML={{ __html: `
        wistia-player[media-id='nm2ou94x6d']:not(:defined) { 
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/nm2ou94x6d/swatch'); 
          display: block; 
          filter: blur(5px); 
          padding-top:56.25%; 
        }
      `}} />

      {/* 3. The Player with the ID you found */}
      <wistia-player 
        media-id="nm2ou94x6d" 
        aspect="1.7777777777777777"
        suppressHydrationWarning={true}
      />
</div>
            
            
            
            
            </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="bg-[#F6F6F6]">
          <div className="mx-auto grid max-w-[1440px] gap-y-8 px-5 py-8 sm:px-6 lg:grid-cols-3 lg:px-[79px] lg:py-[34px]">
            {qualificationStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center ${
                  index < qualificationStats.length - 1 ? "lg:border-r lg:border-black/70" : ""
                }`}
              >
                <p   style={{ fontFamily: "'Sora', sans-serif" }}   className="text-[28px] font-extrabold leading-9 text-[#252525] sm:text-[30px]">
                  {stat.value}
                </p>
                <p  style={{ fontFamily: "'Sora', sans-serif" }} className="mt-1 max-w-[320px] text-[13px] leading-5 text-[#707984] sm:text-[14px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-16 sm:px-6 lg:px-20 lg:pb-24 lg:pt-20">
          <div className="mx-auto max-w-[890px] text-center">
            <h2 className="text-[32px] font-Montserrat  leading-[1.05] sm:text-[36px] lg:text-[40px] lg:leading-[36px]">
              <span className="bg-[linear-gradient(90deg,#818CF8_0%,#F97316_42.79%)] font-Montserrat  bg-clip-text text-transparent">
                Who This Is For
              </span>
              <span className="text-black"> And Who It Isn't</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[627px] text-[16px] leading-7 text-[#7B8BA0] sm:text-[18px]">
              We only work with agency owners who are ready to commit. Read
              carefully this isn't for everyone, and that's by design.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-[1128px] gap-5 lg:grid-cols-2">
            <div className="rounded-[14px] border border-[#065F46] bg-[#F1FBF8] p-6 sm:p-[33px]">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-[4px] border border-[#047857] bg-[#022C22]">
                  <Check className="h-5 w-5 text-[#34D399]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-Montserrat  leading-7 text-black">This Is For You</h3>
                  <p className="text-[12px] font-opensans  uppercase tracking-[0.6px] text-[#059669]">
                    You're the right fit
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                {fitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#047857] bg-[#022C22]">
                      <Check className="h-3 w-3 text-[#34D399]" />
                    </div>
                    <p className="text-[14px] font-semibold leading-5 text-black">{point}</p>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="mt-10 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-[6px] bg-[#059669] px-4 text-center text-[14px] font-bold text-white transition hover:brightness-110"
              >
                Yes, I'm Ready - Apply Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[14px] border border-[#F87171] bg-[#FEF5F5] p-6 sm:p-[33px]">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-[4px] border border-[#991B1B] bg-[#450A0A]">
                  <span className="text-[20px] leading-none text-[#F87171]">x</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-Montserrat leading-7 text-black">Not For You</h3>
                <p className="text-[12px] font-opensans uppercase tracking-[0.6px] text-[#F87171]">
                    Please don't apply
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-6">
                {notFitPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className=" grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#991B1B] bg-[#450A0A]">
                      <span className="text-[12px] leading-none items-center justify-center text-[#F87171]">x</span>
                    </div>
                    <p className="text-[14px] font-semibold leading-5 text-black">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 font-Montserrat inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-[6px] border border-[#94A3B8] px-4 text-center text-[14px] font-semibold text-[#94A3B8]">
                <span className="text-base">x</span>
                This Program Is Not For You
              </div>
            </div>
          </div>

          <p className="mt-9 text-center text-[14px] leading-6 text-[#94A3B8]">
            Not sure if you qualify?{" "}
            <Link href="#" className="font-semibold text-[#818CF8] underline">
              Apply anyway
            </Link>{" "}
            -- we'll let you know within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
