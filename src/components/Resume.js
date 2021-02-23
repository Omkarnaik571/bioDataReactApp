import React from "react";
import react from "../assets/icons/react.svg";
import python from "../assets/icons/python.svg";
import javaScript from "../assets/icons/java-script.svg";
import java from "../assets/icons/java-seeklogo.com.svg";
import spring from "../assets/icons/spring-seeklogo.com.svg";

import Bar from "./Bar";

const languages = [
  {
    icon: java,
    name: "Java",
    level: "92",
  },
  {
    icon: spring,
    name: "Spring",
    level: "88",
  },
  {
    icon: react,
    name: "Hibernate",
    level: "88",
  },
  {
    icon: python,
    name: "Python",
    level: "70",
  },
  {
    icon: react,
    name: "HTML",
    level: "86",
  },
  {
    icon: react,
    name: "CSS",
    level: "75",
  },
  {
    icon: react,
    name: "Bootstrap",
    level: "80",
  },
  {
    icon: javaScript,
    name: "Java Script",
    level: "85",
  },
  {
    icon: react,
    name: "React",
    level: "84",
  },
  {
    icon: react,
    name: "Angular",
    level: "75",
  },
];

const tools = [
  {
    icon: react,
    name: "Git",
    level: "87",
  },
  {
    icon: react,
    name: "Spring Tool Suite",
    level: "90",
  },
  {
    icon: react,
    name: "Burp Suite",
    level: "80",
  },
  {
    icon: react,
    name: "JUnit",
    level: "87",
  },
  {
    icon: react,
    name: "Mockito",
    level: "85",
  },
  {
    icon: react,
    name: "Figma",
    level: "80",
  },
  {
    icon: react,
    name: "Framer",
    level: "55",
  },
  {
    icon: react,
    name: "Intuit QuickBooks",
    level: "90",
  },
  {
    icon: react,
    name: "SonarQube",
    level: "85",
  },
  {
    icon: react,
    name: "SonarLint",
    level: "87",
  },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Information Technology</h5>
            <p className="resume-card__name">
              C.V RAMAN GLOBAL UNIVERSITY (2015-2019)
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">
              Software Development Engineer
            </h5>
            <p className="resume-card__name">OneBill</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
