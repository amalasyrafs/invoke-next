import React from "react";

export default function Platforms() {
  return (
    <div className="h-full w-full bg-[#F2F2F2] relative">
      <div className="mt-4 py-16 bg-white flex">
        <div className="lg:w-1/12"></div>
        <div className="w-full text-black flex flex-col gap-2 px-4">
          <h3 className="text-[2.5em]">Platforms</h3>
          <p className="text-[1em] text-[#575757] lg:w-1/3">
            We develop leading Artificial Intelligence (AI) and data-driven
            platforms
          </p>
        </div>
      </div>
      <div className="w-full bg-[url('/static/images/adnexioshirt.jpg')] bg-cover bg-center bg-no-repeat flex">
        <div className="lg:w-1/12"></div>
        <div className="w-full my-60 px-4">
          <h4 className="text-[2.5em] mb-4">adnexio.jobs</h4>
          <h5 className="text-[1.5em]">Meet NEX, our AI recruiter</h5>
          <h6 className="text-[1.0em]">Turning the job market upside down</h6>
        </div>
      </div>
      <div className="w-full bg-[url('/static/images/meniaga.jpg')] bg-cover bg-center bg-no-repeat flex">
        <div className="lg:w-1/12"></div>
        <div className="w-full my-60 px-4">
          <h4 className="text-[2.5em] mb-4">meniaga.my</h4>
          <h5 className="text-[1.5em]">Necessity breeds creativity</h5>
          <h6 className="text-[1.0em]">
            Levelling the field for micro-businesses
          </h6>
        </div>
      </div>
    </div>
  );
}
