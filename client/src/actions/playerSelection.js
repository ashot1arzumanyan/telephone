import { PLAYER_SELECTION } from './types'

const playerSelection = (name) => (dispatch, g, socketSend) => {
  console.log(name);
  socketSend.send(JSON.stringify({type: PLAYER_SELECTION, p: name}))  
}

export default playerSelection