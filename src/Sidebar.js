import React from "react";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import logo from "./logo.svg";

const Sidebar = () => {
  // to show sidebar use classname show-sidebar
  return (
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding portfolio" />
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
