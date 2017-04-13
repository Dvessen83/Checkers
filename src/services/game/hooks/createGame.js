'use strict';

// src/services/game/hooks/createGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

function createInitialCheckers() {
  let allCheckers = [];
  setUpCheckersForPlayer(0, allCheckers);
  setUpCheckersForPlayer(1, allCheckers);
}

function setUpCheckersForPlayer(playerIndex, allCheckers) {
  const initialY = playerIndex === 0 ? 0 : 5
  const stopBeforeY = initialY + 3

  for (let y = initialY; y < stopBeforeY; y++) {
    let putOnEven = y % 2 === 0

    for (let x = 0; x < 8; x++) {
      let isEvenSquare = x % 2 === 1
      if (isEvenSquare && putOnEven) {
        allCheckers.push({ x, y, playerIndex })
      }
    }
  }
}

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const currentUser = hook.params.user;

    hook.data.title = `${currentUser.name}'s Game`;

    hook.data.playerIds = [hook.params.user._id];

    hook.data.checkers = createInitialCheckers();
  };
};
