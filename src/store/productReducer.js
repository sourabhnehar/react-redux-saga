import { SET_PRODUCT_LIST } from "./constant";

const initialState = [];

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCT_LIST:
      return [...payload]

    default:
      return state;
  }
};
