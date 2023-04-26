let numOne: number = 1;
let numTwo: number = 2;

function add(num1: number, num2: number): void {
  console.log(num1 + num2);
  //   return num1 + num2;
}

add(numOne, numTwo);

//Tuple 써보기

let tuple: [string, number, boolean, object] = [
  "안녕",
  3,
  false,
  { name: "yang" },
];

//Enum 써보기
enum Avengers {
  Capt,
  IronMan,
  Thor,
}
let hero: Avengers = Avengers.Capt;
