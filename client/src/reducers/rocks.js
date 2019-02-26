import { ROCKS, SHOULD_START, SET_ROCKS_QUEUE_TO_FALSE, DELETE_ROCK, SELECTED } from '../actions/types'

const initialState = {
  nums: [],
  queue: false,
  selected: [],
}

const rocks = (state = initialState, action) => {

  switch(action.type) {
    case ROCKS:
      return {
        ...state,
        nums: [ ...state.nums, ...action.p ]
      }

    case SHOULD_START:
      const array = action.p ? [action.p, action.p] : [2, 3];
      return {
        ...state,
        queue: true,
        selected: [array]
      }

    case SET_ROCKS_QUEUE_TO_FALSE:
      return {
        ...state,
        queue: false
      }

    case DELETE_ROCK:
      const filtered = state.nums.filter(n => !(n[0] === action.p[0] && n[1] === action.p[1]))
      return {
        ...state,
        queue: false,
        nums: filtered,
        selected: []
      }

    case SELECTED:
      return {
        ...state,
        queue: true,
        selected: [...action.p]
      }
      
    default:
      return state
  }
}

export default rocks