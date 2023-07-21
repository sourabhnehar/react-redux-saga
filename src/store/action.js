import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

// add to cart
export const addToCart =(data)=> {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

// remove from cart
export const removeFromCart = (id)=> {
    return {
        type: REMOVE_TO_CART,
        payload: {id}
    }
}

// empty cart
export const emptyCart = ()=> {
    return {
        type: EMPTY_CART,
    }
}
