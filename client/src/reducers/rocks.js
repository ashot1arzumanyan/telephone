import { ROCKS, SHOULD_START } from '../actions/types'

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
      
    default:
      return state
  }
}

export default rocks