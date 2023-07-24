import { LOGIN_FAILED, LOGIN_SUCCESS, SIGNUP_FAILED, SIGNUP_SUCCESS } from "./constant";

const initialState = {
    token:null,
    isAuthenticated:false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNUP_SUCCESS:
      return {
        token: payload.data.token,
        isAuthenticated: true
      }
      case SIGNUP_FAILED:
        return {
            ...state,
            data: payload
        }
        case LOGIN_SUCCESS:
            return {
                token: payload.data.token,
                isAuthenticated: true
              }
              case LOGIN_FAILED:
                return {
                    ...state,
                    data: payload
                }
    default:
      return state;
  }
};