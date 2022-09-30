import React from "react";

export default function Definition() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex w-full mt-[10vh]">
        <div className="lg:w-3/12"></div>
        <div className="flex flex-col justify-start gap-0 lg:w-full px-4">
          <p className="font-sans text-[#054D4F] text-[3.5em] lg:text-[9em] leading-[0.8em] font-bold">
            Turning the
          </p>
          <p className="lg:ml-[3.5vh] ml-[1.5vh] font-sans text-[#054D4F] text-[3.5em] lg:text-[9em] leading-[0.8em] font-bold">
            job market
          </p>
          <p className="font-sans text-[#054D4F] text-[3.5em] lg:text-[9em] leading-[0.8em] font-bold">
            upside down
          </p>
          <div className="w-full lg:w-10/12 mt-[10vh]">
            <p className="font-sans text-black text-[2.5em] leading-[1em] font-normal">
              We build a disruptive platform to turn the job market upside down.{" "}
              <strong>adnexio</strong> is the first platform in the region that
              uses AI to interview candidates.
            </p>
          </div>
          <div className="w-full lg:w-9/12 mt-[5vh]">
            <p className="font-sans text-[#575757] text-[1.5em] leading-[1.5em] font-normal">
              We built <strong>adnexio</strong> out of our frustration with the
              existing job platforms. When we started, we had to spend a
              considerable sum to post expensive job ads with almost zero
              return.
            </p>
          </div>
          <div className="w-full lg:w-7/12 my-[5vh]">
            <p className="font-sans text-[#575757] text-[1.5em] leading-[1.5em] font-normal">
              The conventional job platforms are not accountable to produce
              suitable matches because we pay for job ads, not for matched
              candidates.
            </p>
          </div>
        </div>
        <div className="lg:w-3/12"></div>
      </div>
    </div>
  );
}
