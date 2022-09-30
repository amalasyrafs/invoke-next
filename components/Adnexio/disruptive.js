import React from "react";

export default function Disruptive() {
  return (
    <div className=" bg-[#F2F2F2]">
      <div className="flex flex-col my-[10vh]">
        <div className="flex w-full mb-[10vh]">
          <div className="lg:w-1/12"></div>
          <div className="w-full px-4">
            <p className="text-black text-[2.5em]">Disruptive Data Platform</p>
          </div>
          <div className="lg:w-1/12"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-around align-middle">
          <div className="py-7 text-center lg:w-48">
            <p className="text-[#575757]">
              Fastest growing job platform in Malaysia, growing at{" "}
              <strong>{`>`}8% weekly</strong>
            </p>
          </div>
          <div className="py-7 text-center lg:w-48">
            <p className="text-[#575757]">AI algorithms to rate interviews</p>
          </div>
          <div className="py-7 text-center lg:w-48">
            <p className="text-[#575757]">Holistic assessment of candidates</p>
          </div>
          <div className="py-7 text-center lg:w-48">
            <p className="text-[#575757]">
              <strong>100+ data points</strong> per candidate to sharpen
              matching algorithms
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-evenly align-middle">
          <div className="py-7 text-center lg:w-64">
            <p className="text-[#575757]">
              AI algorithms to provide career feedback to jobseekers
            </p>
          </div>
          <div className="py-7 text-center lg:w-64">
            <p className="text-[#575757]">Free to post job ads</p>
          </div>
          <div className="py-7 text-center lg:w-64">
            <p className="text-[#575757]">
              Only pay for checked-out matched candidates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
