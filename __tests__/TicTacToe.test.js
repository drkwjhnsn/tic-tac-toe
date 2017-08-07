const TicTacToe = require('../TicTacToe.js');

test('Constructor creates empty gameboard', () => {
  expect((new TicTacToe).board).toEqual([
    [false, false, false],
    [false, false, false],
    [false, false, false]
  ]);
});

test('togglePiece flips board value at [row][col]', () => {
  let game = new TicTacToe;
  game.togglePiece(1, 2);
  expect(game.board[1][2]).toBeTruthy();
});

test ('checkRow returns true if entire row is true', () => {
  let game = new TicTacToe;
  game.togglePiece(0, 0);
  game.togglePiece(0, 1);
  game.togglePiece(0, 2);
  expect(game.checkRow(0)).toBeTruthy();
});

test ('checkRow returns false if any tiles are false', () => {
  let game = new TicTacToe;
  game.togglePiece(0, 0);
  expect(game.checkRow(0)).toBeFalsy();
});

test ('checkCol returns true if entire column is true', () => {
  let game = new TicTacToe;
  game.togglePiece(0, 0);
  game.togglePiece(1, 0);
  game.togglePiece(2, 0);
  expect(game.checkCol(0)).toBeTruthy();
});

test ('checkCol returns false if any tiles are false', () => {
  let game = new TicTacToe;
  console.log(game.board);
  game.togglePiece(0, 0);
  expect(game.checkCol(0)).toBeFalsy();
});
