class TicTacToe {
  constructor() {
    this.board = new Array(3).fill(new Array(3).fill(false))
  }
  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
  }
  checkRow(row) {
    return this.board[row].reduce((acc, tile) => acc && tile, true);
  }
  checkCol(col) {
    return this.board.reduce((acc, row, index) => {
      console.log('tile ' + index + ' ' + col + ' = ' + row[col]);
      console.log('acc: ' + acc);
      return acc && row[col]
    }, true);
  }
  checkDiagonal() {

  }
  checkRows() {

  }
  checkCols() {

  }
  checkDiagonals() {

  }
}

module.exports = TicTacToe;
