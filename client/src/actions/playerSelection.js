import { PLAYER_SELECTION } from './types'

const playerSelection = (name) => (dispatch, g, socket) => {
  console.log(name);
  socket.send(JSON.stringify({type: PLAYER_SELECTION, p: name}))  
}

export default playerSelection