import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import internalization from './internalization'
import baseValues from './baseValues'
import dataList from './dataList'
import authReducer from './authReducer'
import countries from './countries'

export default combineReducers({
  internalization,
  baseValues,
  dataList,
  countries,
  auth: authReducer,
  firebase: firebaseReducer,
})
