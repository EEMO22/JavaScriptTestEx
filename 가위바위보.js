let t0 = performance.now();

function solution(a, b) {
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      answer += 'D' + ' ';
    } else if (a[i] === 1 && b[i] === 3) {
      answer += 'A' + ' ';
    } else if (a[i] === 2 && b[i] === 1) {
      answer += 'A' + ' ';
    } else if (a[i] === 3 && b[i] === 1) {
      answer += 'A' + ' ';
    } else answer += 'B' + ' ';
  }

  return answer;
}

let a = [3, 1, 2, 3, 2];
let b = [3, 2, 1, 2, 1];

console.log(solution(a, b));

let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms')
