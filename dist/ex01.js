"use strict";
// Create a function `transformInput` that accepts either a string or a number.
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.
function transformInput(x) {
    if (typeof x === "string")
        console.log(x.split("").reverse().join(""));
    if (typeof x === "number") {
        let a = 1;
        for (let i = 1; i <= x; i++) {
            a *= i;
        }
        console.log(a);
    }
    else
        throw new Error("string for string inputs, number for number inputs.");
}
// Expected output:
transformInput("TypeScript"); // "tpircSepyT"
transformInput(5); // 120
