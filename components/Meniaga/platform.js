import React from "react";

export default function Platform() {
  return (
    <div className="flex bg-white">
      <div className="flex pt-[15vh] pb-[15vh] w-full">
        <div className="lg:w-1/12"></div>
        <div className="lg:w-full px-4">
          <p className="mb-[5vh] font-sans text-[2em] text-[#DC0246] leading-[1.5em] font-bold">
            Another e-commerce platform?
          </p>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 lg:justify-between">
            <div className="lg:w-3/12">
              <p className="font-sans text-[1.1em] text-black leading-[1.5em] font-thin">
                Cash-on-delivery (COD) only platform for microbusinesses and
                individuals who buy-and-sell within a 10-km radius
              </p>
            </div>
            <div className="lg:w-3/12">
              <p className="font-sans text-[1.1em] text-black leading-[1.5em] font-thin">
                Data engine to optimise matching of buyers and sellers
              </p>
            </div>
            <div className="lg:w-3/12">
              <p className="font-sans text-[1.1em] text-black leading-[1.5em] font-thin">
                Free-of-charge and absolutely no commission or hidden fee
              </p>
            </div>
            <div className="lg:w-3/12">
              <p className="font-sans text-[1.1em] text-black leading-[1.5em] font-thin">
                Simpler platform to encourage microbusinesses and individual
                traders to digitalise
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
    </div>
  );
}
