import React, { useState } from "react";
import logo from "../assets/logo.png";
import Buttons from "../ui/Buttons";
import Dropdownmenu from "../ui/Dropdownmenu";
import { Squash as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleMouseEnter = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownItems = {
    solutions: [
      "B2B Data Enrichment",
      "Investment Intelligence",
      "Fraud Prevention & Identity Resolution",
      "Mobile Apps & SDKs Intelligence",
      "Candidate Enrichment",
    ],
    datasets: [
      "People Data",
      "Mobile Apps And SDKs",
      "Company Data",
      "Web Technographics",
    ],
    topsdks: [
      // Add your items here
    ],
    pricing: ["Mobile Apps & SDKs", "Company & People Data"],
    company: ["About", "Careers"],
    login: [
      // Add your items here
    ],
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="pt-2 px-6 h-[100px] w-full flex items-center justify-between bg-customBackground">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-[40px] w-[140px] pt-1" />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-customBackground text-white flex flex-col items-center justify-center z-10 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:flex-row md:items-center md:justify-between md:ml-[95px] md:translate-x-0`}
      >
        <div
          className="mt-[100px] md:mt-0 ml-4 md:ml-0 hover:text-onhovertext relative"
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
        >
          Solutions
          {activeDropdown === "solutions" && (
            <div className="absolute top-full left-0">
              <Dropdownmenu
                className="w-[350px]"
                items={dropdownItems.solutions}
              />
            </div>
          )}
        </div>
        <div
          className="ml-4 md:ml-[45px] hover:text-onhovertext relative"
          onMouseEnter={() => handleMouseEnter("datasets")}
          onMouseLeave={handleMouseLeave}
        >
          Datasets
          {activeDropdown === "datasets" && (
            <div className="absolute top-full left-0">
              <Dropdownmenu
                className="w-[350px]"
                items={dropdownItems.datasets}
              />
            </div>
          )}
        </div>
        <div
          className="ml-4 md:ml-[45px] hover:text-onhovertext relative"
          onMouseEnter={() => handleMouseEnter("topsdks")}
          onMouseLeave={handleMouseLeave}
        >
          Top SDKs
          {activeDropdown === "topsdks" && (
            <div className="absolute top-full left-0">
              <Dropdownmenu
                className="w-[350px]"
                items={dropdownItems.topsdks}
              />
            </div>
          )}
        </div>
        <div
          className="ml-4 md:ml-[45px] hover:text-onhovertext relative"
          onMouseEnter={() => handleMouseEnter("pricing")}
          onMouseLeave={handleMouseLeave}
        >
          Pricing
          {activeDropdown === "pricing" && (
            <div className="absolute top-full left-0">
              <Dropdownmenu
                className="w-[350px]"
                items={dropdownItems.pricing}
              />
            </div>
          )}
        </div>
        <div
          className="ml-4 md:ml-[45px] hover:text-onhovertext relative"
          onMouseEnter={() => handleMouseEnter("company")}
          onMouseLeave={handleMouseLeave}
        >
          Company
          {activeDropdown === "company" && (
            <div className="absolute top-full left-0">
              <Dropdownmenu
                className="w-[350px]"
                items={dropdownItems.company}
              />
            </div>
          )}
        </div>
        <div
          className="ml-4 md:ml-[45px] hover:text-onhovertext relative"
          onMouseEnter={() => handleMouseEnter("login")}
          onMouseLeave={handleMouseLeave}
        >
          Login
          {activeDropdown === "login" && (
            <div className="absolute top-full left-0">
              <Dropdownmenu className="w-[350px]" items={dropdownItems.login} />
            </div>
          )}
        </div>
        <div className="ml-4 md:ml-[40px]">
          <Buttons text="Talk To Sales" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
