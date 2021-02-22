import React from "react";
import api from "../assets/icons/api.svg";
import backend from "../assets/icons/backend.svg";
import algo from "../assets/icons/algo.svg";
import computer from "../assets/icons/computer.svg";
import repair from "../assets/icons/repair.svg";
import puzzle from "../assets/icons/puzzle.svg";

import Skillcard from "./Skillcard";

const skills = [
  {
    icon: computer,
    title: "Frontend Development",
    about:
      "Responsible for building reusable, high quality code and libraries for future use which can be used across multiple projects. Ensure the technical feasibility of UI/UX designs and implement them. Acquaintance with designing and developing single page web applications using React & Angular. ",
  },
  {
    icon: repair,
    title: "Backend  Development",
    about:
      "Responsible for defining & developing software architecture in a fast paced and agile development environment using the latest software development methods and infrastructure using Spring Rest, Spring Boot & Hibernate framework",
  },
  {
    icon: api,
    title: "API Development",
    about:
      "Insight into building robust secure and scalable micro-services to build optimized & powerful applications and building scalable java microservices. Proficient in implementing RESTful services with a metric-driven API Gateway.  ",
  },
  {
    icon: puzzle,
    title: "UI/UX",
    about:
      " Develop UI mockups and prototypes that clearly illustrate how sites function and look like, Identify and troubleshoot UX problems (e.g. responsiveness). Adhere to style standards on fonts, colors and images.",
  },
  {
    icon: algo,
    title: "Competitive Coder",
    about:
      "Passionate about working with different tools and technologies to deliver end-to-end solutions, continuously evaluate relevant technologies, influence and drive architecture and design discussions. ",
  },
];

const About = () => {
  return (
    <div className="about">
      <h6 className="about__intro">
        Experience of working across the application stack to develop UI code
        using React & Angular,develop business logic in Microservices using
        Spring REST, Spring Boot & Hibernate, and develop in relational
        databases (MySQL). Provide support, design, construct and implement
        software that meets business requirements. Experience in full stack
        development with strong knowledge in backend. Solid understanding of
        Microservices framework, Spring-Boot. Hands on in coding using Java 8,
        Spring Boot, Microservices.
      </h6>
      <div className="container about__container">
        <h6 className="about__heading">What I offer</h6>
        <div className="row">
          {skills.map((skill) => (
            <Skillcard skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
