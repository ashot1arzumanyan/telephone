import { ADD_PLAYER, DELETE_PLAYER, PLAYERS_LIST } from '../actions/types'

const initialState = {
  list: [],
  name: ''
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case PLAYERS_LIST: 
      return {
        ...state,
        list: state.list.concat(action.p),
        name: action.y
      }
    case ADD_PLAYER:
      return {
        ...state,
        list: [...state.list, action.p]
      }

    case DELETE_PLAYER:
      return {
        ...state,
        list: state.list.filter(l => l !== action.p)
      }
      
    default:
      return state
  }
}

export default players