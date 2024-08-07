"use client";

import { dataEducation } from "@ext/utils/data"; // Add this line for default styling
import CardLeft from "./CardLeft";
import CardRight from "./CardRight";
function Education() {
  return (
    <div
      id="#education"
      className="w-full flex flex-col justify-center items-center py-4 border-none overflow-hidden"
    >
      <h1 className="text-white text-[1.7rem] md:text-[1.8rem] lg:text-[2.3rem] mb-5">
        🎓 Education
      </h1>
      <br />

      <div className="w-[82.5vmin] sm:w-[95vmin] lg:w-[100vmin] xl:w-[130vmin]  flex-col items-center justify-center z-10 h-fit relative">
        <div className="border-2 h-full border-blue-500 absolute top-0 left-0 sm:left-1/2 rounded-full -translate-x-1/2"></div>
        <br />
        <br />
        <br />
        <br />
        <CardLeft item={dataEducation[0]} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardRight item={dataEducation[1]} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CardLeft item={dataEducation[2]} />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Education;
