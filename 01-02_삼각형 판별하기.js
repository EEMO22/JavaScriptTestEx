let t0 = performance.now();

function solution(a, b, c) {
  let answer = "YES";
  let max;
  let sum = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  } if (c > max) {
    max = c;
  }

  if ((sum - max) <= max) {
    answer = "NO"
  }

  return answer;
}

console.log(solution(1, 7, 11))

let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms')


//  가장 긴 변의 길이가 다른 두 변의 길이의 합보다 짧아야 삼각형 성립

//  먼저 세 수 중 최댓값을 구하자. 의미 없는 a, b, c간 if문 크기비교 ㄴㄴ
//  그래야 sum에서 max를 빼면서 의미 있는 식 가능.
