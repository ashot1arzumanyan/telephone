const Dealer = require('./Dealer');

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  let x = new Dealer().getData()
  this.store = x.store;
  this.player2Rocks = x.player1Rocks;
  this.player1Rocks = x.player2Rocks;
  x = null
}

module.exports = Game