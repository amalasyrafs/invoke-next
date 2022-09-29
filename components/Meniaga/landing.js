import React from "react";
import Navbar from "../Main/navbar";

export default function Landing() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen w-full bg-[url('/static/images/meniaga/bees.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex w-full">
          <div className="lg:w-1/12"></div>
          <div className="w-full">
            <Navbar />
          </div>
          <div className="lg:w-1/12"></div>
        </div>
        <div className="flex w-full">
          <div className="lg:w-1/12"></div>
          <div className="lg:w-7/12 px-4">
            <p className="mt-[25vh] font-sans text-[3.5em] lg:text-[5em] leading-[1em] font-normal">
              <u>Harnessing</u>
              <br />
              the units
            </p>
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
