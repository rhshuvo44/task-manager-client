import React from "react";
import notFoundSvg from "../assets/svg/404.svg";

const NotFound = () => {
  return (
    <div className="px-4 flex justify-center items-center md:px-10">
      <img className="h-96 w-96" src={notFoundSvg} alt="" />
    </div>
  );
};

export default NotFound;
