// let yangname: string = "yang";
// let numArr: number[] = [1, 2, 3, 4, 5];
// let strArr: Array<string> = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// let conObj: object = {};
// let yangObject: { name: string; age: number; hobbies: string[] } = {
//   name: "양재연",
//   age: 28,
//   hobbies: ["ㅊ"],
// };

// // null, undefined

// let nullData: null = null;
// let undefinedData: undefined = undefined;

// //Tuple

// let tupleOne: [number, string, object] = [1, "yang", { hi: 5 }];

// //Enum

// enum MemberGrade {
//   guest = 0,
//   user = 1,
//   member = 2,
//   admin = 3,
// }

// let userGrade: number = 1;

// if (userGrade !== 3) {
//   alert("관리자가 아닙니다!");
// }

// if (userGrade !== MemberGrade.admin) {
//   alert("관리자가 아닙니다!");
// }

// // union 타입
// let unionType: number | string | number[] = 1;

// let gender: "M" | "F" = "M";
// (gender = "F"), (gender = "M");

// //함수 타입 설정

// function add1(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const add2 = function (num1: number, num2: number): number {
//   return num1 + num2;
// };

// const add3 = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

// //리턴 값이 없는 함수의 타입설정
// const useConsole = (str: string): void => {
//   console.log(str);
// };

// // never타입 함수

// function occurError(err: string): never {
//   throw new Error(err);
// }

// //Type 사용하기

// type numOrStr = string | number;

// let dontKnow: numOrStr = 2;

// type grade = "A" | "B" | "C" | "D" | "F";

// let studentGrade: grade = "A";
// let studentGradeArr: grade[] = ["A", "F", "C"];

//Interface

interface User {
  name: string;
  age: number;
  job: boolean;
  isMember?: boolean;
  [additional: number]: string;
}

let userInfo: User = {
  name: "양재연",
  age: 28,
  job: false,
};

let userData: Array<User> = [
  { name: "wgf", age: 27, job: true, isMember: false },
  { name: "g2", age: 26, job: false },
  { name: "33", age: 33, job: false, 1: "A", 2: "B", 3: "C" },
];

//interface를 함수에 적용하기
interface Add {
  (num1: number, num2: number): number;
}

const interfaceAdd: Add = (x, y) => {
  return x + y;
};

const sumResult = interfaceAdd(1, 3);

console.log(sumResult);
