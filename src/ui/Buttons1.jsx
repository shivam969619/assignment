import React from "react";

function Buttons1({ text }) {
  return (
    <button className="h-16 w-[290px] bg-customButton text-white flex justify-center items-center rounded hover:bg-customButtonHover transition duration-300 ml-4">
      {text}
    </button>
  );
}

export default Buttons1;
