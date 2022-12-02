{
  // 크레인 인형뽑기 (카카오기출)

  function solution(board, moves) {
    let answer = 0;
    const stack = [];

    moves.forEach((pos) => {
      for (let i = 0; i < board.length; i++) {
        if (board[i][pos - 1] !== 0) {
          let tmp = board[i][pos - 1];
          board[i][pos - 1] = 0;
          if (tmp === stack[stack.length - 1]) {
            stack.pop();
            answer += 2;
          } else stack.push(tmp);
          break;
        }
      }
    });

    return answer;
  }

  const twoDimensionArr = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  const movesArr = [1, 5, 3, 5, 1, 2, 1, 4];
  console.log(solution(twoDimensionArr, movesArr));
}
