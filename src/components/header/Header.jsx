import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import st from './Header.module.scss';
import LanguageButtons from "../languageButtons";

const Header = ({ data }) => {

  return (
    <header className={st.header}>
      <div className={classNames("flex justify-between container", st.header)}>
        <nav>
          <ul className="flex flex-row">
            <li>
              <NavLink className="nav_link pr-2" to="about">
                {data?.about}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link pr-2" to="experience">
                {data?.experience}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link pr-2" to="skills">
                {data?.skills}
              </NavLink>
            </li>
            <li>
              <NavLink className="nav_link pr-2" to="portfolio">
                {data?.portfolio}
              </NavLink>
            </li>
          </ul>
        </nav>
        <LanguageButtons />
      </div>
    </header>
  );
};

export default Header;