import { AUTHENTICATE_USER, LOGOUT_USER } from './userType'

export const authenticateUser = () => {
  return {
    type: AUTHENTICATE_USER
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}
