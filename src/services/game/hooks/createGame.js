'use strict';

// src/services/game/hooks/createGame.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const TILE_VALUES = {
  NO_CHECKER : 0,
  PLAYER_ONE : 1,
  PLAYER_TWO : 2,
  PLAYER_ONE_KING : 3,
  PLAYER_TWO_KING : 4
}

function newSetUp(){
  let newBoard = [];

  for (let y = 0; y <= 8; y++) {
    for (let x = 0; x<= 8; x++){
      let tileValue;
      if(y < 3 && (x%2 + y%2 ) %2==0 ){
        tileValue = TILE_VALUES.PLAYER_ONE;
      } else if(y > 4 && (x%2 + y%2 ) %2==0) {
        tileValue = TILE_VALUES.PLAYER_TWO;
      } else {
        tileValue = TILE_VALUES.NO_CHECKER;
      }


      console.log(newBoard);

      newBoard.push({ x, y, tileValue})
    }
  }

  return newBoard;
}

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const currentUser = hook.params.user;

    hook.data.title = `${currentUser.name}'s Game`;

    hook.data.playerIds = [hook.params.user._id];

    hook.data.checkers = newSetUp();
  };
};
