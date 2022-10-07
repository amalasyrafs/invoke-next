import React from "react";

export default function Intro() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full bg-white">
        <div className="lg:w-1/12"></div>
        <div className="lg:w-full px-4">
          <p className="mt-[15vh] mb-[5vh] lg:w-10/12 font-sans text-[3.5em] text-[#00334C] leading-[1.5em] font-bold">
            We believe in the untapped economic potential of individuals.
          </p>
          <p className="mb-[15vh] font-sans lg:w-7/12 text-[2em] text-[#00334C] leading-[1.5em] font-normal">
            Easy access to marketing is the prerequisite to harness this
            potential
          </p>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
    </div>
  );
}
