import React from "react";

// import react from "../assets/icons/react.svg";
import javascript from "../assets/icons/javascript.png";
import cpp from "../assets/icons/cpp.png";
import react from "../assets/icons/react.png";
import css from "../assets/icons/css.png";
import photoshop from "../assets/icons/photoshop.gif";
import figma from "../assets/icons/figma1.gif";
import bootstraph from "../assets/icons/bootstraph.png";
import reactnative from '../assets/icons/reactnative.png';
import Bar from "./Bar";

const languages = [
  {
    icon: cpp,
    name: "C++",
    level: "85",
  },
  {
    icon: javascript,
    name: "JavaScript",
    level: "80",
  },
  {
    icon: react,
    name: "React",
    level: "83",
  },
  {
    icon: reactnative,
    name: "React Native",
    level: "86",
  },
  {
    icon: css,  
    name: "Css",
    level: "80",
  },
  {
    icon: bootstraph,
    name: "Bootstrap",
    level: "80",
  },
];

const tools = [
  {
    icon: figma,
    name: "Figma",
    level: "85",
  },
  {
    icon: photoshop,
    name: "Photoshop",
    level: "45",
  },
  {
    icon: react,
    name: "Illustrator",
    level: "60",
  },
  {
    icon: react,
    name: "Framer",
    level: "45",
  },
];

const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Engineering</h5>
            <p className="resume-card__name">
              Punjab Technical University(2018-2022)
            </p>
            <p className="resume-card__details">
              I am currently persuing B.tech in Computer Science Engineering
              from Punjab technical University.
            </p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Intern</h5>
            <p className="resume-card__name">Easyshiksha(2021)</p>
            <p className="resume-card__details">
              I work as a intern as an Android Development Intern using React
              native in Easyshiksha.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="mt-3 resume-language__body">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="mt-3 resume-language__body">
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
