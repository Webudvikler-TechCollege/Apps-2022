"use strict";
const add = (num1, num2) => {
    return num1 + num2;
};
const log = (num1) => {
    console.log(`Result: ${num1}`);
};
let combine;
combine = add;
console.log(combine(5, 6));
const addAndHandle = (num1, num2, cb) => {
    const result = num1 + num2;
    cb(result);
};
addAndHandle(10, 20, (result) => {
    console.log(result);
});
