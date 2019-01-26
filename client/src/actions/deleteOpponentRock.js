import { DELETE_OPPONENT_ROCK } from './types'

// const deleteOpponentRock = (rock) => dispatch => {
//   dispatch(deleteRock)
// }

const deleteRock = (rock) => {
  return {
    type: DELETE_OPPONENT_ROCK,
    p: rock
  }
}

export default deleteRock