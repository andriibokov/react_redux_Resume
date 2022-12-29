import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/about";
import Experience from "../../pages/experience";
import Skills from "../../pages/skills";
import PortfolioList from "../../pages/portfolio";
import PortfolioItem from "../../pages/portfolioItem";

const RouterList = ({data}) => {


  return (
    <Routes>
      <Route path="about" element={<About data={data?.about} />} />
      <Route path="experience" element={<Experience data={data?.experience} />}/>
      <Route path="skills" element={<Skills data={data?.skills} />} />
      <Route path="portfolio" element={<PortfolioList data={data?.portfolio?.portfolioList} />}/>
      <Route path="portfolio/:id" element={<PortfolioItem data={data?.portfolio} />}/>
      <Route>404 Not Found!</Route>
    </Routes>
  );
};

export default RouterList;
