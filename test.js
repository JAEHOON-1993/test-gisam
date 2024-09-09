// 계산하는 것

const a = "재훈";
const b = "임";

let c = 3;
const d = 4;

console.log(c);
console.log(d);

console.log(a);

const sum = (a, b) => {
  const g = a + b + 4;
  return g * 4;
};

let e = sum(c, d);

console.log(e);

e = 3;

console.log(e);

const h = 4;
if (h > 5) {
  console.log("h is bigger than 5");
} else if (h > 3) {
  console.log("h is bigger than 3");
} else {
  console.log("h is smaller than 3");
}

const j = h > 5 ? "h is bigger than 5" : "h is smaller than 5";

// React 프론트엔드면
// 주식 시장의 대시보드를 만든다
// 오늘 올랐으면 빨간색, 내렸으면 파란색

// c = 1;
// while (c < 10) {
//   console.log(c);
//   c++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   console.log(arr[4]);
// }

// const arr2 = [
//   [1, 2, 3],
//   [9, 7, 6],
// ];
// console.log(arr2[1][2]);

// for (let i = 0; i < arr2.length; i++) {
//   for (let j = 0; j < arr2[i].length; j++) {
//     console.log(arr2[i][j]);
//   }
// }
// sleep 함수를 Promise로 정의
const sleep = (seconds) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

const func기삼 = async () => {
  await sleep(1);
  console.log("기삼");
};

const func기삼메인 = async () => {
  func기삼();
  console.log("반가워");
  console.log("나도 반가워");
};
func기삼메인();

// 텐서 = 다차원 벡터 = 행렬
// 텐서 플로우
// 행렬 연산
// 1. 덧셈
// 코딩해줘

import chalk from "chalk";

console.log(chalk.blue("Hello, world!"));
console.log(chalk.red.bold("Error!"));
