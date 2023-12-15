import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import About from "./components/about/About";
const About = () => {
    return (
      <div>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
            This is Burger Shop. The place for the most tasty burgers on the
            entire earth.
          </p>
          <p>
            Explore the various types of food and burgers. Click below to see the
            menu.
          </p>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Nelson</h3>
            </div>
            <p>
              I am Nelson, the founder of Burger Shop. Affiliated to God Taste...
            </p>
          </article>
        </div>
      </div>
    );
  };
export default About;
