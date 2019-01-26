import { PLAYED } from './types'
import { rocksQueueToFalse } from './setQueueToFalse'

export const played = (nums) => (dispatch, g, socket) => {
  socket.send(JSON.stringify({ type: PLAYED, p: nums }))
  dispatch(rocksQueueToFalse)
} 