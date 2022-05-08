let t0 = performance.now();

function solution(a, b, c) {
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  } if (c < answer) {
    answer = c;
  }

  return answer;
}

console.log(solution(5, 6, 3));
let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms')



//  다른 풀이

let t2 = performance.now();

function solution(a, b, c) {
  let answer;
 
  let arr = [a, b, c];

  let minNum = Math.min(...arr);  
  //  Math.min은 number에만 사용가능! arr은 해체(...)해서 사용

  answer = minNum;

  return answer;
}


console.log(solution(7, 1, 22));
let t3 = performance.now();

console.log("실행 시간: " + (t3 - t2) + 'ms')
