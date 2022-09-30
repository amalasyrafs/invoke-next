import React from "react";
import Image from "next/image";
import Link from "next/link";

import PlayStore from "../../public/static/images/playstore.png";
import AppStore from "../../public/static/images/appstore.png";

export default function Community() {
  return (
    <div className="w-full">
      <div className="flex w-full bg-[#00334C] py-[15vh] lg:py-[20vh]">
        <div className="lg:w-1/12"></div>
        <div className="w-full px-4 flex flex-col gap-5">
          <p className="font-sans text-[2.2em] text-white leading-[1.5em] font-normal">
            Tap into your hidden
            <span className="font-bold"> economic potential.</span>
          </p>
          <p className="font-sans text-[2.2em] text-white leading-[1.5em] font-normal">
            Join meniaga community to buy and sell in your locality.
          </p>
          <div className="flex mt-5 lg:w-4/12 gap-5">
            <Link href="https://play.google.com/store/apps/details?id=com.invoke.meniaga.my">
              <a>
                <Image src={PlayStore} alt="Play Store logo" />
              </a>
            </Link>
            <Link href="https://apps.apple.com/my/app/meniaga-my/id1516839999">
              <a>
                <Image src={AppStore} alt="App Store logo" />
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
      <div className="w-full bg-[#DC0246] h-3.5"></div>
    </div>
  );
}
