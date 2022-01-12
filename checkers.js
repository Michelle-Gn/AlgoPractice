class Checkers {
  constructor (size) {
    this.board = []; 
    this.size = size; 
  }


  makeBoard () {
    for (var i = 0; i < this.size; i++) {
      var row = []; 
      if (i % 2 === 0) {
        var color = 'w'; 
      } else {
        var color = 'b'; 
      }
      for (var j = 0; j < this.size; j++) {
        row.push(color);
        if (color === 'w') {
          color = 'b'; 
        } else {
          color = 'w'; 
        }
      }
      this.board.push(row); 
    }
  }

  
  populateWhite () {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < this.size; j++) {
        if (this.board[i][j] === 'b') {
          this.board[i][j] = 'x'; 
        }
      }
    }
  }

  populateBlack () { 
    for (var i = this.size - 1; i > this.size - 4; i--) {
      console.log('hello'); 
      for (var j = 0; j < this.size; j++) {
        if (this.board[i][j] === 'b') {
          this.board[i][j] = 'y'; 
        }
      }
    }
  }

}

class Piece = {
  constructor (x, y, type) {
    this.x = null; 
    this.y = null; 
    this.type = type; 
  }

  move (x, y, board) {
    board[this.x][this.y] = 'b'; 
    board[x][y] = new Piece (x, y, 'x');  
  }
}

var checkers = new Checkers(8); 
checkers.makeBoard(); 
console.log('populate black', checkers.populateBlack()); 
console.log('populate white', checkers.populateWhite()); 
console.log('populated board', checkers.board); 