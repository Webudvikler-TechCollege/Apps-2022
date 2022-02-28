"use strict";
let userInput;
let userName;
userInput = 5;
if (typeof userInput === "string") {
    userName = userInput;
}
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
};
const result = generateError('Der er sket en fejl!', 500);
console.log(result);
