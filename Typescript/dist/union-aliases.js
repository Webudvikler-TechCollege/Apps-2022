"use strict";
const combineValues = (input1, input2, resultConversion) => {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    console.log(result);
};
const combineAge = combineValues(20, 40, 'as-text');
const combineNames = combineValues("Svend", "Aage", 'as-number');
