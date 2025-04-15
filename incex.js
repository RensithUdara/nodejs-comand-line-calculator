const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const calculate = () => {
    const operator = process.argv[2];
    const num1 = process.argv[3];
    const num2 = process.argv[4];

    if (operator === '+') {
        console.log(add(num1, num2));
    } else if (operator === '-') {
        console.log(subtract(num1, num2));
    }
    else if (operator === '*') {
        console.log(multiply(num1, num2));
    }
    else if (operator === '/') {
        console.log(divide(num1, num2));
    } 
};