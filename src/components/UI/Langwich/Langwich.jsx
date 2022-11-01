import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateData from "../../../redux/data";
import { setData } from "../../../redux/action/dataActions";
import { setOption } from "../../../redux/action/optionActions";
import Button from "../Button";
import classNames from "classnames";


const Langwich = () => {
  const dispatch = useDispatch();
  const option = useSelector((opt) => opt.allOption.option);
  const optionsLang = option?.langwichListNames;
  const [activeLangwich, setActiveLangwich] = useState(optionsLang?.[0]);

  useEffect(() => {
    dispatch(setOption(StateData.option));
  }, []);

  useEffect(() => {
    langwichStore( localStorage.getItem("langwich") || optionsLang?.[0] );
  }, [optionsLang]);

  const changLangwich = (lang) => {
    dispatch(setData(StateData.langwichList[lang]));
    langwichStore(lang);
  };

  const langwichStore = (lang) => {
    setActiveLangwich(lang);
    localStorage.setItem("langwich", lang);
  };

  return (
    <div className="flex flex-row">
      {optionsLang?.map((btn, index) => (
        <Button
          className={classNames("px-1", {
            "text-red-500": activeLangwich === btn,
          })}
          onClick={() => changLangwich(btn)}
          key={index}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
}

export default Langwich;