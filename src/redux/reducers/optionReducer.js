import { ActionTypes } from "../constants/action-types";
const intialOption = {
  option: [],
};

export const optionReducer = (opt = intialOption, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_OPTION:
      return { ...opt, option: payload };
    default:
      return opt;
  }
};
