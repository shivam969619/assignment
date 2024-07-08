import React from "react";

const MidCard = ({ image, text1, text2 }) => {
  return (
    <div className="h-[150px] w-[150px]">
      <div>
        <img
          src={image}
          alt=""
          className="md:h-[100px] md:w-[100px] sm:w-[200px]"
        />
      </div>
      <div className="text-white font-bold pt-1 text-lg ">{text1}</div>

      <div className="text-custommidcardText pt-1 font-bold">{text2}</div>
    </div>
  );
};

export default MidCard;
