import { OPPONENT_PLAYED } from '../actions/types'

const initialState = {
  nums: [[7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7]],
  queue: false,
}

const opponentRocks = (state = initialState, action) => {
  switch (action.type) {
    case OPPONENT_PLAYED:
      const array = [...state.nums];
      array.splice(array.length - action.p.length, action.p.length);
      return {
        ...state,
        queue: true,
        nums: [...array, ...action.p]
      }
  
    default:
      return state
  }
}

export default opponentRocks