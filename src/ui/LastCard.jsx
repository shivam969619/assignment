import React from "react";
import mnector from "../assets/mnector.png";
const LastCard = ({ text1, image, text2, text3, text4 }) => {
  return (
    <>
      <div className="h-[350px] w-[400px] rounded-2xl bg-customTopCard mt-8">
        <div className=" w-[80%] pl-12 pt-6 font-extrabold text-lg">
          <ul className="list-disc text-white font-extrabold text-2xl">
            <li>{text1}</li>
          </ul>
        </div>
        <div className="pt-3 pl-[44px] text-customTopcardText w-[80%] font-semibold">
          {text2}
        </div>
        <div className="pt-8 pl-[44px] flex">
          <div>
            <img src={image} alt="" className="h-[75px] w-[75px]" />
          </div>
          <div>
            <div className="font-extrabold text-3xl text-white pl-2">
              {text3}
            </div>
            <div className="text-xl font-bold text-customlastcardtext pl-2">
              {text4}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastCard;
