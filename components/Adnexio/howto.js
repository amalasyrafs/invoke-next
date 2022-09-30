import React from "react";

export default function HowTo() {
  return (
    <div className="bg-white">
      <div className="flex w-full h-full min-h-full my-[10vh]">
        <div className="lg:w-2/12"></div>
        <div className="w-full px-4 lg:h-[80vh]">
          <iframe
            title="how-to-adnexio"
            className="w-full h-full aspect-[16/9]"
            src="https://www.youtube.com/embed/djgfYkfFqAY"
          ></iframe>
        </div>
        <div className="lg:w-2/12"></div>
      </div>
    </div>
  );
}
