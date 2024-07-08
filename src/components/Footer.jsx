import React from "react";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      <div className="md:flex">
        <div className="ml-[90px] mt-[20px]">
          <div>
            <img src={logo} alt="" className="h-[40px] w-[140px] pt-1" />
          </div>
          <div className="text-white mt-[200px]">© 2024 MixRank</div>
        </div>
        <div className="ml-[35px] mt-[20px]">
          <div className="text-white font-semibold text-2xl text-thin">
            Solutions
          </div>
          <div className="text-customlastcardtex">B2B Data Enrichment</div>
          <div className="text-customlastcardtex">Candidate Enrichment</div>
          <div className="text-customlastcardtex">
            Fraud Prevention & Identity Resolution
          </div>
          <div className="text-customlastcardtex">Investment Intelligence</div>
          <div className="text-customlastcardtex">
            Mobile Apps & SDKs Intelligence
          </div>
          <div className="text-customlastcardtex mt-[15px]">Get Started</div>
          <div className="text-customlastcardtex">Pricing</div>
          <div className="text-customlastcardtex">Login</div>
          <div className="text-customlastcardtex">Top 10 SDKs</div>
        </div>
        <div className="ml-[35px] mt-[20px]">
          <div className="text-white font-semibold text-2xl text-thin">
            DataSets
          </div>
          <div className="text-customlastcardtex">Mobile Apps And SDKs</div>
          <div className="text-customlastcardtex">People Data</div>
          <div className="text-customlastcardtex">Company Data</div>
          <div className="text-customlastcardtex">Web Technographics</div>
        </div>
        <div className="ml-[35px] mt-[20px]">
          <div className="text-customlastcardtex">About</div>
          <div className="text-customlastcardtex">Carrears</div>
          <div className="text-customlastcardtex">Terms of Service</div>
          <div className="text-customlastcardtex">Privacy</div>
          <div className="text-customlastcardtex">API Documentation</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
