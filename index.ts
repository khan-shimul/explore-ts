const program: string = 'Hello World!'


const caseHandling = (str: string) => {
    return str.toLowerCase();
}
console.log(caseHandling('Hello World'));

const b: number = 29;

function add(number1: number = 25, number2: number): number {
    return number1 + number2;
};

add(17, b);

const substract = (num1: number, num2: number): number => {
    return num1 + num2;
};

substract(5, b);


// Array Type
const arr: number[] = [1, 2, 34, 5, 6, 7];
const arr1: string[] = ['sim', 'tim', 'lim'];

// Generic
const arrG: Array<number | string> = [1, 2, 3, 4, '5'];

// Multiple type
type numString = number | string | boolean;
const id: numString = '23';
const arr2: numString[] = ['3', 3];


// Interface
interface Iperson {
    name: string,
    age: number,
    hobby?: string
};

const person1: Iperson = {
    name: 'shimul',
    age: 21,
    hobby: 'programming'
};

const person2: Iperson = {
    name: 'parul',
    age: 19
};


// Enums
// const color1= '#ffffff'
// const color2= '#fffeee'
// const color3= '#fffddd'

enum Colors {
    color1 = '#ffffff',
    color2 = '#fffeee',
    color3 = '#fffddd'
};
console.log(Colors.color3)

// Generic
// function _concat<T> (a : T, b : T):T{
//     return a + b;
// }

// _concat <number> (1,2);
// _concat <string> ('shimul', 'khan');
