let t0 = performance.now();

function solution(arr) {
  let answer, min = Number.MAX_SAFE_INTEGER;
  //  최솟값 초기화 할 때 이렇게 해 두면, 얘가 가장 큰 정수이므로,
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) { //  이 조건이 무조건 참이 되어 코드가 실행되고,
      min = arr[i]; //  여기에서 arr의 첫 번째 값이 무조건 최솟값이 된다.
    }
  }
  answer = min;
  return answer;
}
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms')


//  let min = arr[0]; 으로 잡고 for 문 돌려도 결과는 같음


//  다른 풀이

let t2 = performance.now();

function solution(arr1) {
  let answer = arr1.slice().sort((a, b) => a - b);
  return answer[0];
}
let arr1 = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr1));

let t3 = performance.now();

console.log("실행 시간: " + (t3 - t2) + 'ms')


//  다른 풀이
//  Array.prototype.reduce() 의 활용
//  누산기. 콜백함수의 return값을 첫번째 파라미터로 넣어서 다음 콜백에 전달
//  최종 값이 밖으로 리턴됨.

let t4 = performance.now();

function solution(arr2) {
  return arr2.reduce((acc, curr) => Math.min(acc, curr));

}
let arr2 = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr2));

let t5 = performance.now();

console.log("실행 시간: " + (t5 - t4) + 'ms')
