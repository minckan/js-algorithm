{
  /**
   * 후위식 연산
   * : 연산자를 연산 대상의 뒤에 쓰는 연산 표기법
   * 예를 들어 중위표기법으로 "1+2"를 후위표기로 하면 "1 2 +"와 같이 작성하는 것이다.
  /**
   * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
   * 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
   */

  function solution(formula) {
    let answer = 0;

    const formulaArr = formula.split("");
    const arr = [];

    for (let f = 0; f < formulaArr.length; f++) {
      let value = 0;

      if (isNaN(Number(formulaArr[f]))) {
        value += eval(
          `${arr[arr.length - 2]}${formulaArr[f]}${arr[arr.length - 1]}`
        );
        arr.pop();
        arr.pop();
        arr.push(value);
      } else {
        arr.push(formulaArr[f]);
      }
    }

    answer = arr[0];

    return answer;
  }

  const formula = "352+*9-"; // 12
  console.log(solution(formula));
}
