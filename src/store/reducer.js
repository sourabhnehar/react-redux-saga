import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

const initialState = [];

export const cartData = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TO_CART:
      return [
        ...state,
        payload
      ];
      
    case REMOVE_TO_CART:
    //   state.length = state.length && state.length - 1;
    const products = state.filter(item => item.id !== payload.id);
    console.log(products)
      return [...products];

    case EMPTY_CART:
      return [];

    default:
      return state;
  }
};
