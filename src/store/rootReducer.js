import { combineReducers } from 'redux';
import { cartData } from './reducer';
import { productReducer } from './productReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  cart: cartData,
  products: productReducer,
  auth: authReducer
});