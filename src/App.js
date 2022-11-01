import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/action/dataActions";

import Header from "./components/header/Header";
import RouterList from "./constants/routers/RouterList";
import { dataLanguages } from "./languages/languages";

const App = () => {
  const data = useSelector((state) => state.allData.data);
  const dispatch = useDispatch(); 

  const fetchData = async () => {
    dispatch(
      setData(
        dataLanguages()
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
