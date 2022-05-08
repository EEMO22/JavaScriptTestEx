let t0 = performance.now();

function solution(n) {
  let answer = 0;

  for (let i = 1; i < n + 1; i++) {
    answer += i;
  }

  return answer;
}
console.log(solution(10));

let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms')