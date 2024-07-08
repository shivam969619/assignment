import React from "react";
import MidCard from "../ui/MidCard";
import global from "../assets/global.png";
import setting from "../assets/setting.png";
import people from "../assets/people.png";
import building from "../assets/building.png";
import sql from "../assets/sql.png";
import file from "../assets/file.png";

function Smallcard() {
  return (
    <div className="mt-[40px] flex flex-wrap h-[400px] w-[90%] ml-[105px]">
      <div className="flex flex-wrap justify-center">
        <div className="w-[250px] m-2">
          <MidCard
            image={global}
            text1="1,000M/mo"
            text2="Web Tech Detections"
          />
        </div>
        <div className="w-[250px] m-2">
          <MidCard
            image={setting}
            text1="100K/mo"
            text2="Mobile SDK Detections"
          />
        </div>
        <div className="w-[250px] m-2">
          <MidCard
            image={people}
            text1="125M/mo"
            text2="Employee Profile Scan"
          />
        </div>
        <div className="w-[250px] m-2">
          <MidCard image={building} text1="45M/mo" text2="Companies Indexed" />
        </div>
        <div className="w-[250px] m-2">
          <MidCard
            image={sql}
            text1="3 Petabytes/mo"
            text2="Data Processed by MixRank"
          />
        </div>
        <div className="w-[250px] m-2">
          <MidCard image={file} text1="45M/mo" text2="Job Posts Added" />
        </div>
      </div>
    </div>
  );
}

export default Smallcard;
