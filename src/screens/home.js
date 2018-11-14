import React, { Component } from "react";
import { Hero } from "../components/Hero";
import { ServicesList } from "../components/Services";
import { Footer } from "../components/Footer";
import { AnimatedSection } from "../components/AnimatedSection";

const services = [
  {
    title: "Interior Design",
    text:
      "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space",
    color: "F1F11E",
    image: require("../assets/yellow.jpg"),
    gradient: ["#D68800", "#CB5555"]
  },
  {
    title: "Fashion Design",
    text:
      "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space",
    color: "27F8E8",
    image: require("../assets/blue.jpg"),
    gradient: ["#0054D6", "#55ACCB"]
  },
  {
    title: "Graphic Design",
    text:
      "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space",
    color: "EF78E8",
    image: require("../assets/purple.jpg"),
    gradient: ["#D600D6", "#A455CB"]
  }
];

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Hero title1="Design" title2="School" />
        <AnimatedSection>
          <ServicesList items={services} />
        </AnimatedSection>
        <Footer />
      </div>
    );
  }
}

export default Home;