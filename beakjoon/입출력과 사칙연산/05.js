/*문제번호1000

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다.(0 < A, B < 10)

출력
첫째 줄에 A+B를 출력한다.
*/


//  내가 푼것 
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > b) {
  console.log('>');
}else if(a < b) {
  console.log('<');
} else {
  console.log(`==`);
}

/* 다른사람이 푼것 1
let a = parseInt(input[0]);
let b = parseInt(input[1]);

if( a > b) console.log('>');
else if ( a < b ) console.log('<');
else console.log('==');
*/




/* 다른사람이 푼것  2
let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a === b ? '==' : a > b ? '>' : '<');
*/