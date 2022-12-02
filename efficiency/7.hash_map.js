{
  // 아나그램(해쉬)
  /**
   * Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
   * 예를들면 AbaAeCe 와 baeeACA 는 알파벳을 나열순서는 다르지만 그 구성을 살펴보면 A(2), a(1), C(1), e(2)로
   * 알파벳과 그 개수가 모두 일치합니다. 즉 어느 한단어를 재배열하면 상대편 단어가 될수있는 것을 아나그램이라고 합니다.
   * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.
   * 두단어가 아나그램이면 'YES', 아니면 'NO'출력
   */

  function solution(A, B) {
    let answer = "YES";
    const mapA = new Map();
    const mapB = new Map();
    // 1. 내가 푼 코드
    /*  A = A.split("");
    B = B.split("");
    A.forEach((a) => {
      let originalCnt = mapA.get(a) || 0;
      mapA.set(a, originalCnt + 1);
    });
    B.forEach((b) => {
      let originalCnt = mapB.get(b) || 0;
      mapB.set(b, originalCnt + 1);
    });

    answer = Array.from(mapA).every((a) => a[1] === mapB.get(a[0]))
      ? "YES"
      : "NO"; */

    // 2. 강의 전반의 설명을 듣고 내가 작성한 코드
    /*     for (const key of A) {
      if (mapA.has(key)) mapA.set(key, mapA.get(key) + 1);
      else mapA.set(key, 1);
    }

    for (const key of B) {
      if (mapA.has(key) && mapA.get(key) > 0) {
        mapA.set(key, mapA.get(key) - 1);
      } else {
        answer = "NO";
      }
    } */

    // 3. 강의 코드
    for (const key of A) {
      if (mapA.has(key)) mapA.set(key, mapA.get(key) + 1);
      else mapA.set(key, 1);
    }

    for (const key of B) {
      if (!mapA.has(key) && mapA.get(key) === 0) return "NO";
      mapA.set(key, mapA.get(key) - 1);
    }
    return answer;
  }
  const A = "FbaAeCe";
  const B = "baeeACA";
  console.log(solution(A, B));
}
