{
  // 최대 매출
  /**
   * 현수의 아빠는 제과점을 운영합니다. 현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
   * 만약 N=10이고 10일간의 매출기록이 아래와 같습니다. 이때 K=3이면
   * 12 15 11 20 25 10 20 19 13 15
   * 연속된 3일간의 최대 매출액은 11 + 20 +25 = 56만원 입니다.
   * 여러분이 현수를 도와주세요.
   */

  function solution(incomes, days) {
    let answer = 0,
      // 강의 코드
      sum = 0;
    for (let i = 0; i < days; i++) sum += incomes[i];
    answer = sum;

    for (let i = days; i < incomes.length; i++) {
      sum += incomes[i] - incomes[i - days];
      answer = Math.max(answer, sum);
    }

    return answer;

    // 내가 푼 코드 : 이중반복문 ===>  시간 복잡도 -> O(n제곱)
    /*     
    lt = 0,
    max = 0;
    while (incomes.length - (days - 1) >= lt) {
      sum = 0;
      for (let rt = lt; rt <= lt + (days - 1); rt++) {
        sum += incomes[rt];
      }
      if (max < sum) {
        max = sum;
      }
      lt++;
    }

    answer = max; 
*/

    return answer;
  }

  const incomes = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
  console.log(solution(incomes, 3));
}
