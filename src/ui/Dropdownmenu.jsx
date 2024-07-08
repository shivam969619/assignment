import React from "react";

const Dropdownmenu = ({ className, items }) => {
  if (!items || items.length === 0) {
    return null; // Don't render the dropdown if no items are provided
  }

  return (
    <div
      className={`bg-customBackground text-white font-semibold shadow-custom rounded mt-2 ${className}`}
    >
      {items.map((item, index) => (
        <div key={index} className="px-4 py-2 hover:text-onhovertext">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Dropdownmenu;
