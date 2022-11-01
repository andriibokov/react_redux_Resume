import { ActionTypes } from "../constants/action-types";
const intialState = {
  data: [],
};

export const dataReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: payload };
    default:
      return state;
  }
};
