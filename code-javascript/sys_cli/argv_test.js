

console.log(process.argv)
const argv = process.argv

const [ op, num1, num2 ] = [argv[3], argv[5], argv[7]];


switch (op) {
  case 'add':
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case 'subtract':
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  default:
    console.log('Invalid operation');
}
// node calc.js --op add --num1 10 --num2 5