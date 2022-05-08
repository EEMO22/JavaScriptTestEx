let t0 = performance.now();

function solution(arr) {
  let answer;
  let oddNum = arr.slice().filter(element => element % 2 !== 0);
  let oddSum = oddNum.reduce((acc, curr) => {
    return acc + curr;
  }, 0);  //  0 <- 초기값
  let minNum = Math.min(...oddNum);

  answer = [oddSum, minNum];
  return answer.forEach((Numbers) => console.log(Numbers));

}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms');


//  다른 풀이
//  메서드 사용하지 못하는 경우에는 아래처럼 하는 게 좋다.


let t2 = performance.now();

function solution(arr1) {
  let answer = [];
  let sum = 0, min = Number.MAX_SAFE_INTEGER;
  for (let i of arr1) { //  for of
    //  arr1 배열(반복 가능 객체)의 value들이 i 에 대응됨
    if (i % 2 === 1) {
      sum += i;
      if (i < min) {
        min = i;
      }
    }
  }
  answer.push(sum);
  answer.push(min);

  return answer;

}

let arr1 = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr1));

let t3 = performance.now();

console.log("실행 시간: " + (t3 - t2) + 'ms');
