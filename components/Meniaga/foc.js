import React from "react";
import Image from "next/image";
import MockUp from "../../public/static/images/Meniaga/mockup.png";

export default function Foc() {
  return (
    <div className="flex w-full bg-[#00334C]">
      <div className="lg:w-1/12"></div>
      <div className="px-4 flex flex-col w-full align-middle justify-center py-[15vh] lg:flex-row lg:py-[20vh] lg:gap-20 lg:justify-around ">
        <div className="lg:w-5/12">
          <Image src={MockUp} alt="Mockup design of meniaga app on iPhone X" />
        </div>
        <div className="lg:w-5/12 flex flex-col align-middle justify-center">
          <p className="mb-[5vh] font-sans text-[4em] text-white leading-[1.5em] font-bold">
            Free of Charge
          </p>
          <p className="font-sans text-[2.2em] text-white leading-[1.5em] font-normal">
            e-commerce platform for microbusiness
          </p>
        </div>
      </div>
      <div className="lg:w-1/12"></div>
    </div>
  );
}
