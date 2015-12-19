import { combineReducers } from 'redux'
import todos from './todos'

const rootReducer = combineReducers({
  todos,
  stateHistory: (state = {}, action) => state
})

export default rootReducer
