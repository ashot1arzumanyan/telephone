const { 
  ADD_PLAYER, 
  DELETE_PLAYER, 
  PLAYERS_LIST, 
  PLAYER_SELECTION, 
  ROCKS,
  SHOULD_START } = require('../client/src/actions/types');
const Adapter = require('./Adapter');

function Referee(OPEN) {
  Adapter.call(this)
  this.OPEN = OPEN;
}

Referee.prototype = Object.create(Adapter.prototype)

Referee.prototype.add = function(ws) {
  const randomName = this.randomName();
  const names = this.getNames();
  this.sendMSG(ws, {type: PLAYERS_LIST, p: names, y: randomName});
  this.broadcast(JSON.stringify({ type: ADD_PLAYER, p: randomName }))
  ws.name = randomName;
  this.addPlayer(ws);
}

Referee.prototype.delete = function(ws) {
  this.deletePlayer(ws);
  this.broadcast(JSON.stringify({ type: DELETE_PLAYER, p: ws.name }))
}

Referee.prototype.broadcast = function(msg) {
  for (let i = 0, l = this.players.length; i < l; i++) {
    if (this.players[i].readyState === this.OPEN) {
      this.sendStringifiedMSG(this.players[i], msg)
    }
  }
}

Referee.prototype.broadcastExludeGivenWS = function(msg, ws) {
  for (let i = 0, l = this.players.length; i < l; i++) {
    if (this.players[i] !== ws && this.players[i].readyState === this.OPEN) {
      this.sendStringifiedMSG(this.players[i], msg)
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


Referee.prototype.receiveMSG = function(msg, ws) {
  const m = JSON.parse(msg);
  switch (m.type) {
    case PLAYER_SELECTION:
      this.addRoom(ws, m.p)
        .then(game => {
          this.sendMSG(game.player1, { type: ROCKS, p: game.player1Rocks })
          this.sendMSG(game.player2, { type: ROCKS, p: game.player2Rocks })
          const whoShouldStart = game.shouldStart();
          if ('i' in whoShouldStart) {
            this.sendMSG(whoShouldStart.player, { type: SHOULD_START, p: whoShouldStart.i })
          } else {
            this.sendMSG(whoShouldStart, { type: SHOULD_START })
          }
        });
      break;
    default:
      break
  }
}

module.exports = Referee