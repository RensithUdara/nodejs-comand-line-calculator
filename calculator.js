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

// exports = {
//     add,
//     subtract,
//     multiply,
//     divide
// };

// console.log(module.exports) 

// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.divide = divide;
// module.exports.multiply = multiply; 


module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};