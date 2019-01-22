import { ROCKS } from '../actions/types'



const rocks = (state = [], action) => {

  switch(action.type) {
    case ROCKS:
      return [...state, ...action.p]
    default:
      return state
  }
}

export default rocks