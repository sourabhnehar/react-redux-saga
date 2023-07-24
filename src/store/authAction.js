import { SIGNUP, LOGIN } from "./constant"

export const signup = (data, navigate)=> {
    return {
        type: SIGNUP,
        payload: data,
        onSuccess: () => navigate("/login")
    }
}
export const login = (data, navigate)=> {
    return {
        type: LOGIN,
        payload: data,
        onSuccess: () => navigate("/")
    }
}

