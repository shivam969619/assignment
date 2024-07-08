import React from "react";
import arrow from "../assets/arrow.png";
function Buttons2({ text }) {
  return (
    <button className="h-[48px] w-[300px] bg-customButton2 text-white flex justify-center items-center rounded hover:text-onhovertext transition duration-300 font-bold">
      {text}
      <img src={arrow} alt="" className="h-[12px] w-[13px] pl-1 " />
    </button>
  );
}

export default Buttons2;
