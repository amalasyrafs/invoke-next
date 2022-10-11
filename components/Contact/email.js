import React from "react";

export default function Email() {
  return (
    <div className="flex flex-col">
      <div className="flex w-full bg-white">
        <div className="lg:w-1/12"></div>
        <div className="lg:w-full px-4 text-black">
          <p className="mt-[10vh] mb-[5vh] font-sans lg:text-[2.5em] text-[1.5em] leading-[1.5em]">
            We will be able to help you better if you submit your enquiry
            through this page.
          </p>
          <p className="mb-[10vh] font-sans lg:text-[2.5em] text-[1.5em] leading-[1.5em]">
            You can also email us at{" "}
            <a
              href={"mailto:sales@invokeisdata.com"}
              className="text-[#003A51]"
            >
              <strong>sales@invokeisdata.com</strong>
            </a>{" "}
            and we will get back to you.
          </p>
        </div>
        <div className="lg:w-1/12"></div>
      </div>
    </div>
  );
}
