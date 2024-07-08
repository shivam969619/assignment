import React from "react";
import homelines from "./assets/homelines.png";
import "./App.css";
import android from "./assets/android.png";
import global from "./assets/global.png";
import Buttons from "./ui/Buttons";
import MailInput from "./ui/MailInput";
import TopCard from "./ui/TopCard";
import MidCard from "./ui/MidCard";
import LastCard from "./ui/LastCard";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mid from "./components/Mid";
import MainCard from "./components/MainCard";
import Smallcard from "./components/Smallcard";
import HeroSection2 from "./components/HeroSection2";
import Hero3 from "./components/Hero3";
import CardSlider from "./components/CardSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-customBackground  overflow-x:hidden ">
        <Navbar />
        <Hero />
        <Mid />
        <MainCard />
        <Smallcard />
        <HeroSection2 />
        <Hero3 />
        <CardSlider />
        <Footer />
      </div>
    </>
  );
}

export default App;
