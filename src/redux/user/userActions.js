import { AUTHENTICATE_USER, LOGOUT_USER } from './userType'

export const authenticateUser = (token) => {
  return {
    type: AUTHENTICATE_USER,
    payload: {
      token
    }
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}
