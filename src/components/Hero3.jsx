import React from "react";
import Buttons from "../ui/Buttons";
import hero from "../assets/hero2.png";
function Hero3() {
  return (
    <>
      <div className="mt-[150px] ml-[80px] flex justify-start h-[600px]">
        <div>
          <div className="text-white  pt-4 h-[190px] text-6xl text-thin">
            Out-of-the box and bespoke integrations with leading customer data
            platforms
          </div>
          <div className="text-customTopCard2  text-thin text-3xl pt-6 h-[170px]">
            Ingest our data into your platform of choice. We can either provide
            raw data feeds, or help you build custom integrations to
            applications of your preference.
          </div>
          <div className="pt-4 h-[190px]">
            <Buttons text="Contact Sales" />
          </div>
        </div>
        <div className="ml-6">
          <img src={hero} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero3;
