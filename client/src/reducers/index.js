import { combineReducers } from 'redux'

import players from './players'
import rocks from './rocks'
import opponentRocks from './opponentRocks'

const reducers = combineReducers({
  players,
  rocks,
  opponentRocks
})

export default reducers