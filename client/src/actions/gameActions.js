import { PLAYED } from './types'

export const played = (nums) => (dispatch, g, socket) => {
  console.log(nums);
  socket.send(JSON.stringify({ type: PLAYED, p: nums }))
} 