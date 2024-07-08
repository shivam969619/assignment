import React from "react";
import TopCard from "../ui/TopCard";
import android from "../assets/android.png";
import web from "../assets/web.png";
import men from "../assets/men.png";
import firm from "../assets/firmographic.png";
function MainCard() {
  return (
    <div className="mt-20">
      <div className="text-white font-thin text-5xl ml-[100px]">
        Get to know our data
      </div>
      <div className="mt-6 ml-[100px] flex flex-wrap pb-4">
        <div className="pl-2 pr-2 pb-2 pt-2">
          <TopCard
            image={android}
            sabseuperwalatext="20M+ iOS & Android apps"
            uskejustnichewalatext="Mobile App & SDK Data
"
            bichkatext="Hundreds of top mobile app technology companies, publishers and agencies use MixRank to grow sales, react to competitors, plan market strategies and retain customers."
            aakhirikatext="Learn more about our mobile app dataset
          
"
          />
        </div>
        <div className="pl-2 pr-2 pb-2 pt-2">
          <TopCard
            image={web}
            sabseuperwalatext="80M+ websites"
            uskejustnichewalatext="Website & Tech Install Data
"
            bichkatext="MixRank provides key insights into a company’s technology usage, by analyzing website performance and keeping track of every tech product that runs on the company web pages.
"
            aakhirikatext="Learn more about our web technographics dataset
          
"
          />
        </div>
        <div className="pl-2 pr-2 pb-2 pt-2">
          <TopCard
            image={firm}
            sabseuperwalatext="45M+ company profiles"
            uskejustnichewalatext="Company Firmographic Data"
            bichkatext="Hundreds of top mobile app technology companies, publishers and agencies use MixRank to grow sales, react to competitors, plan market strategies and retain customers."
            aakhirikatext="Learn more about our mobile app dataset"
          />
        </div>
        <div className="pl-2 pr-2 pb-2 pt-2">
          <TopCard
            image={men}
            sabseuperwalatext="500M+ employee profiles"
            uskejustnichewalatext="Professional People Data"
            bichkatext="From newly minted startups to public organizations, find and keep track of every company out there and get insights on location, size, industry, employee growth across years, industry classification, and more.."
            aakhirikatext="Learn more about our company dataset"
          />
        </div>
      </div>
    </div>
  );
}

export default MainCard;
