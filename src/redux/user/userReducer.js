import { AUTHENTICATE_USER, LOGOUT_USER } from './userType';
import Cookies from 'js-cookie';

const cookie = Cookies.get("token") !== undefined ? (Cookies.get("token")) : undefined;


const initialState = {
  user: "not_authenticated",
  token: cookie
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: "authenticated",
        token: action.payload.token
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: "not_authenticated",
        token: undefined
      }
    default:
      return state
  }
}

export default userReducer
