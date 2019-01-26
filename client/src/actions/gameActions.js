import { PLAYED, DELETE_ROCK } from './types'

export const played = (nums) => (dispatch, g, socket) => {
  dispatch({ type: DELETE_ROCK, p: nums })
  socket.send(JSON.stringify({ type: PLAYED, p: nums }))
} 