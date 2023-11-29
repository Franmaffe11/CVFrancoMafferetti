
  let currentPlayer = 'X';
  let board = ['', '', '', '', '', '', '', '', ''];
  let gameActive = true;

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const boardDivs = document.querySelectorAll('.cell');
  const statusDisplay = document.getElementById('status');

  function checkWinner() {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        gameActive = false;
        return board[a];
      }
    }
    return null;
  }

  function cellClick(cellIndex) {
    if (!gameActive || board[cellIndex] !== '') return;

    board[cellIndex] = currentPlayer;
    boardDivs[cellIndex].innerText = currentPlayer;

    const winner = checkWinner();
    if (winner) {
      statusDisplay.innerText = `El jugador ${winner} ha ganado`;
      gameActive = false;
      return;
    }

    if (!board.includes('')) {
      statusDisplay.innerText = '¡Empate!';
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.innerText = `Turno del jugador ${currentPlayer}`;
  }
  
  function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDisplay.innerText = 'Turno del jugador X';
    boardDivs.forEach(cell => cell.innerText = '');
  }