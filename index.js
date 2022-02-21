var program = 'Hello World!';
var caseHandling = function (str) {
    return str.toLowerCase();
};
console.log(caseHandling('Hello World'));
var b = 29;
function add(number1, number2) {
    if (number1 === void 0) { number1 = 25; }
    return number1 + number2;
}
;
add(17, b);
var substract = function (num1, num2) {
    return num1 + num2;
};
substract(5, b);
// Array Type
var arr = [1, 2, 34, 5, 6, 7];
var arr1 = ['sim', 'tim', 'lim'];
var id = '23';
var arr2 = ['3', 3];
;
var person1 = {
    name: 'shimul',
    age: 21,
    hobby: 'programming'
};
var person2 = {
    name: 'parul',
    age: 19
};
// Enums
// const color1= '#ffffff'
// const color2= '#fffeee'
// const color3= '#fffddd'
var Colors;
(function (Colors) {
    Colors["color1"] = "#ffffff";
    Colors["color2"] = "#fffeee";
    Colors["color3"] = "#fffddd";
})(Colors || (Colors = {}));
;
console.log(Colors.color3);
