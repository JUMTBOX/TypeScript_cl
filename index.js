var numOne = 1;
var numTwo = 2;
function add(num1, num2) {
    console.log(num1 + num2);
    //   return num1 + num2;
}
add(numOne, numTwo);
//Tuple 써보기
var tuple = [
    "안녕",
    3,
    false,
    { name: "yang" },
];
//Enum 써보기
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["IronMan"] = 1] = "IronMan";
    Avengers[Avengers["Thor"] = 2] = "Thor";
})(Avengers || (Avengers = {}));
var hero = Avengers.Capt;
