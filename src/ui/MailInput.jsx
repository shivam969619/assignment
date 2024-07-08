import React from "react";
import emailicon from "../assets/emailicon.png";

const MailInput = () => {
  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded h-16 w-[500px] bg-customInput text-white text-base">
        <input
          type="email"
          className="flex-grow bg-transparent text-white placeholder-customInput placeholder-opacity-75 px-4 py-2 focus:outline-none"
          placeholder="Enter Your Business Mail"
        />
        <img src={emailicon} alt="" className="h-6 w-6 mr-4" />{" "}
      </div>
    </div>
  );
};

export default MailInput;
