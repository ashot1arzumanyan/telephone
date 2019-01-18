const app = require('http').createServer(serverHandler);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server: app, clientTracking: false });

const Referee = require('./server/helpers/Referee');

app.listen(8000, () => { console.log('listening on port 8000') })

app.on('error', printError);

function serverHandler(req, res) {
  res.writeHead(200);
  res.end()
}

function printError(err) {
  console.log(err);
}

wss.on('error', printError);


const referee = new Referee(WebSocket.OPEN);

wss.on('connection', (ws, req) => {

  referee.add(ws, req);

  ws.on('error', printError);

  ws.on('close', handlePlayerLeave);

  ws.on('message', handleMessage)

})

function handleMessage(msg) {
  console.log(msg)
}

function handlePlayerLeave(why) {
  referee.delete(this);
  console.log('wth %s player leave, because of code %s', this.id, why)
}