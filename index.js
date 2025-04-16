require("./calculator.js");



const calculate = () => {
    const operator = process.argv[2];
    const num1 = parseFloat(process.argv[3]);  // Convert to number
    const num2 = parseFloat(process.argv[4]);  // Convert to number

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Please provide valid numbers.");
        return;
    }

    if (operator === '+') {
        console.log(add(num1, num2));
    } else if (operator === '-') {
        console.log(subtract(num1, num2));
    } else if (operator === '*') {
        console.log(multiply(num1, num2));
    } else if (operator === '/') {
        if (num2 === 0) {
            console.log("Error: Cannot divide by zero.");
        } else {
            console.log(divide(num1, num2));
        }
    } else {
        console.log("Error: Invalid operator. Use +, -, *, or /.");
    }
};

calculate();
