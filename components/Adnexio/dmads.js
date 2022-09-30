import React from "react";
import Image from "next/image";
import Ad1 from "../../public/static/images/dmad1.jpg";
import Ad2 from "../../public/static/images/dmad2.jpg";

export default function DmAds() {
  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row my-[10vh] px-4 gap-7">
        <Image
          className="w-full h-full"
          src={Ad1}
          alt="adnexio's promotional poster for job-seekers"
        />

        <Image
          className="w-full h-full"
          src={Ad2}
          alt="adnexio's promotional poster for fresh graduates"
        />
      </div>
    </div>
  );
}
