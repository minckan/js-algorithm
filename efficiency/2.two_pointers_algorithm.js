// 공통원소 구하기
{
  // A,B 두개의 집합이 주어지면 두 집합의 공통원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하시오.
  function solution(arr1, arr2) {
    let answer = [];
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    len1 = arr1.length;
    len2 = arr2.length;

    let p1 = (p2 = 0);

    while (p1 < len1 && p2 < len2) {
      if (arr1[p1] < arr2[p2]) p1++;
      else if (arr1[p1] > arr2[p2]) p2++;
      else {
        answer.push(arr1[p1++]);
        p2++;
      }
    }

    return answer;
  }

  const array1 = [1, 3, 9, 5, 2];
  const array2 = [3, 2, 5, 7, 8];
  console.log(solution(array1, array2));
}
