import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        {/* Background image with title */}
        <Back name="About Us" title="About Us - Protecting Every Child" cover={img} />

        {/* Main Content Section */}
        <div className="container flex mtop">
          <div className="left row">
            {/* Heading Section */}
            <Heading title="Our Mission and Story" subtitle="Learn how we work to ensure the safety and well-being of children everywhere." />

            {/* Paragraphs with Mission Information */}
            <p>
              The Child Welfare Committee (CWC) is dedicated to safeguarding the rights of children and ensuring their safety across communities. Our platform bridges the gap between lost children and their families by providing a streamlined case management process that prioritizes quick action and protection.
            </p>
            <p>
              From providing support services to organizing awareness campaigns, our agency works hand-in-hand with local authorities, caregivers, and volunteers to make sure every child is safe, secure, and has access to the necessary care they deserve.
            </p>

            {/* Call to Action Button */}
            <button className="btn2">Learn More About Us</button>
          </div>

          {/* Image Section */}
          <div className="right row">
            <img src={img} alt="About CWC" />
          </div>

          
        </div>
        <div className="container flex mtop">
        

          {/* Image Section */}
          <div className="right row">
            <img src={img} alt="About CWC" />
          </div>
          <div className="left row">
            {/* Heading Section */}
            <Heading title="Our Mission and Story" subtitle="Learn how we work to ensure the safety and well-being of children everywhere." />

            {/* Paragraphs with Mission Information */}
            <p>
              The Child Welfare Committee (CWC) is dedicated to safeguarding the rights of children and ensuring their safety across communities. Our platform bridges the gap between lost children and their families by providing a streamlined case management process that prioritizes quick action and protection.
            </p>
            <p>
              From providing support services to organizing awareness campaigns, our agency works hand-in-hand with local authorities, caregivers, and volunteers to make sure every child is safe, secure, and has access to the necessary care they deserve.
            </p>

            {/* Call to Action Button */}
            <button className="btn2">Learn More About Us</button>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default About;
