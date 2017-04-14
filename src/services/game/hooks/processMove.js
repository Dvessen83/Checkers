
const TILE_VALUES = {
  NO_CHECKER: 0,
  PLAYER_ONE: 1,
  PLAYER_TWO: 2,
  PLAYER_ONE_KING: 3,
  PLAYER_TWO_KING: 4
}
'use strict';

module.exports = function() {
  return function(hook) {

    const old_x = hook.params.old_x
    const old_y = hook.params.old_y
    const new_x= hook.params.new_x
    const new_y= hook.params.new.y

    return hook.app.service('games').get(hook.data.checkers)
      .map(function(x,y){


        

        // switch(myVar) {
        //   case "1":
        //     console.log("het is 1")
        //
        //   case "2":
        //     console.log("het is 2")
        // }

        switch(TILE_VALUES)
        PLAYER_ONE
        if((y_old+1 === y_new) && ((x_old+1 || x_old-1)=== x_new)){
          hook.data.checker.x = new_x
          hook.data.game.checker.y = new_y
        }

        PLAYER_TWO
        if((y_old-1 === y_new) && ((x_old+1 || x_old-1)=== x_new)){
          hook.data.checker.x = new_x
          hook.data.checker.y = new_y
        }

      }
