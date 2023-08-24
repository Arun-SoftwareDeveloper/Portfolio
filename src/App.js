import React from "react";
import NavigationBar from "./Components/NavigationBar";
import HomeHeader from "./Components/HomeHeader";
import AboutSection from "./Components/AboutSection";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import BuyMeACoffee from "./Components/BuyMeACoffee";
import Certifications from "./Components/Certifications";
import "./App.css";

function App({ buyMeACoffeeId }) {
  return (
    <div className="app-container">
      <NavigationBar />
      <HomeHeader />
      <AboutSection />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
