{
  // 학급회장
  /**
   * 학급회장을 뽑는데 후보로 기호 A, B,C, D 후보가 등록을 했습니다.
   * 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알바벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
   * 선생님의 발표가 끝난후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
   * 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
   */

  function solution(votes) {
    let answer = "";
    const map = new Map();
    // 내가 푼 코드
    /*  votes = votes.split("");
    for (let i = 0; i < votes.length; i++) {
      const originalCnt = map.get(votes[i]) || 0;
      map.set(votes[i], originalCnt + 1);
    }

    answer = Array.from(map).sort((a, b) => b[1] - a[1])[0][0]; */

    // 강의 코드
    for (const key of votes) {
      if (map.has(key)) map.set(key, map.get(key) + 1);
      else map.set(key, 1);
    }
    let max = Number.MIN_SAFE_INTEGER;
    for (let [key, value] of map) {
      if (value > max) {
        max = value;
        answer = key;
      }
    }

    return answer;
  }
  const votes = "BACBACCACCBDEDE";
  console.log(solution(votes));
}
