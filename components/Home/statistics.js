import React from "react";

const ROW1 = [
  {
    id: 1,
    statNum: 1,
    statUnit: "B",
    statText: "social media impressions",
  },
  {
    id: 2,
    statNum: 20,
    statUnit: "M",
    statText: "clicks",
  },
  {
    id: 3,
    statNum: 200,
    statUnit: "K",
    statText: "ads collaterals",
  },
  {
    id: 4,
    statNum: 20,
    statUnit: "M",
    statText: "predictive consumer profiles",
  },
  {
    id: 5,
    statNum: 300,
    statUnit: "",
    statText: "clients & brands",
  },
];
const ROW2 = [
  {
    id: 1,
    statNum: 150,
    statUnit: "K",
    statText: "sale leads",
  },
  {
    id: 2,
    statNum: 600,
    statUnit: "K",
    statText: "respondents surveyed",
  },
  {
    id: 3,
    statNum: 570,
    statUnit: "%",
    statText: "annualised platform growth",
  },
  {
    id: 4,
    statNum: 700,
    statUnit: "K",
    statText: "unique platform users",
  },
];

export default function Statistics() {
  return (
    <div className="h-full w-full bg-[#F2F2F2]">
      <div className="mt-4 bg-white flex">
        <div className="lg:w-1/12"></div>
        <div className="w-full py-20 flex flex-col lg:my-10">
          <div className="flex flex-col lg:flex-row justify-between lg:mb-16 gap-4">
            <div className="lg:w-1/12"></div>
            {ROW1.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:w-1/6 items-center"
              >
                <div className="flex justify-center items-center">
                  <p className="font-Baskerville text-[2.5em] text-[#003A51]">
                    {item.statNum}
                  </p>
                  <p className="font-Baskerville text-[2em] text-[#003A51]">
                    {item.statUnit}
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <p className="font-Baskerville text-[1em] text-[#575757] text-center">
                    {item.statText}
                  </p>
                </div>
              </div>
            ))}
            <div className="lg:w-1/12"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="lg:w-1/6"></div>
            {ROW2.map((item) => (
              <div
                key={item.id}
                className="flex flex-col lg:w-1/6 items-center"
              >
                <div className="flex justify-center items-center">
                  <p className="font-Baskerville text-[2.5em] text-[#003A51]">
                    {item.statNum}
                  </p>
                  <p className="font-Baskerville text-[2em] text-[#003A51]">
                    {item.statUnit}
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <p className="font-Baskerville text-[1em] text-[#575757] text-center">
                    {item.statText}
                  </p>
                </div>
              </div>
            ))}
            <div className="lg:w-1/6"></div>
          </div>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
    </div>
  );
}
