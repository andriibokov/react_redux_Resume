import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/action/dataActions";

import Header from "./components/header/Header";
import RouterList from "./constants/routers/RouterList";
import StateData from "./redux/data";

const App = () => {
  const data = useSelector((state) => state.allData.data);
  const dispatch = useDispatch(); 

  const fetchData = async () => {
    dispatch(
      setData(
        StateData.langwichList[
          localStorage.getItem("langwich") ||
          StateData.option.langwichListNames[0]
        ]
      )
    );
  }; 
    
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header data={data.tittlePage} />
      <RouterList data={data}/>
    </div>
  );
}

export default App;
