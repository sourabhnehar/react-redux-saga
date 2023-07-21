import { PRODUCT_LIST } from "./constant";

export const getProductList = () => {
    return {
        type: PRODUCT_LIST,
        data: 'Your payload here', 
     }
  };
