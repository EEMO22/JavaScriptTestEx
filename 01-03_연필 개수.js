let t0 = performance.now();

function solution(n) {
  let answer;

  if (12 % n === 0) {
    answer = n / 12;
  } else if (12 % n !== 0) {
    answer = Math.ceil(n / 12);
  }
  return answer;
}
console.log(solution(178));

let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms')


//  다른 풀이

//  조건 필요 없이 그냥 올림 처리하면 
//  필요한 최소 묶음에서 하나 더 가져올 수 있음

let t2 = performance.now();

function solution(n) {
  let answer = Math.ceil(n / 12);

  return answer;
}
console.log(solution(178));

let t3 = performance.now();

console.log("실행 시간: " + (t3 - t2) + 'ms')
