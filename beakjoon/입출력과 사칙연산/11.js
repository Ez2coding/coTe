/* 문제 2588번
세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.



(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1 
472
385
예제 출력 1 
2360
3776
1416
181720
*/

// let fs = require('fs');
// let input = fs.readFileSync('dev/stdin').toString().split('\n');
// let a = parseInt(input[0]);
// let b = String(input[1]);

let a = 472;
let b = "385";


console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);

