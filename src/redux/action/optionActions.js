import { ActionTypes } from "../constants/action-types";

export const setOption = (option) => {
  return {
    type: ActionTypes.SET_OPTION,
    payload: option,
  };
};
