import handlers from './helpers/socketHandlers'

const initSocket = ((socket, dispatch) => {
  socket.onerror = handlers.onError;
  socket.onclose = handlers.onClose;

  socket.onopen = function(ev) {
    console.log(ev);
    this.dispatch = dispatch;
    // console.log(this);
    // const playerName = Date.now();
    // socket.send(JSON.stringify({ type: 'ADD_PLAYER', p: playerName }))
  }

  socket.onmessage = handlers.onMeassage
})

export default initSocket