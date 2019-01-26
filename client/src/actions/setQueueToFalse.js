import { SET_ROCKS_QUEUE_TO_FALSE, SET_OPPONENT_QUEUE_TO_FALSE } from './types'

export const setRocksQueueToFalse = () => dispatch => {
  dispatch(rocksQueueToFalse)
} 

export const setOpponentRocksQueueToFalse = () => dispatch => {
  dispatch(opponentRocksQueueToFalse)
}

export const rocksQueueToFalse = {
  type: SET_ROCKS_QUEUE_TO_FALSE
}

const opponentRocksQueueToFalse = {
  type: SET_OPPONENT_QUEUE_TO_FALSE
}