import React from "react";
import { Link } from "react-router-dom";

const PortfolioList = ({data}) => {
  return (
    <div className="container mt-10">
      <ul className="grid grid-cols-portfolio1-1 gap-6">
        {!data
          ? "Loading..."
          : Object.values(data)?.map((item, index) => {
              return (
                <li
                  key={index}
                  className="shadow-xl transition duration-500 ease-in-out transform hover:shadow-sm hover:scale-105 rounded-[12px] overflow-hidden"
                >
                  <Link to={`/portfolio/${item.title}`}>
                    <img src={`./images/${item.title}.png`} alt={item.title} />
                  </Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default PortfolioList;