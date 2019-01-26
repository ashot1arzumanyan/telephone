import { OPPONENT_PLAYED, DELETE_OPPONENT_ROCK } from '../actions/types'

const initialState = {
  nums: [[7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7], [7, 7]],
}

const opponentRocks = (state = initialState, action) => {
  switch (action.type) {
    case OPPONENT_PLAYED:
      const array = [...state.nums];
      array.splice(array.length - 1, 1);
      return {
        ...state,
        nums: [...array, [...action.p]]
      }

    case DELETE_OPPONENT_ROCK:
      const array1 = [...state.nums];
      array1.pop();
      return {
        ...state,
        nums: array1
      }
  
    default:
      return state
  }
}

export default opponentRocks