import React from "react";
import Navbar from "../Main/navbar";

export default function Form() {
  return (
    <div className="flex flex-col bg-[#F2F2F2]">
      <div className="flex w-full">
        <div className="lg:w-1/12"></div>
        <div className="w-full">
          <Navbar />
        </div>
        <div className="lg:w-1/12"></div>
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-screen">
        <div className="lg:w-1/12"></div>
        <div className="lg:w-4/12 px-4 mt-[10vh]">
          <div>
            <p className="font-sans text-[1.8em] text-black mb-5 leading-[1.5em] font-normal">
              Mailing Address
            </p>
            <p className="mb-10 font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
              INVOKE Solutions Sdn Bhd
              <br />
              Level 2-4, 80, Jalan Tasik Utama 5<br />
              Sungai Besi
              <br />
              57000 Kuala Lumpur
              <br />
              Malaysia
            </p>
          </div>
          <div>
            <p className="font-sans text-[1.8em] text-black mb-5 leading-[1.5em] font-normal">
              Follow Us
            </p>
            <a href="https://www.facebook.com/invokeisdata">
              <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                Facebook
              </p>
            </a>
            <a href="https://twitter.com/invokeisdata/">
              <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                Twitter
              </p>
            </a>
            <a href="https://www.instagram.com/invokeisdata/">
              <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                Instagram
              </p>
            </a>
            <a href="https://www.linkedin.com/company/invokeisdata/">
              <p className="font-sans text-[1.3em] text-[#575757] leading-[1.5em] font-normal">
                LinkedIn
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="lg:w-4/12 px-4 mt-[10vh]">
            <p className="font-sans text-[2em] text-black mb-5 leading-[1.5em] font-normal">
              Happy to help!
            </p>
            <div className="h-[0.1em] bg-black rounded mb-10"></div>
          </div>
          <div className="px-4 flex flex-col">
            <form>
              <input
                type="text"
                required
                placeholder="Name*"
                className="w-full mb-5 rounded border-gray-300"
              ></input>
              <input
                type="text"
                required
                placeholder="Email*"
                className="w-full mb-5 rounded border-gray-300"
              ></input>
              <input
                type="text"
                required
                placeholder="Contact*"
                className="w-full mb-5 rounded border-gray-300"
              ></input>

              <p className="font-sans text-[1.8em] text-[#575757] my-5 leading-[1.5em] font-normal">
                Tell us a bit about your business
              </p>
              <input
                type="text"
                required
                placeholder="Company/Organisation*"
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
              ></input>
              <input
                type="text"
                required
                placeholder="Address*"
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
              ></input>
              <input
                type="text"
                required
                placeholder="Website*"
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
              ></input>
              <select
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
                aria-label="Default select example"
              >
                <option selected disabled>
                  Company type*
                </option>
                <option value="Multinational corporation">
                  Multinational corporation
                </option>
                <option value="Government-linked corporation">
                  Government-linked corporation
                </option>
                <option value="Government and public bodies">
                  Government and public bodies
                </option>
                <option value="Non-profit">Non-profit</option>
                <option value="SMEs">SMEs</option>
                <option value="Owner managed business">
                  Owner managed business
                </option>
                <option value="Others">Others</option>
              </select>
              <select
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
                aria-label="Default select example"
              >
                <option selected disabled>
                  How did you find us?*
                </option>
                <option value="Internet search">Internet search</option>
                <option value="Social media ads">Social media ads</option>
                <option value="Referral from others">
                  Referral from others
                </option>
                <option value="Words of mouth">Words of mouth</option>
                <option value="Others">Others</option>
              </select>

              <p className="font-sans text-[1.8em] text-[#575757] my-5 leading-[1.5em] font-normal">
                How can we help you?
              </p>
              <select
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
                aria-label="Default select example"
              >
                <option selected disabled>
                  I am interested to know more on*
                </option>
                <option value="Leads-To-Sales (LTS)">
                  Leads-To-Sales (LTS)
                </option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Analytics">Analytics</option>
                <option value="Applications Development">
                  Applications Development
                </option>
                <option value="Survey">Survey</option>
                <option value="adnexio">adnexio</option>
                <option value="meniaga">meniaga</option>
                <option value="Investor">Investor</option>
                <option value="Others">Others</option>
              </select>
              <textarea
                type="text"
                required
                placeholder="Message*"
                className="w-full mb-5 rounded border-gray-300 text-gray-700"
              ></textarea>
            </form>
          </div>
        </div>
        <div className="lg:w-1/2"></div>
      </div>
    </div>
  );
}
