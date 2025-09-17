// const a =function b(){
//     console.log("print from b function");
//     return 0;
// }
// console.log(a());

// const a = ()=>{
//      console.log("print from b function");
//     //  return 0;
// }
// console.log(a);
// console.log(a());


const calculate = (a, b, c, operator) => {
  switch (operator) {
    case '+':
      return a + b + c;
    case '-':
      return a - b - c;
    case '*':
      return a * b * c;
    case '/':
      return (b !== 0 && c !== 0) ? a / b / c : "Error: Division by zero";
    case '%':
      return a % b % c;
    case 'avg':
      return (a + b + c) / 3;
    case 'max':
      return Math.max(a, b, c);
    case 'min':
      return Math.min(a, b, c);
    default:
      return "Invalid operator";
  }
};

console.log("Addition: ", calculate(10, 5, 2, '+'));
console.log("Subtraction: ", calculate(10, 5, 2, '-'));
console.log("Multiply: ", calculate(10, 5, 2, '*'));
console.log("Divide: ", calculate(100, 5, 2, '/'));
console.log("Modulus: ", calculate(100, 7, 3, '%'));
console.log("Average: ", calculate(10, 5, 2, 'avg'));
console.log("Maximum: ", calculate(10, 5, 2, 'max'));
console.log("Minimum: ", calculate(10, 5, 2, 'min'));


// const add = (a, b, c=0)=>{

// }
