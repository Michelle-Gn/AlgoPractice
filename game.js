class TicTacToe {
  constructor(width, length) {
    this.boardWidth = width; 
    this.boardLength = length; 
    this.board = []; 
  }

  makeBoard () {
    var board = []; 

    for (var i = 0; i < this.boardLength; i ++) {
      var row = []; 
      for (var j = 0; j < this.boardWidth; j++) {
        row.push(''); 
      }
      board.push(row); 
    }

    this.board = board;  
  }

  addPiece (type, row, column) {
    if (row >= this.boardWidth || column >= this.boardLength) {
      return 'Invalid board piece'; 
    }
    
    if (this.board[row][column] === '') {
      this.board[row][column] = type; 
    } else {
      return 'There is already a piece here!'
    }
    
  }

  deletePiece (row, column) {
    this.board[row][column] = ''; 
  }

  detectFill (hashMap) {
    for (var key in hashMap) {
      if (key !== '') {
        if (hashMap[key] === this.board.length){
          return true; 
        }
      }
    }
     
    return false; 
  }

  detectRowsFill () {
    for (var i = 0; i < this.board.length; i++) {
      var currentRow = this.board[i]; 
      var count = {};
      for (var j = 0; j < currentRow.length; j++) {
        count[currentRow[j]] = count[currentRow[j]] ? count[currentRow[j]] += 1 : 1; 
      }
      
      if (this.detectFill(count)) {
        return true; 
      } 
    }
    return false; 
  }

  detectColumnsFill () {
    for (var i = 0; i < this.board[0].length; i++) {
      var map = {}; 
      for (var j = 0; j < this.board.length; j++) {
        var piece = this.board[j][i]; 
        map[piece] = map[piece] ? map[piece] += 1 : 1; 
      }

      if (this.detectFill(map)) {
        return true; 
      }
    }

    return false; 
  }

  detectLeftDiagFill () {
    var map = {}; 

    for (var i = 0; i < this.board[0].length; i++) {
        var j = i; 
        var piece = this.board[i][j]; 
        map[piece] = map[piece] ? map[piece] += 1 : 1;
    }
    
    return this.detectFill(map)

  }

  detectRightDiagFill () {
    var map = {}; 

    var row = 0;
    var column = this.board.length - 1;

    while (column > -1) {
      var piece = this.board[row][column]; 
      map[piece] = map[piece] ? map[piece] += 1 : 1; 
      row ++; 
      column --; 
    }

    return this.detectFill(map); 
  }

  detectWin () {
    var rows = this.detectRowsFill(); 
    var columns = this.detectColumnsFill(); 
    var leftDiag = this.detectLeftDiagFill(); 
    var rightDiag = this.detectRightDiagFill(); 
    
    return (rows || columns || leftDiag || rightDiag); 
  }

  detectTie () {
    var blanks = 0; 
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board[i].length; j++) {
        var piece = this.board[i][j]; 
        if (piece === '') {
          blanks ++; 
        }
      }
    }
    
    if (blanks === 0) {
      return 'Tie!'; 
    } else {
      return 'Continue'; 
    } 
  } 

}

var ticTacToe = new TicTacToe(3, 3); 
console.log(ticTacToe.makeBoard()); 
ticTacToe.addPiece('x', 0, 2);  
ticTacToe.addPiece('x', 1, 1); 
ticTacToe.addPiece('x', 2, 1); 
ticTacToe.addPiece('o', 0, 0); 
ticTacToe.addPiece('o', 0, 2); 
console.log(ticTacToe.board); 
console.log(ticTacToe.detectTie()); 
console.log(ticTacToe.detectWin());    

// 0, 2
// 1, 1
// 2, 0


