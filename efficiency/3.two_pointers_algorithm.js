// 연속 부분 수열 1
/**
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분 수열의 합이 특정 숫자 M이 되는 경우가 몇번 있는지 구하는 프로그램을 작성하세요.
 * 만약 N=8, M=6이고 수열이 다음과 같다면
 * 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속 부분 수열은 {2,1,3}, {1,3,1,1,}, {3,1,1,1}로 총 3가지 입니다.
 */

{
  function solution(arr, m) {
    let answer = 0;
    let lt = 0;
    let sum = 0;

    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt];
      if (sum === m) {
        answer++;
      }

      while (sum >= m) {
        sum -= arr[lt++];
        if (sum === m) answer++;
      }
    }
    return answer;
  }
  const array = [1, 2, 1, 3, 1, 1, 1, 2];
  console.log(solution(array, 6));
}
