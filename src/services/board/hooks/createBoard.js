'use strict'

const defaults = {}

module.exports = function createBoard(options){
  options = Object.assign({} , defaults, options);

console.log('createBoard run');
return function(hook){
  board.arr.push([1, 2][3, 4][5, 6]);
  // now you have to tell mongoose that the value has changed
      // because with Mixed types it's not done automatically...
      hook.data.board.markModified('board');
  hook.data.save();
  }
}
