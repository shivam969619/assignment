import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TopCard = ({
  image,
  sabseuperwalatext,
  uskejustnichewalatext,
  bichkatext,
  aakhirikatext,
}) => {
  return (
    <>
      <div className="lg:h-[270px] lg:w-[600px] bg-customTopCard rounded-xl sm:h-[350px] sm:w-[300px] md-[350px] md:w-[400px] ">
        <div className="lg:h-[125px] lg:pl-7 lg:pt-7 flex sm:h-[150px] sm:pl-4 sm:pt-4">
          <div className="h-[85px] w-[85px] bg-customTopImagebg rounded-lg flex justify-center items-center">
            <img src={image} alt="" className="h-[50px] w-[40px]" />
          </div>
          <div className="h-[85px] w-full flex flex-col justify-center pl-4">
            <div className="text-customTopText font-semibold">
              {sabseuperwalatext}
            </div>
            <div
              className="text-white font-extrabold large-font"
              style={{ fontSize: "24px" }}
            >
              {uskejustnichewalatext}
            </div>
          </div>
        </div>
        <div className="h-[100px] pl-7 pt-3 flex pr-2 text-customTopcardText">
          {bichkatext}
        </div>
        <div className="pl-7">
          <div className="flex">
            <div className="text-white font-semibold">{aakhirikatext}</div>
            <div className="pl-1 pt-1">
              <FaArrowRight style={{ color: "white" }} />
            </div>
          </div>
          <div className="bg-customTopText border-t-2 border-customTopText w-[60%]"></div>
        </div>
      </div>
    </>
  );
};

export default TopCard;
