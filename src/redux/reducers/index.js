import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { optionReducer } from "./optionReducer";
const reducers = combineReducers({
  allData: dataReducer,
  allOption: optionReducer
});
export default reducers;
