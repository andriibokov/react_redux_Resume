import classNames from "classnames";
import React from "react";
import st from "./Experience.module.scss"

const Experience = ({data}) => {
  return (
    <div className="container flex-auto">
      <p className={classNames(st.title)}>{data?.test}</p>
    </div>
  );
};

export default Experience;