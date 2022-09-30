import React from "react";
import Image from "next/image";
import Link from "next/link";

import PlayStore from "../../public/static/images/playstore.png";
import AppStore from "../../public/static/images/appstore.png";
import { FaArrowRight } from "react-icons/fa";

export default function Visit() {
  return (
    <div className="flex bg-white">
      <div className="lg:w-1/12"></div>
      <div className="w-full my-[10vh] flex-col text-black px-4">
        <div>
          <p className="text-[2.5em] lg:w-7/12 leading-[1em]">
            We are proud of our work to level the playing field. Everyone now
            has access to the same pool of talents.
          </p>
        </div>
        <div>
          <p className="text-[2.5em] leading-[1em] mt-[10vh]">
            <strong>Register</strong> as a jobseeker or employer today.
          </p>
        </div>
        <div className="flex flex-col lg:w-4/12 mt-[7vh]">
          <Link href="http://adnexio.jobs">
            <button className="text-white font-sans text-[1.3em] bg-[#064445] w-full h-16 p-4 flex justify-between items-center">
              <a>Sign up today</a>
              <FaArrowRight />
            </button>
          </Link>
          <div className="flex mt-5 gap-5">
            <Link href="https://play.google.com/store/apps/details?id=org.adnexio.jobs&hl=en">
              <a>
                <Image src={PlayStore} alt="Play Store logo" />
              </a>
            </Link>
            <Link href="https://apps.apple.com/my/app/adnexio-jobs/id1500510440">
              <a>
                <Image src={AppStore} alt="App Store logo" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/12"></div>
    </div>
  );
}
