'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checkerSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  playerIndex: { type: Number, required: true },
})

const gameSchema = new Schema({
  title: { type: String, required: true },
  checkers: [checkerSchema],
  playerIds: [Schema.Types.ObjectId],
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
