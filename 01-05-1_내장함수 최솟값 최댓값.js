let t0 = performance.now();

function solution(arr) {
  let answer = Math.min(...arr);
  //  Math.min() 은 인자만 받을 수 있다. 배열 같은 객체는 X
  //  그래서 전개 연산자를 사용한다.
  //  arr[0], arr[1], ... 처럼 인자로 펼쳐줌 

  console.log('최댓값: ', Math.max(...arr));

  return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log('최솟값: ', solution(arr));


let t1 = performance.now();

console.log("실행 시간: " + (t1 - t0) + 'ms');


//  다른 풀이

let t2 = performance.now();

function solution(arr1) {
  let answer = Math.min.apply(null ,arr1);
  //  전개 연산자 안 쓰려면 이렇게
  //  apply의 첫 인자로는 객체(this), 두 번째 인자에 배열

  console.log('최댓값: ', Math.max(...arr1));

  return answer;

}

let arr1 = [5, 7, 1, 3, 2, 9, 11];
console.log('최솟값: ', solution(arr1));


let t3 = performance.now();

console.log("실행 시간: " + (t3 - t2) + 'ms');
