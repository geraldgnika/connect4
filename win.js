function checkWin(row, col) {
    return checkDirection(row, col, -1, 0) + checkDirection(row, col, 1, 0) >= 3 || // Vertical
           checkDirection(row, col, 0, -1) + checkDirection(row, col, 0, 1) >= 3 || // Horizontal
           checkDirection(row, col, -1, -1) + checkDirection(row, col, 1, 1) >= 3 || // Diagonal (\)
           checkDirection(row, col, -1, 1) + checkDirection(row, col, 1, -1) >= 3;  // Diagonal (/)
}

function checkDirection(row, col, rowStep, colStep) {
    let count = 0;
    let r = row + rowStep, c = col + colStep;
    
    while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === currentPlayer) {
        count++;
        r += rowStep;
        c += colStep;
    }
    return count;
}
