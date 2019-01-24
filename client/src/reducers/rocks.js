import { ROCKS, SHOULD_START } from '../actions/types'

import Rock from '../canvasFuncs/Rock'

const initialState = {
  nums: [],
  queue: false,
  game_beggining: true,
  selected: [],
  rivalsRocksAmount: 7
}

const rocks = (state = initialState, action) => {

  switch(action.type) {
    case ROCKS:
      new Rock(10, 10, 2, 3).draw()
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