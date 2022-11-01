import React from "react";
import { Link } from "react-router-dom";
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
              <Link className="pr-2" to="/">
                {data?.about}
              </Link>
            </li>
            <li>
              <Link className="pr-2" to="experience">
                {data?.experience}
              </Link>
            </li>
            <li>
              <Link className="pr-2" to="skills">
                {data?.skills}
              </Link>
            </li>
          </ul>
        </nav>
        <LanguageButtons/>
      </div>
    </header>
  );
};

export default Header;