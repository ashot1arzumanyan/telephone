const socketHandlers = {
  onError: onError,
  onClose: onClose,
  onMeassage: onMeassage
}

function onError(err) {
  console.log(err);
}

function onClose() {
  console.log('socket closed');
}

async function onMeassage(e) {
  const m = await JSON.parse(e.data);
  console.log(e.data);
  this.dispatch(m)
}

  // socket.onmessage = (e) => {
  //   console.log(e.data);
  //   const data = JSON.parse(e.data)
  //   console.log(data);
  // };

export default socketHandlers