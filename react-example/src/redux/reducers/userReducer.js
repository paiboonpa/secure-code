import { LOGIN_USER, LOGOUT_USER } from '../actions/actions'
import jwtDecode from 'jwt-decode'

const initialState = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    return jwtDecode(token)
  } else {
    return {
      role: "guest"
    }
  }
}

function userReducer(currentUser = initialState(), action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        id: action.id,
        role: action.role,
        name: action.name,
        profilePic: action.profilePic
      }
    case LOGOUT_USER:
      return {
        role: "guest"
      }
    default:
      return currentUser
  }
}


export default userReducer