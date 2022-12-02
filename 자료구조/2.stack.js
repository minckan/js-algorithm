{
  //괄호 문자제거
  /**
   * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
   */

  function solution(str) {
    let answer = "";
    const stack = [];
    for (const s of str) {
      if (s === "(") stack.push(s);
      else if (s === ")") stack.pop();
      else {
        if (stack.length === 0) answer += s;
      }
    }

    return answer;
  }
  const string = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
  console.log(solution(string));
}
