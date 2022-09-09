import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

import invokelogo from "../../public/static/images/invokelogo.png";
import invokelogocoloured from "../../public/static/images/invokecoloured.png";

export default function Navbar({ logoColour }) {
  const [openSideBar, setOpenSideBar] = useState(false);
  const drawerRef = useRef();

  const handleClickOutside = (e) => {
    if (!drawerRef.current.contains(e.target)) {
      setOpenSideBar(false);
    }
  };

  useEffect(() => {
    if (openSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  useEffect(() => {
    if (openSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [openSideBar]);

  const toggleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center py-10 px-4">
        <Image
          src={logoColour ? invokelogocoloured : invokelogo}
          alt="Invoke logo"
          width={135}
          height={30}
        />

        <button onClick={toggleSideBar}>
          {openSideBar ? (
            <FiX size={40} color={logoColour ? "#003A51" : "#FFFFFF"} />
          ) : (
            <FiMenu size={40} color={logoColour ? "#003A51" : "#FFFFFF"} />
          )}
        </button>
      </div>
      <div
        ref={drawerRef}
        className={`${
          openSideBar ? "flex flex-col opacity-100" : "hidden opacity-0"
        } fixed z-40 right-0 top-0 h-screen px-4 py-10 lg:py-10 lg:px-12 overflow-y-auto bg-white w-full lg:w-2/5 transition-all duration-1000`}
        tabIndex="-1"
      >
        <button className="self-end">
          <FiX onClick={toggleSideBar} size={40} color={"black"} />
        </button>
        <div className="text-black text-2xl mt-8 lg:mt-16 pl-8 lg:pl-20 font-sans font-medium flex flex-col gap-2">
          {/* <h4><Link href="/blog">Blog</Link></h4> */}
          <h4>
            <Link href="/about">About</Link>
          </h4>
          <h4>
            <Link href="/team">Team</Link>
          </h4>

          <h4>Solutions</h4>
          <div className="pl-8 flex flex-col gap-2">
            {/* <h4><Link href="/lts">LTS</Link></h4> */}
            <h4>
              <Link href="/digital-marketing">Digital Marketing</Link>
            </h4>
            <h4>
              <Link href="/analytics">Analytics</Link>
            </h4>
            <h4>
              <Link href="/app-development">App. Development</Link>
            </h4>
            <h4>
              <Link href="/surveys">Surveys</Link>
            </h4>
          </div>

          <h4>Platforms</h4>
          <div className="pl-8 flex flex-col gap-2">
            <h4>
              <Link href="/adnexio">adnexio</Link>
            </h4>
            <h4>
              <Link href="/meniaga">meniaga</Link>
            </h4>
          </div>

          <h4>
            <Link href="/career">Career</Link>
          </h4>
          <h4>
            <Link href="/contact">Get in touch</Link>
          </h4>
        </div>
      </div>
    </>
  );
}
