import React from "react";
import Image from "next/image";
import Navbar from "../Main/navbar";
import InGodWeTrust from "../../public/static/images/ingodwetrust.png";

export default function Corporate() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen w-full bg-[url('/static/images/salmon.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex w-full">
          <div className="lg:w-1/12"></div>
          <div className="w-full">
            <Navbar />
          </div>
          <div className="lg:w-1/12"></div>
        </div>
        <div className="flex w-full">
          <div className="lg:w-1/12"></div>
          <div className="lg:w-5/12 px-4">
            <p className="mt-[55vh] font-sans text-[3em] leading-[1em] font-normal">
              We are doers
            </p>
            <p className="mb-[3vh] font-sans text-[3em] leading-[1em] font-normal">
              creators & artists.
            </p>
            <div className="text-[1.2em]">
              <p className="font-sans">We swim against the tide to create</p>
              <p className="font-sans">the best outcome for your business.</p>
            </div>
          </div>
          <div className="lg:w-1/2"></div>
        </div>
      </div>

      <div className="bg-white w-full flex justify-center">
        <div className="lg:w-1/2 relative my-[10vh] px-4">
          <Image
            src={InGodWeTrust}
            layout="intrinsic"
            alt="In God We Trust, All Others Must Bring Data"
          />
        </div>
      </div>
    </div>
  );
}
