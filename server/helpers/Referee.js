const { ADD_PLAYER, DELETE_PLAYER, PLAYERS_LIST } = require('../../client/src/actions/types');

function Referee(OPEN) {
  this.OPEN = OPEN;
  this.clients = [];
  this.names = [];
  this.ids = [];
  this.rooms = [];
  this.players = {}
}

Referee.prototype.add = async function(ws, req) {
  const name = await this.randomName();
  this.sendMSG(ws, {type: PLAYERS_LIST, p: this.names, y: name});
  const id = await this.getId(req);
  ws.name = name;
  ws.id = id;
  this.ids.push(id);
  this.names.push(name);
  this.clients.push(ws);
  this.broadcastExludeGivenWS(JSON.stringify({ type: ADD_PLAYER, p: name }), ws)
}

Referee.prototype.delete = async function(ws) {
  const index = await this.clients.indexOf(ws);
  console.log('found ' + index + ' name ' + ws.name);
  this.names.splice(index, 1);
  this.ids.splice(index, 1);
  await this.clients.splice(index, 1);
  this.broadcast(JSON.stringify({ type: DELETE_PLAYER, p: ws.name }))
}

Referee.prototype.randomName = function() {
  const getRandomName = () => {
    const unnamed = 'Unnamed';
    const randomFourDigit = Math.ceil(Math.random() * 1000);
    const name = unnamed + randomFourDigit;
    if (this.names.indexOf(name) > -1) {
      getRandomName()
    } else {
      return name
    }
  }
  return getRandomName();
}

Referee.prototype.getId = function(req) {
  return req.connection.remoteAddress + '_' + req.connection.remotePort;
}

Referee.prototype.broadcast = function(msg) {
  for (let i = 0, l = this.clients.length; i < l; i++) {
    if (this.clients[i].readyState === this.OPEN) {
      this.sendStringifiedMSG(this.clients[i], msg)
    }
  }
}

Referee.prototype.broadcastExludeGivenWS = function(msg, ws) {
  for (let i = 0, l = this.clients.length; i < l; i++) {
    if (this.clients[i] !== ws && this.clients[i].readyState === this.OPEN) {
      this.sendStringifiedMSG(this.clients[i], msg)
    }
  }
}

Referee.prototype.sendMSG = async function(ws, msg) {
  try {
    await ws.send(JSON.stringify(msg))
  } catch(e) {
    console.log(e);
  }
}

Referee.prototype.sendStringifiedMSG = async function(ws, msg) {
  try {
    await ws.send(msg)
  } catch(e) {
    console.log(e);
  }
}

module.exports = Referee