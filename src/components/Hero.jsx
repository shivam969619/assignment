import React from "react";
import { SlArrowRight } from "react-icons/sl";
import MailInput from "../ui/MailInput";
import Buttons1 from "../ui/Buttons1";
function Hero() {
  return (
    <>
      <div className="mt-[100px] ml-[55px] w-[70%] flex">
        <SlArrowRight color="red" className="h-[50px] w-[50px] " />
        <div className="text-4xl font-bold text-white space-x-4">
          Ultra-high-frequency technographic and people data for your data
          teams.
        </div>
      </div>
      <div className=" mt-4 ml-[85px] w-[80%] flex text-custommidcardText font-semibold text-xl">
        MixRank curates the world’s most updated feed of people, company, and
        technographic datasets. Receive updates at hourly intervals and be the
        first to know when the data you care about changes.
      </div>
      <div className="ml-[85px] mt-6 flex">
        <MailInput />
        <Buttons1 text="Talk To Sales" />
      </div>
    </>
  );
}

export default Hero;
