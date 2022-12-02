{
  // 모든 아나그램 찾기
  /**
   * S문자열에서 T문자열과 아나그램이 되는 S의 부분 문자열의 개수를 구하는 프로그램을 작성하세요.
   * 아나그램 판별시 대수문자가 구분됩니다.
   * - 출력설명: S단어에 T문자열과 아나그램이 되는 부분 문자열의 개수를 출력합니다.
   */
  function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
      if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
  }
  function solution(s, t) {
    let answer = 0;
    // 내가 푼 코드 >> 시간복잡도 O(n*m)
    /* let arrS = S.split("");
    let mapT = new Map();

    // T를 해쉬맵으로 만들기
    for (const i of T) {
      if (mapT.has(i)) mapT.set(i, mapT.get(i) + 1);
      else mapT.set(i, 1);
    }

    for (let lt = T.length; lt <= arrS.length; lt++) {
      let window = new Map(mapT);
      let has = true;
      for (let rt = lt - T.length; rt < lt; rt++) {
        if (!window.has(arrS[rt]) || window.get(arrS[rt]) === 0) has = false;
        else window.set(arrS[rt], window.get(arrS[rt]) - 1);
      }

      if (has) answer++;
    } */

    // 강의 코드 시간복잡도 O(n)
    let tH = new Map();
    let sH = new Map();
    for (let x of t) {
      if (tH.has(x)) tH.set(x, tH.get(x) + 1);
      else tH.set(x, 1);
    }
    let len = t.length - 1;
    for (let i = 0; i < len; i++) {
      if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
      else sH.set(s[i], 1);
    }
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
      if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
      else sH.set(s[rt], 1);
      if (compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt]) - 1);
      if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
      lt++;
    }

    return answer;
  }

  const string1 = "bacaAacba";
  const string2 = "ba";
  console.log(solution(string1, string2));
}
