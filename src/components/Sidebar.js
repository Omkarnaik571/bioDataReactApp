import React from "react";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import pin from "../assets/icons/pin.svg";
import tie from "../assets/icons/tie.svg";
import mightycoder from "../assets/Omkar.jpg";
import resume from "../assets/OmkarResume.pdf";
import realMadrid from "../assets/real-madrid-c-f.svg";
import leoLogo from "../assets/Meluha_-_Copy.jpg";

const Sidebar = () => {
  const handleEmailMe = () => {
    window.open("mailto:aaryannaik220@gmail.com");
  };
  return (
    <div className="sidebar">
      <img src={mightycoder} alt="avatar" className="sidebar__avatar" />
      <div className="sidebar__name">Omkar Naik</div>
      <div className="sidebar__title">Full Stack Developer</div>
      <div
        style={{ marginBottom: "1rem", marginTop: "0.4rem", color: "black" }}
      >
        [ Java || Java Script || Spring || Hibernate || React Js || Angular ]
      </div>
      <a href={resume} download="resume.pdf">
        <div className="sidebar__item sidebar__resume">
          <img src={tie} alt="resume" className="sidebar__icon" />
          Download Resume
        </div>
      </a>
      <figure className="sidebar__social-icons my-2">
        <a href="https://www.facebook.com/omkar.naik.31105/" target="blank">
          <img src={facebook} alt="facebook" className="sidebar__icon mr-3" />
        </a>
        <a href="https://www.instagram.com/aaryannaik/" target="blank">
          <img src={instagram} alt="instagram" className="sidebar__icon" />
        </a>
      </figure>
      <div className="sidebar__contact">
        <div className="sidebar__item sidebar__github">
          <a href="https://github.com/Omkarnaik571" target="blank">
            <img src={github} alt="github" className="sidebar__icon mr-3" />
            github
          </a>
        </div>
        <div className="sidebar__location">
          <img src={pin} alt="location" className="sidebar__icon mr-3" />
          Bangalore, India
        </div>
      </div>
      <div
        className="sidebar__item sidebar__email"
        onClick={handleEmailMe}
        style={{ marginBottom: "2rem" }}
      >
        Email Me
      </div>
      <img src={leoLogo} alt="avatar" className="sidebar__image" />
    </div>
  );
};

export default Sidebar;
