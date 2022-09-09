import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";

// Image Import
import Clientele1 from "../../public/static/images/clientele1.png";
import Clientele2 from "../../public/static/images/clientele2.png";
import Clientele3 from "../../public/static/images/clientele3.png";
import Clientele4 from "../../public/static/images/clientele4.png";
import Clientele5 from "../../public/static/images/clientele5.png";

export default function OurWorks() {
  return (
    <div className="h-full w-full bg-[#F2F2F2]">
      <div className="pt-16 bg-white flex">
        <div className="lg:w-1/12"></div>
        <div className="w-full text-black flex flex-col gap-2 px-4">
          <h3 className="text-[2.5em]">Our Work</h3>
          <p className="text-[1em] text-[#575757]">
            We have provided data solutions to leading brands across different
            industries and organisations
          </p>
        </div>
      </div>

      {/* Carousel component */}
      <div className="h-40 lg:h-96 bg-white flex p-4">
        <div className="lg:w-1/6"></div>
        <Carousel slideInterval={2500}>
          <div className="flex h-full items-center justify-center relative">
            <Image src={Clientele1} alt="Clientele 1" />
          </div>
          <div className="flex h-full items-center justify-center relative">
            <Image src={Clientele2} alt="Clientele 2" />
          </div>
          <div className="flex h-full items-center justify-center relative">
            <Image src={Clientele3} alt="Clientele 3" />
          </div>
          <div className="flex h-full items-center justify-center relative">
            <Image src={Clientele4} alt="Clientele 4" />
          </div>
          <div className="flex h-full items-center justify-center relative">
            <Image src={Clientele5} alt="Clientele 5" />
          </div>
        </Carousel>
        <div className="lg:w-1/6"></div>
      </div>
    </div>
  );
}
