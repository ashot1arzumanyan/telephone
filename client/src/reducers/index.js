import { combineReducers } from 'redux'

import players from './players'
import rocks from './rocks'

const reducers = combineReducers({
  players,
  rocks
})

export default reducers