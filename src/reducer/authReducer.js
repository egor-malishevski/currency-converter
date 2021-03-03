import { SIGNIN_USER_DATA, LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR, CLEAR_ERRORS } from '@/constants'

const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        authError: action.err.message,
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      }

    case SIGNOUT_SUCCESS:
      return {
        authError: null,
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null,
      }

    case SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message,
      }

    case CLEAR_ERRORS:
      return {
        ...state,
        authError: null,
      }

    case SIGNIN_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

export default authReducer
