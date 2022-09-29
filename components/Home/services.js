import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Images import
import ltsMainImg from "../../public/static/images/inv_LTS.jpg";
import dmMainImg from "../../public/static/images/inv_dm.jpg";
import analyticsMainImg from "../../public/static/images/inv_analytics.jpg";
import appMainImg from "../../public/static/images/inv_appdev.jpg";
import surveyMainImg from "../../public/static/images/inv_surveys.jpg";

import ltsImg from "../../public/static/images/erke.jpg";
import dmImg from "../../public/static/images/datanasa.jpg";
import analyticsImg from "../../public/static/images/hondajoao.jpg";
import appImg from "../../public/static/images/approbertonickson.jpg";
import surveyImg from "../../public/static/images/pricehenry.jpg";

const SERVICES = [
  {
    id: "lts",
    title: "LTS",
    role: "Lead-to-Sale",
    definition:
      "We are your revenue growth enabler. We generate leads for you, digitalise your sales funnel, screen the leads and help you convert the leads into sales.",
    mainImage: ltsMainImg,
    image: ltsImg,
    route: "/lts",
    lightMode: true,
  },
  {
    id: "dm",
    title: "Digital Marketing",
    role: "Data-driven digital marketing",
    definition:
      "We curate custom audience using data science to micro-target the right customer for your products.",
    mainImage: dmMainImg,
    image: dmImg,
    route: "/digital-marketing",
    lightMode: false,
  },
  {
    id: "analytics",
    title: "Analytics",
    role: "Data science solution",
    definition:
      "We develop and own a database of 20+ million consumers. Enrich your business data with our third-party data to create predictive models for your business.",
    mainImage: analyticsMainImg,
    image: analyticsImg,
    route: "/analytics",
    lightMode: true,
  },
  {
    id: "app",
    title: "Application Development",
    role: "Software & data system development",
    definition:
      "We design-and-develop (D&D) software and cloud-based applications with predictive data engine and algorithms to suit your business needs.",
    mainImage: appMainImg,
    image: appImg,
    route: "/app-development",
    lightMode: false,
  },
  {
    id: "survey",
    title: "Surveys",
    role: "Database development & raw data collection",
    definition:
      "We run one of the largest Call Centers dedicated for surveys in the market. Understand what your customers want. Drive your business growth with data.",
    mainImage: surveyMainImg,
    image: surveyImg,
    route: "/surveys",
    lightMode: true,
  },
];

export default function Services() {
  return (
    <div className="flex flex-col bg-white">
      {SERVICES?.map((item) => (
        <div
          key={item.id}
          className={`${
            item?.lightMode ? "bg-white" : "bg-[#F2F2F2]"
          } flex justify-center items-center py-16`}
        >
          <div className="lg:w-1/12"></div>
          <div className="w-full px-4 flex flex-col">
            <div className="text-black text-3xl flex flex-col lg:flex-row">
              <p className="font-bold">
                {item.title}{" "}
                <span className="h-4 w-[1px] mx-4 bg-black">.</span>
              </p>
              <p>{item.role}</p>
            </div>
            <div className="flex flex-col lg:flex-row pt-8 gap-2 lg:gap-8 lg:h-[420px]">
              <div className="lg:w-1/2 relative">
                <Image src={item.mainImage} alt={`${item.id} main img`} />
              </div>
              <div className="lg:w-1/2 flex flex-col gap-2 relative">
                <Image src={item.image} alt={`${item.id} image`} />
                <Link href={item.route}>
                  <button className="text-white font-sans bg-[#530000] h-16 p-4 flex justify-between items-center">
                    <a>Sign up today</a>
                    <FaArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/12"></div>
        </div>
      ))}
    </div>
  );
}
