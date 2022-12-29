import React from "react";
import { Link, useParams } from "react-router-dom";

const PortfolioItem = ({data}) => {
  const id = useParams().id;
  const label = data?.label;
  const portfolioList = data?.portfolioList;
  const portfolio = portfolioList?.[id];
  return (
    <div className="container">
      <Link
        to="/portfolio"
        className="flex justify-center items-center w-[120px] my-6 p-2 bg-purple-500 text-white rounded-[6px] hover:bg-purple-100 cursor-pointer"
      >
        Назад
      </Link>
      <h2 className="text-center text-5xl font-bold my-10">
        {portfolio?.title}
      </h2>
      <div className="grid grid-cols-portfolio1-1 gap-20">
        <img src={`../images/${portfolio?.title}.png`} alt={portfolio?.title} />
        <div className="flex flex-col">
          <div>
            <h4 className="text-xl font-medium mb-4">{label?.technologies}</h4>
            <ul>
              <li>1. Htlm</li>
              <li>1. Htlm</li>
              <li>1. Htlm</li>
              <li>1. Htlm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-medium mb-4">{label?.tasks}</h4>
            <ul>
              <li>1. Htlm</li>
              <li>1. Htlm</li>
              <li>1. Htlm</li>
              <li>1. Htlm</li>
            </ul>
          </div>
            <a href={portfolio?.url} target="_blank">Site</a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;