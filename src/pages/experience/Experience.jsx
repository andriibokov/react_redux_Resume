import React from "react";

const Experience = ({data}) => {
  return (
    <div className="container flex-auto">
      <div className="my-5">
        <h2 className="my-3">{data?.title}</h2>
        <ul>
          {data?.list.map((item, index) => {
            return (
              <li className="my-2" key={index}>
                <h3 className="my-3">{item?.label}</h3>
                <ul>
                  {item?.text?.map((el, index) => {
                    return (
                      <li className="my-2" key={index}>
                        {el}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Experience;