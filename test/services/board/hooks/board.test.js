'use strict';

const assert = require('assert');
const board = require('../../../../src/services/board/hooks/board.js');

describe('board board hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    board()(mockHook);

    assert.ok(mockHook.board);
  });
});
