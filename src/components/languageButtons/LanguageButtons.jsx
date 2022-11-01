import React, { useState } from "react";
import Button from "../UI/Button";
import classNames from "classnames";
import { dataLanguages, languageList } from "../../languages/languages";
import { useDispatch } from "react-redux";
import { setData } from "../../redux/action/dataActions";

const LanguageButtons = () => {
  const dispatch = useDispatch();
  const [activelanguage, setActivelanguage] = useState(
    localStorage.getItem("language") || "ua"
  );


  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setActivelanguage(lang);
    dispatch(setData(dataLanguages(lang)));
  };

  return (
    <div className="flex flex-row">
      {Object.keys(languageList)?.map((btn, index) => (
        <Button
          className={classNames("px-1", {
            "text-red-500": activelanguage === btn,
          })}
          onClick={() => changeLanguage(btn)}
          key={index}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default LanguageButtons;
