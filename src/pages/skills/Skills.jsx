import React from "react";

const Skills = ({ data }) => {
  return (
    <div className="container flex-auto">
      <div className="my-5">
        <h2 className="my-3">{data?.title}</h2>
        <ul>
          {data?.list?.map((item, index) => {
            return (
              <li className="my-2" key={index}>
                <h3>{item}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;