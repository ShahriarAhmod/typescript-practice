let person = {
    name: "Mashrafi",
    age: 35,
    iscaptain: true,
  };


const a: string = "Hello World!";

function getLowerCasa(str: string): string {
    return str.toLowerCase();
}

console.log(getLowerCasa("hello"));
console.log("Hello World!");
console.log("");

const b: number = 10;

function add(number1: number, number2: number): number {
    return number1 + number2;
}

const subtract = (number1: number, number2: number): number => number1 - number2;

subtract(10, 5);
add(10, 5);
add(23, b);

//Array

const arr2: number[] = [1, 2, 3, 4, 5];
const arr3: Array<number> = [1, 2, 3, 4, 5];

type numberAndString = number | string;

const id: numberAndString = 14;