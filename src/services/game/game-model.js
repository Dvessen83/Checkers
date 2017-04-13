'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const TILE_VALUES = {
//   NO_CHECKER = 0,
//   PLAYER_ONE = 1,
//   PLAYER_TWO = 2,
//   PLAYER_ONE_KING = 3,
//   PLAYER_TWO_KING = 4
// }

const checkerSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  value: { type: Number, required: true } //0=no checker, 1=player 1 checker, 2=player 2 checker, 3=player 1 king, 4=player2 king
});

const gameSchema = new Schema({
  title: { type: String, required: true },
  checkers: [ checkerSchema ],
  playerIds: [Schema.Types.ObjectId],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
