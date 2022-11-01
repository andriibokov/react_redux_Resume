import classNames from "classnames";
import React from "react";
import st from "./Skills.module.scss"

const Skills = ({ data }) => {
  return (
    <div className="container flex-auto">
      <p className={classNames(st.title)}>{data?.test}</p>
    </div>
  );
};

export default Skills;