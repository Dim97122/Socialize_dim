import { AUTHENTICATE_USER, LOGOUT_USER } from './userType'

const initialState = {
  user: "not_authenticated"
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: "authenticated"
      }
    case LOGOUT_USER:
      return {
        ...state,
        user: "not_authenticated"
      }
    default:
      return state
  }
}

export default userReducer
