const { ADD_PLAYER, DELETE_PLAYER, PLAYERS_LIST, PLAYER_SELECTION } = require('../../client/src/actions/types');
const Adapter = require('./Adapter');

function Referee(OPEN) {
  Adapter.call(this)
  this.OPEN = OPEN;
}

Referee.prototype = Object.create(Adapter.prototype)

Referee.prototype.add = async function(ws, req) {
  const randomName = await this.randomName();
  const id = await this.getId(req);
  this.sendMSG(ws, {type: PLAYERS_LIST, p: this.names, y: randomName});
  this.addValues(ws, randomName, id);
  this.broadcastExludeGivenWS(JSON.stringify({ type: ADD_PLAYER, p: randomName }), ws)
}

Referee.prototype.delete = async function(ws) {
  const index = await this.clients.indexOf(ws);
  await this.deleteValues(index);
  this.broadcast(JSON.stringify({ type: DELETE_PLAYER, p: ws.name }))
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
    return await ws.send(JSON.stringify(msg))
  } catch(e) {
    console.log(e);
  }
}

Referee.prototype.sendStringifiedMSG = async function(ws, msg) {
  try {
    return await ws.send(msg)
  } catch(e) {
    console.log(e);
  }
}

Referee.prototype.parseMSG = function(msg) {
  return JSON.parse(msg);
}


Referee.prototype.receiveMSG = function(msg) {
  const m = this.parseMSG(msg);
  switch (m.type) {
    case PLAYER_SELECTION:
      this.playerSelection(m.p)
      break
    default:
      break
  }
}

Referee.prototype.playerSelection = async function(name) {
  const index = await this.names.indexOf(name);
  console.log(index);
}

module.exports = Referee