const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const num1 = (prompt("Enter the first number:"));
const num2 = (prompt("Enter the second number:"));

const message = `Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division`;
console.log(message);

const choice =parseInt(prompt("Enter your choice (1/2/3/4):"));

switch (choice) {
    case 1:
        console.log(`Result: ${num1} + ${num2} = ${add(num1, num2)}`);
        break;
    case 2:
        console.log(`Result: ${num1} - ${num2} = ${subtract(num1, num2)}`);
        break;
    case 3:
        console.log(`Result: ${num1} * ${num2} = ${multiply(num1, num2)}`);
        break;
    case 4:
        if (num2 !== 0) {
            console.log(`Result: ${num1} / ${num2} = ${divide(num1, num2)}`);
        } else {
            console.log("Division by zero is not allowed.");
        }
        break;
    default:
        console.log("Invalid choice");
}   