// let yangname: string = "yang";
// let numArr: number[] = [1, 2, 3, 4, 5];
// let strArr: Array<string> = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// let conObj: object = {};
// let yangObject: { name: string; age: number; hobbies: string[] } = {
//   name: "양재연",
//   age: 28,
//   hobbies: ["ㅊ"],
// };
var userInfo = {
    name: "양재연",
    age: 28,
    job: false,
};
var userData = [
    { name: "wgf", age: 27, job: true, isMember: false },
    { name: "g2", age: 26, job: false },
    { name: "33", age: 33, job: false, 1: "A", 2: "B", 3: "C" },
];
var interfaceAdd = function (x, y) {
    return x + y;
};
var sumResult = interfaceAdd(1, 3);
console.log(sumResult);
